using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Models
{
    public class Categoria
    {
            int _id;
            string _nome;

            public string Nome
            {
                get { return _nome; }
                set { _nome = value; }
            }

            public int Id { get => _id; set => _id = value; }

            public Categoria()
            {

            }


            public (bool, string) Validar()
            {

                return (true, "");

            }
    }
}
