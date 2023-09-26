import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLockersComponent } from './your-lockers.component';

describe('YourLockersComponent', () => {
  let component: YourLockersComponent;
  let fixture: ComponentFixture<YourLockersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourLockersComponent]
    });
    fixture = TestBed.createComponent(YourLockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
