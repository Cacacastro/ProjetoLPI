using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Application
{
    public class LoginApplication
    {
        public bool Autenticar(ViewModels.Login.LoginViewModel lvm)
        {
            Models.Usuario usuario = new Models.Usuario();
            usuario.Email = lvm.Email;
            usuario.Senha = lvm.Senha;

            Services.UsuarioService userv = new Services.UsuarioService();
            return userv.ValidarAutenticacao(usuario);
        }
    }
}
