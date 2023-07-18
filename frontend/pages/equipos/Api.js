const urlEquipos = "http://localhost:3309/equipos/all"
const urlNew =  "http://localhost:3309/equipos/add"
const urlDelete = "http://localhost:3309/equipos/delete"
const urlEquiposID =  "http://localhost:3309/equipos/get"
const urlActualizar = "http://localhost:3309/equipos/update"

export const getEquipos = async ()=>{
    try {  
        const equipos = await fetch(urlEquipos);
        const datoEquipos = await equipos.json();
        return datoEquipos;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoEquipos= async(registro)=>{
    try {
        await fetch(urlNew,{
            method: "POST",
            body:JSON.stringify(registro),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}


export const deleteEquipos = async idequipos =>{
    try {
        await fetch(`${urlDelete}&id=${idequipos}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOneID = async ()=>{
    try {
        const algo = await fetch(`${urlEquiposID}/${id}`);
        const dato = await algo.json();
        return dato;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const updateEquipos = async (datos) => {
    try {
        await fetch(`${urlActualizar}/${datos.idequipos}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
}