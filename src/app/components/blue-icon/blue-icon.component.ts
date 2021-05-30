import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-icon',
  templateUrl: './blue-icon.component.html',
  styleUrls: ['./blue-icon.component.scss'],
})
export class BlueIconComponent implements OnInit {
  @Input('logo') logo;
  @Input('subtitle') subtitle;
  constructor() {}

  ngOnInit(): void {}
}
