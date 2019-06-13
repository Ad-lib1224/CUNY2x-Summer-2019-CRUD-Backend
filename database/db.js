const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:3005/campuses',{logging: false});

module.exports = db