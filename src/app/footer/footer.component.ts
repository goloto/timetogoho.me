import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-footer',
  animations: [
    trigger('isMenuOpen', [
      state('closed', style({
        height: '0',
      })),
      state('open', style({
        height: '*',
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ]),
    ]),
    trigger('isArrowsUp', [
      state('up', style({
        transform: 'rotate(-135deg)',
      })),
      state('down', style({
        transform: 'rotate(45deg)',
      })),
      transition('up <=> down', [
        animate('0.2s')
      ]),
    ]),
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentYear: number;
  public isMenuOpen = false;

  constructor() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }

  ngOnInit(): void {
  }

  toggleMenuVisibility(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
