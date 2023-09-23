import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApproveComponent } from './home-approve.component';

describe('HomeApproveComponent', () => {
  let component: HomeApproveComponent;
  let fixture: ComponentFixture<HomeApproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeApproveComponent]
    });
    fixture = TestBed.createComponent(HomeApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
