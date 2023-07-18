import { getCiclistas, nuevoCiclistas, deleteCiclistas, getOneID, updateCiclistas  } from "./Api.js";

document.addEventListener('DOMContentLoaded',cargaCiclistas)


async function cargaCiclistas(){
    const ciclistas = await getCiclistas();
    const tablaCiclistas = document.querySelector('.datoss');
    ciclistas.forEach(element => {
        const {_id, numeroCiclista, nombreCiclista ,equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img } = element
        tablaCiclistas.innerHTML += `
        <div class="col-md-3 col-lg-2 col-sm-2 m-b2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s" style="visibility: visible; animation-duration: 2s; animation-delay: 0.4s; animation-name: fadeInUp;">
			<div class="service-box3">
				<div class="dlab-media"> <a ><img src="${img}" alt="imagen"></a> </div>
				<div class="dlab-info" recorrido="${recorrido}" puntos="${puntos}" lider="${lider}" rendimiento="${rendimiento}">
					<h2 class="dlab-title m-t0"><a>${nombreCiclista}</a></h2>
					<div class="dlab-separator bg-primary"></div>
					<h3>${equipo}, #${numeroCiclista}</h3>
					<p>${nacionalidad}, Edad: ${edad}, Recorrido: ${recorrido}</p>
					<a href="#estadisticass" class="site-button estadisticass" id="${_id}">ESTADISTICAS</a>
					<a class="site-button delete" id="${_id}">ELIMINAR</a>
					<a class="site-button" id="${_id}">EDITAR</a>
				</div>
			</div>
		</div>`;
    });
}

const nuevo = document.getElementById('newCiclista');
nuevo.addEventListener('submit', registroNew);
function registroNew(e){
	e.preventDefault();
	const datos = {
		numeroCiclista : document.getElementById('numero').value,
		nombreCiclista : document.getElementById('nombre').value,
		equipo : document.getElementById('equipo').value,
		nacionalidad : document.getElementById('nacionalidad').value,
		edad : document.getElementById('edad').value,
		recorrido : document.getElementById('recorrido').value,
		puntos : document.getElementById('puntos').value,
		lider : document.getElementById('lider').value,
		rendimiento : document.getElementById('rendimiento').value,
		img : document.getElementById('img').value
	}
	console.log(datos);
	nuevoCiclistas(datos)
}

const btnDelete = document.querySelector('.datoss');;
btnDelete.addEventListener('click', borrar)
function borrar(e){
	if(e.target.classList.contains('delete')){
		const borrarr = e.target.getAttribute('id')
		console.log(borrarr);
		const confirmar = confirm("desea Eliminarlo?");
        if(confirmar){
            deleteCiclistas(borrarr);
        }
	}
}

/* const boton = document.querySelector('#nuevoo')
boton.addEventListener('click',(e)=>{e.preventDefault();}) */