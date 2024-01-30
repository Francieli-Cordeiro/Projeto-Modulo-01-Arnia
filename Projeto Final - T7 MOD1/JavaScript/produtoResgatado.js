const conteudoResgatado = document.querySelector('.produtoresgatado')

let id = null
let dados = null

const getProdutos = async(id) => {
    let resposta = await fetch(`http://localhost:3000/produtos?id=
    ${id}`)  //Busca o produto com base no ID passado como parâmetro na URL
    dados = await resposta.json()   //Transforma a resposta
    return dados[0]      //Retorna apenas um único produto, pois estamos buscando por ID e não por array de produtos
}

const voltarPágina = () =>{
    window.location = `../Html/Home.html`
}


const carregarSelecionado = async() => {
    const parametros = window.location.search
    console.log(parametros)
    const objetoParametros = new URLSearchParams(parametros)
    console.log(objetoParametros)
    id = objetoParametros.get('id')
    console.log(id)

    const produtos = await getProdutos(id)
    mostrarProdutos(produtos)
}
carregarSelecionado()