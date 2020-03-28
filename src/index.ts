import { Observable, interval, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.log('next:', error),
  complete: () => console.log('completado')
};