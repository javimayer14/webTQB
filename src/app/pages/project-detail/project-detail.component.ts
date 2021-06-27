import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/user/auth.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  data: Observable<any>;
  private httpHeaders = new HttpHeaders({  });
  fileUrl;
  constructor(    public http: HttpClient, public authService: AuthService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  public downloadFile() {
    var url = this.authService.urlLocal + 'api/user/download-PDF/1';
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



}
