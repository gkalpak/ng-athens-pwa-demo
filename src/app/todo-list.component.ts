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

  ngOnInit(): void {
    this.items = [
      {id: 1, completed: false, description: 'Do something'},
      {id: 2, completed: false, description: 'Do something else'},
      {id: 3, completed: false, description: 'Do another thing'}
    ];
  }

  onCompletedChange(item: ITodoItem, completed: boolean): void {
    item.completed = completed;
  }
}
