import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-inversor',
  templateUrl: './test-inversor.component.html',
  styleUrls: ['./test-inversor.component.scss'],
})
export class TestInversorComponent implements OnInit {
  test = false;
  q0;
  q1;
  q2;
  q3;
  q4;
  q5;
  q6;
  q7;
  q8;
  q9;
  q10;
  pageActual = 0;
  questions = [
    {
      question: '¿Qué edad tienes?',
      options: [
        'Entre 18 y 25 años',
        'Entre 26 y 35 años',
        'Entre 36 y 55 años',
        'Mayor de 56 años',
      ],
    },
    {
      question: '¿Cuánto tiempo mantendrías una misma inversión?',
      options: [
        '6 meses',
        'Entre 6 y un año',
        'Entre uno y dos años',
        'Más de dos años',
      ],
    },
    {
      question: '¿Qué edad tienes?',
      options: [
        'Entre 18 y 25 años',
        'Entre 26 y 35 años',
        'Entre 36 y 55 años',
        'Mayor de 56 años',
      ],
    },
    {
      question: '¿Cuánto tiempo mantendrías una misma inversión?',
      options: [
        '6 meses',
        'Entre 6 y un año',
        'Entre uno y dos años',
        'Más de dos años',
      ],
    },
    {
      question: '¿Qué edad tienes?',
      options: [
        'Entre 18 y 25 años',
        'Entre 26 y 35 años',
        'Entre 36 y 55 años',
        'Mayor de 56 años',
      ],
    },
    {
      question: '¿Cuánto tiempo mantendrías una misma inversión?',
      options: [
        '6 meses',
        'Entre 6 y un año',
        'Entre uno y dos años',
        'Más de dos años',
      ],
    },
    {
      question: '¿Qué edad tienes?',
      options: [
        'Entre 18 y 25 años',
        'Entre 26 y 35 años',
        'Entre 36 y 55 años',
        'Mayor de 56 años',
      ],
    },
    {
      question: '¿Cuánto tiempo mantendrías una misma inversión?',
      options: [
        '6 meses',
        'Entre 6 y un año',
        'Entre uno y dos años',
        'Más de dos años',
      ],
    },
    {
      question: '¿Qué edad tienes?',
      options: [
        'Entre 18 y 25 años',
        'Entre 26 y 35 años',
        'Entre 36 y 55 años',
        'Mayor de 56 años',
      ],
    },
    {
      question: '¿Cuánto tiempo mantendrías una misma inversión?',
      options: [
        '6 meses',
        'Entre 6 y un año',
        'Entre uno y dos años',
        'Más de dos años',
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
}
