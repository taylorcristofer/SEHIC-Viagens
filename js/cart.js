var valorProduto = [2500,4000,3700];
var qtd = [0,0,0];

function atualizarTotalGeral(){
    var totalGeral = 0;

    for (var i = 0; i < qtd.length; i++){
        totalGeral += parseFloat(valorProduto[i]) * parseInt(qtd[i]);
    };
    document.getElementById("totalGeral").innerHTML = "R$" + totalGeral.toFixed(2);

};

function adicionarItem(item){

    var quantidade = document.getElementById('quantidade' + item);

    qtd[item] += 1;
    
    quantidade.innerHTML = qtd[item];

    atualizarTotalGeral();
};

function removerItem(item){

    if(qtd[item] > 0){
        qtd[item] -= 1;

        var quantidade = document.getElementById('quantidade' + item);

        quantidade.innerHTML = qtd[item];

        atualizarTotalGeral();
    };
};
