var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chris',
    password: 'mypass',
    database: 'bamazon'
});
/**
 * Main menu!
 */
function start() {
    displayInventory();
};
connection.connect(function (err) {
    if (err) throw err;
    start();
});
displayInventory = () => {
    connection.query({
        sql: 'SELECT * FROM `products`;',
        timeout: 40000,
        values: [50]
    }, function (error, results, fields) {
        if (error) throw error;
        console.log(
            `Item`.padStart(6) +
            `Product`.padStart(25) +
            `Department`.padStart(25) +
            `Price`.padStart(10) +
            `Quantity`.padStart(10));
        results.forEach((el) => {
            console.log(
                `${el.item_id}`.padStart(6) +
                `${el.product_name}`.padStart(25) +
                `${el.department_name}`.padStart(25) +
                `${el.price}`.padStart(10) +
                `${el.stock_quantity}`.padStart(10));
        });
        queryProductId();
    });
}
queryProductId = () => {
    inquirer
        .prompt({
            name: "queryID",
            type: "input",
            message: "Enter the product id of what to buy:",
        })
        .then((ans) => {
            connection.query(`SELECT price, stock_quantity FROM products WHERE item_id = "${ans.queryID}"`, (err, res) => {
                if (err) throw err;
                if (res === undefined) {
                    console.log(`Invalid Product Id`);
                    start();
                } else queryBuyAmount(ans.queryID, res[0].price, res[0].stock_quantity);
            });
        });
}
queryBuyAmount = (id, price, stock) => {
    inquirer
        .prompt({
            name: "queryAmount",
            type: "input",
            message: `Enter the amount to buy (Stock = ${stock}):`,
        })
        .then((ans) => {
            if (parseInt(ans.queryAmount) <= parseInt(stock)) {
                let total = parseFloat(ans.queryAmount) * parseFloat(price);
                connection.query(`UPDATE products SET stock_quantity = "${parseInt(stock)-parseInt(ans.queryAmount)}" WHERE item_id = "${id}"`, (err, res) => {
                    console.log(`Bought ${ans.queryAmount} for $${total}!`);
                });
            } else console.log(`Insufficent quantity!`);
            start();
        });
}