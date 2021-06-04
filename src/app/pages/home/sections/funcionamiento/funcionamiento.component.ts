import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionamiento',
  templateUrl: './funcionamiento.component.html',
  styleUrls: ['./funcionamiento.component.scss'],
})
export class FuncionamientoComponent implements OnInit {
  items = [
    {
      title: 'Sociedad',
      icon: 'fa fa-usb',
      text: 'Los inversores son dueños directos o indirectos de las sociedades que adquieran la propiedad.',
    },
    {
      title: 'Ejecución',
      icon: 'bi bi-arrow-left-right',
      text: 'La propiedad se adquiere, se remodela y se vende; o se adquiere y se alquila, dependiendo del tipo de negocio que se determine previamente.',
    },
    {
      title: 'Cash-in',
      icon: 'bi bi-arrow-left-right',
      text: 'La compañía reparte los dividendos en base a lo acordado. El proceso es 100% transparente.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
