import { Timer } from './timer';
import { TimerSettings } from './timer-settings';
import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root',
})
export class TimerServiceData {
  private _time: Time;
  private _settings: TimerSettings;

  constructor(timer: Time, settings: TimerSettings) {
    this._time = timer;
    this._settings = settings;
  }

  set time(value: Time) {
    this._time = value;
  }

  get time(): Time {
    return this._time;
  }

  set settings(value: TimerSettings) {
    this._settings = value;
  }

  get settings(): TimerSettings {
    return this._settings;
  }
}
