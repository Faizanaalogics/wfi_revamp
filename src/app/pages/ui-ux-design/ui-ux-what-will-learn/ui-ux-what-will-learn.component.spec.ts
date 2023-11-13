import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxWhatWillLearnComponent } from './ui-ux-what-will-learn.component';

describe('UiUxWhatWillLearnComponent', () => {
  let component: UiUxWhatWillLearnComponent;
  let fixture: ComponentFixture<UiUxWhatWillLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxWhatWillLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxWhatWillLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
