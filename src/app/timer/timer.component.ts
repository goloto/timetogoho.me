import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public time: TimerService;

  constructor() {
    this.time = new TimerService();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time.updateTime();
    }, 1000);
  }

}
