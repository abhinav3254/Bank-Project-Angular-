import { Component, OnInit } from '@angular/core';
import { AdminLoginServicesService } from '../admin-login-services.service';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  panelOpenState = false;

  users: User[] = [];

  userArrayLength: number = 0;

  constructor(private adminService: AdminLoginServicesService) { }

  ngOnInit(): void {
    this.adminService.getAllUnapprovedManagerList().subscribe(
      (res) => {
        console.log(res);
        this.users = res as User[];
        this.userArrayLength = this.users.length;
      }
    );
  }

  public approveRequest(userId: any) {
    console.log('approve request for ' + userId);
    this.adminService.approveRequest(userId).subscribe(
      (res) => {
        console.log(res);
      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert("Approved");
        } else {
          alert("Internal Issue");
        }
      });
  }

  public declineRequest() {
    console.log('decline request');
  }

}

export interface User {
  id: number
  username: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  status: string
  role: string
  gender: string
  registerDate: string
  lastLogin: string
}

