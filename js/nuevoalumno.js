import { mostrarAlerta,$ } from "./funciones.js";
import {nuevoAlumno} from "./API.js";
(function(){
    const formulario=$('#formulario');
    formulario.addEventListener('submit',validarFormulario);
    function validarFormulario(e){
        e.preventDefault();

        const nombre=$('#nombre').value;
        const email=$('#email').value;
        const telefono=$('#telefono').value;
        const facultad=$('#facultad').value;

        const alumno={
            nombre,
            email,
            telefono,
            facultad
        }
        //console.log(alumno)
        //console.log(validar(alumno))
        if (validar(alumno)) {
            mostrarAlerta('Todos los campos son obligatorios');

            return;
        }
        nuevoAlumno(alumno);
    }
    const validar=obj=>!Object.values(obj).every(input=>input !== '');
})();

