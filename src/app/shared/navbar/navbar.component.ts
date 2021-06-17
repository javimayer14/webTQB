import { Component, OnInit, Inject, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  display = false;
  isNegative = false;
  isAuthenticated;
  @Input('visible') visible;
  activeFragment ="";
  constructor(public route: ActivatedRoute, private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();

    this.route.fragment.subscribe((fragment) => {
      console.log("FRAGMENT",fragment)
      this.activeFragment = fragment;
      });
  }

  logOut():void{
    this.authService.logOut();
    swal.fire('LogOut','Has cerrado sesion con exito !',"success" );
    this.router.navigate(['/login']);
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
