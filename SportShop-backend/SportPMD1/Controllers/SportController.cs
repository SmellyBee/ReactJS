using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SportPMD1;
using System.Text;
using MongoDB.Bson.Serialization;
using System.Data;
using MongoDB.Driver.Linq;
using System.Text.Json;

namespace SportPMD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SportController : ControllerBase
    {
        private IMongoDatabase db = Session.MongoDatabase;

        [HttpPost]
        [Route("addUser")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            var collection = db.GetCollection<User>("User");
            if (collection.Find(x => x.Username == user.Username).FirstOrDefault() == null)
            {
                collection.InsertOne(user);
                return Ok();
            }
            else
                return BadRequest("User already exists!");
        }

        [HttpGet]
        [Route("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var collection = db.GetCollection<User>("User");
            var user = collection.Find(x => true).ToList();
            return new JsonResult(user);
        }
        /*[HttpPost]
        [Route("AddProduct")]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            var collectionProducts = db.GetCollection<Product>("Product");
            if(collectionProducts.Find(x => x.Name == product.Name).FirstOrDefault() != null)
            {
                return BadRequest("Product already exists!");
            }
            collectionProducts.InsertOne(product);
            IList<Product> retList = new List<Product>();
            foreach (Product prod in product.Category.Products)
            {
                retList.Add(prod);
            }
            retList.Add(product);
            var collectionCategory = db.GetCollection<Category>("Category");
            var filter = Builders<Category>.Filter.Eq(x => x.Name, product.Category.Name);
            var update = Builders<Category>.Update.Set(x => x.Products, retList);
            collectionCategory.UpdateOne(filter, update);
            return Ok();
        }*/

        [Route("AddProduct/{name}/{price}/{brand}/{ocena}/{discount}/{gender}/{image}/{kategorija}")]
        [HttpPost]
        public async Task<string> AddProduct(string name, int price, string brand, int ocena, int discount,
            string gender, string image, string kategorija)
        {
            var collectionProduct = db.GetCollection<Product>("Products");
            var collectionCategory = db.GetCollection<Category>("Category");

            Product pr = new Product { Name = name, Price = price, Brand = brand, Ocena = ocena,
            Discount = discount, Gender = gender, Image = image};

            foreach (Category cat in collectionCategory.AsQueryable())
            {
                if (cat.Name == kategorija)
                {
                    pr.Category = new MongoDBRef("Category", cat.Id);
                    collectionProduct.InsertOne(pr);

                    var query1 = from product in collectionProduct.AsQueryable<Product>()
                                 where product.Name == pr.Name
                                 select product;

                    foreach (Product product1 in query1)
                    {
                        pr.Id = product1.Id;
                    }
                    cat.Products.Add(new MongoDBRef("Products", pr.Id));
                    var filter = Builders<Category>.Filter.Eq(s => s.Id, cat.Id);
                    var update = Builders<Category>.Update.Set(s => s.Products, cat.Products);
                    collectionCategory.UpdateOne(filter, update);

                    return "GG";
                }
            }
            return "FDF";
        }

        [Route("GetAllProducts/{kategorija}")]
        [HttpGet]
        public IActionResult GetAllProducts(string kategorija)
        {
            var collection = db.GetCollection<Category>("Category");
            var collection2 = db.GetCollection<Product>("Products");
            var filter = collection.Find(x => x.Name == kategorija).ToList();

            List<ProductFront> lista = new List<ProductFront>();

            foreach (Category c in filter.AsQueryable())
            {
                foreach (MongoDBRef p in c.Products)
                {
                    var filter2 = collection2.Find(x => x.Id == p.Id).FirstOrDefault();
                    ProductFront pf = new ProductFront
                    {
                        Id = filter2.Id,
                        Brand = filter2.Brand,
                        Discount = filter2.Discount,
                        Gender = filter2.Gender,
                        Image = filter2.Image,
                        Name = filter2.Name,
                        Ocena = filter2.Ocena,
                        Price = filter2.Price,
                        Category = c.Name
                    };
                    lista.Add(pf);
                }
            }
            return new JsonResult(lista);
        }

        /*[HttpGet]
        [Route("GetAllProducts")]
        public async Task<IActionResult> GetAllProdcuts()
        {
            var collection = db.GetCollection<Product>("Product");
            var products = collection.Find(x => true).ToList();
            return new JsonResult(products);
        }*/

        [Route("AddCategory/{ime}")]
        [HttpPost]
        public async Task<IActionResult> AddCategory(string ime)
        {
   
            var collection = db.GetCollection<Category>("Category");
            Category cat = new Category { Name = ime };
            collection.InsertOne(cat);

            return Ok();
        }

        [Route("GetGenderProducts/{kategorija}/{gender}")]
        [HttpGet]
        public IActionResult GetGenderProducts(string kategorija, string gender)
        {
        
            var collection = db.GetCollection<Category>("Category");
            var collection2 = db.GetCollection<Product>("Products");
            var filter = collection.Find(x => x.Name == kategorija).ToList();

            List<ProductFront> lista = new List<ProductFront>();

            foreach (Category c in filter.AsQueryable())
            {
                foreach (MongoDBRef p in c.Products)
                {
                    var filter2 = collection2.Find(x => x.Id == p.Id).FirstOrDefault();
                    if (filter2.Gender == gender)
                    {
                        ProductFront pf = new ProductFront
                        {
                            Id = filter2.Id,
                            Brand = filter2.Brand,
                            Discount = filter2.Discount,
                            Gender = filter2.Gender,
                            Image = filter2.Image,
                            Name = filter2.Name,
                            Ocena = filter2.Ocena,
                            Price = filter2.Price,
                            Category = c.Name
                        };
                        lista.Add(pf);
                    }
                }
            }
            return new JsonResult(lista);
        }

        [Route("GetSviProizvodi")]
        [HttpGet]
        public IActionResult GetSviProizvodi()
        {
            var collection = db.GetCollection<Category>("Category");
            var collection2 = db.GetCollection<Product>("Products");
            var filter = collection.Find(x => true).ToList();

            List<ProductFront> lista = new List<ProductFront>();

            foreach (Category c in filter.AsQueryable())
            {
                foreach (MongoDBRef p in c.Products)
                {
                    var filter2 = collection2.Find(x => x.Id == p.Id).FirstOrDefault();
                    ProductFront pf = new ProductFront
                    {
                        Id = filter2.Id,
                        Brand = filter2.Brand,
                        Discount = filter2.Discount,
                        Gender = filter2.Gender,
                        Image = filter2.Image,
                        Name = filter2.Name,
                        Ocena = filter2.Ocena,
                        Price = filter2.Price,
                        Category = c.Name
                    };
                    lista.Add(pf);
                }
            }
            return new JsonResult(lista);
        }

        /*[HttpPost]
        [Route("AddCategory")]
        public async Task<IActionResult> AddCategory([FromBody] Category category)
        {
            var collection = db.GetCollection<Category>("Category");
            if (collection.Find(x => x.Name == category.Name).FirstOrDefault() == null)
            {
                collection.InsertOne(category);
                return Ok(new
                {
                    message = "Success!"
                });
            }
            else
                return BadRequest("Product already exists!");
        }*/

        [HttpGet]
        [Route("GetAllCategories")]
        public async Task<IActionResult> GetAllCategories()
        {
            var collection = db.GetCollection<Category>("Category");
            var category = collection.Find(x => true).ToList();
            return new JsonResult(category);
        }

        [HttpGet]
        [Route("GetUserByUsername/{username}")]
        public async Task<IActionResult> GetUserByUsername([FromRoute] string username)
        {
            var collection = db.GetCollection<User>("User");
            var user = collection.Find(x => x.Username == username).FirstOrDefault();
            return new JsonResult(user);
        }

        [HttpGet]
        [Route("GetUserByRole/{role}")]
        public async Task<IActionResult> GetUserByRole([FromRoute] string role)
        {
            var collection = db.GetCollection<User>("User");
            var user = collection.Find(x => x.Role == role).FirstOrDefault();
            return new JsonResult(user);
        }

        [HttpGet]
        [Route("GetProductByName/{name}")]
        public async Task<IActionResult> GetProductByName([FromBody] string name)
        {
            var collection = db.GetCollection<Product>("Product");
            var product = collection.Find(x => x.Name == name).FirstOrDefault();
            return new JsonResult(product);
        }

        /*[HttpGet]
        [Route("GetProductByCategory/{category}")]
        public async Task<IActionResult> GetProductByCategory([FromRoute] string category)
        {
            var collection = db.GetCollection<Product>("Product");
            var products = collection.Find(x => x.Category.Name == category).ToList();
            return new JsonResult(products);
        }*/

        [Route("DeleteProduct/{ime}")]
        [HttpDelete]
        public string DeleteProduct(string ime)
        {
          
            var collection = db.GetCollection<Category>("Category");
            var collection2 = db.GetCollection<Product>("Products");

            var filter = collection2.Find(x => x.Name == ime).FirstOrDefault();
            var filtercategory = collection.Find(x => x.Id == filter.Category.Id).FirstOrDefault();


            foreach (MongoDBRef p in filtercategory.Products)
            {
                if (p.Id == filter.Id)
                {
                    filtercategory.Products.Remove(p);
                    collection2.DeleteOne(filter.ToBsonDocument());

                    var filt = Builders<Category>.Filter.Eq(s => s.Id, filtercategory.Id);
                    var update = Builders<Category>.Update.Set(s => s.Products, filtercategory.Products);
                    collection.UpdateOne(filt, update);
                    return "GG";
                }
            }

            return "BG";

        }

        [HttpPut]
        [Route("UpdateOcena/{identifikator}/{ocena}")]
        public string UpdateOcena(string identifikator, int ocena)
        {
            var collection = db.GetCollection<Category>("Category");
            var collection2 = db.GetCollection<Product>("Products");

            var filter = collection2.Find(x => x.Name == identifikator).FirstOrDefault();

            filter.Ocena = ocena;
            var filt = Builders<Product>.Filter.Eq(s => s.Id, filter.Id);

            collection2.FindOneAndUpdate(filt, filter.ToBsonDocument());

            return "GG";

        }

        [Route("UpdateProduct/{identifikator}/{name}/{price}/{brand}/{ocena}/{discount}/{gender}/{image}")]
        [HttpPut]
        public string UpdateProduct(string identifikator, string name,int price, string brand, int ocena, int discount, string gender, string image)
        {

            var collection = db.GetCollection<Category>("Category");
            var collection2 = db.GetCollection<Product>("Products");

            var filter = collection2.Find(x => x.Name == identifikator).FirstOrDefault();

            filter.Name = name;
            filter.Price = price;
            filter.Brand = brand;
            filter.Ocena = ocena;
            filter.Discount = discount;
            filter.Gender = gender;
            filter.Image = image;

            var filt = Builders<Product>.Filter.Eq(s => s.Id, filter.Id);

            collection2.FindOneAndUpdate(filt, filter.ToBsonDocument());

            return "GG";

        }

        [HttpGet]
        [Route("GetCategoryByName/{name}")]
        public async Task<IActionResult> GetCategoryByName([FromBody] string name)
        {
            var collection = db.GetCollection<Category>("Category");
            var category = collection.Find(x => x.Name == name).FirstOrDefault();
            return new JsonResult(category);
        }

        /*[HttpDelete]
        [Route("DeleteProductByName/{name}")]
        public async Task<IActionResult> DeleteProductByName(string name)
        {
            var collection = db.GetCollection<Product>("Product");
            var filter = Builders<Product>.Filter.Eq(x => x.Name, name);
            collection.DeleteOne(filter);
            return Ok();
        }*/

        [HttpDelete]
        [Route("DeleteUserByUsername/{username}")]
        public async Task<IActionResult> DeleteUserByUsername([FromRoute] string username)
        {
            var collectionUsers = db.GetCollection<User>("User");
            var filter = Builders<User>.Filter.Eq(x => x.Username, username);
            collectionUsers.DeleteOne(filter);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteUser")]
        public async Task<IActionResult> DeleteUser([FromBody]User user)
        {
            var collectionUsers = db.GetCollection<User>("User");
            collectionUsers.DeleteOne(x => x.Id == user.Id);
            return Ok();
        }

        /*[HttpDelete]
        [Route("DeleteProduct")]
        public async Task<IActionResult> DeleteProduct([FromBody] Product product)
        {
            var collectionProducts = db.GetCollection<Product>("Product");
            collectionProducts.DeleteOne(x => x.Id == product.Id);
            return Ok();
        }*/


        [HttpDelete]
        [Route("DeleteCategory")]
        public async Task<IActionResult> DeleteCategory([FromBody] Category category)
        {
            var collection = db.GetCollection<Category>("Category");
            collection.DeleteOne(x => x.Id == category.Id);
            return Ok();
        }

        [HttpPut]
        [Route("UpdateUserPassword/{username}/{password}")]
        public async Task<IActionResult> UpdateUserPassword([FromRoute] string username, [FromRoute] string password)
        {
            var collection = db.GetCollection<User>("User");

            var filter = Builders<User>.Filter.Eq(x => x.Username, username);
            var update = Builders<User>.Update.Set(x => x.Password, password);
            collection.UpdateOne(filter, update);
            return Ok();
        }

        [HttpPut]
        [Route("UpdateProductPrice/{name}/{price}")]
        public async Task<IActionResult> UpdateProductPrice([FromRoute] string name, [FromRoute] double price)
        {
            var collection = db.GetCollection<Product>("Product");

            var filter = Builders<Product>.Filter.Eq(x => x.Name, name);
            var update = Builders<Product>.Update.Set(x => x.Price, price);
            collection.UpdateOne(filter, update);
            return Ok();
        }
    }
}
