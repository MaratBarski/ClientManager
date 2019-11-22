using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ClientManagerServer.Models;
using Microsoft.AspNetCore.Hosting;

namespace ClientManagerServer.Services
{
    public class ClientService : IClientService
    {
        private IDataAccess _dataAccess;
        public ClientService(IDataAccess dataAccess)
        {
            this._dataAccess = dataAccess;
        }
        public IEnumerable<UserModel> GetUsers()
        {
            return this._dataAccess.GetData<IEnumerable<UserModel>>();
        }
        public UserModel GetUser(string id)
        {
            return this.GetUsers().Where(x => x.id == id).FirstOrDefault();
        }
        public void AddUser(UserModel user)
        {
            var users = this.GetUsers().ToList();
            user.id = Guid.NewGuid().ToString();
            users.Add(user);
            this._dataAccess.SaveData(users);
        }
        public bool DeleteUser(string id)
        {
            var users = this.GetUsers().ToList();
            var forDelete = users.Where(x => x.id == id).FirstOrDefault();
            if (forDelete != null)
            {
                users.Remove(forDelete);
                this._dataAccess.SaveData(users);
                return true;
            }
            return false;
        }

        public bool UpdateUser(UserModel user)
        {
            var users = this.GetUsers();
            var forUpdate = users.Where(x => x.id == user.id).FirstOrDefault();
            if (forUpdate == null)
            {
                return false;
            }
            forUpdate.email = user.email;
            forUpdate.firstName = user.firstName;
            forUpdate.lastName = user.lastName;
            forUpdate.address = user.address;
            this._dataAccess.SaveData(users);
            return true;
        }
    }
}
