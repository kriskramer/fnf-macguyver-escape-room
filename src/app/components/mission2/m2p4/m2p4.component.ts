import { Component, OnInit } from '@angular/core';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-m2p4',
  templateUrl: './m2p4.component.html',
  styleUrls: ['./m2p4.component.css']
})
export class M2p4Component implements OnInit {

  puzzleStep = 0;

  constructor(private mctrl: MissionControlService) { }

  ngOnInit() {
  }

  submitAnswer(value: string) {
    this.puzzleStep = 1;

    // replace this code with actual validation code
    const success = true;
    if (success) {
    this.mctrl.missionStep = 5; }
  }
}
