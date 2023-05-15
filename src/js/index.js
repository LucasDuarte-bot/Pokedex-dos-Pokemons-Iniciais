alert("Bem-Vindos a Pokédex dos Pokémons inicias aqui estão os Pokémons iniciais, e seus processos de evolução!");

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {

        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

