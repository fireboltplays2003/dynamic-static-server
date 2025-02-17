# **Express Server for Static Files and API**

## **Description**  
This program creates a basic **Express.js server** using **Node.js**. It serves **static files** from an `assets` folder and provides an **API** for products and users.  

The server listens on port **3000** and includes:  
- **Static file serving** for HTML, CSS, and images.  
- **API routes** for retrieving product and user data.  
- **Error handling** for unknown routes.  

---

## **Features**  
✔️ Serves static files from the `assets` folder.  
✔️ Provides an API for retrieving products and users.  
✔️ Filters users based on query parameters.  
✔️ Returns a 404 error if a product is not found.  
✔️ Redirects unknown routes to the home page.  

---

## **Example**  
When a client visits `http://localhost:3000/`, `http://localhost:3000/about.html`, or `http://localhost:3000/products`, the server responds with the corresponding page or data.  

---

## **Code**

### **Server Code (`server.js`)**
```javascript
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 1. Serve static files from the "assets" folder
app.use(express.static(path.join(__dirname, "assets")));

// 2. Sample product data
const products = [
  { id: 1, name: "Laptop", price: 3000 },
  { id: 2, name: "Phone", price: 1500 },
  { id: 3, name: "Tablet", price: 2000 },
];

// 3. Route to return all products
app.get("/products", (req, res) => {
  res.json(products);
});

// 4. Route to get a specific product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// 5. Sample user data
const users = [
  { id: 1, name: "David", age: 25 },
  { id: 2, name: "Sarah", age: 30 },
  { id: 3, name: "John", age: 40 },
];

// 6. Route to return users with optional age filtering
app.get("/users", (req, res) => {
  let filteredUsers = users;
  if (req.query.age) {
    filteredUsers = users.filter((user) => user.age > parseInt(req.query.age));
  }
  res.json(filteredUsers);
});

// 7. Handle unknown routes - Return index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "assets", "index.html"));
});

// 8. Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## **HTML Files**

### **1️⃣ `index.html` - Home Page**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Company Logo">
        <h1>Welcome to Our Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <main>
        <p>This is our homepage. Click the links above to learn more about us or get in touch.</p>
    </main>
</body>
</html>
```

### **2️⃣ `about.html` - About Page**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Company Logo">
        <h1>About Us</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <main>
        <p>We are a leading company in technology and services, providing advanced solutions for our clients.</p>
    </main>
</body>
</html>
```

### **3️⃣ `contact.html` - Contact Page**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Company Logo">
        <h1>Contact Us</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>
    <main>
        <p>You can contact us via email: rula.elias2004@gmail.com</p>
        <p>You can contact us via email: stephan042003@gmail.com</p>
        <p>Or by phone: 0532396136</p>
    </main>
</body>
</html>
```

---

## **CSS File**
### **4️⃣ `styles.css` - Basic Styling**
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

main {
    margin: 20px;
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

img {
    width: 100px;
}
```

---

## **Installation Instructions**
### **1️⃣ Install Node.js**
Make sure you have **Node.js** installed. You can check by running:
```sh
node -v
```

### **2️⃣ Initialize a Node.js Project**
Run:
```sh
npm init -y
```
This creates a **`package.json`** file.

### **3️⃣ Install Express**
Run:
```sh
npm install express
```

### **4️⃣ Start the Server**
Run:
```sh
node server.js
```
Now, the server is up and running on **http://localhost:3000** 🚀

---

## **License**
📝 MIT License - Feel free to modify and use as needed.

---

✅ **Now your Express.js server is fully documented and ready for use!** 🚀  
Let me know if you need any changes. 😊
