import { getEtapas, nuevoEtapas, deleteEtapas,getOneID,updateEtapas  } from "./Api.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargaEtapas();
})


async function cargaEtapas(){
    const etapas = await getEtapas();
    const tablaEtapas= document.querySelector('.datoss');
    etapas.forEach(element => {
        const {_id, numeroEtapa, salida, llegada, distancia, ganador, descripcion, premioMontana, grafica} = element
        tablaEtapas.innerHTML += `
        <div class="col-md-3 col-lg-2 col-sm-2 m-b2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s" style="visibility: visible; animation-duration: 2s; animation-delay: 0.4s; animation-name: fadeInUp;">
        <div class="service-box3 etapass">
          <div class="dlab-media text-center"><h1 class="dlab-title m-t0">Etapa : ${numeroEtapa}</h1></div>
          <div class="dlab-info" _id="${_id}" numeroEtapa="${numeroEtapa}" salida="${salida}" llegada="${llegada}" distancia="${distancia}" ganador="${ganador}" descripcion="${descripcion}" premioMontana="${premioMontana}" grafica="${grafica}">
            <div class="dlab-separator bg-primary"></div>
            <h2>Salida: ${salida}, &nbsp &nbsp &nbsp Llegada: ${llegada}</h2>
            <h3>Distancia: ${distancia}</h3>
            <h3>Ganador: ${ganador}</h3>
            <h4>Premio: ${premioMontana}</h4>
            <h4><strong>Descripcion:</strong> ${descripcion}</h4>
            <a class="site-button grafica" id="${_id}" href="#graficas" >RUTA</a>
            <a class="site-button delete" id="${_id}">ELIMINAR</a>
            <a class="site-button update" id="${_id}">EDITAR</a>
          </div>
        </div>
      </div>`;
    });
}
// const formulario = document.getElementById('registrar');
// formulario.addEventListener('submit',newEtapas)
// function newEtapas(e){
//     e.preventDefault();
//     const numeroEtapa = document.getElementById('numeroEtapa').value;
//     const fecha = document.getElementById('fecha').value;
//     const salida = document.getElementById('salida').value;
//     const llegada= document.getElementById('llegada').value;
//     const distancia = document.getElementById('distancia').value;
//     const ganador = document.getElementById('ganador').value;
//     const descripcion = document.getElementById('descripcion').value;
//     const  premioMontana = document.getElementById('premioMontana').value;

//     const registro = {
//         numeroEtapa,
//         fecha,
//         salida,
//         llegada,
//         distancia,
//         ganador,
//         patrocinador,
//         descripcion,
//         premioMontana
//     }
//     console.log(registro);
//     nuevoEtapas(registro)
//     if(validation(registro)){
//          alert("todos los datos son obligatorios")
//      }return nuevoCiclistas(registro)
// }
// // function validation(Objecto){
// //     return !Object.values(Objecto).every(element=>element == '')
// // }

// const eliminar = document.querySelector('#datosEtapas')
// eliminar.addEventListener('click',borrar)

// function borrar(e){
//     if(e.target.classList.contains('delete')){
//         const idequipos = e.target.getAttribute('id');
//         const confir = confirm("desea Eliminarlo?");
//         if(confir){
//             deleteEquipos(idequipos)
//         }
//     }
// }

//grafica 

