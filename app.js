// 1.Pide la edad y si es mayor de 18 años indica que ya puede conducir.

function verifyAge(age){
    age > 18 ? 'Ya puede conducir' : 'No puede conducir' 
}

// 2.Pide una nota (número). Muestra la calificación según la nota:
// 0 - 3 Muy deficiente
// 3 - 5 insuficiente
// 5 - 6 suficiente
// 6 - 7 bien
// 7 - 9 notable
// 9 - 10 Sobresaliente
// 

function calificacion(num) {
    function deficiente(){
        console.log("muy deficiente")
    }
    
    function insuficiente(){
        console.log("insuficiente")
    }
    
    function suficiente(){
        console.log("suficiente")
    }
    
    function bien(){
        console.log("bien")
    }
    
    function notable(){
        console.log("notable")
    }
    
    function sobresaliente(){
        console.log("sobresaliente")
    }
    
    let cal = {
        0:  () => deficiente(),
        1:  () => deficiente(),
        2:  () => deficiente(),
        3:  () => deficiente(),
        4:  () => insuficiente(),
        5:  () => insuficiente(),
        6:  () => suficiente(),
        7:  () => bien(),
        8:  () => notable(),
        9:  () => notable(),
        10:  () => sobresaliente(),
    }
    
    cal[num]()
}

// calificacion(1)

// 3.En javascript, Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.


function cadena(){
    let cadena = '';
    while (true) {
        const userInput = prompt('Introduce una cadena de texto:', '');
        if (userInput === 'cancelar') { // Cancelar se presionó
            break;
        }
        cadena += userInput + '-';
    }   
    console.log(cadena);
}

// cadena()



// 4.Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).

// El algoritmo para calcular la letra del dni es el siguiente :
// § El número debe ser entre 0 y 99999999
// § Debemos calcular el resto de la división entera entre el número y el número 23.
// § Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: 
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// § Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// § Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
// 

// Función para calcular la letra del DNI
function calculateDniLetter(dni) {
    // Verificamos que el valor ingresado sea un número entre 0 y 99999999
    if (!isNaN(dni) && parseInt(dni) >= 0 && parseInt(dni) <= 99999999) {
      // Calculamos el resto de la división entera entre el número y el número 23
      const remainder = dni % 23;
      // Definimos las letras correspondientes al resultado
      const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
      // Regresamos la letra correspondiente al resultado
      return letters[remainder];
    } else {
      // Si el valor ingresado no es un número, mostramos un mensaje de error y regresamos null
      alert('Por favor ingrese un número entre 0 y 99999999');
      return null;
    }
  }
  
  // Ejemplo de uso
  while (true) {
    const dni = prompt('Ingrese su DNI:');
    const letter = calculateDniLetter(dni);
    if (letter !== null) {
      alert(`La letra del DNI es ${letter}`);
      break;
    }
  }
  