using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Controllers
{
 
    [Area("Backoffice")]
    public class LoginController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Autenticar([FromBody] System.Text.Json.JsonElement dados)
        {
            Models.Usuario u = new Models.Usuario();
            u.Email = dados.GetProperty("email").GetString();
            u.Senha = dados.GetProperty("senha").GetString();

            Services.UsuarioService us = new Services.UsuarioService();
            string msg = "";
            bool sucesso = false;
            if (us.ValidarAutenticacao(u))
            {
                msg = "Bem-vindo";
                sucesso = true;
            }
            else
            {
                msg = "Dados inválidos.";
            }

            return Json(new
            {
                msg,
                sucesso
            });

        }


    }
}
