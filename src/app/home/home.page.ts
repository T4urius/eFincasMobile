import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    speed: 400,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  }

  items = [

    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'BatGirl' },
    { id: 4, name: 'Robin' },
    { id: 5, name: 'Flash' },
    { id: 6, name: 'Superman' },
    { id: 7, name: 'Batman' },
    { id: 8, name: 'BatGirl' },
    { id: 9, name: 'Robin' },
    { id: 10, name: 'Flash' },
  ];

  constructor() { }

}
