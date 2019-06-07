import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.css']
})
export class AccordionElementComponent implements OnInit {
  open:boolean = false;
  @Output() opened = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  _openCloseClicked() {
    console.log("hello World");
    this.open = !this.open;
    if (this.open) {
      this.opened.emit();
    }
  }

  public close() {
    this.open = false;
  }
}
