import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccordionElementComponent } from './accordion-element/accordion-element.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TypeComponent } from './type/type.component';
import { GeneralAndBudgetInformationComponent } from './general-and-budget-information/general-and-budget-information.component';
import { DescriptionOfWorkToPerformedAndJustificationComponent } from './description-of-work-to-performed-and-justification/description-of-work-to-performed-and-justification.component';
import { TempComponent } from './temp/temp.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MyhighlighterDirective } from './myhighlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,

    AccordionElementComponent,
    AccordionComponent,
    TypeComponent,
    GeneralAndBudgetInformationComponent,
    DescriptionOfWorkToPerformedAndJustificationComponent,
    TempComponent,
    AutocompleteComponent,
    MyhighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
