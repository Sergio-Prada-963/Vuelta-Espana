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
				<div class="dlab-info" numeroCiclista="${numeroCiclista}" nombreCiclista ="${nombreCiclista}" equipo="${equipo}" nacionalidad="${nacionalidad}" edad="${edad}" recorrido="${recorrido}" puntos="${puntos}" lider="${lider}" rendimiento="${rendimiento}" img="${img}">
					<h2 class="dlab-title m-t0"><a>${nombreCiclista}</a></h2>
					<div class="dlab-separator bg-primary"></div>
					<h3>${equipo}, #${numeroCiclista}</h3>
					<p>${nacionalidad}, Edad: ${edad}, Recorrido: ${recorrido}</p>
					<a href="#estadisticass" class="site-button estadisticass" id="${_id}">ESTADISTICAS</a>
					<a class="site-button delete" id="${_id}">ELIMINAR</a>
					<a class="site-button update" id="${_id}">EDITAR</a>
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

const btnOption = document.querySelector('.datoss');
btnOption.addEventListener('click', borrar)
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
//values al actualizar
btnOption.addEventListener('click', update)
function update(e){
	if(e.target .classList.contains('update')){
		const ciclista = e.target.parentElement;
		document.getElementById('numeroU').value = ciclista.getAttribute('numeroCiclista')
		document.getElementById('nombreU').value = ciclista.getAttribute('nombreCiclista')
		document.getElementById('equipoU').value = ciclista.getAttribute('equipo')
		document.getElementById('nacionalidadU').value = ciclista.getAttribute('nacionalidad')
		document.getElementById('edadU').value = ciclista.getAttribute('edad')
		document.getElementById('recorridoU').value = ciclista.getAttribute('recorrido')
		document.getElementById('puntosU').value = ciclista.getAttribute('puntos')
		document.getElementById('liderU').value = ciclista.getAttribute('lider')
		document.getElementById('rendimientoU').value = ciclista.getAttribute('rendimiento')
		document.getElementById('imgU').value = ciclista.getAttribute('img')
		document.getElementById('nuevooU').classList.add(e.target.getAttribute('id'))
	}
}

const updateCiclista = document.getElementById('nuevooU');
updateCiclista.addEventListener('click',actualizar);
function actualizar(e){
	e.preventDefault();
	const datosA = {
		numeroCiclista: document.getElementById('numeroU').value,
		nombreCiclista: document.getElementById('nombreU').value,
		equipo: document.getElementById('equipoU').value,
		nacionalidad: document.getElementById('nacionalidadU').value,
		edad: document.getElementById('edadU').value,
		recorrido: document.getElementById('recorridoU').value,
		puntos: document.getElementById('puntosU').value, 
		lider: document.getElementById('liderU').value,
		rendimiento: document.getElementById('rendimientoU').value,
		img: document.getElementById('imgU').value,
		_id: updateCiclista.getAttribute('class')
	}
	console.log(datosA);
	updateCiclistas(datosA);
}