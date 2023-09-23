import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAccountRequestComponent } from './current-account-request.component';

describe('CurrentAccountRequestComponent', () => {
  let component: CurrentAccountRequestComponent;
  let fixture: ComponentFixture<CurrentAccountRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentAccountRequestComponent]
    });
    fixture = TestBed.createComponent(CurrentAccountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
