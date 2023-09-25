import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LockerService {

  baseUrl = 'http://localhost:9092/locker'
  constructor(private http: HttpClient) { }

  public addLocker(myFormValue: any) {
    const url = this.baseUrl + '/add-locker';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, myFormValue, { headers: header });
  }

  public getAllLockersForUser() {
    const url = this.baseUrl + '/users/get-all';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public applyForLocker(myFormValue: any) {
    const url = this.baseUrl + '/apply-for-locker';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.patch(url, myFormValue, { headers: header });
  }

  public getAllPendingLocker() {
    const url = this.baseUrl + '/get-all-pending-locker';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public approvePendingLocker(id: any) {
    const url = 'http://localhost:9092/locker/approve-pending-locker/' + id;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.patch(url, {}, { headers: header });
  }

}
