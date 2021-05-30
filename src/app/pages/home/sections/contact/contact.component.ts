import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../../../../services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data: Observable<any>;
  constructor(private router: Router, public http: HttpClient, public authService: AuthService) { }

  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  generateUserForm = {
    email: "",
    name: "",
    lastName: "",
    country: "",
    birthDate: "",
    phone: ""
  }

  ngOnInit(): void {
  }

  public saveDataUsuario(form) {

    var url = "http://localhost:8080/api/user"
    let postData = new FormData();
    this.generateUserForm.email = form.value.email;
    this.generateUserForm.name = form.value.name;
    this.generateUserForm.lastName = form.value.lastName;
    this.generateUserForm.country = form.value.country;
    this.generateUserForm.birthDate = form.value.birthDate;
    this.generateUserForm.phone = form.value.phone;


    this.data = this.http.post(url, this.generateUserForm, { headers: this.agregarAutorizacionHeader() });
    console.log(this.generateUserForm);
    this.data.subscribe(data => {
      console.log(data);

      console.log(form.value);
      swal.fire('Generacion usuario', 'el usuario fue creado con exito', "success");
    });
    console.log("holass");

  }

}
