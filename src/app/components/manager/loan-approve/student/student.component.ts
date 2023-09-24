import { Component, OnInit } from '@angular/core';
import { LoanApproveService } from '../loan-approve.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  panelOpenState = false;
  constructor(private loanApproveService: LoanApproveService) { }
  ngOnInit(): void {
    this.studentLoanApprove();
  }

  loans: Loan[] = [];

  public studentLoanApprove() {
    this.loanApproveService.getAllStudentLoanToApprove().subscribe(
      (res) => {
        this.loans = res as Loan[];
      }
    );
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