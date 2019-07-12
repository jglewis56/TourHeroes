import { BaseObj } from './BaseObj';
import { Item } from './Item';

export const department: BaseObj[] = [
  {id: 100,  name: 'Presidents Office'},
  {id: 120,  name: 'Economic Development'},
  {id: 150,  name: 'Board of Directors'},
  {id: 200,  name: 'VP Finance & Admin'},
  {id: 210 , name: 'Accounting & Mkt Settlements'},
  {id: 211 , name: 'Finance'},
  {id: 212 , name: 'Treasury Services'},
  {id: 214 , name: 'Tax & Insurance'},
  {id: 240 , name: 'Buildings and Grounds'},
  {id: 300 , name: ' Power Production & Delivery'},
  {id: 310 , name: ' Power Delivery'},
  {id: 312 , name: ' PD NERC, Metering & TO'},
  {id: 313 , name: ' PD Reliability, Maintenance & Testing'},
  {id: 314 , name: ' Northwest District'},
  {id: 315 , name: ' Northeast District'},
  {id: 316 , name: ' Central District'},
  {id: 317 , name: ' Transmission Construction'},
  {id: 330 , name: ' Power Production'},
  {id: 331 , name: ' Fitzhugh'},
  {id: 332 , name: ' Bailey'},
  {id: 333 , name: ' McClellan'},
  {id: 334 , name: ' Fulton'},
  {id: 335 , name: ' Oswald'},
  {id: 336 , name: ' Magnet Cove'},
  {id: 337 , name: ' Elkins'},
  {id: 338 , name: ' Ellis'},
  {id: 339 , name: ' Whillock'},
  {id: 340 , name: ' HS2'},
  {id: 350 , name: ' Engineering'},
  {id: 351 , name: ' Production Engineering'},
  {id: 352 , name: ' Transmission Engineering'},
  {id: 353 , name: ' Engineering Support'},
  {id: 360 , name: ' PP - Maintenance'},
  {id: 370 , name: ' Jointly Owned Plants'},
  {id: 371 , name: ' Flint Creek'},
  {id: 372 , name: ' White Bluff'},
  {id: 373 , name: ' ISES'},
  {id: 374 , name: ' Turk'},
  {id: 390 , name: ' Compliance and Support'},
  {id: 391 , name: ' Environment'},
  {id: 393 , name: ' Land & Development'},
  {id: 400 , name: ' VP Member & Public Rel and immediate staff'},
  {id: 410 , name: ' Energy Marketing'},
  {id: 500 , name: ' Human Resources'},
  {id: 600 , name: ' Legal'},
  {id: 610 , name: ' Regulatory'},
  {id: 631 , name: ' Audits'},
  {id: 634 , name: ' Compliance Services'},
  {id: 635 , name: ' Safety'},
  {id: 641 , name: 'Records Management'},
  {id: 710 , name: ' VP Planning Rates & Dispatch and immediate staff'},
  {id: 711 , name: ' Economic Studies'},
  {id: 712 , name: ' Dispatching and power transactions'},
  {id: 714 , name: ' Transmission Planning'},
  {id: 715 , name: ' Rates and Regulation'},
  {id: 720 , name: ' Fuels'},
  {id: 722 , name: ' Market Operations Support'},
  {id: 800 , name: ' VP Information Technology'},
  {id: 801 , name: ' IT Security'},
  {id: 810 , name: ' Energy Management Systems'},
  {id: 820 , name: ' Business & Financial Systems'},
  {id: 822 , name: ' Workstation Support'},
  {id: 830 , name: ' IT Infrastructure'},
  {id: 840 , name: ' Fiber Operations'},
  {id: 999 , name: ' Nonallocated Expenses'}

];
export const scheduleType: BaseObj[] = [
  {id: 2, name: 'Production'},
  {id: 4, name: 'Transmission'},
  {id: 6, name: 'General'}
];

export const schedule: BaseObj[] = [
  {id: 1 , name: ' MISC. POWER PLANT CHANGES'},
  {id: 2 , name: ' CO-OWNED POWER PLANT ITEMS'},
  {id: 10 , name: ' TRANSMISSION IMPROVEMENTS'},
  {id: 12 , name: ' METERING POINT ADDITIONS'},
  {id: 30 , name: ' BUILDINGS & OTHER IMPROVEMENTS'},
  {id: 31 , name: ' COMPUTER, OFFICE EQUIP & FURN'},
  {id: 32 , name: ' TRANSPORTATION EQUIPMENT'},
  {id: 33 , name: ' TOOLS, TEST & MISC EQUIPMENT'}
];
export const item: BaseObj[] = [
  {id: '1/1' , name: ' PProd Unforseen Capitalized Improvement'},
  {id: '1/2' , name: ' Fitzhugh Capitalized Improvements'},
  {id: '1/3' , name: ' Bailey Capitalized Improvements'},
  {id: '1/4' , name: ' McClellan Capitalized Improvements'},
  {id: '1/5' , name: ' Fulton Capitalized Improvements'},
  {id: '1/6' , name: ' Oswald Capitalized Improvements'},
  {id: '1/7' , name: ' Magnet Cove Capitalized Improvements'},
  {id: '1/8' , name: ' Elkins Capitalized Improvements'},
  {id: '1/9' , name: ' Ellis Capitalized Improvements'},
  {id: '1/10' , name: ' Whillock Capitalized Improvements'},
  {id: '1/11', name: ' HS2 Capitalized Improvements'},
  {id: '1/12' , name: ' PRODUCTION - IT INFRASTRUCTURE MODS'},
  {id: '1/13' , name: ' PRODUCTION - IT CIP PHYSICAL SECURITY'},
  {id: '1/14' , name: ' CEMS Server Upgrades'}
];
export const Organization: BaseObj[] = [
  {id: 34 , name: ' Arkansas Electric Cooperative Corp.'},
  {id: 40 , name: ' SFI'},
  {id: 90 , name: ' AP&L'},
  {id: 91 , name: ' SWEPCO'},
  {id: 92 , name: ' Missouri Joint Municipal Utility'},
  {id: 93 , name: ' SPA'},
  {id: 94 , name: ' City of Augusta'},
  {id: 95 , name: ' South Mississippi G&T'},
  {id: 96 , name: ' City of Ruston'},
  {id: 97 , name: ' Cajun G&T'},
  {id: 98 , name: ' Associated G&T'},
  {id: 99 , name: ' Western Farmers G&T'},
  {id: 23 , name: ' Mississippi County Electric Co'}

];

export const Location: BaseObj[] = [
  {id: 'A', name: 'NW Jonesboro to Jonesboro 69 kv'},
  {id: 'B' , name: 'Apt to NW Jonesboro 69kv'},
  {id: 'C' , name: 'Apt to McCormick 69kv'},
  {id: 'D' , name: 'McCormick to Marked Tree 69kv'},
  {id: 'E' , name: 'Marked Tree to Earle 69kv'},
  {id: 'F' , name: 'Earle to St Francis 69kv'},
  {id: 'G' , name: 'McCormick to Trumann 69kv'},
  {id: 'H' , name: 'Keevil to Moro 69kv'},
  {id: 'J' , name: 'Moro to Palestine 69kv'},
  {id: 'K' , name: 'Palestine to Coop Office 69kv'},
  {id: 'L' , name: 'Coop Office to Widener 69kv'},
  {id: 'M' , name: 'Keevil to Holly Grove 69kv'},
  {id: 'P' , name: 'Fitzhugh Generating Plant to SPA Line 161kv'},
  {id: 'R' , name: 'Centerton Emergency Tie (Benton County) 69kv'},
  {id: 'W' , name: 'Cotton Plant to Keevil 69kv'},
  {id: 'X' , name: 'Augusta to Cotton Plant 69kv'},
  {id: 'Y' , name: 'Wynne to St Francis 69kv'},
  {id: 'Z' , name: 'Augusta to Morton 69kv'},
];

export const County: BaseObj[] = [
  {id: 'Polk' , name: 'Ouachita River 57/1'},
  {id: 'Saline' , name: 'Alexander Training School 63/2'},
  {id: 'Crawford' , name: 'Alma 17/3'},
  {id: 'Boone' , name: 'Alpena 05/4'},
  {id: 'Jefferson' , name: 'Altheimer-Sherril 35/6'},
  {id: 'Franklin' , name: 'Altus-Denning 24/7'},
  {id: 'Clark' , name: 'Amity 10/8'},
  {id: 'Clark' , name: 'Arkadelphia 10/9'},
  {id: 'Desha' , name: 'Arkansas City 21/10'},
  {id: 'Pulaski' , name: 'Arkansas School for the Blind 60/11'},
  {id: 'Pulaski' , name: 'Arkansas School for the Deaf 60/12'},
  {id: 'Mississippi' , name: 'Armorel 47/13'},
  {id: 'Little River' , name: 'Ashdown 41/14'}
];

export const PropertyTax: string[] = [
  'Personal', 'Real', 'Both'

];
export const EmployeeProjectManager: string[] = [
  'Daron Frederick',
'Linda Simmons',
'Nathaniel Collier',
'Kyle M. Martin',
'Clint Brown',
'Robert Smith',
'Wade Althen',
'John Beasley',
'Charles Holzman',
'Heath Mote',
'Matt Fultz',
'Gary Borgeson',
'Thomas C. McGehee'
];
export const GLAccount: BaseObj[] = [
  {id: '106/1' , name : 'Comp constr not class steam prod'},
  {id: '106/3' , name : 'Comp constr not class Hydro'},
  {id: '106/5' , name : 'Comp constr not class transm'},
  {id: '106/7' , name : 'Comp constr not class gen plant'},
  {id: '107/CND' , name : 'Closed work orders - not distributd'},
  {id: '107/OW' , name : 'CIP work orders'},
  {id: '108/CND' , name : 'Ret work orders - closed not distri'},
  {id: '108/1' , name : 'Acc. prov. for depr. steam prod.'}
];
