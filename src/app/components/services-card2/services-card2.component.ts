import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services-card2',
  templateUrl: './services-card2.component.html',
  styleUrls: ['./services-card2.component.scss'],
})
export class ServicesCard2Component implements OnInit {
  faCoffee = faCoffee;
  @Input('title') title: string;
  @Input('icon') icon = 'fa fa-usb';
  @Input('text') text: string;
  constructor() {}

  ngOnInit(): void {}
}
