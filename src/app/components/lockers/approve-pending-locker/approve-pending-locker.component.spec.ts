import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePendingLockerComponent } from './approve-pending-locker.component';

describe('ApprovePendingLockerComponent', () => {
  let component: ApprovePendingLockerComponent;
  let fixture: ComponentFixture<ApprovePendingLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovePendingLockerComponent]
    });
    fixture = TestBed.createComponent(ApprovePendingLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
