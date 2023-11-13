import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxWellpaidCareerComponent } from './ui-ux-wellpaid-career.component';

describe('UiUxWellpaidCareerComponent', () => {
  let component: UiUxWellpaidCareerComponent;
  let fixture: ComponentFixture<UiUxWellpaidCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxWellpaidCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxWellpaidCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
