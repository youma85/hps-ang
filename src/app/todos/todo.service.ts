import { Todo } from './todo.model';
import { CategoryService } from '../shared/category.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TodoService {
    todoSelected = new EventEmitter<Todo>();
    constructor(private categoryService: CategoryService) {}

    private todos: Todo[] = [
        new Todo('Learn Angular', 'Must Learn angular In 4 days', this.categoryService.getCategories()[0]),
        new Todo('Learn Spring Cloud', 'Learn the spring cloud framework', this.categoryService.getCategories()[1]),
        new Todo('Learn Java', 'Learn Java', this.categoryService.getCategories()[1]),
    ];

    getTodos() {
        return this.todos;
    }

    getTodo(id: number): Todo {
        return this.todos[id];
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }
}
