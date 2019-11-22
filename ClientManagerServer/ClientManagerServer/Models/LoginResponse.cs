using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientManagerServer.Models
{
    public class LoginResponse
    {
        public bool isLogin { get; set; }
        public string token { get; set; }
    }
}
