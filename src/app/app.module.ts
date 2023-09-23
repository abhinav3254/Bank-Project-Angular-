import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddInsuranceComponent } from './components/insurance/add-insurance/add-insurance.component';
import { LoginComponent } from './components/users/login/login.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TransferFundsComponent } from './components/users/transfer-funds/transfer-funds.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentComponent } from './components/users/signup/dialog-content/dialog-content.component';
import { PassbookComponent } from './components/users/passbook/passbook.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccountBalanceComponent } from './components/users/account-balance/account-balance.component';
import { CreditCardComponent } from './components/users/credit-card/credit-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddGiftCardComponent } from './components/manager/add-gift-card/add-gift-card.component';
import { ModifyGiftCardComponent } from './components/manager/modify-gift-card/modify-gift-card.component';
import { ManagerLogInComponent } from './components/manager/manager-log-in/manager-log-in.component';
import { ManagerSignUpComponent } from './components/manager/manager-sign-up/manager-sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { DepositFundsComponent } from './components/users/deposit-funds/deposit-funds.component';
import { WithdrawFundsComponent } from './components/users/withdraw-funds/withdraw-funds.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminManagerComponent } from './components/admin/admin-manager/admin-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerListComponent } from './components/admin/manager-list/manager-list.component'



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    AddInsuranceComponent,
    LoginComponent,
    SignupComponent,
    TransferFundsComponent,
    DialogContentComponent,
    PassbookComponent,
    AccountBalanceComponent,
    CreditCardComponent,
    AddGiftCardComponent,
    ModifyGiftCardComponent,
    ManagerLogInComponent,
    ManagerSignUpComponent,
    DepositFundsComponent,
    WithdrawFundsComponent,
    AdminLoginComponent,
    AdminManagerComponent,
    ManagerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
