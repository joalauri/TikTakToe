function cargarReloj(){
    // Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo 
    let fechahora = new Date();
    let hora = fechahora.getHours(); 
    let minuto = fechahora.getMinutes(); 
    let segundo = fechahora.getSeconds(); 
    let fechaActual = fechahora.toDateString();
    // Variable meridiano con el valor 'AM' 
    let meridiano = "AM";
    // Si la hora es igual a 0, declaramos la hora con el valor 12 
    if(hora == 0){
        hora = 12;
    }
    // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
    if(hora > 12) {
 
        hora = hora - 12;
 
        // Variable meridiano con el valor 'PM' 
        meridiano = "PM";
 
    }
    // Formateamos los ceros '0' del reloj 
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;
    // Enviamos la hora a la vista HTML 
     let tiempo = `${fechaActual}
      ${hora} : ${minuto} : ${segundo} ${meridiano} ` 
    document.getElementById("relojnumerico").innerText = tiempo;


    // Cargamos el reloj a los 500 milisegundos 
    setTimeout(cargarReloj, 500);
    
}
 
// Ejecutamos la función 'CargarReloj' 
cargarReloj();
 