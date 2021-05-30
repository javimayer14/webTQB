import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss'],
})
export class MiembrosComponent implements OnInit {
  blueCards = [
    { title: '1', subtitle: 'Acceder a excelentes propuestas' },
    { title: '2', subtitle: 'Invertir de forma más segura' },
    { title: '3', subtitle: 'Aprender de la experiencia de otros inversores' },
    { title: '4', subtitle: 'Interpretar mejor el mercado' },
    { title: '5', subtitle: 'Tomar mejores decisiones' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
