const login = () => {
    window.location= "../Html/Login.html "

}

const mostrarDados = (resposta) => {
    

    document.querySelector('#nome').value = resposta[0].nome
    document.querySelector('#email').value = resposta[0].email