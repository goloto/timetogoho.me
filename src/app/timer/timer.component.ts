import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { TimerSettings } from '../other/timer-settings';
import { Time } from '../other/time';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public time: Time;
  public settings: TimerSettings;

  constructor(public timerService: TimerService) {
    this.time = new Time(0, 0, 0);
    this.settings = new TimerSettings();
  }

  ngOnInit(): void {
    this
      .timerService
      .observedData
      .subscribe(
      (data) => {
        this.time = data.time;
        this.settings = data.settings;
      });
  }
}
