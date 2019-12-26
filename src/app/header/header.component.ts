import { Component, OnInit} from '@angular/core';
import { TodoHttpService } from '../todos/todo-http.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private storageService:TodoHttpService) { }

  ngOnInit() {
  }

  onSaveDate(){
    this.storageService.storeTodos();
  }

  onFetchDate(){
    this.storageService.fetchTodos();
  }
}
