onload = limpar();

function temaClaro(){
    location.reload();
}

function temaDark(){
    document.querySelector(".formulario").style.background = "#302d2d";
    document.querySelector("#body-index").style.background = "#302d2d";
    document.querySelector(".divBotao").style.background = "white";
    document.querySelector(".divBotao").style.color = "#302d2d";

    var h1 = document.getElementsByTagName("h1");
    for (var i = 0; i < h1.length; i++) {
        h1[i].style.color = "white";
    }

    var h3 = document.getElementsByTagName("h3");
    for (var i = 0; i < h3.length; i++) {
        h3[i].style.color = "white";
    }

    var input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        input[i].style.background = "white";
    }
}

function inserir() {
    var itens = JSON.parse(localStorage.getItem("listaLivros")) == null ? [] : JSON.parse(localStorage.getItem("listaLivros"));

    if ((document.getElementById("tituloLivro").value == "") ||
        (document.getElementById("categoriaLivro").value == "") ||
        (document.getElementById("autorLivro").value == "") ||
        (document.getElementById("anoLivro").value == "" ) ||
        (document.getElementById("editoraLivro").value == "")) {
        alert("Todos os campos são obrigatórios");
    }else if((document.getElementById("anoLivro").value.length !== 4 )){
        document.getElementById("anoLivro").value = "" 
        alert("O ano do livro deve conter 4 digitos");
    }else {
        var objeto = {
            "titulo": document.getElementById("tituloLivro").value,
            "categoria": document.getElementById("categoriaLivro").value,
            "autor": document.getElementById("autorLivro").value,
            "ano": document.getElementById("anoLivro").value,
            "editora": document.getElementById("editoraLivro").value
        }
        itens.push(objeto);
        localStorage.setItem("listaLivros", JSON.stringify(itens));
        limpar();
    }
}

function limpar() {
    document.getElementById("tituloLivro").value = "";
    document.getElementById("categoriaLivro").value = "";
    document.getElementById("autorLivro").value = "";
    document.getElementById("anoLivro").value = "";
    document.getElementById("editoraLivro").value = "";
    listar();
}

function listar() {
    var tab = document.getElementById("tabela");
    var itens = JSON.parse(localStorage.getItem("listaLivros")) == null ? [] : JSON.parse(localStorage.getItem("listaLivros"));
    document.getElementById("tabela").innerHTML = "";

    if (itens.length != 0) {
        tab.innerHTML += "<th>Título</th><th>Categoria</th><th>Autor</th><th>Ano</th><th>Editora</th><th>Excluir</th>";

        for (var i in itens) {
            tab.innerHTML += "<tr><td>"
                + itens[i].titulo
                + "</td><td>"
                + itens[i].categoria
                + "</td><td>"
                + itens[i].autor
                + "</td><td>"
                + itens[i].ano
                + "</td><td>"
                + itens[i].editora
                + "</td><td>"
                + "<a href='#' onclick='excluir(" + i + ")'>Excluir</a>"
                + "</td></tr>";
        }
    }
}

function excluir(index) {
    var listaLivros = JSON.parse(localStorage.getItem("listaLivros")) == null ? [] : JSON.parse(localStorage.getItem("listaLivros"));
    listaLivros.splice(index, 1);
    localStorage.setItem("listaLivros", JSON.stringify(listaLivros));
    listar();
}