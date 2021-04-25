import { animate, state, style, transition, trigger } from '@angular/animations';

export const arrowButtonAnimations = [
  trigger('animationDirection', [
    state('not-reversed', style({
      flexDirection: 'column',
    })),
    state('reversed', style({
      flexDirection: 'column-reverse',
    })),
  ]),
  trigger('arrowDirection', [
    state('up', style({
      transform: 'rotate(-135deg)',
    })),
    state('down', style({
      transform: 'rotate(45deg)',
    })),
    transition('up <=> down', [
      animate('.2s')
    ]),
  ]),
  trigger('lineState', [
    state('long', style({
      width: '100%',
    })),
    state('short', style({
      width: '0%',
    })),
    transition('long => short', [
      animate('.2s')
    ]),
    transition('short => long', [
      animate('.5s')
    ]),
  ]),
  trigger('titleVisibility', [
    state('show', style({
      opacity: 1,
    })),
    state('hide', style({
      opacity: '*',
    })),
  ])
];
