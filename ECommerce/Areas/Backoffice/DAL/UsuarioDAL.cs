using ECommerce.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.DAL
{
    public class UsuarioDAL
    {
        MySQLPersistence _bd = new MySQLPersistence();

        public bool Salvar(Models.Usuario usuario)
        {
            bool sucesso = false;
            string sql;
            Dictionary<string, object> parametros = new Dictionary<string, object>();
            if (usuario.Id == 0)
            {
                sql = @"insert into usuario (email, senha) values (@email, @senha)";
            }
            else
            {
                sql = @"update usuario set email = @email, senha = @senha 
                        where id = @id";

                parametros.Add("@id", usuario.Id);
            }

            parametros.Add("@email", usuario.Email);
            parametros.Add("@senha", usuario.Senha);

            if (_bd.ExecutarNonQuery(sql, parametros) == 1)
            {
                if (usuario.Id == 0)
                {
                    usuario.Id = _bd.UltimoId;
                }

                sucesso = true;
            }

            return sucesso;
        }

        public Models.Usuario Obter(int id)
        {
            string sql = @"select * 
                           from usuario 
                           where id = @id";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Models.Usuario u = Map(dt.Rows[0]);

                return u;
            }

        }

        public IEnumerable<Models.Usuario> Consulta(string email)
        {
            List<Models.Usuario> usuarios = new List<Models.Usuario>();

            string sql = @"select * 
                           from usuario 
                           where email = @email";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@email", email);

            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            foreach (DataRow row in dt.Rows)
            {
                usuarios.Add(Map(row));
            }

            return usuarios;
        }

        private Models.Usuario Map(DataRow row)
        {
            Models.Usuario u = new Models.Usuario()
            {
                Id = Convert.ToInt32(row["id"]),
                Email = row["email"].ToString(),
                Senha = row["senha"].ToString(),
            };

            return u;
        }

        public bool ValidarAutenticacao(string email, string senha)
        {
            string sql = @"select count(*) 
                           from usuario 
                           where email = @email and
                                 senha = @senha";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@email", email);
            parametros.Add("@senha", senha);

            _bd.AbrirConexao();

            bool ok = Convert.ToInt32(_bd.ExecutarConsultaSimples(sql, parametros)) == 1;

            _bd.FecharConexao();
            return ok;
        }
    }
}
