import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  topics = [
    {
      code: '235c178b041ceb3db766184862beae43',
      link: '/categories/clothes',
      name: 'Clothes',
      desc: 'Fashion related items'
    },
    {
      code: '3dc55924e46812b3ba0aea88271318f7',
      link: '/categories/electronics',
      name: 'Electronics',
      desc: 'Fashion related items'
    },
    {
      code: 'd74de8d6c8faacf463eb04c8406b4272',
      link: '/categories/receipes',
      name: 'Receipes',
      desc: 'Fashion related items'
    },
    {
      code: 'c2d5cef193d93b6e555f09ab51f40723',
      link: '/categories/fashion',
      name: 'Fashion',
      desc: 'Fashion related items'
    },
    {
      code: '15e6fdebec85d209f50f793d32ca0c52',
      link: '/categories/personal',
      name: 'Personal',
      desc: 'My personal shopping list'
    },
  ];

  constructor() { }
}
