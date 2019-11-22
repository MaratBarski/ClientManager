using ClientManagerServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientManagerServer.Services
{
    public interface IClientService
    {
        IEnumerable<UserModel> GetUsers();
        UserModel GetUser(string id);
        void AddUser(UserModel user);
        bool UpdateUser(UserModel user);
        bool DeleteUser(string id);
    }
}
