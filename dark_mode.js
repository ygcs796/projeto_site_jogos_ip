const trilho = document.getElementById('trilho')
const body = document.querySelector('body')

trilho.addEventListener('click', () => {
    body.classList.toggle('dark')
})