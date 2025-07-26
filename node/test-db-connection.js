const mysql = require('mysql2/promise');

async function testDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'web-demo-mysql.cpg4cm66mp51.eu-central-1.rds.amazonaws.com',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'xyz123',
    database: process.env.DB_NAME || 'visionstudio',
  });

  try {
    console.log('Testing database connection...');
    
    // Test connection
    await connection.execute('SELECT 1');
    console.log('✅ Database connection successful');
    
    // Check if tables exist
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('📋 Tables in database:', tables.length);
    tables.forEach(table => console.log(`  - ${Object.values(table)[0]}`));
    
    // Check products table specifically
    if (tables.some(t => Object.values(t)[0] === 'products')) {
      const [products] = await connection.execute('SELECT COUNT(*) as count FROM products');
      console.log(`📦 Products in database: ${products[0].count}`);
      
      if (products[0].count > 0) {
        const [sampleProducts] = await connection.execute('SELECT pid, name, category FROM products LIMIT 3');
        console.log('📝 Sample products:');
        sampleProducts.forEach(p => console.log(`  - ${p.pid}: ${p.name} (${p.category})`));
      }
    } else {
      console.log('❌ Products table does not exist');
    }
    
  } catch (error) {
    console.error('❌ Database error:', error.message);
  } finally {
    await connection.end();
  }
}

testDatabase();
