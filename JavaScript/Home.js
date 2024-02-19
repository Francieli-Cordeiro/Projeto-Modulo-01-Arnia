
const resgatarProduto = (id) => { //verificando no banco de dados o produto que contem este id //
    window.location.href = `../Html/produto.html?id=${id}` // foi usado para redirecionar para outra pagina pelo JavaScript
}

const mostrarDados = (produtos) => { // busca o produto determinado
const Produtos = document.querySelector('.resgatarProdutos') // retorna o produto dentro da classe 

produtos.forEach (produto => { // foi usado o ForEach para formar a estrutura de reptição  loop //
    const id = produto.id
    const nome = produto.nome
    const preco = produto.preco
    const descricao = produto.descricao
    const imagem = produto.imagem

    /* o que vai aparecer no html*/ 
    Produtos.innerHTML += 
    
    `   <div>
            <img src="${imagem}">
            <h2>${nome}</h2>
            <span>${preco} jóias</span>
            <button class="resgatar" onclick="resgatarProduto('${id}')">Resgatar</button>
        </div> 
        `
})
}

const carregarDados = async() => {
const dados = await fetch ('https://api-projeto-obfk.onrender.com/produtos') //acessando os produtos da Api//
console.log(dados)
const produtos = await dados.json()
console.log(produtos)

mostrarDados(produtos)
}
carregarDados()