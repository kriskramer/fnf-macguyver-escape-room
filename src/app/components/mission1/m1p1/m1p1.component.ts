import { Component, OnInit } from '@angular/core';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-m1p1',
  templateUrl: './m1p1.component.html',
  styleUrls: ['./m1p1.component.css']
})
export class M1p1Component implements OnInit {

  puzzleStep = 0;
  FailureText: String;
  inputAnswer: String;

  constructor(private mctrl: MissionControlService) { }

  ngOnInit() {
  }

  submitAnswer(value: string) {
    // replace this code with actual validation code
    if (this.inputAnswer === 'laser') {
      this.puzzleStep = 1;
      this.mctrl.setMissionStep(2);
    } else {
      this.FailureText = 'That is not the correct answer. Try again.';
    }
  }
}
