import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TimerObservable } from 'rxjs/observable/TimerObservable';


@Injectable()
export class MissionControlService {

  public mission: number;
  public missionStep: number;
  public missionDifficulty: number;

  public mission1complete = false;
  public mission2complete = false;
  public mission3complete = false;
  public mission4complete = false;
  public mission5complete = false;

  public tick = 0;
  public timer;
  public subscription: Subscription;

  constructor() {
    this.timer = TimerObservable.create(0, 1000);
  }

  getDifficultyText() {
    if (this.missionDifficulty === 1) {
      return 'Easy'; }
    if (this.missionDifficulty === 2) {
      return 'Medium'; }
    if (this.missionDifficulty === 3) {
      return 'Hard'; }

      return '';
  }

  startTimer(maxSeconds) {
    this.subscription = this.timer.subscribe(t => {
      this.tickFunction(t, maxSeconds);
    });
  }

  tickFunction(t, seconds) {
    this.tick = seconds - t;
    if (this.tick === 0) {
      this.stopTimer();
    }
  }

  stopTimer() {
    this.subscription.unsubscribe();
    this.tick = 0;
  }

  setMission(mission: number) {
    this.mission = mission;
    localStorage.setItem('current-mission-number', mission + '');
  }

  setMissionDifficulty(difficulty: number) {
    this.missionDifficulty = difficulty;
    localStorage.setItem('current-mission-difficulty', difficulty + '');
  }

  setMissionStep(step: number) {
    this.missionStep = step;
    localStorage.setItem('current-mission-step', step + '');
  }

  startOver() {
    this.mission = 0;
    this.missionDifficulty = 0;
    this.missionStep = 0;
  }
}
