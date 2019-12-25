import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.css']
})
export class TodosDetailComponent implements OnInit {

  todo: Todo;
  id: number;
  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // le + permet de faire le cast
        this.todo = this.todoService.getTodo(this.id);
      }
    );
  }

}
