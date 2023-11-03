import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGraduatesSayingComponent } from './our-graduates-saying.component';

describe('OurGraduatesSayingComponent', () => {
  let component: OurGraduatesSayingComponent;
  let fixture: ComponentFixture<OurGraduatesSayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGraduatesSayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurGraduatesSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
