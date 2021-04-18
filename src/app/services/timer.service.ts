import { Injectable } from '@angular/core';
import { TimeFunctions } from '../other/time-functions';
import { Observable, of } from 'rxjs';
import { Timer } from '../other/timer';
import { TimerSettings } from '../other/timer-settings';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private _timer: Timer;
  private _settings: TimerSettings;

  constructor() {
    this._timer = new Timer();
    this._settings = new TimerSettings();

    this.updateTime();
  }

  private isWorkingHour(hour: number): boolean {
    const hoursUntilEnd = TimeFunctions.calcHoursDifferent(hour, this._settings.dayEndHours);
    const workingDayLength = TimeFunctions.calcHoursDifferent(this._settings.dayStartHours, this._settings.dayEndHours);

    return (hoursUntilEnd <= workingDayLength);
  }

  private updateTime(): void {
    const secondsInMinute = 60;
    const incompletePiece = 1;
    const currentTime = new Date();
    this._settings.isWorkingDay = this.isWorkingHour(currentTime.getHours());

    if (this.isWorkingHour(currentTime.getHours())) {
      this._timer.hours = TimeFunctions.calcHoursDifferent(currentTime.getHours(), this._settings.dayEndHours) - incompletePiece;
      this._timer.minutes = TimeFunctions.calcMinutesDifferent(currentTime.getMinutes(), this._settings.dayEndMinutes) - incompletePiece;
    } else {
      this._timer.hours = TimeFunctions.calcHoursDifferent(currentTime.getHours(), this._settings.dayStartHours) - incompletePiece;
      this._timer.minutes = TimeFunctions.calcMinutesDifferent(currentTime.getMinutes(), this._settings.dayStartMinutes) - incompletePiece;
    }

    this._timer.seconds = (secondsInMinute - incompletePiece) - currentTime.getSeconds();
  }

  get timer(): Observable<Timer> {
    return new Observable<Timer>((subscription => {
      subscription.next(this._timer);
      setInterval(() => {
        this.updateTime();
        subscription.next(this._timer);
      }, 1000);
    }));
  }

  get settings(): Observable<TimerSettings> {
    return new Observable<TimerSettings>((subscription => {
      subscription.next(this._settings);
      setInterval(() => {
        this.updateTime();
        subscription.next(this._settings);
      }, 1000);
    }));
  }
}
