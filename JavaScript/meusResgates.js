const meusDados = () => {
    window.location = '../Html/MeuPerfil.html'
}

const minhasJoias = () => {
    window.location = '../Html/MinhasJoias.html'
}

const sair = () => {
    window.location = '../index.html'
}

const mostrarResgates = (dadosApi) => {
    const resgate = document.getElementById('resgates')
  
    dadosApi.forEach(element => {
        resgate.innerHTML+=
        `
        <div class="card">
                <img class="CardImg" src="${element.imagem}" alt="imagem perfil"/>
                <h5>${element.nome}</h5>
                <p>${element.preco} jóias</p>

            </div>
            `
    })

}

const carregarResgates = async() => {
    const resposta = await fetch('https://api-projeto-obfk.onrender.com/usuario/1') 
    const usuario = await resposta.json()
    mostrarResgates(usuario.produtos)

}
carregarResgates()