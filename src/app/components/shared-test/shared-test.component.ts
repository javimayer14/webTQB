import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-test',
  templateUrl: './shared-test.component.html',
  styleUrls: ['./shared-test.component.scss'],
})
export class SharedTestComponent implements OnInit {
  @Input('compartir') compartir = 'Compartir el Test a un colega';
  @Input('option3') option3 = false;
  constructor() {}

  ngOnInit(): void {}
}
