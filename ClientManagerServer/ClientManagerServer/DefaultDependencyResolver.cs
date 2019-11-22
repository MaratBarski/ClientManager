using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;

namespace ClientManagerServer
{
    public class DefaultDependencyResolver : System.Web.Http.Dependencies.IDependencyResolver, System.Web.Http.Dependencies.IDependencyScope
    {
        protected IServiceProvider serviceProvider;

        public DefaultDependencyResolver(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public IDependencyScope BeginScope()
        {
            return new DefaultDependencyResolver(serviceProvider.CreateScope().ServiceProvider);
        }

        public void Dispose()
        {

        }

        public object GetService(Type serviceType)
        {
            try
            {
                return this.serviceProvider.GetService(serviceType);
            }
            catch (Exception ex)
            {
#if DEBUG
                System.Diagnostics.Debug.WriteLine($"Error: {ex.Message}{Environment.NewLine}Stack Trace: {ex.StackTrace}");
#endif
                throw ex;
            }

        }

        public T GetService<T>() where T : class
        {
            try
            {
                return this.serviceProvider.GetService<T>();
            }
            catch (Exception ex)
            {
#if DEBUG
                System.Diagnostics.Debug.WriteLine($"Error: {ex.Message}{Environment.NewLine}Stack Trace: {ex.StackTrace}");
#endif
                throw ex;
            }

        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            try
            {
                return this.serviceProvider.GetServices(serviceType) ?? new List<object>();
            }
            catch (Exception ex)
            {
#if DEBUG
                System.Diagnostics.Debug.WriteLine($"Error: {ex.Message}{Environment.NewLine}Stack Trace: {ex.StackTrace}");
#endif
                throw ex;
            }
        }
    }
}
