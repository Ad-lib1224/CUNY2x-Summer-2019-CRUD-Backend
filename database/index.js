const db = require('./database');
const Campus = require('./models/Campus');

//associations go here

Campus.hasMany(Student)

//e-permit, transfer student 
Student.belongsToMany(Campus)

//attending one campus
Student.belongsTo(Campus)


module.exports = {db,Campus}