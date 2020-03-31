import { of, range, asyncScheduler } from 'rxjs';

const src$ = range(-5,101, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);

console.log('fin');