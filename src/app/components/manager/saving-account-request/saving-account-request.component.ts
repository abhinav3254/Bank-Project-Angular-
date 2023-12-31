import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-saving-account-request',
  templateUrl: './saving-account-request.component.html',
  styleUrls: ['./saving-account-request.component.css']
})
export class SavingAccountRequestComponent implements OnInit {
  panelOpenState = false;
  savingAccounts: SavingAccountRequests[] = [];

  constructor(private managerService: ManagerService) { }
  ngOnInit(): void {
    this.managerService.getAllSavingAccountRequests().subscribe(
      (res) => {
        this.savingAccounts = res as SavingAccountRequests[];
      }
    );
  }

  approveSavingsAccount(id: any) {
    this.managerService.approveSavingsAccount(id).subscribe(
      (res) => {

      }, error => { // second parameter is to listen for error
        // console.log(error);
        // console.log(error.status);
        if (error.status == 200) {
          alert("welcome!" + error.text);
        } else {
          alert(error.text);
        }
      });
  }
}



export interface SavingAccountRequests {
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
  user: User
  dateOfApply: string
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
