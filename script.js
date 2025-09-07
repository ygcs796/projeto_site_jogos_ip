// Seleciona a caixa de busca e todos os cards
const campoBusca = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

// Detecta quando o usuário digita algo
campoBusca.addEventListener("input", function() {
  const texto = campoBusca.value.toLowerCase(); // pega o que foi digitado

  // Percorre todos os cards
  cards.forEach(card => {
    const titulo = card.querySelector("h2").innerText.toLowerCase();

    // Se o título contém o texto buscado → mostra o card
    if (titulo.includes(texto)) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none"; // senão, esconde
    }
  });
});