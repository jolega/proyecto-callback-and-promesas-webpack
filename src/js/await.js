import { buscarHeroeAsync } from './promesas'

const heroesIds = [ 'capi', 'iron' , 'spider' ];

export const  obtenerHeroesArr = async () => {
    
    const heroeArr = [];

    for (const id of heroesIds) {
       // buscarHeroeAsync(id).then( heroe => heroeArr.push(heroe) );
       const heroe = await buscarHeroeAsync(id); // await espera que la promesa se resuelva
       heroeArr.push( heroe) ;
    }
    

    return heroeArr;
}