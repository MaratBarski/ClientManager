using System.Collections.Generic;
using ClientManagerServer.Filters;
using ClientManagerServer.Models;
using ClientManagerServer.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ClientManagerServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    [TokenFilter]
    public class ClientManagerController : ControllerBase
    {
        private IClientService _clientService;
        public ClientManagerController(IClientService clientService)
        {
            this._clientService = clientService;
        }

        [Route("GetUsers")]
        [HttpGet]
        [EnableCors("CorsPolicy")]
        public IEnumerable<UserModel> GetUsers()
        {
            return this._clientService.GetUsers();
        }

        [Route("GetUser/{id}")]
        [HttpGet]
        [EnableCors("CorsPolicy")]
        public UserModel GetUser(string id)
        {
            return this._clientService.GetUser(id);
        }

        [Route("AddUser")]
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public void AddUser([FromBody] UserModel user)
        {
            this._clientService.AddUser(user);
        }

        [Route("UpdateUser")]
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public void UpdateUser([FromBody] UserModel user)
        {
            this._clientService.UpdateUser(user);
        }

        [Route("DeleteUser")]
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public void DeleteUser([FromBody]UserModel user)
        {
            this._clientService.DeleteUser(user.id);
        }
    }
}
