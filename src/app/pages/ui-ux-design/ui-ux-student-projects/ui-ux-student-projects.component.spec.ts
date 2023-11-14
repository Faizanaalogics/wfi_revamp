import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxStudentProjectsComponent } from './ui-ux-student-projects.component';

describe('UiUxStudentProjectsComponent', () => {
  let component: UiUxStudentProjectsComponent;
  let fixture: ComponentFixture<UiUxStudentProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUxStudentProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxStudentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
