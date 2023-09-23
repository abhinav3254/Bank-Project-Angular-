import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpenSavingsAccountService } from '../open-savings-account.service';

@Component({
  selector: 'app-open-savings-account',
  templateUrl: './open-savings-account.component.html',
  styleUrls: ['./open-savings-account.component.css']
})
export class OpenSavingsAccountComponent {
  profession: Professions[] = [
    { value: 'Doctor', viewValue: 'Doctor' },
    { value: 'Teacher', viewValue: 'Teacher' },
    { value: 'Engineer', viewValue: 'Engineer' },
    { value: 'Lawyer', viewValue: 'Lawyer' },
    { value: 'Nurse', viewValue: 'Nurse' },
    { value: 'Accountant', viewValue: 'Accountant' },
    { value: 'Architect', viewValue: 'Architect' },
    { value: 'Electrician', viewValue: 'Electrician' },
    { value: 'Chef', viewValue: 'Chef' },
    { value: 'Graphic Designer', viewValue: 'Graphic Designer' }
  ];

  sourceIncome: SourceOfIncomes[] = [
    { value: 'Salary', viewValue: 'Salary' },
    { value: 'Business Income', viewValue: 'Business Income' },
    { value: 'Rental Income', viewValue: 'Rental Income' },
    { value: 'Investment Income', viewValue: 'Investment Income' },
    { value: 'Freelance Income', viewValue: 'Freelance Income' },
    { value: 'Pension', viewValue: 'Pension' },
    { value: 'Royalties', viewValue: 'Royalties' },
    { value: 'Capital Gains', viewValue: 'Capital Gains' },
    { value: 'Interest Income', viewValue: 'Interest Income' },
    { value: 'Other', viewValue: 'Other' }
  ];


  constructor(private openSavingService: OpenSavingsAccountService) { }

  public applyForSavingAccount(myForm: NgForm) {
    this.openSavingService.applyForSavingsAccount(myForm.value).subscribe(
      (res) => {
        console.log(res);
      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert('submited');
        } else {
          alert("try after somethime");
        }
      });

  }
}

interface Professions {
  value: string;
  viewValue: string;
}

interface SourceOfIncomes {
  value: string;
  viewValue: string;
}

