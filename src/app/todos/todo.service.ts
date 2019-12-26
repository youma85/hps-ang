import { Todo } from './todo.model';
import { CategoryService } from '../shared/category.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService {
    todoSelected = new EventEmitter<Todo>();
    todoChanged = new Subject<Todo[]>();
    constructor(private categoryService: CategoryService) {}

    private todos: Todo[] = [];

    getTodos() {
        return this.todos.slice();
    }

    getTodo(id: number): Todo {
        return this.todos[id];
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
        this.todoChanged.next(this.todos.slice());
    }

    updateTodo(index: number, todo: Todo) {
        this.todos[index] = todo;
        this.todoChanged.next(this.todos.slice());
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1);
        this.todoChanged.next(this.todos.slice());
    }

    setTodos(todos: Todo[]) {
        this.todos = todos;
        this.todoChanged.next(this.todos.slice());
    }
}
