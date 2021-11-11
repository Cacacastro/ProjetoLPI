using ECommerce.Areas.Backoffice.DAL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Areas.Backoffice.Controllers
{
    [Area("Backoffice")]
    public class ProdutoController : Controller
    {
        Services.ProdutoService _ps = new Services.ProdutoService();

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
            return Json(_ps.Consulta(nome));
        }

        [HttpPost]
        public IActionResult Gravar([FromBody] System.Text.Json.JsonElement dados)
        {
            string msg = "";
            bool sucesso = false;
            Models.Produto p = new Models.Produto();
            p.Id = Convert.ToInt32(dados.GetProperty("id").ToString());
            p.Nome = dados.GetProperty("nome").GetString();
            p.Estoque = Convert.ToInt32(dados.GetProperty("estoque").ToString());
            int aux = Convert.ToInt32(dados.GetProperty("categoria").ToString());
            CategoriaDAL cdal = new CategoriaDAL();
            p.Categoria = cdal.Obter(aux);

            string precoAux = dados.GetProperty("preco").GetString();
            decimal preco;

            decimal.TryParse(precoAux, out preco);

            if (preco == 0)
            {
                msg = "Preço inválido";
            }
            else
            {
                p.Preco = preco;
                sucesso = _ps.Salvar(p);

            }

            var retorno = new
            {
                msg,
                produto = p,
                sucesso
            };

            return Json(retorno);
        }
    }
}
