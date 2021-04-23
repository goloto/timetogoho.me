import {animate, state, style, transition, trigger} from "@angular/animations";

export const onMenuOpenAnimation = [
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
]
