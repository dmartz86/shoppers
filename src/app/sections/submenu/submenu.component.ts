import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/page/categories/categories.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  topics: any;

  constructor(private source: CategoriesService) { }

  ngOnInit() {
    this.topics = this.source.topics;
  }

}
