using AboutMe.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;

namespace AboutMe.Controllers
{
    public class Home : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Calculator")]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost("Calculator")]
        public IActionResult Calculator(Calculator model)
        {        
            return View();
        }
    }
}
