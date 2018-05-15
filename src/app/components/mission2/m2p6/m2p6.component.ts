import { Component, OnInit } from '@angular/core';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-m2p6',
  templateUrl: './m2p6.component.html',
  styleUrls: ['./m2p6.component.css']
})
export class M2p6Component implements OnInit {

  puzzleStep = 0;

  constructor(private mctrl: MissionControlService) { }

  ngOnInit() {
  }

  submitAnswer(value: string) {
    this.puzzleStep = 1;

    // replace this code with actual validation code
    const success = true;
    if (success) {
      this.mctrl.missionStep = 99;
      this.mctrl.mission2complete = true;
    }
  }
}
