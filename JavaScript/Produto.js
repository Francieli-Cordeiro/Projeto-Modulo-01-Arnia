
const montarCard = async () => { // esta função e asyncoma porque ela vai receber dados de um api, este dados podem ter variação de tempo para chegar 
    const parametros = window.location.search  // estou acessando a pesquisa da url 
    const objetoParametros = new URLSearchParams(parametros) // a variavel parametros estou atibuindo o objeto que esta recebendo pela url (pagina)
    const id = objetoParametros.get('id') // acessando o objeto , e pegando pelo metodo get(pegar) o id 
    console.log(id)

    const produto = await getProduto(id)  // estou pegando o produto pelo id com esta função 
    
    mostrarProduto(produto)
}
    
montarCard()

