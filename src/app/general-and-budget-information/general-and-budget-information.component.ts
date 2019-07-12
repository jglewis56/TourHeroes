import { department, schedule, scheduleType, item, Organization, Location, County,
         PropertyTax, EmployeeProjectManager, GLAccount  } from './../../dataHolder';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-general-and-budget-information',
  templateUrl: './general-and-budget-information.component.html',
  styleUrls: ['./general-and-budget-information.component.css']
})
export class GeneralAndBudgetInformationComponent implements OnInit {

  dept = department;
  _schedule = schedule;
  _scheduleType = scheduleType;
  _item = item;
  _org  = Organization;
  _location = Location;
  _county = County;
  _propertyTax = PropertyTax;
  _employeeProjectManager = EmployeeProjectManager;
  _GLAccount = GLAccount;
  constructor() { }

  ngOnInit() {
  }

}
