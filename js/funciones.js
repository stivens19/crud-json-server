export function mostrarAlerta(mensaje){
    const alerta=document.querySelector('.alerta');
    alerta.innerHTML=`
    <div class="alert alert-danger" role="alert">
        <strong>${mensaje}</strong>
    </div>
    `;
    setTimeout(() => {
        alerta.innerHTML='';
    }, 2000);
}

export const $=qs=>document.querySelector(qs);