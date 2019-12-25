import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/categories/category.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id: number;
  editMode = false;
  categories: Category[];

  constructor(private route: ActivatedRoute,
              private todoService: TodoService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
    this.categories = this.categoryService.getCategories();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const todo = new Todo(value.task, value.description, value.category);
    this.todoService.addTodo(todo);
  }
}
