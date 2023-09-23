import { Component } from '@angular/core';
import { AdminLoginServicesService } from '../admin-login-services.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent {
  panelOpenState = false;

  users: User[] = [];

  userArrayLength: number = 0;

  constructor(private adminService: AdminLoginServicesService) { }

  ngOnInit(): void {
    this.adminService.getAllManager().subscribe(
      (res) => {
        console.log(res);
        this.users = res as User[];
        this.userArrayLength = this.users.length;
      }
    );
  }

  public declineRequest() {
    console.log('decline request');
    alert('yet to be implemented');
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

