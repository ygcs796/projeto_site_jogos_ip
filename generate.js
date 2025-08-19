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
                        1. Aperte no botão "Baixar jogo" abaixo
                    </p>
                    <p>
                        2. Após apertar, o site pedirá para que você salve em alguma pasta do seu computador o arquivo '.zip' da pasta do jogo. Escolha uma pasta no seu computador para guardar esse arquivo.
                    </p>
                    <p>
                        3. Após isso, espere um tempo até que o seu navegador baixe o arquivo '.exe' na pasta que você escolheu.    
                    </p>
                </div>
                <div id='segunda-parte-lista'>
                        <p>
                            4. Após o arquivo ser baixado, descompacte ele.
                        </p>
                    <p>
                        5. Depois de descompactar, surgirá uma pasta com o mesmo nome do arquivo '.zip'. Abra essa pasta. Depois de abrir, haverá outra pasta com o mesmo nome. Abra ela também.
                    </p>
                    <p>
                        6. Após isso, abra o arquivo de tipo "aplicativo" ou algo parecido.    
                    </p>
                    <p>
                        7. Aproveite o jogo! 😊    
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
