import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccountRequestComponent } from './saving-account-request.component';

describe('SavingAccountRequestComponent', () => {
  let component: SavingAccountRequestComponent;
  let fixture: ComponentFixture<SavingAccountRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingAccountRequestComponent]
    });
    fixture = TestBed.createComponent(SavingAccountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
