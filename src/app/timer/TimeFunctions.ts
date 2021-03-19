export class TimeFunctions {
  constructor() {}

  static convertToBinaryString(num: number): string {
    return num.toString().length > 1 ? num.toString() : '0' + num.toString();
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
}
