const textarea = document.querySelector(".text_area");
const textarea2 = document.querySelector(".text_area2");

function btn_encriptar(){
  var textoEncriptado = encriptar();
  textarea2.value = textoEncriptado;
  textarea.value = ""
}

function btn_desencriptar(){
  var textoEncriptado = desEncriptar();
  textarea2.value = textoEncriptado;
  textarea.value = ""
}

function btn_copiar(){
  copiarContenido();
}

function encriptar (){
  var textoReemplazado = textarea.value.replace(/(a|e|i|o|u)/g, function(match) {
    switch (match.toLowerCase()) {
        case 'a':
        return 'ai';
        case 'e':
        return 'enter';
        case 'i':
        return 'imes';
        case 'o':
        return 'ober';
        case 'u':
        return 'ufat';
        default:
        return match;
    }
    });
    return textoReemplazado;
}

function desEncriptar (){
  var textoRestaurado = textarea.value.replace(/(ai|enter|imes|ober|ufat)/g, function(match) {
    switch (match.toLowerCase()) {
      case 'ai':
        return 'a';
      case 'enter':
        return 'e';
      case 'imes':
        return 'i';
      case 'ober':
        return 'o';
      case 'ufat':
        return 'u';
      default:
        return match;
    }
  });
  return textoRestaurado;
}

function copiarContenido() {
  
  textarea2.select();
  navigator.clipboard.writeText(textarea2.value)
  textarea2.value = "";
  alert("Texto Copiado")

}
  

