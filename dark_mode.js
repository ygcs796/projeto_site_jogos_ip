// ...existing code...

// Função para alternar o tema
function alternarTema() {
  document.body.classList.toggle('dark');
  // Salva o estado do tema no localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('tema', 'dark');
  } else {
    localStorage.setItem('tema', 'light');
  }
}

// Aplica o tema salvo ao carregar a página
window.onload = function() {
  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  // Adiciona o evento ao botão de tema
  document.getElementById('trilho').onclick = alternarTema;
};

// ...existing code...