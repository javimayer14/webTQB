import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../services/user/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SpinnerService } from '../../../../services/spinner.service'; 


@Component({
  selector: 'app-presentar-proyecto',
  templateUrl: './presentar-proyecto.component.html',
  styleUrls: ['./presentar-proyecto.component.scss']
})
export class PresentarProyectoComponent implements OnInit {

  selectedFile = null;
  private httpHeaders = new HttpHeaders({  });
  data: Observable<any>;
  wrongEmail = false;
  wrongLastName = false;
  wrongName = false;
  wrongValidate = false;
  IsmodelShow = false;

  presentProjectForm = {
    email: null,
    name: null,
    lastName: null,
    desc:null,
    file: File = null,
  };
  constructor(
    private router: Router,
    public http: HttpClient,
    public authService: AuthService,
    public spinnerService: SpinnerService
  ) { }

@ViewChild('closeModal') private closeModal: ElementRef;
public hideModel() {
        this.closeModal.nativeElement.click();      
}

  ngOnInit(): void {
  }
  prueba(){
    this.IsmodelShow = true;
  }
  onFileSelected(event){
    console.log("event" + event.target.files[0]);
    this.presentProjectForm.file = event.target.files[0];
  }
  public saveDataUsuario(form) {
    this.spinnerService.show();
    this.hideModel();
    var url = this.authService.urlProd + 'api/user/present-proyect';
    this.presentProjectForm.email = form.value.email;
    this.presentProjectForm.name = form.value.name;
    this.presentProjectForm.lastName = form.value.lastName;
    this.validateForm(form);

    if(this.checkEmailVoid()){
      this.spinnerService.hide();
      return;
    }
    let testData:FormData = new FormData();
    let file = null;
    if(this.presentProjectForm.file != null){
      file = this.presentProjectForm.file
      testData.append('file', file, "prueba");
    }

    console.log("testDAta: " + testData);
    this.data = this.http.post(url, testData, {
      headers: this.agregarAutorizacionHeader(),
    });
    console.log(this.presentProjectForm);
    this.data.subscribe((data) => {
      swal.fire(
        '',
        'Tu proyecto se cargó correctamente y será evaluado por el equipo de inversores de The Quality Bridge. Pronto te estaremos contactando',
        'success'
        );
        this.spinnerService.hide();
        //window.location.reload();
    },err =>{
      this.spinnerService.hide();
    });
  }

  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
  }

  validateForm(form) {

    this.wrongEmail = false;
    this.wrongLastName = false;
    this.wrongName = false;

    if (!this.validateEmail(form.value.email)) {
      this.wrongEmail = true;
    }
    if (form.value.lastName === null || form.value.lastName === '') {
      this.wrongLastName = true;
    }

    if (form.value.name === null || form.value.name === '') {
      this.wrongName = true;
    }
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkEmailVoid(){
    if (this.presentProjectForm.email == null) {
      swal.fire('Error', 'email vacio', "error");
      return;
    }
    return false;
  }
}
