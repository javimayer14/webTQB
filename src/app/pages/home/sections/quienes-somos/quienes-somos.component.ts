import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss'],
})
export class QuienesSomosComponent implements OnInit {
  services = [
    {
      title: 'Conexión',
      icon: 'fa fa-usb',
      text: 'El mundo de los negocios presenta oportunidades. ¿Quiénes la aprovechan? Los que están conectados y saben lo que pasa. Los que están con quienes tienen que estar.',
    },
    {
      title: 'Movimiento',
      icon: 'bi bi-arrow-left-right',
      text: ' ¿Quiénes están mejor conectados? Los que no paran de moverse. Moverte permite aumentar la calidad de los vínculos, llevándote a estar dónde hay que estar.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
