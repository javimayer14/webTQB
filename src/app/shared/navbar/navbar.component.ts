import { Component, OnInit, Inject, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  display = false;
  isNegative = false;
  @Input('visible') visible = false;
  isAuthenticated;
  activeFragment = '';
  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();

    this.route.fragment.subscribe((fragment) => {
      console.log('FRAGMENT', fragment);
      this.activeFragment = fragment;
    });
  }

  logOut(): void {
    this.authService.logOut();
    swal.fire('Sesión cerrada con éxito', 'Te esperamos pronto para facilitarte nuevos puentes y expandir tus oportunidades', 'success');
    this.router.navigate(['/login']);
  }
  goToBlog(){
    window.open("https://www.thequalitybridgeblog.com", '_blank');
  }

  closeMenu(){
    this.display=false;
    console.log("prueba");
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    console.log('e');
    let element = document.querySelector('#header');
    //let topbar = document.querySelector('#topbar');
    if (window.pageYOffset > element.clientHeight) {
      //topbar.classList.add('topbar-scrolled');
      element.classList.add('header-scrolled');
      this.isNegative = true;
    } else {
      //topbar.classList.remove('topbar-scrolled');
      element.classList.remove('header-scrolled');
      this.isNegative = false;
    }
  }
}
