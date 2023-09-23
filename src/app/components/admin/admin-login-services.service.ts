import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServicesService {

  constructor(private http: HttpClient) { }

  public adminLogIn(myFormValue: any): Observable<any> {
    const url = 'http://localhost:9092/user/login';
    return this.http.post(url, myFormValue);
  }

  public getAllUnapprovedManagerList(): Observable<any> {
    const url = 'http://localhost:9092/user/admin/not-approved-manager';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public getAllManagerRequest(): Observable<any> {
    const url = 'http://localhost:9092/user/admin/all-manager';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public approveRequest(userId: any): Observable<any> {
    const url = 'http://localhost:9092/user/admin/approveManager?userId=' + userId;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public declineRequest(userId: any): Observable<any> {
    const url = 'http://localhost:9092/user/admin/declineManager?userId=' + userId;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

}
