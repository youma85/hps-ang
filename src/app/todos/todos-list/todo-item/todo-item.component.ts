import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() index: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
}
