export class Time {
  private _hours = 0;
  private _minutes = 0;
  private _seconds = 0;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  set hours(value: number) {
    if (value < 0) {
      value = 0;
    }

    this._hours = value;
  }

  get hours(): number {
    return this._hours;
  }

  getFormattedHours(): string {
    return (
      this._hours.toString().length === 2
        ? this._hours.toString()
        : `0${this._hours.toString()}`
    );
  }

  set minutes(value: number) {
    if (value < 0 || value >= 60) {
      value = 0;
    }

    this._minutes = value;
  }

  get minutes(): number {
    return this._minutes;
  }

  getFormattedMinutes(): string {
    return (
      this._minutes.toString().length === 2
        ? this._minutes.toString()
        : `0${this._minutes.toString()}`
    );
  }

  set seconds(value: number) {
    if (value < 0 || value >= 60) {
      value = 0;
    }

    this._seconds = value;
  }

  get seconds(): number {
    return this._seconds;
  }

  getFormattedSeconds(): string {
    return (
      this._seconds.toString().length === 2
        ? this._seconds.toString()
        : `0${this._seconds.toString()}`
    );
  }

  sum(): number {
    return this._hours * 3600 + this._minutes * 60 + this._seconds;
  }
}
