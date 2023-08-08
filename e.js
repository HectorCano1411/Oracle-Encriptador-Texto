
const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const copyBtn = document.querySelector('#copy-btn');
const desencriptarBtn = document.querySelector('#desencriptar-btn'); // Nuevo botón para desencriptar

// Función para encriptar el texto ingresado en el textArea
function botonEncriptar() {
  // Validar entrada
  const stringEncriptada = textArea.value.trim();
  const regex = /^[a-z ]+$/;
  if (!regex.test(stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
    alert("Solo se permiten letras minúsculas sin acentos");
    return;
  }

  // Encriptar
  const matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ];
  let textoEncriptado = stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  matrizCodigo.forEach(([letra, codigo]) => {
    textoEncriptado = textoEncriptado.replaceAll(letra, codigo);
  });

  // Actualizar mensaje y vaciar textArea
  mensaje.value = textoEncriptado;
  textArea.value = '';
  mensaje.style.backgraundImage = 'none';
}

// Función para desencriptar el texto ingresado en el textArea
function botonDesencriptar() {
  // Validar entrada
  const stringEncriptada = mensaje.value.trim(); // Tomar el texto encriptado desde el mensaje
  if (stringEncriptada === '') {
    alert("Ingrese un mensaje para desencriptar");
    return;
  }
  const regex = /^[a-z ]+$/;
  if (!regex.test(stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
    alert("Solo se permiten letras minúsculas sin acentos");
    return;
  }

  // Desencriptar
  const matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ];
  let textoDesencriptado = stringEncriptada.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  matrizCodigo.forEach(([letra, codigo]) => {
    textoDesencriptado = textoDesencriptado.replaceAll(codigo, letra);
  });

  // Actualizar mensaje y vaciar textArea
  mensaje.value = textoDesencriptado;
  textArea.value = '';
}

// Función para copiar el texto del mensaje al portapapeles
function copiarTexto() {
  const textoCopiar = mensaje.value;
  navigator.clipboard.writeText(textoCopiar)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar texto: ',err);
         });
                  }