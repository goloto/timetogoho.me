import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public time!: {
    minutes: number,
    hours: number,
    seconds: number
  };

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      const currentTime = new Date();
      const isCurrentDay = currentTime.getHours() < 18;
      const hourWhenWorkdayEnd = 18;
      const hoursInDay = 24;
      const secondsInMinute = 60;
      const minutesInHour = 60;

      this.time.minutes = minutesInHour - currentTime.getMinutes();
      this.time.seconds = secondsInMinute - currentTime.getSeconds();

      if (this.time.seconds > 0) {
        this.time.minutes -= 1;
      }

      if (isCurrentDay) {
        this.time.hours = 18 - currentTime.getHours();
      } else {
        this.time.hours = hoursInDay - currentTime.getHours() + hourWhenWorkdayEnd;
      }
    }, 1000);
  }

}
