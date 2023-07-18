const urlEtapas = "http://localhost:3309/etapas/all"
const urlNew =  "http://localhost:3309/etapas/add"
const urlDelete = "http://localhost:3309/etapas/delete"
const urlEtapasID =  "http://localhost:3309/etapas/get"
const urlActualizar = "http://localhost:3309/etapas/update"

export const getEquipos = async ()=>{
    try {  
        const etapas = await fetch(urlEtapas);
        const datoEtapas = await etapas.json();
        return datoEtapas;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoEtapas = async(registro)=>{
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


export const deleteEtapas = async idetapas =>{
    try {
        await fetch(`${urlDelete}&id=${idetapas}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOneID = async ()=>{
    try {
        const algo = await fetch(`${urlEtapasID}/${id}`);
        const dato = await algo.json();
        return dato;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const updateEtapas = async (datos) => {
    try {
        await fetch(`${urlActualizar}/${datos.idetapas}`, {
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