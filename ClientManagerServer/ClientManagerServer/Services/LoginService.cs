using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientManagerServer.Models;

namespace ClientManagerServer.Services
{
    public class LoginService : ILoginService
    {
        const string TEST_USER_NAME = "test";
        const string TEST_PASSWORD = "123";
        public const string TEST_TOKEN = "CADDBAE5BB7E404986A2AD1BACF5653C";

        public LoginResponse Login(LoginModel login)
        {
            return (login?.password?.Trim() == TEST_PASSWORD
                && login?.userName?.Trim().ToLower() == TEST_USER_NAME)
                    ?
                    new LoginResponse() { isLogin = true, token = TEST_TOKEN }
                    :
                    new LoginResponse() { isLogin = false, token = TEST_TOKEN };
        }

        public void LogOut()
        {
        }
    }
}
