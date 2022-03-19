const heroes = {
    capi:{
        nombre :'Capitan America',
        poder  :'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre :'Iroman',
        poder  :'Iroman inyecciones sin morir'
    },
    spider:{
        nombre :'spider',
        poder  :'spider inyecciones sin morir'
    },

}

export const buscarHeroe = (id) =>{

    const heroe = heroes[id]; // selecciona el campo por id
  
    return new Promise( (resolve, reject) => { // esto es una promesa

        if(heroe){
            resolve(heroe);
        }
        else{
            reject(`no existe un heroe con el id ${ id }` );
        }
    });


    
}