import './styles.css';
import { obtenerHeroesArr } from './js/await';


obtenerHeroesArr().then( heroes =>  console.table( heroes ) ); 

