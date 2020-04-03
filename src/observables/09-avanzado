import { of, from, Observable } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: ()=> console.log('completado')
}

// const source$ = of(1,2,3,4,5);

// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Fernando');

// const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);

// source$.subscribe( resp => {
//     console.log(resp.status)
// });


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
}

const miIterable:Iterable<number> = miGenerador();

from(miIterable).subscribe(observer);
