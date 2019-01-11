import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  topics: any = [];

  constructor(private source: CategoriesService) { }

  ngOnInit() {
    this.topics = this.source.topics;
  }

}
