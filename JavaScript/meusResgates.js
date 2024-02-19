const meusDados = () => {
    window.location = '../Html/MeuPerfil.html' // foi usado para redirecionar para outra pagina pelo JavaScript
}

const minhasJoias = () => {
    window.location = '../Html/MinhasJoias.html' // foi usado para redirecionar para outra pagina pelo JavaScript
}

const sair = () => {
    window.location = '../index.html' // foi usado para redirecionar para outra pagina pelo JavaScript
}

const mostrarResgates = (dadosApi) => {
    const resgate = document.getElementById('resgates')  //verificando no banco de dados a informação 
  
   
    dadosApi.forEach(element => { // foi usado o ForEach para formar a estrutura de reptição  
        
        resgate.innerHTML+=  // o que vai aparecer na pagina ↓↓↓//
        `
        <div class="card">
                <img class="CardImg" src="${element.imagem}" alt="imagem perfil"/>
                <h5>${element.nome}</h5>
                <p>${element.preco} jóias</p>

            </div>
            `
    })

}

const carregarResgates = async() => {  // async PAUSA a promessa Await RECEBE a promessa
    const resposta = await fetch('https://api-projeto-obfk.onrender.com/usuario/1')  // fetch BUSCA no banco de dados o ususario
    const usuario = await resposta.json()   // transformando a resposta em Json
    mostrarResgates(usuario.produtos)

}
carregarResgates()