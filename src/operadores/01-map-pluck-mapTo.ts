import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1,5).
// pipe(
//     map<number, string>(val => (val * 25).toString())
// ).
// subscribe(console.log);

// fromEvent<KeyboardEvent>(document, 'keyup')
// .pipe(
//     map(keyEvent => keyEvent.code)
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(keyEvent => keyEvent.code)
);

const keyupPluck$ = keyup$.pipe( 
  pluck('target', 'baseURI')
  );
  const keyupMapTo$ = keyup$.pipe( 
    mapTo('Tecla presionada')
    );
  
    


keyupCode$.subscribe(code => console.log('code ', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('MapTo ', code));