var index = {

    gravar: function () {
        let nome = document.getElementById("txtNome").value;


        let dados = {
            nome
        }

        HTTPClient.post("Backoffice/Categoria/Gravar", dados)
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