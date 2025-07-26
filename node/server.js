const express = require('express');
const app = express();
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || '172.20.0.7',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'xyz123',
  database: process.env.DB_NAME || 'visionstudio',
});

// Function to import SQL data if database is empty
function setupDatabase() {
  connection.query('SHOW TABLES', (err, results) => {
    if (err) {
      console.error('Error checking for tables:', err);
      return;
    }

    console.log(`Found ${results.length} tables in database`);
    
    // Check if products table exists and has data
    connection.query('SELECT COUNT(*) as count FROM products', (err, productResults) => {
      if (err) {
        console.error('Products table does not exist or error accessing it:', err);
        runImportScript();
      } else {
        const productCount = productResults[0].count;
        console.log(`Found ${productCount} products in database`);
        
        if (productCount === 0) {
          console.log('Products table is empty. Running SQL import script...');
          runImportScript();
        } else {
          console.log('Database already has data.');
        }
      }
    });
  });
}

function runImportScript() {
  const { spawn } = require('child_process');
  const importProcess = spawn('node', ['import-sql.js'], {
    env: process.env,
    stdio: 'inherit'
  });
  
  importProcess.on('close', (code) => {
    if (code === 0) {
      console.log('SQL import script completed successfully');
    } else {
      console.error(`SQL import script exited with code ${code}`);
    }
  });
  
  importProcess.on('error', (err) => {
    console.error('Error spawning SQL import process:', err);
  });
}

// Test connection and initialize database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  setupDatabase();
});

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(allowCrossDomain)

// Function to generate total order ID
function generateOrderID(uid) {
  // Get current date and time
  const currentDate = new Date();
  // Format the date and time as desired (for example, YYYYMMDD-HHMMSS)
  const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}${currentDate.getSeconds().toString().padStart(2, '0')}`;
  // Concatenate the strings 'ORDER-', formatted date, and user's UID
  const orderID = `ORDER-${formattedDate}-${uid}`; 
  return orderID;
}

//// Fetch product functions endpoints 

// Get all products 
app.get('/api/products', async (req,res) => {
  console.log('🔍 Products endpoint called - attempting database query');
  console.log('🔧 Database config:', {
    host: process.env.DB_HOST || '172.20.0.7',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'visionstudio'
  });
  
  connection.query(
    `SELECT * FROM products`,
    function(err, results, fields) {
      if(err) {
        console.error('❌ Database query error:', err.message);
        console.error('❌ Full error:', err);
        res.status(500).json({ error: 'Database error', details: err.message });
      } else {
        console.log(`✅ Database query successful - found ${results.length} products`);
        res.send(results);
      }
    }
  );
});

// Test endpoint with hardcoded products (bypasses database)
app.get('/api/test-products', async (req,res) => {
  const testProducts = [
    {
      "pid": 1,
      "name": "Test Product - LG Monitor",
      "price": 299.99,
      "image": "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Test+Product",
      "brand": "LG",
      "category": "monitors",
      "stock": 10,
      "product_code": "TEST001"
    },
    {
      "pid": 2,
      "name": "Test Product - MacBook",
      "price": 1999.99,
      "image": "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=MacBook+Test",
      "brand": "Apple",
      "category": "laptops",
      "stock": 5,
      "product_code": "TEST002"
    }
  ];
  
  console.log('Test products endpoint called - returning hardcoded data');
  res.json(testProducts);
});

// Get desktop products
app.get('/api/products/desktops', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "desktops"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get hardware products
app.get('/api/products/hardware', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "hardware"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get laptop products
app.get('/api/products/laptops', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "laptops"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get monitor products
app.get('/api/products/monitors', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "monitors"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get networking products
app.get('/api/products/networking', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "networking"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get all peripheral products
app.get('/api/products/peripherals', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "peripherals"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get all tablet products
app.get('/api/products/tablets', async (req,res) => {
  connection.query(
    `SELECT * FROM products WHERE category = "tablets"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

//// Cart functions endpoints 

// Get a cart details by its cartId
app.get('/api/carts/:cartId', async (req,res) => {
  connection.query(
    `SELECT * FROM carts WHERE cid = ${req.params.cartId}`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Get a user's cart by his/her uid 
app.get('/api/users/:uid/cart', async (req,res) => {
  connection.query(
    `SELECT * FROM carts WHERE uid = ${req.params.uid}`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Insert a product in cart 
app.post('/api/carts', async (req,res) => {
  connection.query(
    `INSERT INTO carts (uid, pid, insertionDate, amount, price) 
    VALUES (${req.body.uid}, ${req.body.pid}, NOW(), ${req.body.amount}, ${req.body.price})`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});    

// Delete a product from user's cart 
app.delete('/api/carts/:id', async (req,res) => {
  connection.query(
    `DELETE FROM carts WHERE cid = ${req.params.id}`,
     function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
}); 

app.delete('/api/users/:uid/cart',async(req,res) => {
  connection.query(
    `DELETE FROM carts WHERE uid = ${req.params.uid}`,
    function(err,results){
      if(err)
       res.send([]).status(500).end();
      else
       res.send(results)
  });     
});



//// Login and signup endpoints 

// Login endpoint with JWT authentication 
app.post('/api/user/login', async(req, res) => {

  try {
    secretKey = "HCI_project^_2023_"
    connection.query(   
      `SELECT * FROM users WHERE username = "${req.body.usr}" AND password = "${req.body.pwd}"`,
      function(err, results, fields) {
        if(err) {
          return res.status(200).json({ message: 'Something went wrong!' });
        } else { 
          // check if the user was found in the database
          if (results.length > 0) {  
            // generate a JWT token and return the token as a response
            token = jwt.sign({ userId: results[0].uid, userName: results[0].username }, secretKey, { expiresIn: '1h' });
            res.json({ token });  
          } else {
            return res.status(401).json({ message: 'Wrong username or password!' });
          }
        }  
      }
    );
 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

});

// Signup endpoint 
app.post('/api/user/signup', async(req, res) => {

  let input_username = req.body.username;
  let input_email = req.body.email;

  if (input_username && input_email) {

    if (input_username === '' || input_email === '' || input_username === ' ' || input_email === ' ') {
      return res.status(409).json({ message: 'Username and email cannot be empty!' });
    } else {
      connection.query(   
        `SELECT * FROM users WHERE username = "${input_username}" OR email = "${input_email}"`,
        function(err, results, fields) {
          if(err) {
            res.send([]).status(500).end();
          } else { 
            // check if username or email already exists in the database
            if (results.length > 0) {
              return res.status(409).json({ message: 'Username or email already exists!' });
            }
            else {   
    
              connection.query(
                `INSERT INTO users (name, surname, username, password, email, city, address) 
                VALUES ("${req.body.name}", "${req.body.surname}", "${input_username}", "${req.body.pwd}", 
                "${input_email}", "${req.body.city}", "${req.body.addr}");`,
                function(err, results1, fields) {
                  if(err)
                    res.send([]).status(500).end();
                  else
                    return res.status(200).json({ message: 'User created successfully!' });
                }
              );
            }
          }
        }
      );
    }

  } else {
    return res.status(409).json({ message: 'Username and email cannot be empty!' });
  }

});

//// Order functions endpoints 

// Create a new order (new totalOrderId) and insert it in the database 
app.post('/api/orders', async (req,res) => {   

  const orderData = req.body;
  const uid = orderData.uid; // the user's id 
  if (!uid) {
    return res.status(400).send('User ID is required in the request body.');
  }

  const totalOrderID = generateOrderID(uid); // Generate totalOrderID based on datetimer and uid
  const orderItems = orderData.orderItems;
  if (!orderItems) {
    return res.status(400).send('Order items are required in the request body.');
  }
  const numberOfProducts = orderItems.length;
  const success_flag = 1;

  // Loop through order items and perform order insertion in the db 
  for (let i = 0; i < numberOfProducts; i++) {
      const pid = orderItems[i].productId;
      const amount = orderItems[i].amount;
      const cost = orderItems[i].price;  

      // Perform order insertion in the db 
      connection.query(
        `INSERT INTO orders (uid, pid, totalOrderId, orderDate, orderAmount, orderCost)  
        VALUES (${uid}, ${pid}, "${totalOrderID}", NOW(), ${amount}, ${cost})`,
        function(err, results, fields) {
          if (err) {
            success_flag = 0; 
            console.error('Error inserting data into the database: ' + err.stack);
          } else {  
            console.log('Order created successfully!');    
          }
        }     
      );   
  }

  // Delete all products from user's cart 
  connection.query(
    `DELETE FROM carts WHERE uid = ${uid}`,
    function(err, results, fields) {
      if(err)
        success_flag = 0; 
    }
  );

  if (success_flag == 1) { 
    return res.status(200).json({ message: 'Order created successfully!' }); 
  } else {
    return res.status(401).json({ message: 'Something went wrong!' }); 
  }
        
});       

// Get all orders of a user based on uid 
app.get('/api/users/:uid/orders', async (req,res) => {
  connection.query(
    `SELECT totalOrderId FROM orders WHERE uid = "${req.params.uid}" GROUP BY totalOrderId`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
}); 

// Get all products from an existing total order (existing totalOrderId)
app.get('/api/orders/:totalOrderId/products', async (req,res) => {
  connection.query(
    `SELECT * FROM orders WHERE totalOrderId = "${req.params.totalOrderId}"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
}); 

//// User endpoints 

// Get user data based on user's uid
app.get('/api/users/:uid', async(req, res) => {
  connection.query(
    `SELECT * FROM users WHERE uid = "${req.params.uid}"`,
    function(err, results, fields) {
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
});

// Update user data based on user's uid 
app.post('/api/users/:uid/update', async (req,res) => {
  connection.query(
    `UPDATE users SET name = "${req.body.name}", surname = "${req.body.surname}", username = "${req.body.username}", 
    password = "${req.body.pwd}", email = "${req.body.email}", city = "${req.body.city}", 
    address = "${req.body.addr}" WHERE uid = "${req.params.uid}" AND username = "${req.body.username}"`,
    function(err, results, fields) { 
      if(err)
        res.send([]).status(500).end();
      else
        res.send(results)
    }
  );
}); 

app.get('/', (req, res) => {
  res.send({ message: 'Message From Express Backend!' });
});

// Database diagnostic endpoint
app.get('/api/db-status', (req, res) => {
  console.log('🔍 Database status check requested');
  console.log('🔧 Current DB config:', {
    host: process.env.DB_HOST || '172.20.0.7',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'visionstudio',
    password: process.env.DB_PASSWORD ? '***' : 'undefined'
  });
  
  // Test basic connection
  connection.query('SELECT 1 as test', (err, testResult) => {
    if (err) {
      console.error('❌ Basic connection test failed:', err.message);
      return res.status(500).json({ 
        error: 'Database connection failed', 
        details: err.message,
        config: {
          host: process.env.DB_HOST || '172.20.0.7',
          user: process.env.DB_USER || 'root',
          database: process.env.DB_NAME || 'visionstudio'
        }
      });
    }
    
    console.log('✅ Basic connection test passed');
    
    // Check tables
    connection.query('SHOW TABLES', (err, tables) => {
      if (err) {
        console.error('❌ SHOW TABLES failed:', err.message);
        return res.status(500).json({ error: 'Cannot show tables', details: err.message });
      }
      
      console.log(`📋 Found ${tables.length} tables:`, tables.map(t => Object.values(t)[0]));
      
      // Check products table specifically
      connection.query('SELECT COUNT(*) as count FROM products', (err, productResults) => {
        if (err) {
          console.error('❌ Products count failed:', err.message);
          return res.json({
            status: 'Connected but products table issue',
            tables: tables.length,
            tableNames: tables.map(t => Object.values(t)[0]),
            products: 'Error accessing products table',
            error: err.message,
            config: {
              host: process.env.DB_HOST || '172.20.0.7',
              user: process.env.DB_USER || 'root',
              database: process.env.DB_NAME || 'visionstudio'
            }
          });
        }
        
        const productCount = productResults[0].count;
        console.log(`📦 Products count: ${productCount}`);
        
        // Get sample product data
        connection.query('SELECT * FROM products LIMIT 2', (err, sampleProducts) => {
          if (err) {
            console.error('❌ Sample products query failed:', err.message);
          }
          
          const response = {
            status: 'Connected',
            basicConnectionTest: 'PASS',
            tables: tables.length,
            tableNames: tables.map(t => Object.values(t)[0]),
            products: productCount,
            sampleProducts: err ? 'Error fetching samples' : sampleProducts,
            config: {
              host: process.env.DB_HOST || '172.20.0.7',
              user: process.env.DB_USER || 'root',
              database: process.env.DB_NAME || 'visionstudio'
            },
            timestamp: new Date().toISOString()
          };
          
          console.log('✅ Database status check complete:', {
            tables: response.tables,
            products: response.products,
            status: response.status
          });
          
          res.json(response);
        });
      });
    });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 