import React from 'react';
import ReactDom from 'react-dom';

class Listar extends React.Component
{
    constructor() {

        super();

        this.state = {
            pesquisa: "",
            resultado: []
        }
     
    }

    pesquisar = () => {


        HTTPClient.get("Categoria/Consultar?nome=" + encodeURIComponent(this.state.pesquisa))
        .then(r => r.json())
        .then(r => {

         
            this.setState({
                resultado: r
            });
            
            
       })
       .catch(() => {

            //deu erro

       })
        .finally(() => {
            
           
        });

    }

    render = () => {
       
        let form =
        <form>
            <input type="search"
                value={this.state.pesquisa}
                onChange={(e) => {this.setState({pesquisa: e.target.value})}}
            />
            <button type="button" onClick={this.pesquisar}>PESQUISAR</button>
            
        </form> 

        let resultado = 
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">

                        <div class="card">
                            <div class="card-header border-0">
                                <h3 class="card-title">Categorias</h3>
                                
                                <div class="card-tools">
                                    <a href="#" class="btn btn-tool btn-sm">
                                        <i class="fas fa-download"></i>
                                    </a>
                                    <a href="#" class="btn btn-tool btn-sm">
                                        <i class="fas fa-bars"></i>
                                    </a>
                                </div>
                            </div>
                            {form}
                            <div class="card-body table-responsive p-0">
                            <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultado.length == 0 && <tr><td colSpan="2">Sem resultado</td></tr>}
                                        {
                                            this.state.resultado.map(item => {

                                                return(

                                                    <tr key={"produto-" + item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.nome}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>

                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        return <>{resultado}</>
    }
}

export default Listar;


ReactDom.render(<Listar />, document.getElementById("root"));