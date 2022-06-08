import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../../../../services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CountriesService } from '../../../../services/countries.service';
import { SpinnerService } from '../../../../services/spinner.service';

declare var gtag_report_conversion;
// https://script.google.com/macros/s/AKfycbzrXc9r8lLMCdz48k6kF1iGWfGrbezrLxgVkJdW61WbuuDlehEnjHqw0Sgp1T8FKkIc/exec

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
    var emailUrl = 
    'https://script.google.com/macros/s/AKfycbzrXc9r8lLMCdz48k6kF1iGWfGrbezrLxgVkJdW61WbuuDlehEnjHqw0Sgp1T8FKkIc/exec';
    this.spinnerService.show();
    // var url = this.authService.urlProd + 'api/user';
    var url = this.authService.urlProd + 'api/user';
    var emailUrl =
      'https://script.google.com/macros/s/AKfycbzsC-xxleE3zY7F61dfnI5qIDlUbynb1Oc0isxpjrG1YkqFM7FQxKnBjhEEyHK-iSWY/exec';
    let emailFormData: FormData = new FormData();
    emailFormData.set('name', form.value.name);
    emailFormData.set('lastName', form.value.lastName);
    emailFormData.set('email', form.value.email);
    emailFormData.set('country', form.value.country.name);
    emailFormData.set('birthday', form.value.birthDate.toLocaleString());
    emailFormData.set('phone', form.value.phone);
    this.http.post<any>(emailUrl, emailFormData).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });

    try {
      gtag("config", "AW-308960790",{
        'conversion-type':'suscripcion_comunidad'
      })
      console.log("GTAG WORK!")
    } catch (error) {
      console.log(error)
    }


    let postData = new FormData();
    //this.validateForm(form);
    let emailFormData: FormData = new FormData();

    emailFormData.set('name', form.value.name);
    emailFormData.set('lastName', form.value.lastName);
    emailFormData.set('email', form.value.email);
    emailFormData.set('country', form.value.country);
    emailFormData.set('birthday', form.value.birthDate);
    emailFormData.set('phone', form.value.phone);

    // this.generateUserForm.email = form.value.email;
    // this.generateUserForm.name = form.value.name;
    // this.generateUserForm.lastName = form.value.lastName;
    // this.generateUserForm.country = form.value.country;
    // this.generateUserForm.birthDate = form.value.birthDate;
    // this.generateUserForm.phone = form.value.phone;

    this.data = this.http.post(emailUrl, emailFormData);
    //console.log(this.generateUserForm);
    this.data.subscribe(
      (data) => {
        console.log(data);

        //console.log(form.value);
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
  /*sendEvent() {
    gtag_report_conversion('config', 'G-JJ03QQT937', {
      eventCategory: 'formularios',
      eventLabel: 'enviar_formulario',
      eventAction: 'CTA',
      eventValue: 10
    });
  }*/
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
