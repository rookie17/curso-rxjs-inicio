import { Observable } from "rxjs";

const obs$ = new Observable<string>(subs => {
  subs.next("hola");
  subs.next("mundo");

  subs.complete();
});
obs$.subscribe(
  valor => console.log("next: ", valor),
  null,
  () => console.log("completed")
);
