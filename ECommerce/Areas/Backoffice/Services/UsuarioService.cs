using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Services
{
    public class UsuarioService
    {
        DAL.UsuarioDAL _uDAL = new DAL.UsuarioDAL();

        //public Models.Usuario Obter(int id)
        //{
        //    Models.Usuario u = new Models.Usuario();
        //    //sql

        //    return u;
        //}

        public bool Salvar(Models.Usuario u)
        {
            bool sucesso;
            string msg;
            (sucesso, msg) = u.Validar();

            if (sucesso)
            {
                sucesso = false;
                var usuarioAchado = _uDAL.Consulta(u.Email).FirstOrDefault();

                if (usuarioAchado != null && usuarioAchado.Id != u.Id)
                {
                    msg = "Nome existente.";
                }
                else
                {
                    sucesso = _uDAL.Salvar(u);
                }
            }

            return sucesso;
        }


        public IEnumerable<Models.Usuario> Consulta(string nome)
        {
            return _uDAL.Consulta(nome);
        }


        public Models.Usuario Obter(int id)
        {
            return _uDAL.Obter(id);
        }

        public bool ValidarAutenticacao(Models.Usuario usuario)
        {
            return _uDAL.ValidarAutenticacao(usuario.Email, usuario.Senha);
        }
    }
}
