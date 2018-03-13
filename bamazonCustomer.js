//Require mysql, inquirer, cli-table and colors
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var colors = require("colors");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    user: "root",
    password: "root",

    database: "bamazon"
});

//Create connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("---------------------------------");
    displayItems();
});

  //Function to display all of the items available for sale including their info
  function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log("------------ITEM LIST------------");
      console.log("---------------------------------");
    
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID#: " + res[i].item_id + " || " +
                      "Product Name: " + res[i].product_name + " | " +
                      "Dept Name: " + res[i].department_name + " | " +
                      "Price: " + res[i].price + " | " +
                      "Stock Quantity: " + res[i].stock_quantity);
          console.log("---------------------------------");
      }


  //Prompt user for the item_id and the quantity they wish to purchase
  inquirer.prompt([
      {   //Prompt user for item_id
          type: "input",
          name: "item_id",
          message: "What is the Item ID# for the product you wish to purchase?",

          //Check to make sure a numeric value is given
          validate: function(value) {
              if(isNaN(value) == false) {
                  return true;
              } else {
                  return false;
              }
            }
        },

      { //Prompt user for quantity
        type: "input",
        name: "quantity",
        message: "How many " + product_name + " would you like to purchase?",

        //Check to make sure a numeric value is given
        validate: function(value) {
            if(isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }

    }]).then(function(result) {
        var custChosenItemID = result.item_id - 1
        var custChosenProduct = res[custChosenItemID]
        var custChosenQuantity = result.stock_quantity

        if (custChosenQuantity < res[custChosenItemID].stock_quantity) {
            console.log("Purchase Total for " + result.stock_quantity)
        }
    })











//       //End connection
//       connection.end(),
//     });
//   }


    })}