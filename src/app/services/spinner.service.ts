import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading:boolean;

show(){
  this.isLoading = true;
}

hide(){
  this.isLoading = false;
}

}
