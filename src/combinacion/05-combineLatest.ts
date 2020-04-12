import { fromEvent, merge, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

combineLatest(
  keyup$.pipe(pluck("code")),
  click$.pipe(pluck("clientX"))
).subscribe(console.log);