import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [
    new Todo('Learn Angular', 'Must Learn angular In 4 days', 'In Progress'),
    new Todo('Learn Spring Cloud', 'Learn the spring cloud framework', 'Not Started'),
    new Todo('Learn Java', 'Learn Java', 'Completed'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
