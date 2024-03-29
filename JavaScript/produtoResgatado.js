const getProduto = async(id) => {
    const resposta = await fetch(`https://api-projeto-obfk.onrender.com/produtos/${id}`)  //verificando no banco de dados o produto que contem este id
    const dados = await resposta.json()   //Transforma a resposta em formato json
    console.log(dados)
    return dados     //Retorna apenas um único produto, pois estamos buscando por ID e não por array de produtos
}
// o que vai mostra na pagina 
const mostrarProduto = (produtos) => { 
    let div = document.getElementById("carddoItem") // estou pegando a div do html pelo id produtos selecionado.
    div.innerHTML += // colocarei dentro da div usando o innerhtml as caracteristicas do produto ( imagem,nome,preço,descrição)

    `
    <div class="produtosContainer">
        <img class="imgProduto" src="${produtos.imagem}" alt="">
        <h2 class = 'produtoResgatadocomsucesso'>Produto Resgatado Com Sucesso !</h2>
        <p>${produtos.nome}</p>
        <p><span> Por: <b>${produtos.preco}</b> <img class="imgIconeJoia" src="../Imagem/icone joia.png" alt="imagem de Joia"> </span></p>
        
        <button class='voltarPagina' onclick="resgatarProduto('${produtos.id}')">Voltar a pagina inicial </button>
    </div> 
    `
}

const resgatarProduto = async (id) => {
    const resposta = await fetch(`https://api-projeto-obfk.onrender.com/produtos/${id}`)  //verificando no banco de dados o produto que contem este id
    const produto = await resposta.json()   //Transforma a resposta em formato json 

    const usuario = await fetch ('https://api-projeto-obfk.onrender.com/usuario/1') // estou acessando api para pegar o usuario 
    const usuario1 = await usuario.json() // transformando o usuario em Json

    let produtos = usuario1.produtos // estou pegando a lista de produtos e adicionando em uma variavel 
    produtos.push(produto) // estou colocando o produto capiturado no id dentro da lista de produtos de usuarios 

     usuarioPronto = { 
    // ↑↑ e um objeto //
        
        "id": usuario1.id,   // dentro do objeto ficam as classes //
        "login": usuario1.login, // dentro do objeto ficam as classes //
        "senha": usuario1.senha, // dentro do objeto ficam as classes //
        "nome": usuario1.nome, // dentro do objeto ficam as classes //
        "email": usuario1.email,  // dentro do objeto ficam as classes //
        "produtos": produtos
    }
   
    // aqui mostra o resgate finalizado e envia para a pagina inicial novamente.
   window.location = `../Html/Home.html?id=${id}` 
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