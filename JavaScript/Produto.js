const getProduto = async(id) => { // GET "pega " O PRODUTO PELO id
    const resposta = await fetch(`https://api-projeto-obfk.onrender.com/produtos/${id}`)  //verificando no banco de dados o produto que contem este id
    const dados = await resposta.json()   //Transforma a resposta em formato json
    return dados     //Retorna apenas um único produto, pois estamos buscando por ID e não por array de produtos
}
// vai mostra na pagina /* o que vai aparecer no html ↓↓↓*/
const mostrarProduto = (produtos) => { 
    let div = document.getElementById("produtoSelecionado") // estou pegando a div do html pelo id produtos selecionado. // usei let porque os dados mudam 
    
    div.innerHTML += // colocarei dentro da div usando o innerhtml as caracteristicas do produto ( imagem,nome,preço,descrição)

    `
    <div>
        <img class= 'imagemProduto'src="${produtos.imagem}" alt="imagemDo Produto">
    </div>
    <div>
        <h2 class='nomeProduto'>${produtos.nome}</h2>
        <p><span> Por: <b>${produtos.preco}</b> <img class="imgIconeJoia01" src="../Imagem/icone joia.png" alt="imagem de Joia"> </span></p>
        <p>${produtos.descricao}</p>
        <button class='resgatar' onclick="resgatarProduto('${produtos.id}')">Resgatar</button>
    </div> 
    `
}

const resgatarProduto = async (id) => {
    const resposta = await fetch(`https://api-projeto-obfk.onrender.com/produtos/${id}`)  //acessando no banco de dados o produto que contem este id
    const produto = await resposta.json()   //Transforma a resposta em formato json "envia para api "

    const usuario = await fetch ('https://api-projeto-obfk.onrender.com/usuario/1') // estou acessando api para pegar o usuario 
    const usuario1 = await usuario.json() // transformando o usuario em Json "envio para api"

    let produtos = usuario1.produtos // estou pegando a lista de produtos e adicionando em uma variavel 
    produtos.push(produto) // estou adicionando o produto capiturado no id dentro da lista de produtos de usuarios 

   usuarioPronto = { 
    // ↑↑ e um objeto //
        
        "id": usuario1.id,   // dentro do objeto ficam as classes //
        "login": usuario1.login, // dentro do objeto ficam as classes //
        "senha": usuario1.senha, // dentro do objeto ficam as classes //
        "nome": usuario1.nome, // dentro do objeto ficam as classes //
        "email": usuario1.email,  // dentro do objeto ficam as classes //
        "produtos": produtos
    }
    await fetch ('https://api-projeto-obfk.onrender.com/usuario/1',{ // estou acessando o local do meu ususario criado
    method:'PUT', // estou ultilizando o metodo PUT para atualizar o usuario que eu acessei 
    headers:{ // este conteudo e obrigatório 
        'Accept':'application/json, text/plain, /',
        'Content-Type':'application/json'
    },
    body: JSON.stringify(usuarioPronto) // estou atualizando o usuario pelo que foi montado aqui. 
}) 
    // aqui eu pegarei o produto e colocarei dentro da lista de produtos do usuario e enviarei para proxima pagina
    //passando o id 
   window.location = `../Html/produtoResgatado.html?id=${id}`  // foi usado para redirecionar para outra pagina pelo JavaScript
}

// vai buscar no html 
const montarCard = async () => { // esta função e asyncoma porque ela vai receber dados de um api, este dados podem ter variação de tempo para chegar 
    const parametros = window.location.search  // estou acessando a pesquisa da url 
    const objetoParametros = new URLSearchParams(parametros) // a variavel parametros estou atibuindo o objeto que esta recebendo pela url (pagina)
    const id = objetoParametros.get('id') // acessando o objeto , e pegando pelo metodo get(pegar) o id 
    console.log(id)

    const produto = await getProduto(id)  // estou pegando o produto pelo id com esta função 
    
    mostrarProduto(produto)
}
    
montarCard()

