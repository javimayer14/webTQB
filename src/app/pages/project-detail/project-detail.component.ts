import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/user/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SpinnerService } from '../../services/spinner.service'; 


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  data: Observable<any>;
  private httpHeaders = new HttpHeaders({  });
  fileUrl;

  wrongEmail = false;
  wrongLastName = false;
  wrongName = false;
  wrongTelefono = false;
  wrongValidate = false;
  IsmodelShow = false;

  contactProyectForm = {
    email: null,
    name: null,
    telefono: null,
    lastName: null,
    desc:null,
    file: File = null,
  };

  constructor(    public http: HttpClient, public authService: AuthService, private sanitizer: DomSanitizer,     private router: Router,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

  public downloadFile() {
    var url = this.authService.urlProd + 'api/user/download-PDF/1';
    this.data = this.http.get(url, {
      headers: this.agregarAutorizacionHeader(), responseType: 'blob'
    });
    this.data.subscribe((data) => {

      let dataType = data.type;
            let binaryData = [];
            binaryData.push(data);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
            downloadLink.setAttribute('download', "proyecto-fix-&-flip.pdf");
            document.body.appendChild(downloadLink);
            downloadLink.click();

      console.log("DOWNLOAD:" +data);

      const blob = new Blob([data], { type: 'application/octet-stream' });

      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

    });
  }

  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
  }


  public saveDataUsuario(form) {
    this.spinnerService.show();
    this.hideModel();
    var url = this.authService.urlProd + 'api/user/contact-proyect';
    this.contactProyectForm.email = form.value.email;
    this.contactProyectForm.name = form.value.name;
    this.contactProyectForm.lastName = form.value.lastName;
    this.contactProyectForm.telefono = form.value.telefono;
    this.validateForm(form);

    if(this.checkEmailVoid()){
      this.spinnerService.hide();
      return;
    }
    let testData:FormData = new FormData();
    this.data = this.http.post(url, this.contactProyectForm, {
      headers: this.agregarAutorizacionHeader(),
    });
    this.data.subscribe((data) => {
      swal.fire(
        '',
        'Tus datos se cargaron correctamente. Pronto te estaremos contactando',
        'success'
        );
        this.spinnerService.hide();
        //window.location.reload();
    },err =>{
      this.spinnerService.hide();
    });
  }

  validateForm(form) {

    this.wrongEmail = false;
    this.wrongLastName = false;
    this.wrongName = false;
    this.wrongTelefono = false;

    if (!this.validateEmail(form.value.email)) {
      this.wrongEmail = true;
    }
    if (form.value.lastName === null || form.value.lastName === '') {
      this.wrongLastName = true;
    }

    if (form.value.telefono === null || form.value.telefono === '') {
      this.wrongTelefono = true;
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
    if (this.contactProyectForm.email == null) {
      swal.fire('Error', 'email vacio', "error");
      return;
    }
    return false;
  }
  @ViewChild('closeModal') private closeModal: ElementRef;
  public hideModel() {
    this.closeModal.nativeElement.click();      
}



}


