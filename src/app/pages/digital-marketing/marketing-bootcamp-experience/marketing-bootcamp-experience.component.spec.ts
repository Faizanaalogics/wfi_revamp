import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingBootcampExperienceComponent } from './marketing-bootcamp-experience.component';

describe('MarketingBootcampExperienceComponent', () => {
  let component: MarketingBootcampExperienceComponent;
  let fixture: ComponentFixture<MarketingBootcampExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingBootcampExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingBootcampExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
