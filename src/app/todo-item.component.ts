import {Component, EventEmitter, Input, Output} from '@angular/core';


export interface ITodoItem {
  id: number;
  completed: boolean;
  description: string;
}

@Component({
  selector: 'app-todo-item',
  template: `
    <span class="item"
        [class.completed]="item.completed"
        (click)="completedChange.next(!item.completed)">
      {{ item.description }}
    </span>
  `,
  styles: [`
    .item { cursor: pointer; }
    .item.completed { text-decoration: line-through; }
  `],
})
export class TodoItemComponent {
  @Input() item: ITodoItem;
  @Output() completedChange = new EventEmitter<boolean>();
}
