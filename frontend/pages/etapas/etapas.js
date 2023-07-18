import { getEtapas, nuevoEtapas, deleteEtapas,getOneID,updateEtapas  } from "./Api.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargaEtapas();
})


async function cargaEtapas(){
    const etapas = await getEtapas();
    const tablaEtapas= document.querySelector('#datosEtapas');
    etapas.forEach(element => {
        const {numeroEtapa, fecha,salida, llegada,distancia,ganador,descripcion,premioMontana} = element
        tablaEtapas.innerHTML += `
        <tr>
            <td>${numeroEtapa}</td>
            <td>${fecha}</td>
            <td>${salida}</td>
            <td>${llegada}</td
            <td>${distancia}</td
            <td>${ganador}</td>
            <td>${descripcion}</td>
            <td>${premioMontana}</td>
           
        
            <td><button type="button" class="btn btn-danger delete" id="">Delete</button></td>
        </tr>
        `
    });
}
const formulario = document.getElementById('registrar');
formulario.addEventListener('submit',newEtapas)
function newEtapas(e){
    e.preventDefault();
    const numeroEtapa = document.getElementById('numeroEtapa').value;
    const fecha = document.getElementById('fecha').value;
    const salida = document.getElementById('salida').value;
    const llegada= document.getElementById('llegada').value;
    const distancia = document.getElementById('distancia').value;
    const ganador = document.getElementById('ganador').value;
    const descripcion = document.getElementById('descripcion').value;
    const  premioMontana = document.getElementById('premioMontana').value;

    const registro = {
        numeroEtapa,
        fecha,
        salida,
        llegada,
        distancia,
        ganador,
        patrocinador,
        descripcion,
        premioMontana
    }
    console.log(registro);
    nuevoEtapas(registro)
    if(validation(registro)){
         alert("todos los datos son obligatorios")
     }return nuevoCiclistas(registro)
}
// function validation(Objecto){
//     return !Object.values(Objecto).every(element=>element == '')
// }

const eliminar = document.querySelector('#datosEtapas')
eliminar.addEventListener('click',borrar)

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idequipos = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteEquipos(idequipos)
        }
    }
}