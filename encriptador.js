
const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const copyBtn = document.querySelector('#copy-btn');




function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ='';
    mensaje.style.backgraundImage = 'none'
}



// function encriptar(stringEncriptada){
//     let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o','ober' ], ['u', 'ufat']]
//     stringEncriptada  = stringEncriptada.toLowerCase()
//     for(let i = 0; i < matrizCodigo.length; i++ ){
//         if(stringEncriptada.includes(matrizCodigo[i][0])){
//             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])            
//         }
//     }
//     return stringEncriptada
// }

function encriptar(stringEncriptada) {
    const matrizCodigo = [
      ['e', 'enter'],
      ['i', 'imes'],
      ['a', 'ai'],
      ['o', 'ober'],
      ['u', 'ufat']
    ];
    // Validar entrada
    const regex = /^[a-z ]+$/;
    if (!regex.test(stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        alert("Solo se permiten letras minúsculas sin acentos");
        alert("ingrese un texto para encriptar")
        return;
    }
    
  
    // Convertir a minúsculas sin acentos
    stringEncriptada = stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
    // Encriptar
    matrizCodigo.forEach(([letra, codigo]) => {
      stringEncriptada = stringEncriptada.replaceAll(letra, codigo);
    });
  
    return stringEncriptada;
  }
  
// function encriptar(stringEncriptada) {
//     const matrizCodigo = [
//       ['e', 'enter'],
//       ['i', 'imes'],
//       ['a', 'ai'],
//       ['o', 'ober'],
//       ['u', 'ufat']
//     ];
  
  
//     // Encriptar
//     stringEncriptada = stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
//     matrizCodigo.forEach(([letra, codigo]) => {
//       stringEncriptada = stringEncriptada.replaceAll(letra, codigo);
//     });
  
//     return stringEncriptada;
//   }
  
function botonDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value)
    mensaje.value = textoDesencriptado
    textArea.value ='';
}

// function desencriptar(stringDesencriptado) {
//     const matrizCodigo = [
//       ['e', 'enter'],
//       ['i', 'imes'],
//       ['a', 'ai'],
//       ['o', 'ober'],
//       ['u', 'ufat']
//     ];
  
//     // Validar entrada
//     const regex = /^[a-z ]+$/;
//     if (!regex.test(stringDesencriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
//       alert("Solo se permiten letras minúsculas sin acentos");
//       return;
//     }
  
//     // Desencriptar
//     stringDesencriptado = stringDesencriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
//     matrizCodigo.forEach(([letra, codigo]) => {
//       stringDesencriptado = stringDesencriptado.replaceAll(codigo, letra);
//     });
  
//     return stringDesencriptado;
//   }
  



function desencriptar(stringDesencriptado) {
    const matrizCodigo = [
      ['e', 'enter'],
      ['i', 'imes'],
      ['a', 'ai'],
      ['o', 'ober'],
      ['u', 'ufat']
    ];
  
    // Convertir a minúsculas sin acentos
    stringDesencriptado = stringDesencriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
    // Desencriptar
    matrizCodigo.forEach(([letra, codigo]) => {
      stringDesencriptado = stringDesencriptado.replaceAll(codigo, letra);
    });
  
    return stringDesencriptado;
  }
  


// function desencriptar(stringDesencriptado){
//     let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o','ober' ], ['u', 'ufat']]
//     stringDesencriptado  = stringDesencriptado.toLowerCase()
//     for(let i = 0; i < matrizCodigo.length; i++ ){
//         if(stringDesencriptado.includes(matrizCodigo[i][1])){
//             stringDesencriptado = stringDesencriptado.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0])            
//         }
//     }
//     return stringDesencriptado
// }
function copiarTexto() {
    const textoCopiar = mensaje.value;
    navigator.clipboard.writeText(textoCopiar)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar texto: ', err);
      });
  }
  






















