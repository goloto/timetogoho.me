import { Injectable } from '@angular/core';
import { TimeFunctions } from '../other/time-functions';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private _hours!: number;
  private _minutes!: number;
  private _seconds!: number;
  private _formattedHours!: string;
  private _formattedMinutes!: string;
  private _formattedSeconds!: string;
  private _dayStartHours = 9;
  private _dayStartMinutes = 0;
  private _dayEndHours = 18;
  private _dayEndMinutes = 0;
  private _isWorkingDay = false;

  constructor() {
    this.updateTime();
  }

  private isWorkingHour(hour: number): boolean {
    const hoursUntilEnd = TimeFunctions.calcHoursDifferent(hour, this.dayEndHours);
    const workingDayLength = TimeFunctions.calcHoursDifferent(this.dayStartHours, this.dayEndHours);

    return (hoursUntilEnd <= workingDayLength);
  }

  public updateTime(): void {
    const currentTime = new Date();
    const secondsInMinute = 60;
    const incompletePiece = 1;
    this.isWorkingDay = this.isWorkingHour(currentTime.getHours());

    if (this.isWorkingHour(currentTime.getHours())) {
      this.hours = TimeFunctions.calcHoursDifferent(currentTime.getHours(), this.dayEndHours) - incompletePiece;
      this.minutes = TimeFunctions.calcMinutesDifferent(currentTime.getMinutes(), this.dayEndMinutes) - incompletePiece;
    } else {
      this.hours = TimeFunctions.calcHoursDifferent(currentTime.getHours(), this.dayStartHours) - incompletePiece;
      this.minutes = TimeFunctions.calcMinutesDifferent(currentTime.getMinutes(), this.dayStartMinutes) - incompletePiece;
    }

    this.seconds = (secondsInMinute - incompletePiece) - currentTime.getSeconds();
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
