using ClientManagerServer.Services;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace ClientManagerServer.Filters
{
    public class TokenException : Exception { }
    public class TokenFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (context.HttpContext.Request.Headers["token"] != LoginService.TEST_TOKEN)
            {
                throw new TokenException();
            }
            base.OnActionExecuting(context);
        }
    }
}
