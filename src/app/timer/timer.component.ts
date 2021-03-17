import { Component, OnInit } from '@angular/core';
import { TimerTime } from './TimerTime';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public time: TimerTime;

  constructor() {
    this.time = new TimerTime();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time.updateTime();
    }, 1000);
  }

}
