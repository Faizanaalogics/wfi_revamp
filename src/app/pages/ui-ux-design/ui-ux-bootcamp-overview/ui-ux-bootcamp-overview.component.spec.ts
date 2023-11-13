import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxBootcampOverviewComponent } from './ui-ux-bootcamp-overview.component';

describe('UiUxBootcampOverviewComponent', () => {
  let component: UiUxBootcampOverviewComponent;
  let fixture: ComponentFixture<UiUxBootcampOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxBootcampOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxBootcampOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
