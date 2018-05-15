import { Component, OnInit } from '@angular/core';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-m1p2',
  templateUrl: './m1p2.component.html',
  styleUrls: ['./m1p2.component.css']
})
export class M1p2Component implements OnInit {

  puzzleStep = 0;
  selections = [];

  isBtn1Clicked = false;
  isBtn2Clicked = false;
  isBtn3Clicked = false;
  isBtn4Clicked = false;
  isBtn5Clicked = false;
  isBtn6Clicked = false;
  isBtn7Clicked = false;
  isBtn8Clicked = false;
  isBtn9Clicked = false;

  constructor(private mctrl: MissionControlService) { }

  ngOnInit() {
  }

  submitAnswer() {
    this.puzzleStep = 1;

    // replace this code with actual validation code
    // On submit, cycle through the btn clicked flags to see what numbers were selected. No need for the array...


    const success = true;
    if (success) {
      this.mctrl.setMissionStep(3);
    }
  }

  addSelection(value: number) {
    if (value === 1) {
      this.isBtn1Clicked = !this.isBtn1Clicked;
    }
    if (value === 2) {
      this.isBtn2Clicked = !this.isBtn2Clicked;
    }
    if (value === 3) {
      this.isBtn3Clicked = !this.isBtn3Clicked;
    }
    if (value === 4) {
      this.isBtn4Clicked = !this.isBtn4Clicked;
    }
    if (value === 5) {
      this.isBtn5Clicked = !this.isBtn5Clicked;
    }
    if (value === 6) {
      this.isBtn6Clicked = !this.isBtn6Clicked;
    }
    if (value === 7) {
      this.isBtn7Clicked = !this.isBtn7Clicked;
    }
    if (value === 8) {
      this.isBtn8Clicked = !this.isBtn8Clicked;
    }
    if (value === 9) {
      this.isBtn9Clicked = !this.isBtn9Clicked;
    }
  }

  clearSelections() {
    this.selections = [];
  }
}
