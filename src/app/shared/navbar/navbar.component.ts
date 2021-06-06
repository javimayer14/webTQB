import { Component, OnInit, Inject, Input } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  display = false;
  @Input('visible') visible;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    console.log('e');
    let element = document.querySelector('#header');
    let topbar = document.querySelector('#topbar');
    if (window.pageYOffset > element.clientHeight) {
      topbar.classList.add('topbar-scrolled');
      element.classList.add('header-scrolled');
    } else {
      topbar.classList.remove('topbar-scrolled');
      element.classList.remove('header-scrolled');
    }
  }
}
