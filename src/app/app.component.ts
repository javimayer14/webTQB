import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'webTQB';

  constructor(public spinnerService: SpinnerService){

  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}
