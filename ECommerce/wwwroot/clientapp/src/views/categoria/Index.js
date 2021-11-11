import React from 'react';
import ReactDom from 'react-dom';

class Index extends React.Component
{
    constructor() {

        super();

        this.state = {
            id: "0",
            nome: "",
        }
     
    }

    salvar = () => {

        let dados = {
            id: this.state.id,
            nome: this.state.nome,
        }

        HTTPClient.post("Backoffice/Categoria/Gravar", dados)
        .then(r => r.json())
        .then(r => {

            if (r.sucesso)
            {
                this.setState({
                    id: r.categoria.id
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