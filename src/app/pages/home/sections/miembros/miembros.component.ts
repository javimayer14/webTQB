import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss'],
})
export class MiembrosComponent implements OnInit {
  blueCards = [
    { title: '1', subtitle: 'Acceder a la información completa para invertir en los proyectos.' },
    { title: '2', subtitle: 'Recibir contenido exclusivo para mejorar tus habilidades como inversor.' },
    { title: '3', subtitle: 'Asegurar tu lugar en seminarios y workshops con referentes del mercado.' },
    { title: '4', subtitle: 'Prioridad para obtener informes y análisis de mercado para tomar mejores decisiones.' },
    { title: '5', subtitle: 'Tener la posibilidad de compartir proyectos a todos los miembros.' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
