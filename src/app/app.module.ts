import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosDetailComponent } from './todos/todos-detail/todos-detail.component';
import { TodoItemComponent } from './todos/todos-list/todo-item/todo-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { CatorgoryEditComponent } from './categories/catorgory-edit/catorgory-edit.component';
import { DropDownDirective } from './shared/drop-down.directive';
import { ShortenPipe } from './shared/shorten.pipe';
import {  Routes, RouterModule } from '@angular/router';
import { TodoStartComponent } from './todos/todo-start/todo-start.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full' },
  {path: 'todos', component: TodosComponent, children: [
    {path: '', component: TodoStartComponent},
    {path: 'new', component: TodoEditComponent},
    {path: ':id', component: TodosDetailComponent},
    {path: ':id/edit', component: TodoEditComponent}
  ]},
  {path: 'categories', component: CategoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodosListComponent,
    TodosDetailComponent,
    TodoItemComponent,
    CategoriesComponent,
    CatorgoryEditComponent,
    DropDownDirective,
    ShortenPipe,
    TodoStartComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
