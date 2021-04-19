import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { TimerServiceData } from '../other/timer-service-data';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor(
    public timerService: TimerService,
    public timerServiceData: TimerServiceData,
  ) {
    this.timerService = new TimerService();
  }

  ngOnInit(): void {
    this
      .timerService
      .data
      .subscribe(
      (data) => {
        this.timerServiceData = data;
      });
  }
}
