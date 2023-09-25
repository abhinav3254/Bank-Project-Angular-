import { Component, OnInit } from '@angular/core';
import { LockerService } from '../locker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-locker',
  templateUrl: './get-all-locker.component.html',
  styleUrls: ['./get-all-locker.component.css']
})
export class GetAllLockerComponent implements OnInit {
  panelOpenState = false;
  lockers: Lockers[] = [];
  constructor(private lockerService: LockerService, private router: Router) { }
  ngOnInit(): void {
    this.lockerService.getAllLockersForUser().subscribe(
      (res) => {
        this.lockers = res as Lockers[];
      }
    );
  }

  goToFunction(id: any) {
    this.router.navigateByUrl(`/customer/apply-locker?id=${id}`);
  }
}

export interface Lockers {
  id: number
  size: string
  status: boolean
  available: boolean
  money: number
  allocatedDate: any
  applyDate: any
  nomineeName: any
  tenure: any
  user: any
}
