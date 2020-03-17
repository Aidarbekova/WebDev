import { Component, OnInit } from '@angular/core';

import { pages } from '../mock-pages';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { pages } from '../pages';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
pages:PagesComponent;
  constructor() { }
  private pagesService: PagesService,
  private location: Location) { }

  ngOnInit(): void {
    this.getPages();
  }
  getPages(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pagesService.getPages(id)
      .subscribe(Pages => this.pages = pages);
}
