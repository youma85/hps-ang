import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosDetailComponent } from './todos/todos-detail/todos-detail.component';
import { TodoItemComponent } from './todos/todos-list/todo-item/todo-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { CatorgoryEditComponent } from './categories/catorgory-edit/catorgory-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodosListComponent,
    TodosDetailComponent,
    TodoItemComponent,
    CategoriesComponent,
    CatorgoryEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
