import { asyncScheduler } from 'rxjs';



const saludar = () => console.log('hola mundo');
const saludar2 = nombre => {
  console.log('hola mundo', nombre)
};

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Fernando');
const subs = asyncScheduler.schedule(function(state){
  console.log(state);

   this.schedule(state, 2000);
}, 2000, {
  asdf: 'adsfa',
  zxcv: 'zxcv'
});

// setTimeout( () => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(function(state){
  subs.unsubscribe();
  console.log('unsubscribed');
}, 6000)