using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportPMD1
{
    public class Category
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; } //Men, Women, Boys, Girls

        public List<MongoDBRef> Products { get; set; }

        public Category()
        {
            Products = new List<MongoDBRef>();
        }
    }
}
