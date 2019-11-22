using ClientManagerServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientManagerServer.Services
{
    public interface ILoginService
    {
        LoginResponse Login(LoginModel login);
        void LogOut();
    }
}
