import { TypeCodeService } from './../type-code.service';
import { WorkOrderProposal } from './../WorkOrderProposals';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  @Input() _proposal: WorkOrderProposal;
  constructor(private typeCodeServe: TypeCodeService) { }

  ngOnInit() {
    this.typeCodeServe.updateView(this._proposal);
  }

  updateView(): void {
    this.typeCodeServe.updateView(this._proposal);
  }

}
