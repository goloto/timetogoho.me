import { Injectable } from '@angular/core';
import { TimeFunctions } from '../other/time-functions';
import { Observable, of } from 'rxjs';
import { Timer } from '../other/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private _timer: Timer;
  private _dayStartHours = 9;
  private _dayStartMinutes = 0;
  private _dayEndHours = 18;
  private _dayEndMinutes = 0;
  private _isWorkingDay = false;

  constructor() {
    this._timer = new Timer();

    this.updateTime();
  }

  private isWorkingHour(hour: number): boolean {
    const hoursUntilEnd = TimeFunctions.calcHoursDifferent(hour, this.dayEndHours);
    const workingDayLength = TimeFunctions.calcHoursDifferent(this.dayStartHours, this.dayEndHours);

    return (hoursUntilEnd <= workingDayLength);
  }

  private updateTime(): void {
    const secondsInMinute = 60;
    const incompletePiece = 1;
    const currentTime = new Date();
    this.isWorkingDay = this.isWorkingHour(currentTime.getHours());

    if (this.isWorkingHour(currentTime.getHours())) {
      this._timer.hours = TimeFunctions.calcHoursDifferent(currentTime.getHours(), this.dayEndHours) - incompletePiece;
      this._timer.minutes = TimeFunctions.calcMinutesDifferent(currentTime.getMinutes(), this.dayEndMinutes) - incompletePiece;
    } else {
      this._timer.hours = TimeFunctions.calcHoursDifferent(currentTime.getHours(), this.dayStartHours) - incompletePiece;
      this._timer.minutes = TimeFunctions.calcMinutesDifferent(currentTime.getMinutes(), this.dayStartMinutes) - incompletePiece;
    }

    this._timer.seconds = (secondsInMinute - incompletePiece) - currentTime.getSeconds();
  }

  set dayStartHours(value: number) {
    if (value >= 0 && value < 24) {
      this._dayStartHours = value;
    }
  }

  get dayStartHours(): number {
    return this._dayStartHours;
  }

  set dayStartMinutes(value: number) {
    if (value >= 0 && value < 60) {
      this._dayStartMinutes = value;
    }
  }

  get dayStartMinutes(): number {
    return this._dayStartMinutes;
  }

  set dayEndHours(value: number) {
    if (value >= 0 && value < 24) {
      this._dayEndHours = value;
    }
  }

  get dayEndHours(): number {
    return this._dayEndHours;
  }

  set dayEndMinutes(value: number) {
    if (value >= 0 && value < 60) {
      this._dayEndMinutes = value;
    }
  }

  get dayEndMinutes(): number {
    return this._dayEndMinutes;
  }

  set isWorkingDay(value: boolean) {
    this._isWorkingDay = value;
  }

  get isWorkingDay(): boolean {
    return this._isWorkingDay;
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
}
