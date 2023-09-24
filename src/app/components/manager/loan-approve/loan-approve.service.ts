import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanApproveService {

  constructor(private http: HttpClient) { }

  public getAllHomeLoanToApprove() {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/get-all-home-loan-applications';
    return this.http.get(url, { headers: header });
  }

  public getAllPersonalLoanToApprove() {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/get-all-personal-loan-applications';
    return this.http.get(url, { headers: header });
  }

  public getAllVehicleLoanToApprove() {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/get-all-vehicle-loan-applications';
    return this.http.get(url, { headers: header });
  }

  public getAllStudentLoanToApprove() {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9092/loan/get-all-student-loan-applications';
    return this.http.get(url, { headers: header });
  }

}
