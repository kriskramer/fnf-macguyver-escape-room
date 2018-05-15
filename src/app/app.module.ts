import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/general/timer/timer.component';
import { MainComponent } from './components/general/main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatusBarComponent } from './components/general/status-bar/status-bar.component';

import { M1p1Component } from './components/mission1/m1p1/m1p1.component';
import { M1p2Component } from './components/mission1/m1p2/m1p2.component';
import { M1p3Component } from './components/mission1/m1p3/m1p3.component';
import { M1p4Component } from './components/mission1/m1p4/m1p4.component';
import { M1p5Component } from './components/mission1/m1p5/m1p5.component';
import { M1p6Component } from './components/mission1/m1p6/m1p6.component';
import { M1StartComponent } from './components/mission1/m1start/m1start.component';
import { M1finishComponent } from './components/mission1/m1finish/m1finish.component';

import { M2startComponent } from './components/mission2/m2start/m2start.component';
import { M2finishComponent } from './components/mission2/m2finish/m2finish.component';
import { M2p1Component } from './components/mission2/m2p1/m2p1.component';
import { M2p2Component } from './components/mission2/m2p2/m2p2.component';
import { M2p3Component } from './components/mission2/m2p3/m2p3.component';
import { M2p4Component } from './components/mission2/m2p4/m2p4.component';
import { M2p5Component } from './components/mission2/m2p5/m2p5.component';
import { M2p6Component } from './components/mission2/m2p6/m2p6.component';

import { MissionControlService } from './services/mission-control.service';
import { CountdownPipe } from './countdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MainComponent,
    M1p1Component,
    M1p2Component,
    M1p3Component,
    M1p4Component,
    M1p5Component,
    M1p6Component,
    StatusBarComponent,
    M1StartComponent,
    M1finishComponent,
    M2startComponent,
    M2finishComponent,
    M2p1Component,
    M2p2Component,
    M2p3Component,
    M2p4Component,
    M2p5Component,
    M2p6Component,
    CountdownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MissionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
