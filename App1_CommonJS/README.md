# Node.js Server

This is a simple Node.js server that serves an HTML webpage and provides a JSON API 
for product data. By providing the product id we can render specific product with the
basic details like Name, Price, Rating...

## Getting Started

To run the server, follow these steps:

1. Install Node.js: If you haven't already, download and install Node.js
   from [nodejs.org](https://nodejs.org/).

2. Clone the repository or download the source code.

3. Navigate to the project directory in your terminal.

4. Install dependencies by running:

   ```
    npm install
    
   ```

# Start the server:

- npm start (or)
- npm run dev (Install nodemon to use auto server run on saving the file when anything
  modified the code base)
- The server will start listening on http://localhost:8000.

# Endpoints
1. Home Page
    ```
    URL: http://localhost:8000/

    ```
- Description: The root URL serves an HTML page with dynamic product content.

2. API Endpoint
    ```
    URL: http://localhost:8000/api

    ```
- Description: This endpoint provides product data in JSON format.

3. Product Pages
    ```
    URL: http://localhost:8000/product/{productId}
    
    ```
- Description: Retrieve information about a specific product by replacing {productId} with 
  the actual product ID.

# File Structure
- app.js: The main Node.js server file.
- public/index.html: The HTML template for the home page.
- product_data/data.json: JSON file containing product data.

# Usage
Feel free to modify the server and HTML template to fit your specific needs. You can also 
enhance the error handling and add more features as required.
