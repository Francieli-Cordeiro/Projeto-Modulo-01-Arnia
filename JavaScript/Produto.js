const getProduto = async(id) => {
    const resposta = await fetch(`https://api-projeto-obfk.onrender.com/produtos/${id}`)  //verificando no banco de dados o produto que contem este id
    const dados = await resposta.json()   //Transforma a resposta em formato json
    return dados     //Retorna apenas um único produto, pois estamos buscando por ID e não por array de produtos
}
// vai mostra na pagina 
const mostrarProduto = (produtos) => { 
    const div = document.getElementById("produtoSelecionado") // estou pegando a div do html pelo id produtos selecionado.
    div.innerHTML = // colocarei dentro da div usando o innerhtml as caracteristicas do produto ( imagem,nome,preço,descrição)
    `
    <div>
        <img src="${produtos.imagem}" alt="">
    </div>
    <div>
        <h2 class='nome-produto'>${produtos.nome}</h2>
        <span> Por: <b>${produtos.preco}</b> <i class="fa-regular fa-gem"></i></span>
        <p>${produtos.descricao}</p>
        <button class='resgatar' onclick="resgatarProduto('${produtos}')">Resgatar</button>
    </div>
    `
}

const resgatarProduto = (produtoResgatado) => {
    const id = produtoResgatado.id
    // aqui eu pegarei o produto e colocarei dentro da lista de produtos do usuario e enviarei para proxima pagina
    //passando o id 
    window.location = `../Html/produtoResgatado.html?id=${id}` 
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

