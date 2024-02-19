const meusResgates = () => {
    window.location = '../Html/MeusResgates.html' // foi usado para redirecionar para outra pagina pelo JavaScript
}
}

const minhasJoias = () => {
    window.location = '../Html/MinhasJoias.html' // foi usado para redirecionar para outra pagina pelo JavaScript
}
}

const sair = () => {
    window.location = '../index.html' // foi usado para redirecionar para outra pagina pelo JavaScript
}
}

const mostrarDados = (resposta) => {
    

    document.querySelector('#nome').value = resposta[0].nome
    document.querySelector('#email').value = resposta[0].email
    
}

const carregarDados = async() => {
    const dados = await fetch('https://api-projeto-obfk.onrender.com/usuario')
    console.log(dados)
    const resposta = await dados.json()
    console.log(resposta)

     mostrarDados(resposta)
}
carregarDados()