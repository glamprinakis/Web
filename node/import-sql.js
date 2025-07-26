const fs = require('fs');
const mysql = require('mysql2/promise');
const path = require('path');

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || '172.20.0.7',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'xyz123',
  database: process.env.DB_NAME || 'visionstudio',
  multipleStatements: true // Allow multiple SQL statements
};

// Path to the SQL file
const sqlFilePath = path.join(__dirname, '../db/visionstudio.sql');

async function importSql() {
  let connection;
  try {
    console.log('Connecting to database for SQL import...');
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to database for SQL import');

    // Read the SQL file
    console.log('📖 Reading SQL file...');
    const sql = fs.readFileSync(sqlFilePath, 'utf8');
    console.log(`📄 SQL file read successfully (${sql.length} characters)`);

    // Execute the SQL script
    console.log('🔄 Executing SQL script...');
    await connection.query(sql);
    console.log('✅ SQL script imported successfully.');

    // Verify the import by checking products count
    const [results] = await connection.query('SELECT COUNT(*) as count FROM products');
    console.log(`🎉 Import complete! Found ${results[0].count} products in database.`);

  } catch (error) {
    console.error('❌ Error importing SQL script:', error.message);
    console.error('Full error:', error);
    process.exit(1); // Exit with error
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Database connection closed.');
    }
  }
}

importSql();
