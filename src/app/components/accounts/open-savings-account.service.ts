import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenSavingsAccountService {

  constructor(private http: HttpClient) { }

  applyForSavingsAccount(MyFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/applications-form/apply/savings-account';
    return this.http.post(url, MyFormValue, { headers: header });
  }

  applyForCurrentAccount(MyFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/applications-form/apply/current-account';
    return this.http.post(url, MyFormValue, { headers: header });
  }

}
