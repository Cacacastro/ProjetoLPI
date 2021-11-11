using ECommerce.DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.DAL
{
    public class ProdutoDAL
    {
        ECommerce.DAL.MySQLPersistence _bd = new MySQLPersistence();

        public bool Salvar(Models.Produto produto)
        {
            bool sucesso = false;
            string sql;
            Dictionary<string, object> parametros = new Dictionary<string, object>();
            if (produto.Id == 0)
            {
                sql = @"insert into produto (nome, preco, estoque, categoria) values (@nome, @preco, @estoque, @categoria)";
            }
            else
            {
                sql = @"update produto set nome = @nome, preco = @preco, estoque = @estoque, categoria = @categoria 
                        where id = @id";

                parametros.Add("@id", produto.Id);
            }

            parametros.Add("@nome", produto.Nome);
            parametros.Add("@preco", produto.Preco);
            parametros.Add("@estoque", produto.Estoque);
            parametros.Add("@categoria", produto.Categoria.Id);

            _bd.AbrirConexao();
            if (_bd.ExecutarNonQuery(sql, parametros) == 1)
            {
                if (produto.Id == 0)
                {
                    produto.Id = _bd.UltimoId;
                }

                sucesso = true;
            }
            _bd.FecharConexao();

            return sucesso;
        }

        public Models.Produto Obter(int id)
        {
            string sql = @"select * 
                           from produto 
                           where id = @id";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Models.Produto p = Map(dt.Rows[0]);

                return p;
            }

        }

        public IEnumerable<Models.Produto> Consulta(string nome)
        {
            List<Models.Produto> produtos = new List<Models.Produto>();

            string sql = @"select * 
                           from Produto 
                           where nome like @nome";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@nome", "%" + nome + "%");

            _bd.AbrirConexao();
            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            foreach (DataRow row in dt.Rows)
            {
                produtos.Add(Map(row));
            }
            _bd.FecharConexao();

            return produtos;
        }

        private Models.Produto Map(DataRow row)
        {
            int aux = Convert.ToInt32(row["categoria"]);
            DAL.CategoriaDAL _cDAL = new DAL.CategoriaDAL();
            Models.Produto p = new Models.Produto()
            {
                Id = Convert.ToInt32(row["id"]),
                Nome = row["nome"].ToString(),
                Preco = Convert.ToDecimal(row["preco"]),
                Estoque = Convert.ToInt32(row["estoque"]),
                Categoria = _cDAL.Obter(aux),
            };

            return p;
        }

    }
}
