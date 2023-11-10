import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxBannerComponent } from './ui-ux-banner.component';

describe('UiUxBannerComponent', () => {
  let component: UiUxBannerComponent;
  let fixture: ComponentFixture<UiUxBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
