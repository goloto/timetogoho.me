import { TimeFunctions } from './time-functions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Timer {
  private _hours!: number;
  private _minutes!: number;
  private _seconds!: number;
  private _formattedHours!: string;
  private _formattedMinutes!: string;
  private _formattedSeconds!: string;

  constructor() {

  }

  set hours(value: number) {
    if (value >= 0) {
      this._hours = value;
      this._formattedHours = TimeFunctions.convertToBinaryString(value);
    }
  }

  get hours(): number {
    return this._hours;
  }

  set minutes(value: number) {
    if (value >= 0) {
      this._minutes = value;
      this._formattedMinutes = TimeFunctions.convertToBinaryString(value);
    }
  }

  get minutes(): number {
    return this._minutes;
  }

  set seconds(value: number) {
    if (value >= 0) {
      this._seconds = value;
      this._formattedSeconds = TimeFunctions.convertToBinaryString(value);
    }
  }

  get seconds(): number {
    return this._seconds;
  }

  get formattedHours(): string {
    return this._formattedHours;
  }

  get formattedMinutes(): string {
    return this._formattedMinutes;
  }

  get formattedSeconds(): string {
    return this._formattedSeconds;
  }
}
