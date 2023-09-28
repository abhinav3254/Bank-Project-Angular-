import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public userLogIn(myFormValue: any): Observable<any> {
    const url = 'http://localhost:9092/user/login';
    return this.http.post(url, myFormValue);
  }

  public getProfile(): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/savings-account/get-account-details';
    return this.http.get(url, { headers: header });
  }
}
