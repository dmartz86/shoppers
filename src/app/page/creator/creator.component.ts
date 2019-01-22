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
  hasBudget = false;
  items = [];
  index = 0;
  amount = 0;
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
        this.amount = this.amount * 10 + parseInt(digit);
        break;
      case 'C':
        this.amount = 0;
      case 'B':
        const literal = `${this.amount}`.split('');
        literal.pop();
        this.amount = parseInt(`${literal.join('')}`) || 0;
        break;
      case 'N':
        if (this.hasBudget) {
          this.items.push({ amount: this.amount / 100, name: 'Item' })
          this.index += 1;
        } else {
          this.budget = this.amount;
          this.hasBudget = true;
        }
        this.amount = 0;
        break;
      case 'L': case 'R':
        digit === 'L' ? this.index -= 1 : this.index += 1;
        setTimeout(() =>
          this.amount = this.items[this.index].amount * 100);
        break;
      default: break;
    }
  }

  isDisabled(digit: string) {
    switch (digit) {
      case 'B': return this.amount < 10;
      case 'N': case 'C': return this.amount === 0;
      case 'L': return !this.hasBudget || this.index === 0 || this.index < this.items.length - 1;
      case 'R': return !this.hasBudget || this.index >= this.items.length - 1;
      default: return `${this.amount}`.length >= 10;
    }

  }

}
