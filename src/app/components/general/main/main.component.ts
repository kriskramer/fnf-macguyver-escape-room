import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MissionControlService } from '../../../services/mission-control.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public step = 0;
  public mission = 0;
  public difficulty = 0;
  public difficultyText = '';

  constructor(private mctrl: MissionControlService, private router: Router) { }

  ngOnInit() {
  }

  selectMission(value: number) {
    this.mission = value;
    this.step = 1;
    this.mctrl.setMission(value);
  }

  selectDifficulty(value: number) {
    this.difficulty = value;
    this.difficultyText = this.mctrl.getDifficultyText();
    this.step = 2;
    this.mctrl.setMissionDifficulty(value);
  }

  goBack() {
    this.step -= 1;
  }

  startMission() {
    if (this.mctrl.missionDifficulty === 3) {
      this.mctrl.startTimer(7200);
    }
    if (this.mctrl.missionDifficulty === 2) {
      this.mctrl.startTimer(3600);
    }

    if (this.mission === 1) {
      this.router.navigate(['/m1start']);
    }
    if (this.mission === 2) {
      this.router.navigate(['/m2start']);
    }
    if (this.mission === 3) {
      this.router.navigate(['/m3start']);
    }
    if (this.mission === 4) {
      this.router.navigate(['/m4start']);
    }
    if (this.mission === 5) {
      this.router.navigate(['/m5start']);
    }
  }
}
