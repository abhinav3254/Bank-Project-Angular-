import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-studentloan',
  templateUrl: './studentloan.component.html',
  styleUrls: ['./studentloan.component.css']
})
export class StudentloanComponent {
  employment: Employment[] = [
    { value: "Full-Time", viewValue: "Full-Time" },
    { value: "Part-Time", viewValue: "Part-Time" },
    { value: "Contract", viewValue: "Contract" },
    { value: "Freelance", viewValue: "Freelance" },
    { value: "Temporary", viewValue: "Temporary" },
    { value: "Internship", viewValue: "Internship" },
    { value: "Remote", viewValue: "Remote" },
    { value: "Self-Employed", viewValue: "Self-Employed" },
    { value: "Consultant", viewValue: "Consultant" },
    { value: "Volunteer", viewValue: "Volunteer" }
  ];


  relationshipStatus: RelatioShipStatus[] = [
    { value: "Single", viewValue: "Single" },
    { value: "In a Relationship", viewValue: "In a Relationship" },
    { value: "Engaged", viewValue: "Engaged" },
    { value: "Married", viewValue: "Married" },
    { value: "Divorced", viewValue: "Divorced" },
    { value: "Widowed", viewValue: "Widowed" },
    { value: "Separated", viewValue: "Separated" },
    { value: "It's Complicated", viewValue: "It's Complicated" }
  ]

  propertyOwnership: PropertyOwnserShips[] = [
    { value: "Owned", viewValue: "Owned" },
    { value: "Mortgaged", viewValue: "Mortgaged" },
    { value: "Rented", viewValue: "Rented" },
    { value: "Leased", viewValue: "Leased" },
    { value: "Co-Owned", viewValue: "Co-Owned" },
    { value: "Inherited", viewValue: "Inherited" },
    { value: "Commercial", viewValue: "Commercial" },
    { value: "Vacation Home", viewValue: "Vacation Home" },
    { value: "Other", viewValue: "Other" }
  ];

  gender: Gender[] = [
    { value: "male", viewValue: "male" },
    { value: "female", viewValue: "female" }
  ];

  constructor(private loanService: LoanService) { }

  public applyForStudentLoan(MyForm: NgForm) {
    this.loanService.applyForStudentLoan(MyForm.value).subscribe(
      (res) => {

      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert('submited student loan');
        } else {
          alert("try after somethime");
        }
      });
  }
}


interface Gender {
  value: string;
  viewValue: string;
}


interface Employment {
  value: string;
  viewValue: string;
}

interface RelatioShipStatus {
  value: string;
  viewValue: string;
}

interface PropertyOwnserShips {
  value: string;
  viewValue: string;
}
