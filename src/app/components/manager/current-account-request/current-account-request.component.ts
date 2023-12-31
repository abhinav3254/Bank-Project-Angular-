import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-current-account-request',
  templateUrl: './current-account-request.component.html',
  styleUrls: ['./current-account-request.component.css']
})
export class CurrentAccountRequestComponent implements OnInit {
  panelOpenState = false;
  savingAccounts: SavingAccountRequests[] = [];

  constructor(private managerService: ManagerService) { }
  ngOnInit(): void {
    this.managerService.getAllCurrentAccountRequests().subscribe(
      (res) => {
        this.savingAccounts = res as SavingAccountRequests[];
      }
    );
  }

  approveCurrentAccount(id: any) {
    this.managerService.approveCurrentAccount(id).subscribe(
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
