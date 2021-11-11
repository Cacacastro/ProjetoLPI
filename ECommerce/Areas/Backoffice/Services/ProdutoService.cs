using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Services
{
    public class ProdutoService
    {
        DAL.ProdutoDAL _pDAL = new DAL.ProdutoDAL();

        public bool Salvar(Models.Produto p)
        {
            bool sucesso;
            string msg;
            (sucesso, msg) = p.Validar();

            if (sucesso)
            {
                sucesso = _pDAL.Salvar(p);
            }

            return sucesso;
        }

        public IEnumerable<Models.Produto> Consulta(string nome)
        {
            return _pDAL.Consulta(nome);
        }

        public Models.Produto Obter(int id)
        {
            return _pDAL.Obter(id);
        }

    }
}
