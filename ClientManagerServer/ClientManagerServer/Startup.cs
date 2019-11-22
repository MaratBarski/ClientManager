using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ClientManagerServer.Services;

namespace ClientManagerServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private ServiceCollection RegisterServices()
        {
            var services = new ServiceCollection();

            IEnumerable<Type> controllers = typeof(Startup).Assembly.GetExportedTypes()
                 .Where(t => !t.IsAbstract && !t.IsGenericTypeDefinition)
                 .Where(t => t.Name.EndsWith("Controller", StringComparison.OrdinalIgnoreCase));

            foreach (var c in controllers)
            {
                services.AddTransient(c);
            }


            services.AddSingleton<IClientService, ClientService>();

            return services;


        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthorization();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddMvc();//.SetCompatibilityVersion(CompatibilityVersion.Version_2_1);


            IEnumerable<Type> controllers = typeof(Startup).Assembly.GetExportedTypes()
                 .Where(t => !t.IsAbstract && !t.IsGenericTypeDefinition)
                 .Where(t => t.Name.EndsWith("Controller", StringComparison.OrdinalIgnoreCase));

            foreach (var c in controllers)
            {
                services.AddTransient(c);
            }

            services.AddSingleton<ILoginService, LoginService>();
            services.AddSingleton<IDataAccess, DataAccess>();
            services.AddSingleton<IClientService, ClientService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
            );
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
