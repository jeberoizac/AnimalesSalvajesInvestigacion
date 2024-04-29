// Importar funciones del módulo de operaciones
import { animal } from './clases.js';
import { Datos } from './ConexJson.js';

//  async function Datos(){
//   try{
//     const BaseUrl = "http://127.0.0.1:5500/animales.json";
//     const responde = await fetch(BaseUrl);
//     const data = await responde.json();
//     return data;

//   } catch(erro){
//     console.log(erro);
//   }
// }
let Animales = [];
let sonido;
let img;

//Presentar datos en una Card
const ImprHtml =() =>{
  try {
    const tabla = document.getElementById("Animales");
    tabla.innerHTML = "";
    Animales.forEach((key, i) =>{
      tabla.innerHTML += `
      <div class ="px-3 pb-2">
        <div class="bg-dark text white">
        <img
          height="200"
          src="./assets/imgs/${key._Imagen}"
          data-bs-toggle="modal"  
                data-bs-target="#exampleModal" 
                onclick="modalDetails('${i}')" 
          />
          <div>
            <button onclick="hacerSonido('${key._Sonido}')" class="btn btn-secondary w-100">
            <img height="30" src="./assets/imgs/audio.svg" />
            </button>
          </div>       
        </div>
      </div>`;
    });
       
  } catch (error) {
    console.log(error);
  }
}

//funcion HacerSonido
window.hacerSonido = (sonido)=>{
  try{
    let musica = new Audio(`./assets/sounds/${sonido}`);
    musica.play();
  }catch(error){
    console.log(error);
  }

}

//MOdal
window.modalDetails = (i)=>{
  try {
    const modaBody = document.getElementsByClassName('modal-body')[0];
    const Animal = Animales[i];
    console.log(Animal);
    modaBody.innerHTML = `
    <div class="px-3 pb-2">
    <div class="card w-50 m-auto bg-dark text-white border-0">
      <img 
      src="./assets/imgs/${Animal._Imagen}" 
      class="d-block m-auto w-100"
      />
      <div class="card-body text-center">
          <h6 class="card-text">${Animal._edad}</h6>
         
          <hr text-white>
          <p>${Animal._Comentarios}</p>
      </div>
    </div>
    </div>`;
    
  } catch (error) {
    console.log(error)
  }
}


//Event Listener para cambio de Opciones
document.getElementById("animal").addEventListener("change", async (e)=>{
  try {
    const OpAnimal = e.target.value;
    const SelAnimal = await Datos.getDatos();
    console.log(OpAnimal);    
    const ObjAnimal = await SelAnimal.find((a)=>{      
    return a.name === OpAnimal;
    })
    img = `${ObjAnimal.imagen}`;
    sonido = `${ObjAnimal.sonido}`;
    const preview = document.getElementById("preview");
    preview.parentElement.classList.remove('p-5');
    preview.style.backgroundImage = `url(./assets/imgs/${img})`;
    console.log(img);
  } catch (error) {
    console.log(error);
  }

})

// Event listener para el formulario
//document.getElementById("btnRegistrar")
document.querySelector("btn").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  try{
    const nombre = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios= document.getElementById("comentarios").value;
  
    if (nombre && edad && comentarios){
       let animal1 = new animal(nombre,edad,comentarios,img,sonido);
       Animales.push(animal1)
       ImprHtml();
       console.log(Animales);
    }
    else{
      alert("Datos mal ingresados o faltantes..")
    } 
  }
  catch(error){
    console.log(error)
  }
});
