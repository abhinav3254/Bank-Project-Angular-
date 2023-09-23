import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  public managerLogIn(myFormData: any) {
    const url = 'http://localhost:9092/user/login';
    return this.http.post(url, myFormData);
  }

  public getAllSavingAccountRequests(): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/applications-form/applications/saving-accounts';
    return this.http.get(url, { headers: header });
  }

  public getAllCurrentAccountRequests(): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/applications-form/applications/current-accounts';
    return this.http.get(url, { headers: header });
  }
}
