function resultado (value){
    //con esto mandamos el resultado a mostrarse en el boton valor
    document.getElementById("valor").innerHTML= value;
    
}

function calcular (){
    //obtenemos el valor actual
    var valor = getvalor();
    //comprobamos que tenga o no el signo de potencia 
    let po = valor.includes('^');
    //comprobamos q tenga o no el signo de raiz
    let ra =valor.includes('¹');
    //declaramos variable para guardar el resultado de la operacion
    var result;
    //si tiene potencia llama a la funcion de potencia
    if ( po ){
        result=potencia(valor);
    }
    //si tiene raiz se llama a la funcion de raiz
    else if (ra) {
        result=raiz(valor);
    }
    //si no tiene ninguno se evalua la operacion con un eval
    else{
         result = eval(valor)
    }
    //regresamos el resultado de la operacion a la funcion que muestra el resultado
    resultado(result);


}

function getvalor(){
    //con el return llamamos al valor que se encuentra en el elemento "valor"
    return(document.getElementById("valor").innerHTML);
}

function add (num){
    //primero se obtiene el valor acutal
    var result = getvalor();
    //comprobamos si el valor es 0 o no un numeor, en caso de que no sea ninguno
    //se agrega el valor del nuevo boton pulsado al anterior
    if (result!='0' || isNaN(num)) resultado(result + num);	
    //en caso de que sí posea 0 o un caracter invalido, el boton da el nuevo valor
	else resultado(num);     

  
}




function potencia(valor){
    //se pasa el valor obtenido mediante el argumento "valor"
    //usando el split separamos el numeor de base de su potencia
    let arr = valor.split('^');
    //se convierten en numeros y se guardan en variables
    let b = Number(arr[0]);
    let p = Number(arr[1]);

    //con esta función se calcula la potencia
    var res = Math.pow(b,p);
    //regresamos el resultado a la funcion calcular
    return res;


    


}

//el ejercicio decia rais cuadrada, pero dado que la forma de obtenerlo
//es muy parecida a la potencia, solo cambiando la potencia a un denominador 
//decidi que pudiera calcular cualquier raiz
function raiz(valor){
    //se separa en 2 el valor para obtener base y raiz
    let arr = valor.split('¹');
    //se guarda la base
    let b = Number(arr[0]);
    //transformamos en denominador el numeor de raiz para sacar la raiz
    let p = (1/Number(arr[1]));

    //guardamos en variable el resultado y lo mandamos a la funcion calcular
    var res = Math.pow(b,p);
    return res;

}

//manda a 0 el numero actual
function del(){
    resultado(0);
  

}