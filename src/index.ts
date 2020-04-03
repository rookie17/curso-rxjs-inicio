import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1,5).
// pipe(
//     map<number, string>(val => (val * 25).toString())
// ).
// subscribe(console.log);

fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    map(keyEvent => keyEvent.code)
)
.subscribe(console.log);