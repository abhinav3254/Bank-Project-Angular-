import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGiftCardComponent } from './add-gift-card.component';

describe('AddGiftCardComponent', () => {
  let component: AddGiftCardComponent;
  let fixture: ComponentFixture<AddGiftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGiftCardComponent]
    });
    fixture = TestBed.createComponent(AddGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
