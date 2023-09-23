import { HttpClient } from '@angular/common/http';
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
}
