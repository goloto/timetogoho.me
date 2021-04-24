import { animate, state, style, transition, trigger } from '@angular/animations';

export const arrowAnimations = [
  trigger('isArrowReversed', [
    state('not-reversed', style({
      flexDirection: 'column',
    })),
    state('reversed', style({
      flexDirection: 'column-reverse',
    })),
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
  trigger('isMenuOpen', [
    state('open', style({
      opacity: 1,
    })),
    state('closed', style({
      opacity: '*',
    })),
    transition('open <=> closed', [
      animate('0.2s')
    ]),
  ])
];
