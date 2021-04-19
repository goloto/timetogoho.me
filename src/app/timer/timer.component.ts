import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { Timer } from '../other/timer';
import { TimerSettings } from '../other/timer-settings';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor(
    public timerService: TimerService,
    public timer: Timer,
    public settings: TimerSettings
  ) {
    this.timerService = new TimerService();
  }

  ngOnInit(): void {
    this
      .timerService
      .observedData
      .subscribe(
      (data) => {
        this.timer = data.timer;
        this.settings = data.settings;
      });
  }
}
