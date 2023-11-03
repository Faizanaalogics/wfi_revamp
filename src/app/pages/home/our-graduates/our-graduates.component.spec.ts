import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGraduatesComponent } from './our-graduates.component';

describe('OurGraduatesComponent', () => {
  let component: OurGraduatesComponent;
  let fixture: ComponentFixture<OurGraduatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGraduatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
