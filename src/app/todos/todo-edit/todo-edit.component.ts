import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/categories/category.model';
import { TodoHttpService } from '../todo-http.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @ViewChild('f', {static: true}) myForm: NgForm;
  id: number;
  editMode = false;
  categories: Category[];
  editedTodo: Todo;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService,
              private todoHttpService: TodoHttpService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        if (this.editMode) {
          this.editedTodo = this.todoService.getTodo(this.id);
          setTimeout(() => { 
            this.myForm.setValue({
              task: this.editedTodo.task,
              description: this.editedTodo.description,
              category: this.editedTodo.category
            });
          });
        }
      }
    );
    this.categories = this.categoryService.getCategories();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const todo = new Todo(value.task, value.description, value.category);
    if (this.editMode) {
      this.todoService.updateTodo(this.id, todo);
    } else {
      this.todoService.addTodo(todo);
    }
  }

  onClear(){
    this.clear();
  }

  onDelete() {
    this.todoService.deleteTodo(this.id);
    this.clear();
  }

  clear(){
    this.myForm.reset();
    this.editMode = false;
  }
}
