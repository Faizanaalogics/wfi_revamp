import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingBootcampOverviewComponent } from './marketing-bootcamp-overview.component';

describe('MarketingBootcampOverviewComponent', () => {
  let component: MarketingBootcampOverviewComponent;
  let fixture: ComponentFixture<MarketingBootcampOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingBootcampOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingBootcampOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
