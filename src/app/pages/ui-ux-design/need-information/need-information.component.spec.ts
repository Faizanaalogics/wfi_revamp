import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedInformationComponent } from './need-information.component';

describe('NeedInformationComponent', () => {
  let component: NeedInformationComponent;
  let fixture: ComponentFixture<NeedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
