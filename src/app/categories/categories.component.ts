import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category [] = [
    new Category('Personal', 'Personal category'),
    new Category('Professional', 'Professional category'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
