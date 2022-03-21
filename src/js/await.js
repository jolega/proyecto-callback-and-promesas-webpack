import { buscarHeroeAsync, buscarHeroe } from './promesas'

const heroesIds = [ 'capi', 'iron' , 'spider' ];

export const  obtenerHeroesArr = async () => {
    
    return await Promise.all (heroesIds.map (heroe => buscarHeroe(heroe) )) ;

}