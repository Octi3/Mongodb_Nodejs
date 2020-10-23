var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://killer:Killer@1230@cluster0.2h8a2.mongodb.net/test?retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^O/ };
    dbo.collection("customers").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      db.close();
    });
  });