import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root',
})
export class TimerSettings {
  private _isWorkingDay = false;

  private _dayStart = new Time(9, 0, 0);
  private _dayEnd = new Time(18, 0 , 0);

  set dayStart(value: Time) {
    this._dayStart = value;
  }

  get dayStart(): Time {
    return this._dayStart;
  }

  set dayEnd(value: Time) {
    this._dayEnd = value;
  }

  get dayEnd(): Time {
    return this._dayEnd;
  }

  set isWorkingDay(value: boolean) {
    this._isWorkingDay = value;
  }

  get isWorkingDay(): boolean {
    return this._isWorkingDay;
  }
}
