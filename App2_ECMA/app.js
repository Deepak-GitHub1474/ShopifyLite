import fs from 'fs';
import http from 'http';
import fetch from 'node-fetch';

const index = fs.readFileSync("./public/index.html", "utf-8");

// Fetching the product from fakestoreapi
async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        return products; // Return the fetched products
    } catch (error) {
        console.log("Error:", error);
        return []; // Return an empty array in case of an error
    }
}

const app = http.createServer(async (req, res) => {
    switch (req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.end(index);
            break;

        case "/api":
            // Fetch products from the API using the getProducts function
            const products = await getProducts();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(products));
            break;

        default:
            if (req.url.startsWith("/product")) {
                const productId = req.url.split("/")[2];
                // Fetch products from the API using the getProducts function
                const products = await getProducts();
                const product = products.find((p) => p.id === +productId);
                if (product) {
                    res.setHeader("Content-Type", "text/html");
                    let newIndex = index
                        .replace("**title**", product.title)
                        .replace("**price**", product.price)
                        .replace("**rating**", product.rating.rate)
                        .replace("**cover**", product.image);
                    res.end(newIndex);
                } else {
                    res.writeHead(404);
                    res.end();
                }
            } else {
                res.writeHead(404);
                res.end({ msg: "Not Found" });
            }
            break;
    }
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
