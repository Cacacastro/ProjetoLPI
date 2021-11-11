using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Services
{
    public class CategoriaService
    {
        DAL.CategoriaDAL _cDAL = new DAL.CategoriaDAL();

        public bool Salvar(Models.Categoria c)
        {
            bool sucesso;
            string msg;
            (sucesso, msg) = c.Validar();

            if (sucesso)
            {
                sucesso = _cDAL.Salvar(c);
            }

            return sucesso;
        }

        public IEnumerable<Models.Categoria> Consulta(string nome)
        {
            return _cDAL.Consulta(nome);
        }

        public Models.Categoria Obter(int id)
        {
            return _cDAL.Obter(id);
        }

    }
}
