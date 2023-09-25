import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LockerService } from '../locker.service';

@Component({
  selector: 'app-apply-locker',
  templateUrl: './apply-locker.component.html',
  styleUrls: ['./apply-locker.component.css']
})
export class ApplyLockerComponent {

  lockerId = 0;

  constructor(private route: ActivatedRoute, private lockerService: LockerService) { }

  ngOnInit() {
    // Retrieve the id from the route parameters
    this.route.queryParams.subscribe(params => {
      this.lockerId = params['id'];
    });
  }

  submitForm(MyFrom: NgForm) {
    console.log(MyFrom.value);
    this.lockerService.applyForLocker(MyFrom.value).subscribe(
      (res) => {

      }, error => { // second parameter is to listen for error
        console.log(error);
        console.log(error.status);
        if (error.status == 200) {
          alert('Application Submitted');
        } else {
          alert("try after somethime");
        }
      });

  }
}
