const fs = require("fs");
const games = require("./games.json");

for (const id in games) {
    const jogo = games[id];

    const template = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="pagina_style.css">
    <script src="https://kit.fontawesome.com/8d7727039d.js" crossorigin="anonymous"></script>
    <title>${jogo.nome}</title>
</head>
<body>
    <main id="game-container">
        <h1>${jogo.nome}</h1>
        <img src="${jogo.imagem}" alt="Imagem do jogo">
        <div class='info-and-play-section'>
            <section>
                <h2>Sobre o jogo</h2>
                <p>${jogo.descricao}</p>
            </section>
            <section id='how-to-play-section'>
                <h2>Como jogar</h2>
                <p>${jogo.tutorial}</p>
            </section>
        </div>
        <section>
            <h2>Como baixar o jogo</h2>
            <div id='lista-ordenada'>
                <div>
                    <p>
                        <strong>1.</strong> Clique no botão "Baixar jogo" abaixo
                    </p>
                    <p>
                        <strong>2.</strong> Após clicar, seu navegador irá baixar o arquivo <strong>.zip</strong> do jogo. Salve-o em alguma pasta do seu computador.
                    </p>
                    <p>
                        <strong>3.</strong> Depois de baixar, encontre o arquivo <strong>.zip</strong>, clique com o botão direito e escolha "Extrair tudo..." para descompactar.
                    </p>
                </div>
                <div id='segunda-parte-lista'>
                    <p>
                        <strong>4.</strong> Uma nova pasta será criada. Abra a pasta e depois a subpasta com o mesmo nome do seu arquivo.
                    </p>
                    <p>
                        <strong>5.</strong> Procure por "main.exe" (ou um arquivo de tipo "aplicativo") e dê um duplo clique para iniciar.
                    </p>
                    <p>
                        <strong>6.</strong> Aproveite o jogo! 😊
                    </p>
                </div>
            </div>
        </section>
        <div class="buttons-field">
            <div class="download-btn">
                <i class="fa-solid fa-download"></i>
                <a href="${jogo.download}">Baixar jogo</a>
            </div>
            <div class="github-btn">
                <i class="fa-brands fa-github"></i>
                <a href="${jogo.link_github}" >Acesse o repositório do projeto</a>
            </div>
        </div>
    </main>
</body>
</html>
    `;

    fs.writeFileSync(`${id}.html`, template);
}

console.log("Páginas geradas com sucesso!");
