import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  topicName = 'Create';

  constructor(
    private router: Router,
    private source: CategoriesService
  ) { }

  ngOnInit() {
    const topic = this.source.topics.find(item =>
      this.router.url.startsWith(item.link));

    !topic ? this.router.navigate(['/categories']) : this.topicName = topic.name;
  }

}
