import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLockerComponent } from './apply-locker.component';

describe('ApplyLockerComponent', () => {
  let component: ApplyLockerComponent;
  let fixture: ComponentFixture<ApplyLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyLockerComponent]
    });
    fixture = TestBed.createComponent(ApplyLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
