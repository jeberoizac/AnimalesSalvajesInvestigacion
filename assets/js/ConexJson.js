
export let Datos = (()=>{
  try{
    const BaseUrl = "http://127.0.0.1:5500/animales.json";
    const getDatos = async () =>{
      
      const responde = await fetch(BaseUrl);
      const data = await responde.json();

      const { animales } = data;
      return animales;
      console.log(animales);
    }
    return {getDatos};
  } catch(erro){
    console.log(erro);
  }
})();

//export default Datos();