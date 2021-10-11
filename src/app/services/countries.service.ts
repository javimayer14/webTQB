import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http
      .get('https://restcountries.com/v2/all')
      .pipe(
        map((resp: any[]) =>
          resp.map((country) => ({
            name: country.name,
            code: country.callingCodes[0],
            flag: country.flag,
            
          }))
        )
      );
  }
}
//get('https://restcountries.eu/rest/v2')