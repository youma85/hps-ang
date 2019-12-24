import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { Category } from 'src/app/categories/category.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todo = new Todo();
  indCateg: number;
  @Output() todoWasSelected = new EventEmitter<Todo>();

  categories: Category [] = [
    new Category(1, 'Personal', 'Personal category'),
    new Category(2, 'Professional', 'Professional category'),
  ];

  todos: Todo[] = [
    new Todo('Learn Angular', 'Must Learn angular In 4 days', 'In Progress',this.categories[0]),
    new Todo('Learn Spring Cloud', 'Learn the spring cloud framework', 'Not Started', this.categories[1]),
    new Todo('Learn Java', 'Learn Java', 'Completed', this.categories[1]),
  ];

  constructor() { }

  ngOnInit() {

  }

  onAddTodo() {
    console.log(this.todo);
    this.todo.category = this.categories[this.indCateg];
    this.todos.push(this.todo);
    this.todo = new Todo();
  }

  onTodoSelected(todo: Todo) {
    this.todoWasSelected.emit(todo);
  }
}
