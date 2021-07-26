function cadastroEmail(){
    var inputEmail = document.getElementById("inputEmail"); //Pegando o id do campo e-mail
    //criando variável dados para pegar os dadosEmail e colocar em localStorage em formato JSON
    var dados = JSON.parse(localStorage.getItem("dadosEmail")); 
    //Estrutura de condição se os dados forem iguais a nulo enviar no localStorage um array vazio.
    if(dados == null){
        localStorage.setItem("dadosEmail", "[]");
        dados = [];
    }
    //Enviando os dados para o localStorage
    var auxRegistro = { email: inputEmail.value} 
    dados.push(auxRegistro);
    localStorage.setItem("dadosEmail", JSON.stringify(dados));
    
    //Alerta de recebido e limpar o campo de e-mail
    alert("E-mail cadastrado com sucesso!")
    inputEmail.value="";
}

function cadastroClientes(){
    var nomeCliente = document.getElementById("nomeCliente"); //Pegando o id do campo nome
    var emailCliente = document.getElementById("emailCliente"); //Pegando o id do campo e-mail
    var senhaCliente = document.getElementById("senhaCliente"); //Pegando o id do campo senha
    var endereçoCliente = document.getElementById("endereçoCliente"); //Pegando o id do campo endereço
    var telefoneCliente = document.getElementById("telefoneCliente"); //Pegando o id do campo telefone
    var maeCliente = document.getElementById("maeCliente"); //Pegando o id do campo nome mãe do cliente
    var paiCliente = document.getElementById("paiCliente"); //Pegando o id do campo nome pai do cliente
    //criando variável dados para pegar os dadosCliente e colocar em localStorage em formato JSON
    var dados = JSON.parse(localStorage.getItem("dadosCliente")); 
    //Estrutura de condição se os dados forem iguais a nulo enviar no localStorage um array vazio.
    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    //Enviando os dados para o localStorage
    var auxRegistro = { 
        nome: nomeCliente.value,
        email: emailCliente.value,
        senha: senhaCliente.value,
        endereco: endereçoCliente.value,
        telefone: telefoneCliente.value,
        mae: maeCliente.value,
        pai: paiCliente.value,
    } 
    dados.push(auxRegistro);
    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    
    //Alerta de recebido e limpar o campo de e-mail
    alert("Cadastrado com sucesso!")
    nomeCliente.value="";
    emailCliente.value="";
    senhaCliente.value="";
    endereçoCliente.value="";
    telefoneCliente.value="";
    maeCliente.value="";
    paiCliente.value="";
}

function AddCarrinho(produto, qtd, valor){ 
    localStorage.setItem("produto", produto);
    localStorage.setItem("quantidade", qtd);
    valor = valor * qtd;
    localStorage.setItem("valor", valor);
    alert("Produto adicionado ao carrinho!");
    quantProduto1.value="";
    quantProduto2.value="";
    quantProduto3.value="";
    quantProduto4.value="";
    quantProduto5.value="";
    quantProduto6.value="";
    quantProduto7.value="";
    quantProduto8.value="";
    quantProduto9.value="";
}