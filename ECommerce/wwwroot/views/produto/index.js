var index = {

    gravar: function () {

        let nome = document.getElementById("txtNome").value;
        let preco = document.getElementById("txtPreco").value;
        let estoque = document.getElementById("txtEstoque").value;
        let categoria = document.getElementById("categoria").value;

        console.log(nome);
        console.log(preco);
        console.log(estoque);
        console.log(categoria);

        let dados = {
            nome,
            preco,
            estoque,
            categoria
        }

        HTTPClient.post("Backoffice/Produto/Gravar", dados)
            .then(r => {
                return r.json()
            })
            .then(r => {
                alert(r.msg);
            })
            .catch((e) => {

                alert("Deu erro.")
            });

    }
}