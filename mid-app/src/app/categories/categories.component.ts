import { Component, OnInit } from '@angular/core';
import { Category } from '../categories';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  
categories:Category[];

  constructor() { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoriesService.getCategories()
       .subscribe(categories => this.categories = categories);
 }
}
