import { Component, OnInit } from '@angular/core';
import { LockerService } from '../locker.service';

@Component({
  selector: 'app-get-all-pending-locker',
  templateUrl: './get-all-pending-locker.component.html',
  styleUrls: ['./get-all-pending-locker.component.css']
})
export class GetAllPendingLockerComponent implements OnInit {
  lockers: Lockers[] = [];
  constructor(private lockerService: LockerService) { }
  ngOnInit(): void {
    this.lockerService.getAllPendingLocker().subscribe(
      (res) => {
        this.lockers = res as Lockers[];
      }
    );
  }
  panelOpenState = false;
  goToFunction(lockerId: any) {
    this.lockerService.approvePendingLocker(lockerId).subscribe(
      (res) => {

      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert('Locker Approved');
        } else {
          alert("try after somethime");
        }
      });
    window.location.reload();
  }
}

export interface Lockers {
  id: number
  size: string
  status: boolean
  available: boolean
  money: number
  allocatedDate: any
  applyDate?: string
  nomineeName?: string
  tenure?: string
  user?: User
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

