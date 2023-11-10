import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomValuesComponent } from './classroom-values.component';

describe('ClassroomValuesComponent', () => {
  let component: ClassroomValuesComponent;
  let fixture: ComponentFixture<ClassroomValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
