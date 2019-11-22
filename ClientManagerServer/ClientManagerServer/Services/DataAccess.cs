using Microsoft.AspNetCore.Http;
using System.Web;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace ClientManagerServer.Services
{
    public class DataAccess : IDataAccess
    {
        private const string DATA_PATH = @"Data\Users.json";
        private IHostingEnvironment _hostingEnvironment;
        public DataAccess(IHostingEnvironment hostingEnvironment)
        {
            this._hostingEnvironment = hostingEnvironment;
        }
        public string DataBasePath
        {
            get
            {
                return System.IO.Path.Combine(this._hostingEnvironment.WebRootPath, DATA_PATH);
            }
        }
        public T GetData<T>()
        {
            using (StreamReader reader = new StreamReader(DataBasePath))
            {
                var json = reader.ReadToEnd();
                return (T)this.FromJson<T>(json);
            }
        }
        public void SaveData(object obj)
        {
            using (StreamWriter writer = new StreamWriter(DataBasePath))
            {
                writer.WriteLine(this.ToJson(obj));
            }
        }
        private T FromJson<T>(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
        }
        private string ToJson(object obj)
        {
            return JsonConvert.SerializeObject(obj);
        }
    }
}
