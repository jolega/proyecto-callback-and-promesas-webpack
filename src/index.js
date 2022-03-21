import './styles.css';
import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';


obtenerHeroeAwait('capi2')
                    .then( heroes =>  console.log( heroes ) )
                    .catch( err =>  console.warn( err ) );
