import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-inversor',
  templateUrl: './test-inversor.component.html',
  styleUrls: ['./test-inversor.component.scss'],
})
export class TestInversorComponent implements OnInit {
  test = false;
  ending = false;
  lobo = false; //1
  aguila = false; //2
  puma = false; //3
  oso = false; //4
  buho = false; //5
  barValue = 0;
  description = '';
  q0;
  q1;
  q2;
  q3;
  q4;
  q5;
  q6;
  q7;

  pageActual = 0;
  questions = [
    {
      question: '¿Qué edad tienes?',
      options: [
        'Entre 18 y 25 años.',
        'Entre 26 y 35 años.',
        'Entre 36 y 55 años.',
        'Mayor de 56 años.',
      ],
    },
    {
      question: '¿Cuánto tiempo mantendrías una misma inversión?',
      options: [
        '6 meses.',
        'Entre 6 meses y un año.',
        'Entre uno y dos años.',
        'Más de dos años.',
      ],
    },
    {
      question: '¿Cuál es el conocimiento que tienes sobre inversiones?',
      options: [
        'Absolutamente nada.',
        'Nunca realicé una inversión pero conozco cómo funcionan las dinámicas para hacerlo.',
        'Realicé alguna inversión y conozco lo que hay tener en cuenta.',
        'Realicé varias inversiones y me considero un especialista.',
      ],
    },
    {
      question: '¿Qué buscas al momento de invertir?',
      options: [
        'Mantener el capital invertido con una rentabilidad mínima.',
        'Tener una renta apenas por encima a la de un plazo fijo, aunque esté sujeta a una variación de mercado.',
        'Obtener una ganancia significativa, aceptando posibles pérdidas de capital.',
      ],
    },
    {
      question:
        'En caso de que el proyecto en el que inverstiste pase un por una situación de stress que cambie algunas condiciones iniciales, ¿qué harías?',
      options: [
        'Saldría completante del proyecto.',
        'Saldría parcialmente del proyecto.',
        'Mantendría mi posición esperando que mejore.',
        'Invertíria más si se abren oportunidades a mejor precio.',
      ],
    },
    {
      question:
        '¿Qué porcentaje de tu ahorro/capital disponible estas dispuesto a invertir?',
      options: [
        'Menos del 10%.',
        'Entre un 10% y un 30%.',
        'Entre un 30% y un 60%.',
        'Más del 60%.',
      ],
    },
    {
      question:
        'Si tuvieras que elegir el tipo de inversión que mejor te identifique, ¿qué elegirías?',
      options: [
        'Acciones.',
        'Bonos.',
        'Operaciones Negociables.',
        'Real Estate.',
        'Criptomoneda.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  templateForm(value: any) {
    alert(JSON.stringify(value));
    console.log('Q0', this.q0);
    console.log('Q1', this.q1);
    console.log('Q2', this.q2);
    console.log('Q3', this.q3);
    console.log('Q4', this.q4);
    console.log('Q5', this.q5);
    console.log('Q6', this.q6);
    console.log('Q7', this.q7);
  }
  endTest() {
    let loboCount = 0;
    let aguilaCount = 0;
    let pumaCount = 0;
    let osoCount = 0;
    let buhoCount = 0;
    for (let index = 0; index < 7; index++) {
      switch (this['q' + index]) {
        case 1:
          loboCount++;
          break;
        case 2:
          aguilaCount++;
          break;
        case 3:
          pumaCount++;
          break;
        case 4:
          osoCount++;
          break;
        case 5:
          buhoCount++;
          break;
        default:
          break;
      }
    }
    console.log('LOBO', loboCount);
    console.log('AGUILA', aguilaCount);
    console.log('PUMA', pumaCount);
    console.log('OSO', osoCount);
    console.log('BUHO', buhoCount);
    let arr = [loboCount, aguilaCount, pumaCount, osoCount, buhoCount];
    let maxValue = arr.indexOf(Math.max(...arr));

    switch (maxValue) {
      case 0:
        this.lobo = true;
        this.description =
          'Te gusta meterte en donde hay más riesgo pero sos sigiloso. Con una mirada perspicaz, una vez que estas decidido no hay quien te pare. Tomás riesgo para obtener una gran recomensa';
        break;
      case 1:
        this.aguila = true;
        this.description =
          'Tomas la distancia necesaria para evaluar desde lejos y lanzarte rápidamente hacia el foco. Preparas todo para el momento justo. Haces una medición precisa para obtener lo que querés.';
        break;
      case 2:
        this.puma = true;
        this.description =
          'Sabes cuando pasar a la acción y cuando replegarte. Sos agresivo pero cuidadoso y sabes pasar desapercibido si es lo que crees necesario. Tienes tus momentos y estas muy atento al contexto que te rodea';
        break;
      case 3:
        this.oso = true;
        this.description =
          'Encuentras el momento justo para todo. No siempre se necesita estar en acción sino que sabes que los procesos son largos y ya va a llegar el momento. Puedes tolerar no abalazarte sobre una gran oportunidad porque sabes que aparecerán otras. ';
        break;
      case 4:
        this.buho = true;
        this.description =
          'Cuidadoso pero certero. Aprovechas las pocas oportunidades que se presentan porque sabes que son únicas. Cada movimiento es muy pensado. Eres obsesivo por mantener las siutaciones bajo control.';
        break;
      default:
        break;
    }
    this.ending = true;
  }
}
