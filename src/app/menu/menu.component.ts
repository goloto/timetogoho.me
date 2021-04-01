import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu',
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
    trigger('isArrowReversed', [
      state('not-reversed', style({
        flexDirection: 'column',
      })),
      state('reversed', style({
        flexDirection: 'column-reverse',
      })),
    ]),
    trigger('isHeaderMenuExpanded', [
      state('expanded', style({
        boxShadow: '0vh -.1vh 1vh gray',
      })),
      state('not-expanded', style({
        boxShadow: 'none',
      })),
    ]),
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenuVisibility(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
