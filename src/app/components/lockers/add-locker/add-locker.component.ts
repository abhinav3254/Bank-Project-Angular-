import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LockerService } from '../locker.service';

@Component({
  selector: 'app-add-locker',
  templateUrl: './add-locker.component.html',
  styleUrls: ['./add-locker.component.css']
})
export class AddLockerComponent {

  constructor(private lockerService: LockerService) { }

  submitForm(MyForm: NgForm) {
    console.log(MyForm.value);
    this.lockerService.addLocker(MyForm.value).subscribe(
      (res) => {

      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert('Added Locker');
        } else {
          alert("try after somethime");
        }
      });
  }

}
