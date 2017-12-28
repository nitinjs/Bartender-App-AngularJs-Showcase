using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BartenderApp.Areas.WebApi.Models
{
    public class ValidateProductResult
    {
        public bool IsValid { get; set; }
        public Product ProductDetails { get; set; }
    }
}