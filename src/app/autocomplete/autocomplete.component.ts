import { Component, Input,Output,ViewChild,OnInit, OnChanges, AfterViewInit, HostListener, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit, OnChanges,AfterViewInit {
  valueArray: Array<string> = new Array<string>();
  textboxValue: string;
  optionsOpen: boolean;
  optionsXPos: number;
  optionsYPos: number;
  optionsWidth: number;
  optionsHeight: number;
  filteredOptions: Array<Option>;
  @Input() options: Array<Option>
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  @Output() optionSelected = new EventEmitter<Option>();
  @ViewChild('textbox') textbox: ElementRef;
  constructor() { }

  ngOnInit() {
  }
    countries: Array<string> = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
                    "Antigua &amp; Barbuda","Argentina",'Armenia',"Aruba","Australia",
                    "Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
                    "Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
                    "Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
                    "Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada",
                    "Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China"
                    ,"Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba",
                    "Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
                    "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
                    "Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia",
                    "French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar",
                    "Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau",
                    "Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran",
                    "Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan",
                    "Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan",]
    ngOnChanges() {
    }

    ngAfterViewInit() {
      this.calculateOptionLocation();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.calculateOptionLocation();
    }

    textboxBlur() {
      this.optionsOpen = false;
    }

    textboxFocus() {
      this.optionsOpen = true;
      this.textbox.nativeElement.select();
    }

    private calculateOptionLocation() {
      const textboxPos = this.textbox.nativeElement.getBoundingClientRect();
      console.log(textboxPos);
      this.optionsWidth = textboxPos.width;
      this.optionsHeight = 200;
      this.optionsXPos = 0;
      this.optionsYPos = textboxPos.height;
      console.log(this.optionsWidth);
      console.log(this.optionsHeight);
      console.log(this.optionsXPos);
      console.log(this.optionsYPos);
    }

}
export interface Option {
  Value: string;
  DisplayName: string;
}
