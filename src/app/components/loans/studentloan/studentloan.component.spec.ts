import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentloanComponent } from './studentloan.component';

describe('StudentloanComponent', () => {
  let component: StudentloanComponent;
  let fixture: ComponentFixture<StudentloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentloanComponent]
    });
    fixture = TestBed.createComponent(StudentloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
