import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../../../../services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CountriesService } from '../../../../services/countries.service';
import { SpinnerService } from '../../../../services/spinner.service';

declare var gtag;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  countries = [];
  wrongEmail = false;
  wrongLastName = false;
  wrongName = false;
  wrongCountry = false;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data: Observable<any>;
  generateUserForm = {
    email: '',
    name: '',
    lastName: '',
    country: '',
    birthDate: '',
    phone: '',
  };
  constructor(
    private router: Router,
    public http: HttpClient,
    public authService: AuthService,
    private countriesService: CountriesService,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  public saveDataUsuario(form) {
    this.spinnerService.show();
    // var url = this.authService.urlProd + 'api/user';
    var url = this.authService.urlProd + 'api/user';

    let postData = new FormData();
    this.validateForm(form);

    this.generateUserForm.email = form.value.email;
    this.generateUserForm.name = form.value.name;
    this.generateUserForm.lastName = form.value.lastName;
    this.generateUserForm.country = form.value.country;
    this.generateUserForm.birthDate = form.value.birthDate;
    this.generateUserForm.phone = form.value.phone;

    this.data = this.http.post(url, this.generateUserForm);
    console.log(this.generateUserForm);
    this.data.subscribe(
      (data) => {
        console.log(data);

        console.log(form.value);
        //this.router.navigate(['/login']);
        swal.fire(
          'Formulario completado exitosamente',
          'Muchas gracias por tu interés en sumarte a la comunidad de inversores. Te enviamos un correo para contarte cómo seguir',
          'success'
        );
        this.spinnerService.hide();
        form.reset();
      },
      (err) => {
        if (err.status == 409) {
          swal.fire(
            'Error Login',
            'El email ingresado ya se encuentra registrado',
            'error'
          );
        }
        this.spinnerService.hide();
      }
    );
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }

  codPhone(country) {
    this.generateUserForm.phone = `+ ${country['code']}`;
  }
  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  sendEvent() {
    gtag('config', 'G-JJ03QQT937', {
      eventCategory: 'formularios',
      eventLabel: 'enviar_formulario',
      eventAction: 'CTA',
      eventValue: 10
    });
  }
  validateForm(form) {
    this.wrongEmail = false;
    this.wrongLastName = false;
    this.wrongName = false;
    this.wrongCountry = false;

    if (!this.validateEmail(form.value.email)) {
      this.wrongEmail = true;
    }
    if (form.value.lastName === null || form.value.lastName === '') {
      this.wrongLastName = true;
    }

    if (form.value.name === null || form.value.name === '') {
      this.wrongName = true;
    }
    if (form.value.country === null || form.value.country === '') {
      this.wrongCountry = true;
    }
  }
}
