"use strict";

//dependencies//

var inquirer = require("inquirer");
var msqyl = require("msqyl");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Hamza",
  database: "Bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // start();
});

//purchase//

var productPurchased = [];

//query products and get prompts//

connection.query("SELECT * FROM products", function(err,res){
	if (err) throw err;
	console.log(res);
});

inquirer.prompt([
{
	type: "input",
	name: "itemID",
	message: "Enter Product ID of your desired purchase",

},
{
	type:"input",
	name: "quantity",
	message: "Enter desired quantity of product"
}

]).then(function(info) {
	var item = info.itemID;
	var quantity = info.quantity;

	connection.query("SELECT * FROM products WHERE idem_id = ?
		, item, function(err, res) {
			if (err) throw err;
			var department = res[0].department_name;
			var stockcheck = res[0].stock_quantity;
			if (stockcheck <= quantity) {
				var stockTotal = stockcheck - quantity;
				var price = res[0].price;
				var cost = quantity * price;

				connection.query("UPDATE products SET ? WHERE ?", [{
					stock_quantity: stockcheck }, {
						item_id: info.itemID
						}], function(err,res) {
					if (err) throw err;
					console.log("Total cost: $" + tCost);
				});
		} else {
			console.log("Insufficient quantity!");
		};
	});
});
					}
				}])
			}
		}
}

}])


//Starts the server to begin listening//

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
