using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Models
{
    public class Usuario
    {
        int _id;
        string _email;
        string _senha;

        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }
        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        public string Senha
        {
            get { return _senha; }
            set { _senha = value; }
        }

        public DateTime DataAlteracao { get; set; }

        public Usuario()
        {

        }

        public (bool, string) Validar()
        {

            string info = "";
            bool sucesso = false;
            if (Email.Length > 30)
            {
                info = "Email ultrapassou o limite de tamanho!";
                sucesso = false;
            }
            else if (Senha.Length > 20)
            {
                info = "Senha ultrapassou o limite de tamanho!";
                sucesso = false;
            }

            return (sucesso, info);

        }
    }
}
