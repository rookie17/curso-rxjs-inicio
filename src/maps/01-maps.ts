import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap, tap } from "rxjs/operators";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$.pipe(
    tap(console.log),
    switchMap(() => interval$)
).subscribe({
    next: (next) =>  console.log('next', next),
    complete: () => console.log('completed')
});
