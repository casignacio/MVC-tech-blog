const Sequelize = require('sequelize');
require('dotenv').config(); // Import sensitive data from .env

let sequelize;

if (process.env.JAWSDB_URL){
   sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    })
}

// const sequelize = process.env.JAWSDB_URL 
//   ? new Sequelize(process.env.JAWSDB_URL) // JAWSDB_URL is for HEROKU
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { // This is for Local
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//       // dialectOptions: {
//       //   decimalNumbers: true,
//       // },
//     });

module.exports = sequelize;