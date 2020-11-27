import { $ } from "./funciones.js";
import { obtenerAlumnos,eliminarAlumno } from "./API.js";
(function(){
    const listado=$('#lista-alumnos');
    //eventos
    document.addEventListener('DOMContentLoaded',mostrarAlumnos);
    listado.addEventListener('click',eliminar);
    async function mostrarAlumnos() {
        const alumnos= await obtenerAlumnos();
        alumnos.forEach(({nombre,email,telefono,facultad,id})=>{
            const row=document.createElement('tr');
            row.innerHTML+=`
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${email}</td>
                <td>${telefono}</td>
                <td>${facultad}</td>
                <td>
                    <a href="#" class="btn btn-danger" data-alumno="${id}">Eliminar</a>
                    <a href="editar.html?id=${id}" class="btn btn-warning">Editar</a>
                </td>
            `;

            listado.appendChild(row);
        })
    }

    function eliminar(e){
        if(e.target.classList.contains('btn-danger')){
            const alumnoId=e.target.dataset.alumno*1;
            const confirmar=confirm('¿Deseas Eliminar el registro?')
            if (confirmar) {
               eliminarAlumno(alumnoId)
            }
        }
    }
})();