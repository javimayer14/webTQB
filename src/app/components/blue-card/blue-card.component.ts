import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-card',
  templateUrl: './blue-card.component.html',
  styleUrls: ['./blue-card.component.scss'],
})
export class BlueCardComponent implements OnInit {
  @Input('title') title;
  @Input('subtitle') subtitle;
  constructor() {}

  ngOnInit(): void {}
}
