const url='http://localhost:4000/alumnos';

export const nuevoAlumno=async alumno=>{
    try {
        await fetch(url,{
            method:'POST',
            body:JSON.stringify(alumno),
            headers:{
                'Content-type':'application/json'
            }
        });
        window.location.href='index.html';
    } catch (error) {
        console.log(error)
    }
}

export const obtenerAlumnos=async ()=>{
    try {
        const resultado=await fetch(url);
        const alumnos=await resultado.json();

        return alumnos;
    } catch (error) {
        console.log(error)
    }
}

export const eliminarAlumno=async id=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

export const obtenerAlumno=async id=>{
    try {
        const resultado=await fetch(`${url}/${id}`);
        const alumno=await resultado.json();
        return alumno;
    } catch (error) {
        console.log(error)
    }
}

export const editarAlumno= async alumno=>{
    try {
        await fetch(`${url}/${alumno.id}`,{
            method:'PUT',
            body:JSON.stringify(alumno),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href='index.html';
    } catch (error) {
        console.log(error)
    }
}