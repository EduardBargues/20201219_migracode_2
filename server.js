const express = require("express");
const app = express();
const port = 3000
const {
    Pool
} = require("pg");

const pool = new Pool({
    user: "eduar",
    host: "localhost",
    database: "20201219_2",
    password: "1459#Adei",
    port: 5432,
});

// If you don't have it already, add a new GET endpoint /products to load all the product names along with their supplier names.
app.get('/products', (req, res) => {
    pool.query(`select p.product_name, s.supplier_name from products p 
    join suppliers s on s.id=p.supplier_id 
    `)
        .then(result => res.send(result.rows))
        .catch(error => console.log(error))
})
// Update the previous GET endpoint /products to filter the list of products by name using a query parameter, for example /products?name=Cup.
// This endpoint should still work even if you don't use the name query parameter!
// Add a new GET endpoint /customers/:customerId to load a single customer by ID.
// Add a new POST endpoint /customers to create a new customer.
// Add a new POST endpoint /products to create a new product (with a product name, a price and a supplier id). Check that the price is a positive integer and that the supplier ID exists in the database, otherwise return an error.
// Add a new POST endpoint /customers/:customerId/orders to create a new order (including an order date, and an order reference) for a customer. Check that the customerId corresponds to an existing customer or return an error.
// Add a new PUT endpoint /customers/:customerId to update an existing customer (name, address, city and country).
// Add a new DELETE endpoint /orders/:orderId to delete an existing order along all the associated order items.
// Add a new DELETE endpoint /customers/:customerId to delete an existing customer only if this customer doesn't have orders.
// Add a new GET endpoint / customers /: customerId / orders to load all the orders along the items in the orders of a specific customer.Especially, the following information should be returned: order references, order dates, product names, unit prices, suppliers and quantities.

app.listen(port, () => console.log("Server is listening on port 3000. Ready to accept requests!"))