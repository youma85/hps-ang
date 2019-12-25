import { Todo } from './todo.model';
import { CategoryService } from '../shared/category.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TodoService {

    todoSelected = new EventEmitter<Todo>();
    constructor(private categoryService: CategoryService) {}

    private todos: Todo[] = [
        new Todo('Learn Angular', 'Must Learn angular In 4 days', 'In Progress', this.categoryService.getCategories()[0]),
        new Todo('Learn Spring Cloud', 'Learn the spring cloud framework', 'Not Started', this.categoryService.getCategories()[1]),
        new Todo('Learn Java', 'Learn Java', 'Completed', this.categoryService.getCategories()[1]),
    ];

    getTodos() {
        return this.todos;
    }
}
