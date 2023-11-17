import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingBannerComponent } from './digital-marketing-banner.component';

describe('DigitalMarketingBannerComponent', () => {
  let component: DigitalMarketingBannerComponent;
  let fixture: ComponentFixture<DigitalMarketingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarketingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
