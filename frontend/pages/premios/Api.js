const urlPremios = "http://localhost:3309/premios/all"
const urlNew =  "http://localhost:3309/premios/add"
const urlDelete = "http://localhost:3309/premios/delete"
const urlPremiosID =  "http://localhost:3309/premios/get"
const urlActualizar = "http://localhost:3309/premios/update"

export const getPremios = async ()=>{
    try {  
        const premios = await fetch(urlPremios);
        const datoPremios = await premios.json();
        return datoPremios;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoPremios = async(registro)=>{
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


export const deletePremios = async idpremios =>{
    try {
        await fetch(`${urlDelete}&id=${idpremios}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOneID = async ()=>{
    try {
        const algo = await fetch(`${urlPremiosID}/${id}`);
        const dato = await algo.json();
        return dato;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const updatePremios = async (datos) => {
    try {
        await fetch(`${urlActualizar}/${datos.idpremios}`, {
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