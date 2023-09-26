import { Component, OnInit } from '@angular/core';
import { LockerService } from '../locker.service';

@Component({
  selector: 'app-your-lockers',
  templateUrl: './your-lockers.component.html',
  styleUrls: ['./your-lockers.component.css']
})
export class YourLockersComponent implements OnInit {
  panelOpenState = false;
  lockers: Lockers[] = [];
  constructor(private lockerService: LockerService) { }
  ngOnInit(): void {
    this.lockerService.yourLocker().subscribe(
      (res) => {
        this.lockers = res as Lockers[];
      }
    );
  }

}


export interface Lockers {
  id: number
  size: string
  status: boolean
  available: boolean
  money: number
  allocatedDate: string
  applyDate: string
  nomineeName: string
  allocated: boolean
  tenure: string
  user: User
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

