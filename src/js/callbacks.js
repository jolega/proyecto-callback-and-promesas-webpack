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

export const buscarHeroe = (id, callback ) =>{

    const heroe = heroes[id]; // selecciona el campo por id
  
    if(heroe){
        callback(null ,heroe);
    }
    else{
        callback(`no existe un heroe con el id ${ id }` );
    }
    
}