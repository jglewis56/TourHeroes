import { AccordionComponent } from './accordion/accordion.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GeneralAndBudgetInformationComponent } from './general-and-budget-information/general-and-budget-information.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  {path: 'accordion', component: AccordionComponent},
  {path: 'general', component: GeneralAndBudgetInformationComponent},
  {path: 'autocomplete', component: AutocompleteComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
