import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ITodoItem} from './todo-item.component';


@Component({
  selector: 'app-todo-list',
  template: `
    <h2>TODOs</h2>
    <ul>
      <li *ngFor="let item of items">
        <app-todo-item
            [item]="item"
            (completedChange)="onCompletedChange(item, $event)">
        </app-todo-item>
      </li>
    </ul>
  `,
  styles: [`
    * {
      /*
       * Do not use a more appropriate fallback (such as 'cursive')
       * to make it more obvious when the primary font is missing.
       */
      font-family: 'Permanent Marker', sans;
    }
  `],
})
export class TodoListComponent implements OnInit {
  items: ITodoItem[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.
      get<ITodoItem[]>('/api/todos').
      subscribe(items => this.items = items, console.error);
  }

  onCompletedChange(item: ITodoItem, completed: boolean): void {
    item.completed = completed;
    this.http.
      put<ITodoItem>(`/api/todos/${item.id}`, item).
      subscribe(null, console.error);
  }
}
