import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingWellpaidCareerComponent } from './marketing-wellpaid-career.component';

describe('MarketingWellpaidCareerComponent', () => {
  let component: MarketingWellpaidCareerComponent;
  let fixture: ComponentFixture<MarketingWellpaidCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingWellpaidCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingWellpaidCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
