import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/general/main/main.component';

import { M1StartComponent } from './components/mission1/m1start/m1start.component';
import { M1p1Component } from './components/mission1/m1p1/m1p1.component';
import { M1p2Component } from './components/mission1/m1p2/m1p2.component';
import { M1p3Component } from './components/mission1/m1p3/m1p3.component';
import { M1p4Component } from './components/mission1/m1p4/m1p4.component';
import { M1p5Component } from './components/mission1/m1p5/m1p5.component';
import { M1p6Component } from './components/mission1/m1p6/m1p6.component';
import { M1finishComponent } from './components/mission1/m1finish/m1finish.component';

import { M2startComponent } from './components/mission2/m2start/m2start.component';
import { M2p1Component } from './components/mission2/m2p1/m2p1.component';
import { M2p2Component } from './components/mission2/m2p2/m2p2.component';
import { M2p3Component } from './components/mission2/m2p3/m2p3.component';
import { M2p4Component } from './components/mission2/m2p4/m2p4.component';
import { M2p5Component } from './components/mission2/m2p5/m2p5.component';
import { M2p6Component } from './components/mission2/m2p6/m2p6.component';
import { M2finishComponent } from './components/mission2/m2finish/m2finish.component';


const routes: Routes = [
  { path: 'start', component: MainComponent },
  { path: 'm1start', component: M1StartComponent },
  { path: 'm1finish', component: M1finishComponent },
  { path: 'm1p1', component: M1p1Component },
  { path: 'm1p2', component: M1p2Component },
  { path: 'm1p3', component: M1p3Component },
  { path: 'm1p4', component: M1p4Component },
  { path: 'm1p5', component: M1p5Component },
  { path: 'm1p6', component: M1p6Component },
  { path: 'm2start', component: M2startComponent },
  { path: 'm2finish', component: M2finishComponent },
  { path: 'm2p1', component: M2p1Component },
  { path: 'm2p2', component: M2p2Component },
  { path: 'm2p3', component: M2p3Component },
  { path: 'm2p4', component: M2p4Component },
  { path: 'm2p5', component: M2p5Component },
  { path: 'm2p6', component: M2p6Component },
  { path: '**', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
