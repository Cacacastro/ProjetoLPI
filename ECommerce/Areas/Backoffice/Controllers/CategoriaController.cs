using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Controllers
{
    [Area("Backoffice")]
    public class CategoriaController : Controller
    {
        Services.CategoriaService _cs = new Services.CategoriaService();

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Listar()
        {
            return View();
        }

        public IActionResult Consultar(string nome)
        {
            return Json(_cs.Consulta(nome));
        }

        [HttpPost]
        public IActionResult Gravar([FromBody] System.Text.Json.JsonElement dados)
        {
            string msg = "";
            bool sucesso = false;
            Models.Categoria c = new Models.Categoria();
            c.Id = Convert.ToInt32(dados.GetProperty("id").ToString());
            c.Nome = dados.GetProperty("nome").GetString();

            var retorno = new
            {
                msg,
                categoria = c,
                sucesso
            };

            return Json(retorno);
        }
    }
}
