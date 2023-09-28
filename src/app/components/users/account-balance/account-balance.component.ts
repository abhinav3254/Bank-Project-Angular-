import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  account: Account | undefined;

  public getProfile() {
    this.userService.getProfile().subscribe(
      (res) => {
        this.account = res as Account;
      }
    );
  }

}

export interface Account {
  id: number
  amount: number
  user: User
  applicationsForms: ApplicationsForms
  accountCreatedDate: string
  accountNumber: string
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

export interface ApplicationsForms {
  id: number
  category: string
  mobile: string
  email: string
  pan: string
  aadhar: string
  mother: string
  annualIncome: number
  profession: string
  sourceOfIncome: string
  status: boolean
  user: any
  dateOfApply: string
}
