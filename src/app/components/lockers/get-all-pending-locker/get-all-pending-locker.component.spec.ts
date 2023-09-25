import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPendingLockerComponent } from './get-all-pending-locker.component';

describe('GetAllPendingLockerComponent', () => {
  let component: GetAllPendingLockerComponent;
  let fixture: ComponentFixture<GetAllPendingLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllPendingLockerComponent]
    });
    fixture = TestBed.createComponent(GetAllPendingLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
