using RequireAKnockout.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RequireAKnockout.Controllers
{
    public class HomeController : ApiController
    {
        private ResultsRepository results;

        public HomeController()
        {
            results = new ResultsRepository();
        }

        public IHttpActionResult GetAllResults()
        {
            return Ok(results.GetAllFights());
        }
    }
}
