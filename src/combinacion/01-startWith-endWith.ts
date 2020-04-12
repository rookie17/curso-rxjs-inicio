import {of}  from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const numeros$ = of(1,2,3)
.pipe(
    startWith(20),
    endWith(15)
);

numeros$.subscribe(
    {
        next: (val) => console.log(val),
        complete: () => console.log('completed')

    });