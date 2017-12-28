using BartenderApp.Areas.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BartenderApp.Areas.WebApi.Controllers
{
    public class BartenderController : ApiController
    {
        // Validate product and get product name
        // GET: api/Bartender/5
        public ValidateProductResult Get(int id)
        {
            var findProduct = InMemoryData.Products.Where(x => x.Id == id);
            return new ValidateProductResult()
            {
                IsValid = findProduct.Any(),
                ProductDetails = findProduct.FirstOrDefault()
            };
        }

        // Make drink and return drink name 
        // POST: api/Bartender
        public Drink Post([FromBody]int value)
        {
            var findDrink = InMemoryData.Drinks.Where(x => x.Id == value);
            return findDrink.FirstOrDefault();
        }
    }

    //in memory data for demo purpose
    public class InMemoryData
    {
        public static List<Product> Products = new List<Product>()
        {
            new Product() { Id=1, Name = "Milk"},
            new Product() { Id=2, Name = "Orange"},
            new Product() { Id=3, Name = "Mango"}
        };

        public static List<Drink> Drinks = new List<Drink>()
        {
            new Drink() { Id=1, Name="Milk Shake"},
            new Drink() { Id=2, Name = "Orange Juice"},
            new Drink() { Id=3, Name="Mango Juice"}
        };
    }
}

