using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ClientManagerServer.Models;
using ClientManagerServer.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClientManagerServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class LoginController : ControllerBase
    {
        private ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            this._loginService = loginService;
        }

        [Route("Authenticate")]
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public LoginResponse Authenticate([FromBody]LoginModel login)
        {
            return this._loginService.Login(login);
        }
    }
}