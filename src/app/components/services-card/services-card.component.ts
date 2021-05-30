import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss'],
})
export class ServicesCardComponent implements OnInit {
  faCoffee = faCoffee;
  @Input('title') title: string;
  @Input('icon') icon = 'fa fa-usb';
  @Input('text') text: string;
  constructor() {}

  ngOnInit(): void {}
}
