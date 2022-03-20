import './styles.css';
import { promesaLenta, promesaMedia, promesaRapida} from './js/promesas'

promesaLenta.then( console.log );
promesaMedia.then( mensaje => console.log(mensaje) ); // esto es lo mismo que console.log
promesaRapida.then( console.log)


Promise.race(
    [
     promesaLenta, 
     promesaMedia, 
     promesaRapida
    ])
    .then(console.log);