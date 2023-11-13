import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxBootcampExperienceComponent } from './ui-ux-bootcamp-experience.component';

describe('UiUxBootcampExperienceComponent', () => {
  let component: UiUxBootcampExperienceComponent;
  let fixture: ComponentFixture<UiUxBootcampExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxBootcampExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxBootcampExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
