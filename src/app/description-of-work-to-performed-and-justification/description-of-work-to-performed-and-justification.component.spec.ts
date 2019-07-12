import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOfWorkToPerformedAndJustificationComponent } from './description-of-work-to-performed-and-justification.component';

describe('DescriptionOfWorkToPerformedAndJustificationComponent', () => {
  let component: DescriptionOfWorkToPerformedAndJustificationComponent;
  let fixture: ComponentFixture<DescriptionOfWorkToPerformedAndJustificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionOfWorkToPerformedAndJustificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionOfWorkToPerformedAndJustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
