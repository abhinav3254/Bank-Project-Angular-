import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardStoreComponent } from './gift-card-store.component';

describe('GiftCardStoreComponent', () => {
  let component: GiftCardStoreComponent;
  let fixture: ComponentFixture<GiftCardStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftCardStoreComponent]
    });
    fixture = TestBed.createComponent(GiftCardStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
