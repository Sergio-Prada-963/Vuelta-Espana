const urlEtapas = "http://localhost:3309/api/etapas"

export const getEtapas = async ()=>{
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
        await fetch(urlEtapas,{
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
        await fetch(`${urlEtapas}&id=${idetapas}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOneID = async ()=>{
    try {
        const algo = await fetch(`${urlEtapas}/${id}`);
        const dato = await algo.json();
        return dato;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const updateEtapas = async (datos) => {
    try {
        await fetch(`${urlEtapas}/${datos.idetapas}`, {
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