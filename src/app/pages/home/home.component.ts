import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated;
  constructor(public route: ActivatedRoute, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

}
