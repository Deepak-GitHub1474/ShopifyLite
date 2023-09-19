const fs = require("fs");
const http = require("http")
const index = fs.readFileSync("./public/index.html", "utf-8");
const data = fs.readFileSync("./product_data/data.json", "utf-8");

const products = JSON.parse(data).products;

const app = http.createServer((req, res) => {

    switch (req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html")
            res.end(index)
            break;

        case "/api":
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(data))
            break;

        default:
            if (req.url.startsWith("/product")) {
                const productId = req.url.split("/")[2]
                const product = products.find(p => p.id === +productId);
                if (product) {
                    res.setHeader("Content-Type", "text/html");
                    let newIndex =
                        index.replace("**title**", product.title)
                             .replace("**price**", product.price)
                             .replace("**rating**", product.rating)
                             .replace("**cover**", product.thumbnail)
                    res.end(newIndex)
                } else {
                    res.writeHead(404)
                    res.end()
                }
            } else {
                res.writeHead(404)
                res.end({msg: "Not Found"})
            }
            break;
    }
});

app.listen(8000, () => {
    console.log("Server is runing on http://localhost:8000");
});