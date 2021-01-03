; (function () {

    

    // Preencher LI
    const ul = document.getElementById("ul-produtos");
    const selectProduto = document.getElementById("select-produto");
    createSelects();

    const produtos = selectProduto.getElementsByTagName("option");

    const quantidadeInput = document.getElementById("quantidade");
    const valorInput = document.getElementById("valor");
    const btAddProduto = document.getElementById("add-produto");

    const totalGeral = document.getElementById("total-geral");
    let indexOption = 0;

    selectProduto.addEventListener("click", (_) => {
        indexOption = selectProduto.selectedIndex;
    });

    btAddProduto.addEventListener("click", addLi)


    function addLi(event) {

        event.preventDefault();
        event.stopPropagation();

        const li = document.createElement("li");
        const spanCodigo = document.createElement("span");
        const pProduto = document.createElement("p");
        const spanUnidade = document.createElement("span");
        const spanValor = document.createElement("span");
        spanValor.setAttribute("class", "valor")
        const aExcluir = document.createElement("a");
        aExcluir.addEventListener("click", removeIt);


        // Revisado!
        spanCodigo.textContent = (indexOption > 0) ?
            produtos[indexOption].value : produtos[0].value;

        pProduto.textContent = (produtos.length > 0) ?
            produtos[indexOption].textContent : produtos[0].textContent;

        spanUnidade.textContent = `${quantidadeInput.value} UN`;
        spanValor.textContent = valorInput.value || 0;
        aExcluir.textContent = "Excluir";
        aExcluir.setAttribute("class", "produto-excluir");
        aExcluir.setAttribute("href", "#");

        li.appendChild(spanCodigo);
        li.appendChild(pProduto);
        li.appendChild(spanUnidade);
        li.appendChild(spanValor);
        li.appendChild(aExcluir);

        ul.appendChild(li);
        totalGeral.value = somaTotal(totalGeral.value, valorInput.value).toFixed(2);

    }

    function somaTotal(valorAnterior, valorAtual) {
        let total = parseInt(quantidadeInput.value) * parseFloat(valorAtual);
        return Number(parseFloat(valorAnterior) + total);
    }

    function removeIt() {
        let spanValue = this.previousElementSibling.textContent;
        let spanQuantidade = this.previousElementSibling.previousElementSibling.textContent;
        spanQuantidade = parseFloat(spanQuantidade);
        totalGeral.value = (parseFloat(totalGeral.value) - (spanQuantidade * parseFloat(spanValue))).toFixed(2);
        this.parentElement.remove();
    }

    function getDataProduct() {
        let url = 'http://192.168.1.4/pedidos/service.php';
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

        let jsonParse = JSON.parse(xhttp.responseText);
        return jsonParse;
    }

    function createSelects() {
        [...getDataProduct()].forEach(obj => {
            let option = document.createElement("option");
            option.setAttribute("value", obj.codigo);
            option.textContent = obj.descricao;
            selectProduto.appendChild(option);
            console.log(option);
        }) 
    }
})()