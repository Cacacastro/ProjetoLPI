import React from 'react';
import ReactDom from 'react-dom';

class Index extends React.Component
{
    constructor() {

        super();

        this.state = {
            id: "0",
            nome: "",
            preco: 0,
            estoque: 0,
            categoria: 0
        }
     
    }

    salvar = () => {

        let dados = {
            id: this.state.id,
            nome: this.state.nome,
            preco: this.state.preco,
            estoque: this.state.estoque,
            categoria: this.state.categoria
        }

        HTTPClient.post("Backoffice/Produto/Gravar", dados)
        .then(r => r.json())
        .then(r => {

            if (r.sucesso)
            {
                this.setState({
                    id: r.produto.id
                });
            }
            
       })
       .catch(() => {

            //deu erro

       })

    }

    render = () => {
       
        let saida =
        <section className="content">
                <div className="container-fluid">
                    <div className="row">


                        <div className="col-md-12">
                            <div className="card card-primary">
                                <form id="quickForm">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input type="text" className="form-control" value={this.state.id} readonly/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input type="text" className="form-control" value={this.state.nome}
                                                onChange={(e) => this.setState({nome: e.target.value})}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Preço</label>
                                            <input type="number" className="form-control" value={this.state.preco}
                                                onChange={(e) => this.setState({preco: e.target.value})}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Estoque</label>
                                            <input type="number" className="form-control" value={this.state.estoque}
                                                onChange={(e) => this.setState({estoque: e.target.value})}/>
                                        </div>

                                        <div className="row m-1 mb-2">
                                            <div className="form-group">
                                                <label>Categoria</label>
                                                <select onChange={(e) => this.setState({categoria: e.target.value})}>
                                                    <option value="1">Academia</option>
                                                    <option value="2">Basquete</option>
                                                    <option value="3">Futebol</option>
                                                    <option value="4" selected>Futsal</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="button" onClick={this.salvar} className="btn btn-primary">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </section>


        return saida;
    }
}

export default Index;


ReactDom.render(<Index />, document.getElementById("root"));