import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
import { SavingAccountRequestComponent } from './components/manager/saving-account-request/saving-account-request.component';
import { CurrentAccountRequestComponent } from './components/manager/current-account-request/current-account-request.component';
import { HomeLoanComponent } from './components/loans/home-loan/home-loan.component';
import { PersonalLoanComponent } from './components/loans/personal-loan/personal-loan.component';
import { VehiceloanComponent } from './components/loans/vehiceloan/vehiceloan.component';
import { StudentloanComponent } from './components/loans/studentloan/studentloan.component';
import { PersonalComponent } from './components/manager/loan-approve/personal/personal.component';
import { VehicleComponent } from './components/manager/loan-approve/vehicle/vehicle.component';
import { StudentComponent } from './components/manager/loan-approve/student/student.component';
import { HomeApproveComponent } from './components/manager/loan-approve/home-approve/home-approve.component';
import { AddLockerComponent } from './components/lockers/add-locker/add-locker.component';
import { GetAllLockerComponent } from './components/lockers/get-all-locker/get-all-locker.component';
import { ApplyLockerComponent } from './components/lockers/apply-locker/apply-locker.component';
import { GetAllPendingLockerComponent } from './components/lockers/get-all-pending-locker/get-all-pending-locker.component';
import { YourLockersComponent } from './components/lockers/your-lockers/your-lockers.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'customer/get-all-locker',
    component: GetAllLockerComponent
  },
  {
    path: 'customer/apply-locker',
    component: ApplyLockerComponent
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
  {
    path: 'customer/apply-home-loan',
    component: HomeLoanComponent
  },
  {
    path: 'customer/apply-personal-loan',
    component: PersonalLoanComponent
  },
  {
    path: 'customer/apply-vehicle-loan',
    component: VehiceloanComponent
  },
  {
    path: 'customer/apply-student-loan',
    component: StudentloanComponent
  },
  {
    path: 'customer/your-locker',
    component: YourLockersComponent
  },
  // Manager path should come here
  {
    path: 'manager/add-locker',
    component: AddLockerComponent
  },
  {
    path: 'manager/login-in',
    component: ManagerLogInComponent
  },
  {
    path: 'manager/approve-locker-request',
    component: GetAllPendingLockerComponent
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
  {
    path: 'manager/saving-account-request',
    component: SavingAccountRequestComponent
  },
  {
    path: 'manager/current-account-request',
    component: CurrentAccountRequestComponent
  },
  {
    path: 'manager/approve-loan-personal',
    component: PersonalComponent
  },
  {
    path: 'manager/approve-loan-vehicle',
    component: VehicleComponent
  },
  {
    path: 'manager/approve-loan-student',
    component: StudentComponent
  },
  {
    path: 'manager/approve-loan-home',
    component: HomeApproveComponent
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
