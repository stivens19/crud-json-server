import { obtenerAlumno,editarAlumno } from './API.js';
import { $,mostrarAlerta } from "./funciones.js";
(function(){
    //campos
    const nombreI=$('#nombre');
    const emailI=$('#email');
    const telefonoI=$('#telefono');
    const facultadI=$('#facultad');
    const idI=$('#id');
    document.addEventListener('DOMContentLoaded',async ()=>{
        const parametrosURL= new URLSearchParams(window.location.search);
        const idAlumno=parametrosURL.get('id');
        const alumno=await obtenerAlumno(idAlumno);
        mostrarAlumno(alumno);

        const formulario=$('#formulario');
        formulario.addEventListener('submit',validarAlumno);

    })
    const mostrarAlumno=({nombre,email,telefono,facultad,id})=>{
        nombreI.value=nombre;
        emailI.value=email;
        telefonoI.value=telefono;
        facultadI.value=facultad;
        idI.value=id;
    }
    function validarAlumno(e) {
        e.preventDefault();
        const alumno={
            nombre:nombreI.value,
            email:emailI.value,
            telefono:telefonoI.value,
            facultad:facultadI.value,
            id:idI.value*1
        }
        if (validar(alumno)) {
            mostrarAlerta('Todos los campos son obligatorios');

            return;
        }
        editarAlumno(alumno)
        
    }
    const validar=obj=>!Object.values(obj).every(input=>input !== '');
})();