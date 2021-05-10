import { Time } from './time';

export class TimeFunctions {
  constructor() {}

  static convertToBinaryString(num: number): string {
    return num.toString().length > 1 ? num.toString() : `0${num.toString()}`;
  }

  static calcTimeDiff(startTime: Time, endTime: Time): Time {
    const resultTime = new Time(0, 0 , 0);

    if (startTime.hours >= endTime.hours) {
      resultTime.hours = 24 - startTime.hours + endTime.hours;
    } else {
      resultTime.hours = endTime.hours - startTime.hours;
    }

    if (startTime.minutes >= endTime.minutes) {
      resultTime.reduceHour();

      resultTime.minutes = 60 - startTime.minutes + endTime.minutes;
    } else {
      resultTime.minutes = endTime.minutes - startTime.minutes;
    }

    if (startTime.seconds > endTime.seconds) {
      resultTime.reduceMinute();

      resultTime.seconds = 60 - startTime.seconds + endTime.seconds;
    } else {
      resultTime.seconds = endTime.seconds - startTime.seconds;
    }

    return resultTime;
  }
}
