import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { Category } from 'src/app/categories/category.model';
import { TodoService } from '../todo.service';
import { CategoryService } from 'src/app/shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todo = new Todo();
  indCateg: number;

  todos: Todo[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private todoService: TodoService,
              private categorySerivce: CategoryService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onAddTodo() {
    console.log(this.todo);
    this.todo.category = this.categorySerivce.getCategories[this.indCateg];
    this.todos.push(this.todo);
    this.todo = new Todo();
  }

  onNewClicked() {
    this.router.navigate(['new'], { relativeTo: this.route});
  }
}
