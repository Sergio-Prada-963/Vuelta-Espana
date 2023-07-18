import { getPremios, nuevoPremios, deletePremios,getOneID,updatePremios  } from "./Api.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargaPremios();
})


async function cargaPremios(){
    const premios = await getPremios();
    const tablaPremios= document.querySelector('#datosPremios');
    premios.forEach(element => {
        const {nombre, descripcion,ganador} = element
        tablaPremios.innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${descripcion}</td>
            <td>${ganador}</td>
            <td><button type="button" class="btn btn-danger delete" id="">Delete</button></td>
        </tr>
        `
    });
}
const formulario = document.getElementById('registrar');
formulario.addEventListener('submit',newEtapas)
function newEtapas(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const ganador = document.getElementById('ganador').value;
    const llegada= document.getElementById('llegada').value;


    const registro = {
        nombre,
        descripcion,
        ganador
    }
    console.log(registro);
    nuevoPremios(registro)
    if(validation(registro)){
         alert("todos los datos son obligatorios")
     }return nuevoPremios(registro)
}
// function validation(Objecto){
//     return !Object.values(Objecto).every(element=>element == '')
// }

const eliminar = document.querySelector('#datosPremios')
eliminar.addEventListener('click',borrar)

function borrar(e){
    if(e.target.classList.contains('delete')){
        const idpremios = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteEquipos(idpremios)
        }
    }
}