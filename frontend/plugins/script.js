// modal agregar
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//moda actualizar
const ciclistas = document.querySelector('.datoss');
const closeUpdate = document.querySelector('#closeUpdate');
const modalUpdate = document.getElementById('modalUpdate');
ciclistas.addEventListener('click',(e)=>{
  if(e.target.classList.contains('update'))
    modalUpdate.style.display = "block"
})
closeUpdate.addEventListener('click',()=>{
  modalUpdate.style.display = "none"
})
window.addEventListener('click',(e)=>{
  if(e.target === modalUpdate)
    modalUpdate.style.display = "none";
})

//Ciclistas

  document.getElementById('newCiclista').addEventListener('submit', function() {

   const numero = document.getElementsByName('numero')[0].value
   const nombre = document.getElementsByName('nombre')[0].value;
   const equipo = document.getElementsByName('equipo')[0].value;
   const nacionalidad = document.getElementsByName('nacionalidad')[0].value;
   const edad = document.getElementsByName('edad')[0].value;
   const recorrido = document.getElementsByName('recorrido')[0].value;
   const puntos = document.getElementsByName('puntos')[0].value;
   const lider = document.getElementsByName('lider')[0].value;
   const rendimiento = document.getElementsByName('rendimiento')[0].value;
   const img = document.getElementsByName('img')[0].value;

    
   const mensaje =
      'Numero: ' + numero + '\n' +
      'Nombre: ' + nombre + '\n' +
      'Equipo: ' + equipo + '\n' +
      'Nacionalidad: ' + nacionalidad + '\n' +
      'Edad: ' + edad + '\n' +
      'Recorrido: ' + recorrido + '\n' +
      'Puntos ganados: ' + puntos + '\n' +
      'Tiempo de lider: ' + lider + '\n' +
      'Rendimiento: ' + rendimiento + '\n' +
      'Imagen: ' + img;

    alert(mensaje);

  // se pone el html .... 
  });



  
