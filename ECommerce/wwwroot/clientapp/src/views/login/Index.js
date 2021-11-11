import React from 'react';
import ReactDom from 'react-dom';
class Login extends React.Component
{
    constructor() {

        super();

        this.state = {
            id: 0,
            email: "",
            senha: ""
        }
    }

    salvar = () => {

        if (this.state.email.trim() == "" || 
            this.state.senha.trim() == "") 
            {
                this.setState({
                    msg: "Dados obrigatórios",
                    sucesso: false
                })
            }
        else {

            let dados = {
                email: this.state.email,
                senha: this.state.senha
            }

            HTTPClient.post("Backoffice/Login/Autenticar", dados)
            .then(r => r.json())
            .then(r => {

                if (r.sucesso)
                {
                    location.href = "Backoffice/Home";
                }
                else {

                    this.setState({
                        msg: r.msg,
                        sucesso: r.sucesso
                    });
                }
            })
            .finally(() => {
            });
         
        }
    }

    renderForm = () => {

        let msg = null;

        if (!this.state.sucesso)
        {
            msg = <div style={{color: "red"}}>{this.state.msg}</div>
        }
        else 
        {
            msg = <div style={{backgroundColor: "green", color:"white"}}>{this.state.msg}</div>
        }

        let saida = 
            <form action="/Backoffice/Login/Autenticar" class="form-signin" method="post">
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <input type="text" className="form-control" placeholder="Email" value={this.state.email}
                    onChange = {(e) => this.setState({email: e.target.value})}/>
                <input type="password" className="form-control" placeholder="Senha" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>

                {msg}
            </form>


        return saida;
    }

    render = () => {
        
        let saida = 
           <div>
               <div>
                    {this.renderForm()}
               </div>

           </div>
        return saida;
    }
}

export default Login;


ReactDom.render(<Login />, document.getElementById("root"));