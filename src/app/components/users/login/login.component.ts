import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private route: Router) { }

  public userLogIn(myForm: NgForm) {
    console.log(myForm.value);
    this.userService.userLogIn(myForm.value).subscribe((res) => {

    }, error => { // second parameter is to listen for error
      console.log(error);
      console.log(error.status);
      if (error.status == 200) {
        alert("welcome!" + myForm.value.username);
        window.localStorage.setItem("token", error.error.text);
        this.route.navigateByUrl("");
      } else {
        alert("Wrong Credentails");
      }
    });
  }
}
