import { state, style, trigger } from '@angular/animations';

export const menuAnimations = [
  trigger('isMenuExpanded', [
    state('expanded', style({
      boxShadow: '0vh -.1vh 1vh gray',
    })),
    state('not-expanded', style({
      boxShadow: 'none',
    })),
  ])
];
