using System;
using System.Collections.Generic;

namespace SportPMD.Core
{
    public class SportServices : ISportServices
    {
        public List<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    Name = "Test",
                    Price = 200
                }
            };
        }
    }
}
