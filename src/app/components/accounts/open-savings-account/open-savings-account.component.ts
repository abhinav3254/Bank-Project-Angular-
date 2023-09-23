import { Component } from '@angular/core';

@Component({
  selector: 'app-open-savings-account',
  templateUrl: './open-savings-account.component.html',
  styleUrls: ['./open-savings-account.component.css']
})
export class OpenSavingsAccountComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}

interface Food {
  value: string;
  viewValue: string;
}
