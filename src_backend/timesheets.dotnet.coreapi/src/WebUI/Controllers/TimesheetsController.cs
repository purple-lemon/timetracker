using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers;
public class TimesheetsController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
