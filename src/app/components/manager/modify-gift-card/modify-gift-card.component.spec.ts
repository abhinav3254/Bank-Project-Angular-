import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGiftCardComponent } from './modify-gift-card.component';

describe('ModifyGiftCardComponent', () => {
  let component: ModifyGiftCardComponent;
  let fixture: ComponentFixture<ModifyGiftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyGiftCardComponent]
    });
    fixture = TestBed.createComponent(ModifyGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
