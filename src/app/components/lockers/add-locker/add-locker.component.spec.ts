import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLockerComponent } from './add-locker.component';

describe('AddLockerComponent', () => {
  let component: AddLockerComponent;
  let fixture: ComponentFixture<AddLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLockerComponent]
    });
    fixture = TestBed.createComponent(AddLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
