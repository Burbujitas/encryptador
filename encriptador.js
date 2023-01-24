const texto_entrada = document.querySelector(".txt_entrada");
const texto_salida = document.querySelector(".txt_salida");


const diccionario = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btnEncriptar(){
    const textoEncriptado = encriptar(texto_entrada.value);

    texto_salida.value = textoEncriptado;

    texto_entrada.value="";
    texto_salida.style.backgroundImage= "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(texto_entrada.value);

    texto_salida.value = textoEncriptado;

    texto_entrada.value="";
    texto_salida.style.backgroundImage= "none";
}

function btnCopiar(){
   
        texto_salida.select();
   
        document.execCommand("copy");
        
        texto_salida.value="";
      
}

function encriptar(cadenaEncriptada){

  
    cadenaEncriptada = cadenaEncriptada.toLowerCase();

    for(let i = 0;i<diccionario.length;i++){
        if(cadenaEncriptada.includes(diccionario[i][0]))
        {
            cadenaEncriptada = cadenaEncriptada.replaceAll(diccionario[i][0],diccionario[i][1]);
        }

        }
    
    return cadenaEncriptada;
}

function desencriptar(cadenaEncriptada){

    
    cadenaEncriptada = cadenaEncriptada.toLowerCase();

    for(let i = 0;i<diccionario.length;i++){
        if(cadenaEncriptada.includes(diccionario[i][1]))
        {
            cadenaEncriptada=cadenaEncriptada.replaceAll(diccionario[i][1],diccionario[i][0]);
        }

        }
    
    return cadenaEncriptada;
}
 


