import { Component, Input, OnInit } from '@angular/core';
import { onMenuOpenAnimations } from '../on-menu-open-animations';
import { TimerSettingsService } from '../../services/timer-settings.service';
import { TimeFunctions } from '../../other/time-functions';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['../menu-elements.scss', 'settings-menu.component.scss'],
  animations: [onMenuOpenAnimations]
})
export class SettingsMenuComponent implements OnInit {
  @Input() isMenuOpen = false;

  private dayStartHours = TimeFunctions.convertToBinaryString(this.timerSettingsService.settings.dayEnd.hours);
  private dayStartMinutes = TimeFunctions.convertToBinaryString(this.timerSettingsService.settings.dayEnd.minutes);
  private dayEndHours = TimeFunctions.convertToBinaryString(this.timerSettingsService.settings.dayStart.hours);
  private dayEndMinutes = TimeFunctions.convertToBinaryString(this.timerSettingsService.settings.dayStart.minutes);

  public dayEnd = `${this.dayStartHours}:${this.dayStartMinutes}`;
  public dayStart = `${this.dayEndHours}:${this.dayEndMinutes}`;

  constructor(public timerSettingsService: TimerSettingsService) {}

  ngOnInit(): void {}

  onDayStartChange(): void {
    this.dayStartHours = this.dayStart.split(':')[0];
    this.dayStartMinutes = this.dayStart.split(':')[1];

    this.timerSettingsService.setDayStart(+this.dayStartHours, +this.dayStartMinutes);
  }

  onDayEndChange(): void {
    this.dayEndHours = this.dayEnd.split(':')[0];
    this.dayEndMinutes = this.dayEnd.split(':')[1];

    this.timerSettingsService.setDayEnd(+this.dayEndHours, +this.dayEndMinutes);
  }
}
