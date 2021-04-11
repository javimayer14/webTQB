import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  title = 'owlcarouselinAngular';
  Images = [
    '../assets/images/Carousel1.jpeg',
    '../assets/images/Carousel2.jpeg',
    '../assets/images/Carousel3.jpeg',
  ];

  SlideOptions = { items: 1, dots: true, nav: true };
  CarouselOptions = { items: 3, dots: true, nav: true };
  constructor() {}

  ngOnInit(): void {}
}
