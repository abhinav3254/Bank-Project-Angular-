import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  public applyForHomeLoan(MyFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/apply-for-home-loan';
    return this.http.post(url, MyFormValue, { headers: header });
  }

  public applyForPersonalLoan(MyFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/apply-for-personal-loan';
    return this.http.post(url, MyFormValue, { headers: header });
  }

  public applyForVehicleLoan(MyFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/apply-for-vehicle-loan';
    return this.http.post(url, MyFormValue, { headers: header });
  }

  public applyForStudentLoan(MyFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/apply-for-student-loan';
    return this.http.post(url, MyFormValue, { headers: header });
  }

}
