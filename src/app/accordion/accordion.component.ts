import { WorkOrderProposal } from './../WorkOrderProposals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  _proposal: WorkOrderProposal;
  constructor() {
    this._proposal = new WorkOrderProposal();
    this._proposal.TypeCode = '1';
   }

  ngOnInit() {
  }
  opened() {
    console.log('Opened');
  }

}
