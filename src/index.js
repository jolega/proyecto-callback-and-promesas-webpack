import './styles.css';
import {buscarHeroeAsync,  buscarHeroe} from './js/promesas'
 
buscarHeroe('capi2')
                  .then(heroe => console.log(heroe))  // con promedas
                  .catch(console.warn);
                  
buscarHeroeAsync('capi2')
                  .then(heroe => console.log(heroe))  // con async que devuelve promesas
                  .catch(console.warn);