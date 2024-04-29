//crear clase de animales

export class animal {
   constructor(nombre,edad,comentarios,imagen,sonido){
    this._nombre = nombre;
    this._edad = edad;
    this._Comentarios = comentarios;
    this._Imagen = imagen;
    this._Sonido = sonido;

  }
  //nombres
  setNombre(newNombre){
    this._nombre= newNombre;
  }

  getNombre(){
    return this._nombre;

  }
  //edad
  setEdad(newEdad){
    this._edad= newEdad;
  }

  getEdad(){
    return this._edad;

  }
    //****Imagenes */
    setImagen(imagen){
      this._Imagen = imagen;
    }
  
    getImagen(){
      return this._Imagen;
  
    }

      //Comentarios
  setComentarios(newComentarios){
    this._Comentarios= newComentarios;
  }

  getComentarios(){
    return this._Comentarios;

  }

      //Sonidos
      setSonido(newSonido){
        this._Sonido= newSonido;
      }
    
      getSonido(){
        return this._Sonido;
    
      }

}
//leon 
class leon extends animal{
  constructor(nombre,edad,comentarios,imagen,sonido){
    super(nombre,edad,comentarios,imagen,sonido);
    }
    rugir(){
      return sonido;
    }
}
//Lobo 
class Lobo extends animal{
  constructor(nombre,edad,comentarios,imagen,sonido){
    super(nombre,edad,comentarios,imagen,sonido);
    }
    aullar(){
      return sonido;
    }
}

//oso 
class oso extends animal{
  constructor(nombre,edad,comentarios,imagen,sonido){
    super(nombre,edad,comentarios,imagen,sonido);
    }
    gruñir(){
      return sonido;
    }
}

//serpiente
class serpierte extends animal{
  constructor(nombre,edad,comentarios,imagen,sonido){
    super(nombre,edad,comentarios,imagen,sonido);
    }
    sisear(){
      return sonido;
    }
}

//Aguila
class aguila extends animal{
  constructor(nombre,edad,comentarios,imagen,sonido){
    super(nombre,edad,comentarios,imagen,sonido);
    }
    chillar(){
      return sonido;
    }
}
// const p = new animal();
// p.setNombre("perro");
// p.getNombre();
// //console.log(getNombre());