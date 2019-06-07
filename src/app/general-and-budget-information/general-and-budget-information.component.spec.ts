import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAndBudgetInformationComponent } from './general-and-budget-information.component';

describe('GeneralAndBudgetInformationComponent', () => {
  let component: GeneralAndBudgetInformationComponent;
  let fixture: ComponentFixture<GeneralAndBudgetInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAndBudgetInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAndBudgetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
