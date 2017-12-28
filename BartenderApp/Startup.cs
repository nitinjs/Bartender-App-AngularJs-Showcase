using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BartenderApp.Startup))]
namespace BartenderApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
