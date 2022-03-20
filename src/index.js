// import {buscarHeroe} from  './js/callbacks'
import {buscarHeroe as buscarHeroePromesas} from  './js/promesas'
import './styles.css';

const heroeId1 = 'capi'
const heroeId2 = 'spider'

// buscarHeroe(heroeId1, (err, heroe1) => {

//     if(err){ return console.error(err); }

//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err){ return console.error(err); }

//         console.log(`enviado a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     });

// } );

// buscarHeroePromesas(heroeId1).then(heroe1=> {
//     //console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroePromesas(heroeId2).then(heroe2=> {
//         console.log(`enviado a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     })
// })

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
