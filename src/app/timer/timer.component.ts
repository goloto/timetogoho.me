import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { Observable } from 'rxjs';
import { Timer } from '../other/timer';
import {TimerSettings} from "../other/timer-settings";
import set = Reflect.set;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor(
    public timer: Timer,
    public timerService: TimerService,
    public settings: TimerSettings
  ) {
    this.timerService = new TimerService();
    this.timer = new Timer();
    this.settings = new TimerSettings();
  }

  ngOnInit(): void {
    this
      .timerService
      .timer
      .subscribe(
      (timer) => {
        this.timer = timer;
      });

    this
      .timerService
      .settings
      .subscribe(
        (settings) => {
        this.settings = settings;
      });
  }
}
