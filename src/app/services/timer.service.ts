import { Injectable } from '@angular/core';
import { TimeFunctions } from '../other/time-functions';
import { Observable } from 'rxjs';
import { TimerServiceData } from '../other/timer-service-data';
import { TimerSettingsService } from './timer-settings.service';
import { Time } from '../other/time';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private readonly _data: TimerServiceData;
  private _currentTime = new Time(0, 0, 0);

  constructor(public timerSettingsService: TimerSettingsService) {
    this.updateCurrentTime();

    this._data = new TimerServiceData(
      new Time(0, 0, 0),
      timerSettingsService.settings
    );

    this.updateServiceData();
  }

  private updateCurrentTime(): void {
    const currentDate = new Date();
    this._currentTime = new Time(
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds()
    );
  }

  private isWorkingHour(): boolean {
    const timeUntilDayEnd = TimeFunctions.calcTimeDifferent(
      this._currentTime,
      this._data.settings.dayEnd
    );
    const workingDayLength = TimeFunctions.calcTimeDifferent(
      this._data.settings.dayStart,
      this._data.settings.dayEnd
    );

    return (timeUntilDayEnd.sum() <= workingDayLength.sum());
  }

  private updateServiceData(): void {
    this.updateCurrentTime();

    this._data.settings.isWorkingDay = this.isWorkingHour();

    this._data.time = TimeFunctions.calcTimeDifferent(
      this._currentTime,
      this._data.settings.isWorkingDay
        ? this._data.settings.dayEnd
        : this._data.settings.dayStart
    );
  }

  get data(): TimerServiceData {
    return this._data;
  }

  get observedData(): Observable<TimerServiceData> {
    return new Observable<TimerServiceData>(subscriber => {
      subscriber.next(this._data);
      setInterval(() => {
        this.updateServiceData();
        subscriber.next(this._data);
      }, 1000);
    });
  }
}
