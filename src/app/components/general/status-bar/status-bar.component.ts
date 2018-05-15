import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor(private mctrl: MissionControlService,  private router: Router) { }

  ngOnInit() {
  }

  startOver() {
    this.mctrl.stopTimer();
    this.mctrl.startOver();
    this.router.navigate(['/']);
  }
}
