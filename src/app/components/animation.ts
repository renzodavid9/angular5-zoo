import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn =
    trigger('fadeIn',[
        state('*',style({
            opacity: 1
        })),
        transition(':enter',[
            style({
                opacity: 0,
                transform: 'translateX(-15%)'
            }),
            animate('500ms linear')
        ]),
        transition(':leave', [
            animate('500ms linear', style({
                opacity: 0,
                transform: 'translateX(0%)'
            }))
        ])
    ]);