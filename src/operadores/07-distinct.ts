import { range, fromEvent, of } from "rxjs";
import { pluck, first, take, distinct, distinctUntilChanged } from "rxjs/operators";


// const click$ = fromEvent<MouseEvent>(document, 'click');


of(1,1,1,1,2,2,2,3,3,3,3,4,4,4,1,1,1,1,2,2,3,3,3)
.pipe(      
    distinctUntilChanged()    
)
.subscribe({
    next: next => console.log('next: ', next),
    complete: () => console.log('completed')
});