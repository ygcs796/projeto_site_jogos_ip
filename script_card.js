const mostrar_popup = document.getElementById("pop_up_btn")
const conteudo_popup = document.getElementById("pop_up")
const tela_escura = document.getElementById("tela_escura")
const fechar_popu = document.getElementById("fechar_btn")
mostrar_popup.addEventListener('click', () => {
  conteudo_popup.style.display = 'flex'; // muda de 'none' para 'flex'
  tela_escura.style.display = "flex";
});
fechar_popu.addEventListener("click", () => {
    conteudo_popup.style.display= "none";
    tela_escura.style.display = "none"
})

