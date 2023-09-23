import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddInsuranceComponent } from './components/insurance/add-insurance/add-insurance.component';
import { LoginComponent } from './components/users/login/login.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { TransferFundsComponent } from './components/users/transfer-funds/transfer-funds.component';
import { PassbookComponent } from './components/users/passbook/passbook.component';
import { AccountBalanceComponent } from './components/users/account-balance/account-balance.component';
import { CreditCardComponent } from './components/users/credit-card/credit-card.component';
import { AddGiftCardComponent } from './components/manager/add-gift-card/add-gift-card.component';
import { ModifyGiftCardComponent } from './components/manager/modify-gift-card/modify-gift-card.component';
import { ManagerLogInComponent } from './components/manager/manager-log-in/manager-log-in.component';
import { ManagerSignUpComponent } from './components/manager/manager-sign-up/manager-sign-up.component';
import { DepositFundsComponent } from './components/users/deposit-funds/deposit-funds.component';
import { WithdrawFundsComponent } from './components/users/withdraw-funds/withdraw-funds.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminManagerComponent } from './components/admin/admin-manager/admin-manager.component';
import { ManagerListComponent } from './components/admin/manager-list/manager-list.component';
import { OpenSavingsAccountComponent } from './components/accounts/open-savings-account/open-savings-account.component';
import { OpenCurrentAccountsComponent } from './components/accounts/open-current-accounts/open-current-accounts.component';
import { GiftCardStoreComponent } from './components/accounts/gift-card-store/gift-card-store.component';

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
  },
  {
    path: 'customer/credit-card',
    component: CreditCardComponent
  },
  {
    path: 'customer/depost-fund',
    component: DepositFundsComponent
  },
  {
    path: 'customer/withdraw-fund',
    component: WithdrawFundsComponent
  },
  {
    path: 'customer/open-savings-account',
    component: OpenSavingsAccountComponent
  },
  {
    path: 'customer/open-current-account',
    component: OpenCurrentAccountsComponent
  },
  {
    path: 'customer/gift-cards',
    component: GiftCardStoreComponent
  },
  // Manager path should come here
  {
    path: 'manager/login-in',
    component: ManagerLogInComponent
  },
  {
    path: 'manager/sign-up',
    component: ManagerSignUpComponent
  },
  {
    path: 'manager/add-gift-card',
    component: AddGiftCardComponent
  },
  {
    path: 'manager/modify-gift-card',
    component: ModifyGiftCardComponent
  },
  // admin
  {
    path: 'admin/login-in',
    component: AdminLoginComponent
  },
  {
    path: 'admin/manager',
    component: AdminManagerComponent
  },
  {
    path: 'admin/all-manager',
    component: ManagerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
