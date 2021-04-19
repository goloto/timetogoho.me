import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerSettings {
  private _dayStartHours = 9;
  private _dayStartMinutes = 0;
  private _dayEndHours = 18;
  private _dayEndMinutes = 0;
  private _isWorkingDay = false;

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
}