import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLogInComponent } from './manager-log-in.component';

describe('ManagerLogInComponent', () => {
  let component: ManagerLogInComponent;
  let fixture: ComponentFixture<ManagerLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerLogInComponent]
    });
    fixture = TestBed.createComponent(ManagerLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
