import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  topicName = 'Group';
  items = [];

  constructor(
    private router: Router,
    private source: CategoriesService) { }

  ngOnInit() {
    const topic = this.source.topics.find(item =>
      item.link === this.router.url);

    if (!topic) {
      return this.router.navigate(['/categories']);
    }

    this.topicName = topic.name;
  }

}
