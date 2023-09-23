import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminLoginServicesService } from '../admin-login-services.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private adminService: AdminLoginServicesService) { }

  public adminLogIn(MyForm: NgForm) {
    console.log(MyForm.value);
    this.adminService.adminLogIn(MyForm.value).subscribe((res) => {
      console.log(res);

    }, error => { // second parameter is to listen for error
      console.log(error);
      console.log(error.status);
      if (error.status == 200) {
        alert("welcome!" + MyForm.value.username);
        window.localStorage.setItem("token", error.error.text);
        // this.route.navigateByUrl("/home");
      } else {
        alert("Wrong Credentails");
      }
    });
  }
}

/**
 * , error => { // second parameter is to listen for error
        console.log(error);
        this.error = JSON.stringify(error.error.text);
        console.log(error.status);
        if (error.status == 200) {
          alert("welcome!" + myFrom.value.username);
          window.localStorage.setItem("token", error.error.text);
          this.route.navigateByUrl("/home");
        } else {
          alert("Wrong Credentails");
        }
      });
*/
