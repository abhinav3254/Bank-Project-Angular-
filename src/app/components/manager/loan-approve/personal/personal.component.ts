import { Component, OnInit } from '@angular/core';
import { LoanApproveService } from '../loan-approve.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  panelOpenState = false;
  constructor(private loanApproveService: LoanApproveService) { }
  ngOnInit(): void {
    this.personalLoanApprove();
  }

  loans: Loan[] = [];

  public personalLoanApprove() {
    this.loanApproveService.getAllPersonalLoanToApprove().subscribe(
      (res) => {
        this.loans = res as Loan[];
      }
    );
  }

  public approveLoan(id: any) {
    this.loanApproveService.approveLoan(id).subscribe(

      (res) => {

      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert('Approved personal loan');
          window.location.reload();
        } else {
          alert("try after somethime");
        }
      });
  }

}
export interface Loan {
  id: number
  firstName: string
  lastName: string
  fullName: string
  mobile: string
  email: string
  pan: string
  aadhar: string
  mother: string
  income: number
  employement: string
  relationship: string
  propertyOwnership: string
  gender: string
  amount: number
  status: boolean
  category: string
  dateOfApply: string
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