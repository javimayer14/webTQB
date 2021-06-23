import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../../services/user/auth.service';
import { Router } from '@angular/router';
import { User } from '../../classes/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  wrongPassword = false;
  changePasswordForm = {
    currentMail:'',
    currentPassword: '',
    newPassword: '',
    newPasswordRepeat: ''
  };
  user: User;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  changePassword(){
   this.validateNewPassword();
   this.checkInputVoid();
   this.authenticateAndChangePassword();
  }

  validateNewPassword(){
    console.log("probando")
    if(this.changePasswordForm.newPassword === this.changePasswordForm.newPasswordRepeat)
      this.wrongPassword = false;
    else
    this.wrongPassword = true;
  }

  checkInputVoid(){
    console.log("USER: " + this.changePasswordForm);
    if (this.changePasswordForm.currentPassword == null || this.changePasswordForm.newPassword == null) {
      swal.fire('Error', 'password vacio', "error");
      return;
    }
  }

  authenticateAndChangePassword(){
    this.user = new User();
   this.user.username = this.changePasswordForm.currentMail;
   this.user.password = this.changePasswordForm.currentPassword;
   this.authService.login(this.user).subscribe(response => {

    console.log(response);
    this.authService.guardarUser(response.access_token);
    this.authService.guardarToken(response.access_token);
    this.router.navigate(['/']);
    this.authService.changePassword(this.changePasswordForm);
  }, err => {
    if (err.status == 400) {
      swal.fire('Error Login', 'Username o Password incorrecto', "error");
    }
  });

  }

}
