import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-log-in',
  templateUrl: './manager-log-in.component.html',
  styleUrls: ['./manager-log-in.component.css']
})
export class ManagerLogInComponent {

  constructor(private managerService: ManagerService) { }

  public managerLogin(myForm: NgForm) {
    this.managerService.managerLogIn(myForm.value).subscribe(
      (res) => {
        // console.log(res);
      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert("welcome!" + myForm.value.username);
          window.localStorage.setItem("token", error.error.text);
        } else {
          alert("Wrong Credentails");
        }
      });
  }
}
