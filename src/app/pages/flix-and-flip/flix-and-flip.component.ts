import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-flix-and-flip',
  templateUrl: './flix-and-flip.component.html',
  styleUrls: ['./flix-and-flip.component.scss'],
})
export class FlixAndFlipComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });
  $spinner: boolean = false;
  constructor(public http: HttpClient) {}
  //https://script.google.com/macros/s/AKfycbx4YMa-0jtTm8ed93nDFjiABSjqjAjCa0JkPq1AW_WFHdsXB0dIG2AJOPGizzPpKh6E/exec
  ngOnInit(): void {}

  sendMail() {
    console.log(this.profileForm.value.name);
    this.$spinner = true;
    var emailUrl =
      'https://script.google.com/macros/s/AKfycbx4YMa-0jtTm8ed93nDFjiABSjqjAjCa0JkPq1AW_WFHdsXB0dIG2AJOPGizzPpKh6E/exec';
    let emailFormData: FormData = new FormData();
    emailFormData.set('name', this.profileForm.value.name);
    emailFormData.set('email', this.profileForm.value.email);
    emailFormData.set('phone', this.profileForm.value.phone);

    this.http.post<any>(emailUrl, emailFormData).subscribe({
      next: (data) => {
        console.log(data);
        this.$spinner = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.$spinner = false;
      },
    });
  }
}
