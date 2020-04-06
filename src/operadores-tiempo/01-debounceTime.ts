import { fromEvent } from "rxjs";
import { debounceTime, map, pluck, distinctUntilChanged, distinct } from "rxjs/operators";


// const click$ = fromEvent<MouseEvent>(document, 'click');

// click$
// .pipe(
//     debounceTime(3000)
// )
// .subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
.pipe(    
    debounceTime(300),
    pluck('target','value'),
    distinctUntilChanged()
)
.subscribe(console.log);
