

const getProdutos = async(id) => {
    const resposta = await fetch(`https://api-projeto-obfk.onrender.com/produtos${id}`)  //Busca o produto com base no ID passado como parâmetro na URL
    const dados = await resposta.json()   //Transforma a resposta
    return dados     //Retorna apenas um único produto, pois estamos buscando por ID e não por array de produtos
}

const mostrarProdutos = (produtos) => {
    divProdutosSelecionados.innerHTML +=
   
    `
    <div>
        <img src="${produtos.imagem}" alt="">
    </div>
    <div>
        <h2 class='nome-produto'>${produtos.nome}</h2>
        <span> Por: <b>${produtos.preco}</b> <i class="fa-regular fa-gem"></i></span>
        <p>${produtos.descricao}</p>
        <button class='resgatar' onclick="resgatarProduto('${produtos.id}')">Resgatar</button>
    </div>
    `
}

const resgatarProduto = async () => { 
    const parametros = window.location.search
    const objetoParametros = new URLSearchParams(parametros)
    const id = objetoParametros.get('id')
    console.log(id)

    const dados = await getProdutos(id)

    console.log(dados)
}
    
resgatarProduto()

