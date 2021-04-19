import { Timer } from './timer';
import { TimerSettings } from './timer-settings';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerServiceData {
  private _timer: Timer;
  private _settings: TimerSettings;

  constructor(timer: Timer, settings: TimerSettings) {
    this._timer = timer;
    this._settings = settings;
  }

  set timer(value: Timer) {
    this._timer = value;
  }

  get timer(): Timer {
    return this._timer;
  }

  set settings(value: TimerSettings) {
    this._settings = value;
  }

  get settings(): TimerSettings {
    return this._settings;
  }
}
