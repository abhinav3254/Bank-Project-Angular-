import { Component } from '@angular/core';

@Component({
  selector: 'app-open-current-accounts',
  templateUrl: './open-current-accounts.component.html',
  styleUrls: ['./open-current-accounts.component.css']
})
export class OpenCurrentAccountsComponent {
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
