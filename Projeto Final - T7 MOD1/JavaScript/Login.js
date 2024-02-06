const login = () => {
    window.location= "../Html/Home.html "

}

const mostrarDados = (resposta) => {
    

    document.querySelector('#nome').value = resposta[0].nome
    document.querySelector('#email').value = resposta[0].email
    
}

const carregarDados = async() => {
    const dados = await fetch('https://api-projeto-obfk.onrender.com/usuarios')
    console.log(dados)
    const resposta = await dados.json()
    console.log(resposta)

     mostrarDados(resposta)
}
carregarDados()
