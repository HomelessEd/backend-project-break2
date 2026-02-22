Project

This is my project for the web development module. It is an e-commerce site where you can manage products.

Link to Render
https://backend-project-break2-c9nc.onrender.com/products

Installation & Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up your `.env` variables (Cloudinary API keys and MongoDB URI).
4. Start the server: `npm start`

What was Used
 Node.js and Express for the server.
MongoDB Atlas to store the product data.
 Cloudinary to host the images 


Using the API
I used Postman to test the routes. To get the data in JSON format, you need to add a Header called `Accept` with the value `application/json`. Also check image folder. 

Main Routes
 GET /products - See all products.
 GET /dashboard - Admin view of products.
 POST /dashboard - Create a new product. (Matches the 'image' key in Postman).
 PUT /dashboard/:id - Update a product.
 DELETE /dashboard/:id/delete - Delete a product.
