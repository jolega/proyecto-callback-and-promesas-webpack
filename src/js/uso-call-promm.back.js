import {buscarHeroe as buscarHeroePromesas} from  './js/promesas'
import './styles.css';

const heroeId1 = 'capi'
const heroeId2 = 'spider'

Promise.all(
    [
        buscarHeroePromesas(heroeId1),
        buscarHeroePromesas(heroeId2),  
    ]
)
.then( ([heroes1, heroe2])=> {

    console.log(`enviado a ${heroes1.nombre} y ${heroe2.nombre} a la mision`)
})
.catch(err => {

    alert(err);
}).finally(()=> {
    console.log(`se termino la promesa`)
});
