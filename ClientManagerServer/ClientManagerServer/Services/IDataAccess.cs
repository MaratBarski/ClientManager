using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientManagerServer.Services
{
    public interface IDataAccess
    {
        T GetData<T>();
        void SaveData(object obj);

    }
}
