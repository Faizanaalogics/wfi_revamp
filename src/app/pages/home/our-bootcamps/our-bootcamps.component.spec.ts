import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBootcampsComponent } from './our-bootcamps.component';

describe('OurBootcampsComponent', () => {
  let component: OurBootcampsComponent;
  let fixture: ComponentFixture<OurBootcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBootcampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBootcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
