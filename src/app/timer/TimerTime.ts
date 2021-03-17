export class TimerTime {
  private _hours!: number;
  private _minutes!: number;
  private _seconds!: number;
  private _formattedHours!: string;
  private _formattedMinutes!: string;
  private _formattedSeconds!: string;

  constructor() {
    this.updateTime();
  }

  private formatTime(num: number): string {
    return num.toString().length > 1 ? num.toString() : '0' + num.toString();
  }

  public updateTime(): void {
    const currentTime = new Date();
    const isCurrentDay = currentTime.getHours() < 18;
    const hourWhenWorkdayEnd = 18;
    const hoursInDay = 24;
    const secondsInMinute = 60;
    const minutesInHour = 60;

    this.minutes = minutesInHour - currentTime.getMinutes();
    this.seconds = (secondsInMinute - 1) - currentTime.getSeconds();

    if (this.seconds >= 0) {
      this.minutes -= 1;
    }

    if (isCurrentDay) {
      this.hours = (hourWhenWorkdayEnd - 1) - currentTime.getHours();
    } else {
      this.hours = (hoursInDay - 1) - currentTime.getHours() + hourWhenWorkdayEnd;
    }
  }

  set hours(value: number) {
    if (value >= 0) {
      this._hours = value;
      this._formattedHours = this.formatTime(value);
    }
  }

  get hours(): number {
    return this._hours;
  }

  set minutes(value: number) {
    if (value >= 0) {
      this._minutes = value;
      this._formattedMinutes = this.formatTime(value);
    }
  }

  get minutes(): number {
    return this._minutes;
  }

  set seconds(value: number) {
    if (value >= 0) {
      this._seconds = value;
      this._formattedSeconds = this.formatTime(value);
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
