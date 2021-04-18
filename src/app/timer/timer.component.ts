import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { Observable } from 'rxjs';
import { Timer } from '../other/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor(
    public timer: Timer,
    public timerService: TimerService
  ) {
    this.timerService = new TimerService();
    this.timer = new Timer();
  }

  ngOnInit(): void {
    this
      .timerService
      .timer
      .subscribe(
      (timer) => {
        this.timer = timer;
      });
  }
}
