import { Injectable } from '@angular/core';
import { TimeFunctions } from '../other/time-functions';
import { Observable } from 'rxjs';
import { Timer } from '../other/timer';
import { TimerSettings } from '../other/timer-settings';
import { TimerServiceData } from '../other/timer-service-data';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private readonly _data: TimerServiceData;

  constructor() {
    this._data = new TimerServiceData(new Timer(), new TimerSettings());

    this.updateServiceData();
  }

  private isWorkingHour(hour: number): boolean {
    const hoursUntilDayEnd = TimeFunctions.calcHoursDifferent(
      hour,
      this._data.settings.dayEndHours
    );
    const workingDayLength = TimeFunctions.calcHoursDifferent(
      this._data.settings.dayStartHours,
      this._data.settings.dayEndHours
    );

    return (hoursUntilDayEnd <= workingDayLength);
  }

  private updateServiceData(): void {
    const secondsInMinute = 60;
    const incompletePiece = 1;
    const currentTime = new Date();
    this._data.settings.isWorkingDay = this.isWorkingHour(currentTime.getHours());

    if (this.isWorkingHour(currentTime.getHours())) {

      this._data.timer.hours =
        TimeFunctions.calcHoursDifferent(
          currentTime.getHours(),
          this._data.settings.dayEndHours
        ) - incompletePiece;

      this._data.timer.minutes =
        TimeFunctions.calcMinutesDifferent(
          currentTime.getMinutes(),
          this._data.settings.dayEndMinutes
        ) - incompletePiece;

    } else {

      this._data.timer.hours =
        TimeFunctions.calcHoursDifferent(
          currentTime.getHours(),
          this._data.settings.dayStartHours
        ) - incompletePiece;

      this._data.timer.minutes =
        TimeFunctions.calcMinutesDifferent(
          currentTime.getMinutes(),
          this._data.settings.dayStartMinutes
        ) - incompletePiece;

    }

    this._data.timer.seconds = (secondsInMinute - incompletePiece) - currentTime.getSeconds();
  }

  get data(): Observable<TimerServiceData> {
    return new Observable<TimerServiceData>(subscriber => {
      subscriber.next(this._data);
      setInterval(() => {
        this.updateServiceData();
        subscriber.next(this._data);
      });
    });
  }
}
