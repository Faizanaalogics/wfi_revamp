import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingWhatWillLearnComponent } from './marketing-what-will-learn.component';

describe('MarketingWhatWillLearnComponent', () => {
  let component: MarketingWhatWillLearnComponent;
  let fixture: ComponentFixture<MarketingWhatWillLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingWhatWillLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingWhatWillLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
