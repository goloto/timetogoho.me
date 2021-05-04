import { Injectable } from '@angular/core';
import { TimerSettings } from '../other/timer-settings';
import { CookieService } from './cookie.service';
import { Observable } from 'rxjs';
import { Time } from '../other/time';

@Injectable({
  providedIn: 'root'
})
export class TimerSettingsService {
  private _settings: TimerSettings;

  constructor(public cookieService: CookieService) {
    this._settings = new TimerSettings();
    [this._settings.dayStartHours, this._settings.dayStartMinutes] =
      this.getDayStart().split(':').map(num => +num);

    [this._settings.dayEndHours, this._settings.dayEndMinutes] =
      this.getDayEnd().split(':').map(num => +num);
  }

  private getDayStart(): string {
    if (this.cookieService.get('day-start')) {
      return this.cookieService.get('day-start');
    } else {
      this.setDayStart(9, 0);
      return '9:00';
    }
  }

  private getDayEnd(): string {
    if (this.cookieService.get('day-end')) {
      return this.cookieService.get('day-end');
    } else {
      this.setDayEnd(18, 0);
      return '18:00';
    }
  }

  public setDayStart(hour: number, minute: number): void {
    this.cookieService.set('day-start', `${hour}:${minute}`);

    this._settings.dayStartHours = hour;
    this._settings.dayStartMinutes = minute;

    this._settings.dayStart = new Time(hour, minute, 0);
  }

  public setDayEnd(hour: number, minute: number): void {
    this.cookieService.set('day-end', `${hour}:${minute}`);

    this._settings.dayEndHours = hour;
    this._settings.dayEndMinutes = minute;

    this._settings.dayEnd = new Time(hour, minute, 0);
  }

  get settings(): TimerSettings {
    return this._settings;
  }

  get observedSettings(): Observable<TimerSettings> {
    return new Observable<TimerSettings>(subscriber => {
      subscriber.next(this._settings);
    });
  }
}
