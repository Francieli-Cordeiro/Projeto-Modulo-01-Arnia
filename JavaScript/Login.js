const login = () => {
    window.location= "../Html/Home.html " // foi usado para redirecionar para outra pagina pelo JavaScript
}


const mostrarDados = (resposta) => {
    

    document.querySelector('#nome').value = resposta[0].nome  // salvar as informaçoes de nome na pagina do perfil 
    document.querySelector('#email').value = resposta[0].email // salvar as informaçoes de email na pagina do perfil 
    
}

const carregarDados = async() => { 
    const dados = await fetch('https://api-projeto-obfk.onrender.com/usuario') // usao para salvar os dados do usuario 
    console.log(dados)
    const resposta = await dados.json()
    console.log(resposta)

     mostrarDados(resposta)
}
carregarDados()
