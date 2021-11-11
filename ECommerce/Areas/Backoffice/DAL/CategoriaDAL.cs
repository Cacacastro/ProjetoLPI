using ECommerce.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.DAL
{
    public class CategoriaDAL
    {
        MySQLPersistence _bd = new MySQLPersistence();

        public bool Salvar(Models.Categoria categoria)
        {
            bool sucesso = false;
            string sql;
            Dictionary<string, object> parametros = new Dictionary<string, object>();
            if (categoria.Id == 0)
            {
                sql = @"insert into categoria (nome) values (@nome)";
            }
            else
            {
                sql = @"update categoria set nome = @nome 
                        where id = @id";

                parametros.Add("@id", categoria.Id);
            }

            parametros.Add("@nome", categoria.Nome);

            _bd.AbrirConexao();
            if (_bd.ExecutarNonQuery(sql, parametros) == 1)
            {
                if (categoria.Id == 0)
                {
                    categoria.Id = _bd.UltimoId;
                }

                sucesso = true;
            }
            _bd.FecharConexao();

            return sucesso;
        }

        public Models.Categoria Obter(int id)
        {
            string sql = @"select * 
                           from categoria 
                           where id = @id";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Models.Categoria c = Map(dt.Rows[0]);

                return c;
            }

        }

        public IEnumerable<Models.Categoria> Consulta(string nome)
        {
            List<Models.Categoria> categorias = new List<Models.Categoria>();

            string sql = @"select * 
                           from categoria 
                           where nome like @nome";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@nome", "%" + nome + "%");

            _bd.AbrirConexao();
            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            foreach (DataRow row in dt.Rows)
            {
                categorias.Add(Map(row));
            }
            _bd.FecharConexao();

            return categorias;
        }

        private Models.Categoria Map(DataRow row)
        {
            Models.Categoria p = new Models.Categoria()
            {
                Id = Convert.ToInt32(row["id"]),
                Nome = row["nome"].ToString(),
            };

            return p;
        }

    }
}
