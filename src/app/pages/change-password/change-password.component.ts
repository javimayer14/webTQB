import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../../services/user/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  wrongPassword = false;
  changePasswordForm = {
    currentPassword: '',
    newPassword: '',
    newPasswordRepeat: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  changePassword(){
   this.validateNewPassword();
   this.checkInputVoid();
   this.authService.changePassword(this.changePasswordForm);
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
      swal.fire('Error', 'assword vacio', "error");
      return;
    }
  }

}
