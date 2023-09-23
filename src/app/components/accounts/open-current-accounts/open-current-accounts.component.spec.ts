import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCurrentAccountsComponent } from './open-current-accounts.component';

describe('OpenCurrentAccountsComponent', () => {
  let component: OpenCurrentAccountsComponent;
  let fixture: ComponentFixture<OpenCurrentAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCurrentAccountsComponent]
    });
    fixture = TestBed.createComponent(OpenCurrentAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
