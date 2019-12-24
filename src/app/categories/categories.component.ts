import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category [] = [
    new Category(1, 'Personal', 'Personal category'),
    new Category(2, 'Professional', 'Professional category'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
