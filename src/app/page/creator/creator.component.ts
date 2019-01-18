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
  budget = 0;
  options = [
    ['1', '4', '7', 'B', { icon: 'chevron_left', digit: 'L' }],
    ['2', '5', '8', '0', { icon: 'check', digit: 'N' }],
    ['3', '6', '9', 'C', { icon: 'chevron_right', digit: 'R' }],
  ];

  constructor(
    private router: Router,
    private source: CategoriesService
  ) { }

  ngOnInit() {
    const topic = this.source.topics.find(item =>
      this.router.url.startsWith(item.link));

    !topic ? this.router.navigate(['/categories']) : this.topicName = topic.name;
  }

  command(digit: string) {
    switch (digit) {
      case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        this.budget = this.budget * 10 + parseInt(digit);
        break;
      case 'C':
        this.budget = 0;
      case 'B':
        const literal = `${this.budget}`.split('');
        literal.pop();
        this.budget = parseInt(`${literal.join('')}`) || 0;
        break;
      default: break;
    }
  }

  isDisabled(digit: string) {
    switch (digit) {
      case 'B': return this.budget < 10;
      case 'C': return this.budget === 0;
      default: return `${this.budget}`.length >= 10;
    }

  }

}
