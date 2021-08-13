//creo una constante donde llamo a todas las class 'box'
const boxes = document.querySelectorAll('.box');

//llamo al evento scroll y cuando se ejecuta, me llama a la función
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {

	//a la constante cuando baja el scroll la altura del viewport me la dividis y multiplicas
    const showCircle = window.innerHeight / 6 * 3;

    //a boxes me lo ejecutas 'forEarch' por cada elemento segun las condiciones de la siguiente funcion
    boxes.forEach( box => {

    	//en esta constante me vas a almacenar cada box segun su tamaño y posicion del viewport 
        const boxTop = box.getBoundingClientRect().top;

        //si el viewport del box 'circulo con imagen' almacenado en boxTop 
        //es menor que el viewport del box alamacenado en showCircle 
        //me vas a ejecutar las siguientes condiciones:
        if(boxTop < showCircle) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

//-------------------- BITÁCORA --------------------//
const open = document.getElementById('open');
const modalBitacora = document.getElementById('modal-bitacora');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modalBitacora.classList.add('show');  
});

close.addEventListener('click', () => {
  modalBitacora.classList.remove('show');
});