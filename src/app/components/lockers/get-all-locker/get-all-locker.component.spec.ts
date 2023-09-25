import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLockerComponent } from './get-all-locker.component';

describe('GetAllLockerComponent', () => {
  let component: GetAllLockerComponent;
  let fixture: ComponentFixture<GetAllLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllLockerComponent]
    });
    fixture = TestBed.createComponent(GetAllLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
