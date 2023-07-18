const urlCiclistas = "http://localhost:3309/api/ciclistas"

export const getCiclistas = async ()=>{
    try {  
        const ciclistas = await fetch(urlCiclistas);
        const datoCiclistas = await ciclistas.json();
        return datoCiclistas;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoCiclistas= async(datos)=>{
    try {
        await fetch(urlCiclistas,{
            method: "POST",
            body:JSON.stringify(datos),
            headers:{'Content-Type':'application/json'}
        });window.location.reload()
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}


export const deleteCiclistas = async (borrarr) =>{
    try {
        await fetch(`${urlCiclistas}/${borrarr}`,{
            method:'DELETE'
        });window.location.reload()
    } catch (error) {
        console.log(error);
    }
}

export const getOneID = async ()=>{
    try {
        const algo = await fetch(`${urlCiclistas}/${id}`);
        const dato = await algo.json();
        return dato;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const updateCiclistas = async (datos) => {
    try {
        await fetch(`${urlCiclistas}/${datos.idciclistas}`, {
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