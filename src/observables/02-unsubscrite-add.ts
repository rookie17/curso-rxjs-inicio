import { Observable, interval } from "rxjs";

const intervalo$ = new Observable(subs => {
  var cont = 0;
  const interval = setInterval(() => {
      cont++;
      subs.next(cont);
  }, 1000);

  return () => {
    clearInterval(interval);
    subs.complete();
  }
});

const subscription = intervalo$.subscribe(num => console.log("Num:", num));

setTimeout(() => {
  subscription.unsubscribe();
  
}, 6000);