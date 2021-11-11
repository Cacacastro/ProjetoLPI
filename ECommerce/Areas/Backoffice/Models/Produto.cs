using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Models
{
    public class Produto
    {
        int _id;
        string _nome;
        decimal _preco;
        int _estoque;
        Categoria _categoria;

        public string Nome
        {
            get { return _nome; }
            set { _nome = value; }
        }

        public int Id { get => _id; set => _id = value; }
        public decimal Preco { get => _preco; set => _preco = value; }
        public int Estoque { get => _estoque; set => _estoque = value;  }

        public Categoria Categoria { get => _categoria; set => _categoria = value; }

        public Produto()
        {

        }


        public (bool, string) Validar()
        {

            return (true, "");

        }



    }
}
