// Selectores de nodos del DOM

// llamamos un nodo por medio de una variable
        const titulo = document.querySelectorAll('.titulo');
        console.log(titulo); // para ver como opera el dom y que trae title x consola, me muestra el array que creo ya que la clase titulo fue utilizada en vaiors objetos! 


// acceso  este nodo y podemos ver todo los detalles que posee este obejto x consola si tin hijos por ejemplo!
        const datoCapturado = document.getElementById("parrafo1"); //apuntamos a la direccion del objeto
        console.log(datoCapturado); //vemos el objeto por consola

        titulo[0].textContent = "CARTA A KAITO Y YUKI [0] REEMPLAZO"; //pisamos el original
        console.log(titulo[0]);

// innerHTML me permite concatenar texto y etiquetas Html
        let pos = "<strong>REEMPLAZO H6</strong>";
        titulo[1].innerHTML = `Carta a mi hijo y madre ${pos}`; //pisamos el original
        console.log(titulo[1]);


// ------ Usamos codigo jvs para insertar ua lista en le HTML x medio de la manipulacion del DOM ------
const lista = document.querySelector('ul'); //direccione al objeto
const listaNombres = ["Kaito","Yuki","Jorge","Charly"]; //se creo la lista

// propidad que nos permit crear algo con el foreach dond va acrear por cada elemento qu itere va a crar un elemento li -> list item
listaNombres.forEach(nombre => {
// nombre captura el primer elemento ("Kaito") del array

    //se crea el elemento li
    const li = document.createElement("li");
        
    //textContent coloca el contenido capturado por nombre "Kaito"
    li.textContent = nombre; 

    //incorporar a la lista como hjo te lo mando al html, agregar a la etiqueta UL ccon Append child!
    lista.appendChild(li);
});
// Objetivo: me aseguro que nadie pueda ver com cree el li dede el html!


// ----- CONTADOR

let contador = 0; //contador inicializado en cero!

// seleccionamos la ruta del nodo e estae casi hijo en esta caso <p> que al sel el primer elemento del div tiene la posicion 1!
const contadorWebP = document.querySelector('div').children[1]; //traeme a tu hijo 1.
console.log(contadorWebP);

// ruat de los botones
const botonSumar = document.querySelector(".botonS");
const botonRestar = document.querySelector(".botonR");

botonSumar.addEventListener("click", function() {
    contador ++; //la funcion va a incrementar
    contadorWebP.textContent = contador; //aca lo va amostrar en p!
});

botonRestar.addEventListener("click", function() {
    contador --; //la funcion va a decrementar
    contadorWebP.textContent = contador; //aca lo va amostrar en p!
});


// ------------------classs name a ver-------------

// const titulo3 = document.querySelector("#parrafo1");
// console.log(titulo3);

// const titulo4 = document.getElementsByClassName("parrafo1");
// console.log(titulo4);
// const titulo8 = document.getElementsByClassName("vineta");
    // console.log(titulo8);

// // Insertar texto en HTML
// title.textContent = "Hola mundo dime que tal estas?";
// title.innerHTML = "Es una forma de agregar texto y html <br><br><br>";

// // Completado dinamico con array
// const lista = document.querySelector("ul");
// const valores = ["valor1", "valor2", "valor3", "valor4", "valor5", "valor6"];

// for(let i=0; i<valores.length; i++){

//     const li = document.createElement("li");
//     li.textContent = valores[i];
//     lista.appendChild(li);
// }




// // completado dinamico con forech
// valores.forEach(dato => {
//     const li = document.createElement("li");
//     li.textContent = dato;
//     lista.appendChild(li);
// });

// // Selector de nodos hijos y padres, eventos.
// const parrafo = document.querySelector("div").children[1];
// console.log(parrafo);

// const boton = document.querySelector("button");
// const boton2 = document.querySelector("div").children[3];

// let contador = 0;

// boton.addEventListener("click", function(){
//     contador++;
//     parrafo.textContent = contador;
// });

// boton2.addEventListener("click", function(){
//     contador--;
//     parrafo.textContent = contador;
// });

// const input = document.querySelector(".formularioInput").children[1];
// const boton3 = document.querySelector(".formularioInput").children[2];
// const p = document.querySelector(".formularioInput").children[3];

// input.addEventListener("change", (e) =>{
//     p.textContent = e.target.value;
// });