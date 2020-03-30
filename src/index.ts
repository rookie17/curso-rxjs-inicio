import { Observable, interval, Observer, Subject, ReplaySubject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("next:", value),
  error: error => console.log("next:", error),
  complete: () => console.log("completado")
};

const intervalos$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 2000);

  return () => {
    clearInterval(intervalID);
    subs.complete();
  };
});

const subject$ = new Subject();
intervalos$.subscribe(subject$);

const subs1 = subject$.subscribe(rnd => console.log("subs1:", rnd));

let subs2: any;
setTimeout(() => {
  subs2 = subject$.subscribe(rnd => console.log("subs2:", rnd));
}, 10000); 

setTimeout(() => {  
  subs1.unsubscribe();
  subs2.unsubscribe();
  // subject$.unsubscribe();
}, 15000);

// const subs1 = intervalos$.subscribe( rnd => console.log('subs1:', rnd));
// const subs2 = intervalos$.subscribe( rnd => console.log('subs2:', rnd));
