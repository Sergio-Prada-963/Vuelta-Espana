import { getEquipos, nuevoEquipos, deleteEquipos,getOneID,updateEquipos  } from "./Api.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargaEquipos();
})


async function cargaEquipos(){
    const equipos = await getEquipos();
    const tablaEquipos= document.querySelector('#datosEquipos');
    equipos.forEach(element => {
        const {numeroEquipo, nombre,pais, equipo,director,descripcion,ubicacion,patrocinador,estadio } = element
        tablaEquipos.innerHTML += `
        <tr>
            <td>${numeroEquipo}</td>
            <td>${nombre}</td>
            <td>${pais}</td>
            <td>${equipo}</td>
            <td>${director}</td>
            <td>${descripcion}</td>
            <td>${ubicacion}</td>
            <td>${patrocinador}</td>
            <td>${estadio}</td>
        
            <td><button type="button" class="btn btn-danger delete" id="">Delete</button></td>
        </tr>
        `
    });
}
const formulario = document.getElementById('registrar');
formulario.addEventListener('submit',newEquipos)
function newEquipos(e){
    e.preventDefault();
    const numeroEquipo = document.getElementById('numeroEquipo').value;
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const director= document.getElementById('director').value;
    const descripcion = document.getElementById('descripcion').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const estadio = document.getElementById('estadio').value;
    const registro = {
        numeroEquipo,
        nombre,
        pais,
        director,
        descripcion,
        ubicacion,
        patrocinador,
        estadio
    }
    console.log(registro);
    nuevoCiclistas(registro)
    if(validation(registro)){
         alert("todos los datos son obligatorios")
     }return nuevoCiclistas(registro)
}
// function validation(Objecto){
//     return !Object.values(Objecto).every(element=>element == '')
// }

const eliminar = document.querySelector('#datosEquipos')
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