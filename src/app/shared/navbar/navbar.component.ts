import { Component, OnInit, Inject, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  display = false;
  isNegative = false;
  @Input('visible') visible = false;
  activeFragment ="";
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      console.log("FRAGMENT",fragment)
      this.activeFragment = fragment;
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    console.log('e');
    let element = document.querySelector('#header');
    let topbar = document.querySelector('#topbar');
    if (window.pageYOffset > element.clientHeight) {
      topbar.classList.add('topbar-scrolled');
      element.classList.add('header-scrolled');
      this.isNegative = true;
    } else {
      topbar.classList.remove('topbar-scrolled');
      element.classList.remove('header-scrolled');
      this.isNegative = false;
    }
  }
}
