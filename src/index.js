// import {buscarHeroe} from  './js/callbacks'
import {buscarHeroe as buscarHeroePromesas} from  './js/promesas'
import './styles.css';

const heroeId1 = 'capi2'
const heroeId2 = 'spider'

// buscarHeroe(heroeId1, (err, heroe1) => {

//     if(err){ return console.error(err); }

//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if(err){ return console.error(err); }

//         console.log(`enviado a ${heroe1.nombre} y ${heroe2.nombre} a la mision`)
//     });

// } );

buscarHeroePromesas(heroeId1).then(heroe=> {
    console.log(`Enviando a ${heroe.nombre} a la mision`);
})
