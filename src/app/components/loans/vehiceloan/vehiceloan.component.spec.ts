import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiceloanComponent } from './vehiceloan.component';

describe('VehiceloanComponent', () => {
  let component: VehiceloanComponent;
  let fixture: ComponentFixture<VehiceloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiceloanComponent]
    });
    fixture = TestBed.createComponent(VehiceloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
