import { of, range } from "rxjs";
import { scan } from "rxjs/operators";

const subs$ = range(1, 50)
  .pipe(
      scan((acc, cur) => acc + cur, 0)
    )
  .subscribe(console.log);

  subs$.unsubscribe();
