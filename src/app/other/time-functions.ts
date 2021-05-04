import { Time } from './time';

export class TimeFunctions {
  constructor() {}

  static convertToBinaryString(num: number): string {
    return num.toString().length > 1 ? num.toString() : `0${num.toString()}`;
  }

  static calcHoursDifferent(startHour: number, endHour: number): number {
    if (endHour > startHour) {
      return endHour - startHour;
    } else {
      const hoursInDay = 24;

      return hoursInDay - startHour + endHour;
    }
  }

  static calcMinutesDifferent(startMinutes: number, endMinutes: number): number {
    if (endMinutes > startMinutes) {
      return endMinutes - startMinutes;
    } else {
      const minutesInHour = 60;

      return minutesInHour - startMinutes + endMinutes;
    }
  }

  static calcTimeDifferent(startTime: Time, endTime: Time): Time {
    const resultTime = new Time(0, 0 , 0);
    let isHourUnfull = false;

    if (startTime.minutes > endTime.minutes) {
      isHourUnfull = true;
      resultTime.minutes = 60 - startTime.minutes + endTime.minutes - 1;
    } else {
      resultTime.minutes = endTime.minutes - startTime.minutes - 1;
    }

    if (startTime.hours > endTime.hours) {
      resultTime.hours = 24 - startTime.hours + endTime.hours - (isHourUnfull ? 1 : 0);
    } else {
      resultTime.hours = endTime.hours - startTime.hours - (isHourUnfull ? 1 : 0);
    }

    resultTime.seconds = startTime.seconds - endTime.seconds - 1;

    return resultTime;
  }
}
