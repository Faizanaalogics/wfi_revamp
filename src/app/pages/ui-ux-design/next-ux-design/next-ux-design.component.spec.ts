import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextUxDesignComponent } from './next-ux-design.component';

describe('NextUxDesignComponent', () => {
  let component: NextUxDesignComponent;
  let fixture: ComponentFixture<NextUxDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextUxDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextUxDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
