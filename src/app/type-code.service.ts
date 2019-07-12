import { WorkOrderProposal } from './WorkOrderProposals';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeCodeService {

  constructor() { }

  updateTabs(_proposal: WorkOrderProposal): void {
    _proposal.resetTabs();

    switch(_proposal.TypeCode)
    {
      case '1':
        {
          _proposal.isClearing = false;
          break;
        }
      case '2':
        {
          _proposal.isInvestment = false;
          _proposal.isExpenditures = false;
          _proposal.isClearing = false;
          break;
        }
      case '3':
        {
          _proposal.isInvestment = false;
          _proposal.isExpenditures = false;
          _proposal.isClearing = false;
          _proposal.isRetirement = false;
          break;
        }
      case '4':
        {
          _proposal.isInvestment = false;
          _proposal.isExpenditures = false;
          _proposal.isClearing = false;
          _proposal.isRetirement = false;
        }
    }

  }

  updateView(_proposal: WorkOrderProposal): void {
    console.log(_proposal.TypeCode);
    this.updateTabs(_proposal);
  }
}
