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
    [this._settings.dayStart.hours, this._settings.dayStart.minutes] =
      this.getDayStart().split(':').map(num => +num);
    [this._settings.dayEnd.hours, this._settings.dayEnd.minutes] =
      this.getDayEnd().split(':').map(num => +num);
  }

  private getDayStart(): string {
    return this.cookieService.get('day-start');
  }

  private getDayEnd(): string {
    return this.cookieService.get('day-end');
  }

  public setDayStart(hour: number, minute: number): void {
    this.cookieService.set('day-start', `${hour}:${minute}`);

    this._settings.dayStart = new Time(hour, minute, 0);
  }

  public setDayEnd(hour: number, minute: number): void {
    this.cookieService.set('day-end', `${hour}:${minute}`);

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
