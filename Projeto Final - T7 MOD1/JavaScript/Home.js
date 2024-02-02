const resgatarProduto = (id) => {
    window.location.href = `../Html/produto.html?id=${id}`
}

const mostrarDados = (produtos) => {
const Produtos = document.querySelector('.resgatarProdutos')

produtos.forEach (produto => {
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
const dados = await fetch ('http://localhost:3000/produtos')
console.log(dados)
const produtos = await dados.json()
console.log(produtos)

mostrarDados(produtos)
}
carregarDados()