import { range, observable, fromEventPattern, of, from } from "rxjs";
import { filter } from "rxjs/operators";

// range(1, 20)
//   .pipe(filter((value, index) =>
//   {
//     console.log(index);
//     return (value % 2 === 1);
//   }))
//   .subscribe(console.log);

const personajes: Personaje[] = [
  { tipo: "heroe", nombre: "batman" },
  { tipo: "heroe", nombre: "robin" },
  { tipo: "villano", nombre: "joker" }
];
interface Personaje {
  tipo: string,
  nombre: string
}

from(personajes)
  .pipe(
    filter<Personaje>(value => {
      return value.nombre !== 'robin';
    }    
  ))
  .subscribe(console.log);
