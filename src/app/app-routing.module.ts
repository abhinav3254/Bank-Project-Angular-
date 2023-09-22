import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddInsuranceComponent } from './components/insurance/add-insurance/add-insurance.component';
import { LoginComponent } from './components/users/login/login.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { TransferFundsComponent } from './components/users/transfer-funds/transfer-funds.component';
import { PassbookComponent } from './components/users/passbook/passbook.component';
import { AccountBalanceComponent } from './components/users/account-balance/account-balance.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-insurance',
    component: AddInsuranceComponent
  },
  {
    path: 'customer/login',
    component: LoginComponent
  },
  {
    path: 'customer/sign-up',
    component: SignupComponent
  },
  {
    path: 'customer/transfer-funds',
    component: TransferFundsComponent
  },
  {
    path: 'customer/passbook',
    component: PassbookComponent
  },
  {
    path: 'customer/balance',
    component: AccountBalanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
