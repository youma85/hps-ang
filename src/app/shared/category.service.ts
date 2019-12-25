import { Injectable } from '@angular/core';
import { Category } from '../categories/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category [] = [
    new Category(1, 'Personal', 'Personal category'),
    new Category(2, 'Professional', 'Professional category'),
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }
}
