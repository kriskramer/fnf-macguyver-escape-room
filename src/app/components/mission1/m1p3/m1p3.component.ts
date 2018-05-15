import { Component, OnInit } from '@angular/core';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-m1p3',
  templateUrl: './m1p3.component.html',
  styleUrls: ['./m1p3.component.css']
})
export class M1p3Component implements OnInit {

  puzzleStep = 0;

  constructor(private mctrl: MissionControlService) { }

  ngOnInit() {
  }

  submitAnswer(value: string) {
    this.puzzleStep = 1;

    // replace this code with actual validation code
    const success = true;
    if (success) {
      this.mctrl.setMissionStep(4); }
  }
}
