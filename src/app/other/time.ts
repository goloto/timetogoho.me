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

  public sum(): number {
    return this._hours * 3600 + this._minutes * 60 + this._seconds;
  }

  public reduceHour(): void {
    this.hours -= 1;
  }

  public reduceMinute(): void {
    if (this.minutes === 0) {
      this.reduceHour();
      this.minutes = 59;
    } else {
      this.minutes -= 1;
    }
  }

  public reduceSecond(): void {
    if (this.seconds === 0) {
      this.reduceMinute();
      this.seconds = 59;
    } else {
      this.seconds -= 1;
    }
  }

  public addHours(value: number): void {
    this.hours += value;
  }

  public addMinutes(value: number): void {
    if (this.minutes + value >= 60) {
      this.addHours(Math.floor((this.minutes + value) / 60));
      this.minutes += (this.minutes + value) % 60;
    } else {
      this.minutes += value;
    }
  }

  public addSeconds(value: number): void {
    if (this.seconds + value >= 60) {
      this.addMinutes(Math.floor((this.seconds + value) / 60));
      this.seconds += (this.seconds + value) % 60;
    } else {
      this.seconds += value;
    }
  }
}
