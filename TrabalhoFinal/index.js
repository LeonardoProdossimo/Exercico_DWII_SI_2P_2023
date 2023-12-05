onload = limpar();

function temaClaro(){
    location.reload();
}

function temaDark(){
    document.querySelector("#temadark").style.borderColor = "white";
    document.querySelector("#temaclaro").style.borderColor = "white";
    document.querySelector(".divTabela").style.background = "#302d2d";
    document.querySelector(".formulario").style.background = "#302d2d";
    document.querySelector(".formulario").style.borderColor = "white";
    document.querySelector(".divTabela").style.borderColor = "white";
    document.querySelector("#body-index").style.background = "#302d2d";

    document.querySelectorAll("h1").forEach(function (element) {
        element.style.color = "white";
    }); 

    document.querySelectorAll("h3").forEach(function (element) {
        element.style.color = "white";
    });

    document.querySelectorAll("input").forEach(function (element) {
        element.style.background = "white";
    });

    document.querySelectorAll(".popup").forEach(function (element) {
        element.style.background = "#413d3d";
        element.style.borderColor = "white";
    });

    document.querySelectorAll(".divBotaoPopup").forEach(function (element) {
        element.style.color = "black";
        element.style.background = "white";
        element.addEventListener("mouseover", function() {
            element.style.background = "#d4c8c8";
        });
        element.addEventListener("mouseout", function() {
            element.style.background = "white";
        });
    });

    document.querySelectorAll(".divBotao").forEach(function (element) {
        element.style.color = "black";
        element.style.background = "white";
        element.addEventListener("mouseover", function() {
            element.style.background = "#d4c8c8";
        });
        element.addEventListener("mouseout", function() {
            element.style.background = "white";
        });
    });
}

function inserir() {
    var itens = JSON.parse(localStorage.getItem("listaLivros")) == null ? [] : JSON.parse(localStorage.getItem("listaLivros"));

    if ((document.getElementById("tituloLivro").value == "")
        || (document.getElementById("categoriaLivro").value == "")
        || (document.getElementById("autorLivro").value == "")
        || (document.getElementById("anoLivro").value == "" )
        || (document.getElementById("editoraLivro").value == "")) {
            popup(1);

    }else if((document.getElementById("anoLivro").value.length !== 4 )){
        document.getElementById("anoLivro").value = "" 
        popup(2);
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

function popup(tipo) {
    document.querySelectorAll(".popup").forEach(function (element) {
        element.style.display = "none";
    });

    var fosco = document.getElementById("fosco");
    fosco.style.zIndex = "1";
    fosco.style.display = "block"
    fosco.style.position = "fixed";

    if (tipo == 1) {
        var popup = document.getElementById("popup01");
    } else {
        var popup = document.getElementById("popup02");
    }
    popup.style.zIndex = "2";
    popup.style.display = "block";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
}

function ok(){
    document.getElementById("fosco").style.display = "none";
    document.getElementById("popup01").style.display = "none";
    document.getElementById("popup02").style.display = "none";
}