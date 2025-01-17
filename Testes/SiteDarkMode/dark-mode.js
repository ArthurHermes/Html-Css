document.getElementById("botao").onclick = () => {
    let fundo = document.getElementById("fundo");
    let titulo = document.getElementById("titulo");
    let footer = document.getElementById("footer");
    let pfooter = document.getElementById("pfooter");
    let afooter = document.getElementById("afooter");

    if (fundo.style.backgroundColor == "rgb(26, 26, 26)") {
        fundo.style.backgroundColor = "rgb(212, 211, 211)";
        titulo.style.color = "black";
        footer.style.backgroundColor = "rgb(26, 26, 26)";
        pfooter.style.color = "white";
        afooter.style.color = "white";
    }else{
        fundo.style.backgroundColor = "rgb(26, 26, 26)";
        titulo.style.color = "white";
        footer.style.backgroundColor = "rgb(212, 211, 211)";
        pfooter.style.color = "black";
        afooter.style.color = "black";

    }
    
};
