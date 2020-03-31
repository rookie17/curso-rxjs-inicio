import {of, Observable, interval, Observer, Subject, ReplaySubject } from "rxjs";

const obs$ = of(1,2,3,4,5,6);

console.log('Inicio');

obs$.subscribe(
  next => console.log('next', next),
  null,
  () => console.log('Fin del obs')
);

console.log('Terminado');
