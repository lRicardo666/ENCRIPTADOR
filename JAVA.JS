function encriptar() {
    let text = document.getElementById("text").value;
    let titulo__encriptado = document.getElementById("titulo__encriptado");
    let LETRERO = document.getElementById("LETRERO");
    let Image1 = document.getElementById("Image1");
  
    let textoCifrado = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (text.length != 0) {
      document.getElementById("text").value = textoCifrado;
      titulo__encriptado.textContent = "Texto encriptado con éxito";
      LETRERO.textContent = "";
      Image1.src = "./IMAGENES/encriptado.jpg";
    } else {
      Image1.src = "./IMAGENES/muñeco.png";
      titulo__encriptado.textContent = "Ningún mensaje fue encontrado";
      LETRERO.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      Swal.fire({
        title: "Ooops!",
        text: "Debes ingresar un texto!",
        icon: "warning"
      });
    }
  }
  
  function desencriptar() {
    let text = document.getElementById("text").value;
    let titulo__encriptado = document.getElementById("titulo__encriptado");
    let LETRERO = document.getElementById("LETRERO");
    let Image1 = document.getElementById("Image1");
  
    let textoCifrado = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (text.length != 0) {
        document.getElementById("text").value = textoCifrado;
        titulo__encriptado.textContent = "Texto desencriptado con éxito";
        LETRERO.textContent = "";
        Image1.src = "./IMAGENES/desencriptado.jpg";
      } else {
        Image1.src = "./IMAGENES/muñeco.png";
        titulo__encriptado.textContent = "Ningún mensaje fue encontrado";
        LETRERO.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({
          title: "Ooops!",
          text: "Debes ingresar un texto!",
          icon: "warning"
        });
      }
  }

  window.onload = function() {
    const textarea = document.querySelector('.text');
    textarea.focus();
    textarea.setSelectionRange(0, 0);  // Coloca el cursor al inicio del textarea
  };

  const textarea = document.querySelector('.text');
textarea.value = '';