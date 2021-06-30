import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service';
import swal from 'sweetalert2'
import { User } from '../../classes/user';
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  titulo: string = "Por favor Sing In !";
  user: User;
  constructor(private authService: AuthService, private router: Router, public spinnerService: SpinnerService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }


  logIn(): void {
    this.spinnerService.show();
    console.log("USER: " + this.user);
    if (this.user.username == null || this.user.password == null) {
      swal.fire('Error Login', 'Username o Password vacio', "error");
      this.spinnerService.hide();
      return;
    }
    this.authService.login(this.user).subscribe(response => {

      console.log(response);
      this.authService.guardarUser(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/']);
      swal.fire('Ya estás en movimiento: Sesión iniciada con éxito', 'Te invitamos a recorrer todo el contenido para expandir tus oportunidades', "success");
      this.spinnerService.hide();

    }, err => {
      if (err.status == 400) {
        swal.fire('Error Login', 'Username o Password incorrecto', "error");
      }
      this.spinnerService.hide();
    });

  }
}
