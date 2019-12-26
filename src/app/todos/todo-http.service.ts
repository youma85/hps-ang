import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class TodoHttpService {

    url='https://todo-list-a6dcf.firebaseio.com/todos.json';
    constructor(private http: HttpClient, private todoService: TodoService) {
    }

    storeTodos(){
        const todos = this.todoService.getTodos();
        this.http.put(this.url  , todos)
        .subscribe(resp => {
            console.log(resp);
        });
    }

    fetchTodos() {
        this.http.get<Todo[]>(this.url)
        .subscribe(todos => {
            this.todoService.setTodos(todos);
        });
    }

}