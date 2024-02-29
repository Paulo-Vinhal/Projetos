const tabela = document.querySelector(`#table`)




function criarTarefa(){

    //Recuperando os valores dos inputs do usuário
    let tituloUsuario = document.querySelector(`#titulo`).value
    let descriUsuario = document.querySelector(`#descricao`).value

    //Criando os elementos
    const criaTr = document.createElement(`tr`)
    const criaThTitulo = document.createElement(`th`)
    const criaThDescr = document.createElement(`th`)

    //Adicionando texto aos elementos
    let titulo = document.createTextNode(tituloUsuario)
    let descricao = document.createTextNode(descriUsuario)

    criaThTitulo.appendChild(titulo)
    criaThDescr.appendChild(descricao)

    //Adicionando as classes nos componentes
    criaTr.className = `linhaTabela`
    criaThTitulo.className = `tituloTarefa`
    criaThDescr.className = `descrTarefa`

    //Adicionando os elementos criados a tabela como `Filha`
    criaTr.appendChild(criaThTitulo)
    criaTr.appendChild(criaThDescr)
    tabela.appendChild(criaTr)
}