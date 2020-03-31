import { fromEvent } from "rxjs";

/*
Eventos del DOM
*/

const src1$ = fromEvent<Event>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: val => console.log('next:', val.code),
};


src1$.subscribe(
  val => console.log('next', val),
  null,
  ()=>console.log('completed')
);
src2$.subscribe(observer);
