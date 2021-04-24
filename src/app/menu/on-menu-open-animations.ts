import { animate, state, style, transition, trigger } from '@angular/animations';

export const onMenuOpenAnimations = [
  trigger('isMenuOpen', [
    state('closed', style({
      height: '0',
      padding: '0',
    })),
    state('open', style({
      height: '*',
      padding: '4px',
    })),
    transition('open <=> closed', [
      animate('0.2s')
    ]),
  ]),
];
