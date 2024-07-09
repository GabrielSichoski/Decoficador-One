document.addEventListener("DOMContentLoaded", function() {
    var botaoCodificar = document.querySelector(".btn-codificar");
    var botaoDecodificar = document.querySelector(".btn-descodificar");
    var figura = document.querySelector(".figura");
    var resposta = document.querySelector(".caixaresposta");
    var resultado = document.querySelector(".resultado");

    botaoCodificar.onclick = codificar;
    botaoDecodificar.onclick = decodificar;

    function codificar(){
        ocultarAdelante();
        var caixatexto_escrever = recuperarTexto();
        resultado.textContent = encriptarTexto(caixatexto_escrever);
    }

    function decodificar(){
        ocultarAdelante();
        var caixatexto_escrever = recuperarTexto();
        resultado.textContent = decodificarTexto(caixatexto_escrever);
    }

    function recuperarTexto(){
        var caixatexto_escrever = document.querySelector(".caixatexto_escrever");
        return caixatexto_escrever.value;
    }

    function ocultarAdelante(){
        figura.style.display = "none";
        resposta.style.display = "none";
    }

    function encriptarTexto(mensagem){
        var texto = mensagem;
        var textoFinal = "";

        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoFinal += "ai";
            }
            else if(texto[i] == "e"){
                textoFinal += "enter";
            }
            else if(texto[i] == "i"){
                textoFinal += "imes";
            }
            else if(texto[i] == "o"){
                textoFinal += "ober";
            }
            else if(texto[i] == "u"){
                textoFinal += "ufat";
            }
            else{
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function decodificarTexto(mensaje){
        var texto = mensaje;
        var textoFinal = "";

        for(var i = 0; i < texto.length; i++){
            if(texto.substring(i, i+2) == "ai"){
                textoFinal += "a";
                i++;
            }
            else if(texto.substring(i, i+5) == "enter"){
                textoFinal += "e";
                i += 4;
            }
            else if(texto.substring(i, i+4) == "imes"){
                textoFinal += "i";
                i += 3;
            }
            else if(texto.substring(i, i+4) == "ober"){
                textoFinal += "o";
                i += 3;
            }
            else if(texto.substring(i, i+4) == "ufat"){
                textoFinal += "u";
                i += 3;
            }
            else{
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var conteudo = document.querySelector(".resultado").textContent;
        navigator.clipboard.writeText(conteudo);
        console.log("Conteúdo copiado");
    });
});
