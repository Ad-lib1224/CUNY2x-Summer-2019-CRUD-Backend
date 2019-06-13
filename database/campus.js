// const db = require('./database');
const Sequelize = require('sequelize');
const db= new Sequelize("postgres://localhost:5432/campuses",{logging:false})

const {STRING} = Sequelize

const Campus = db.define('campus', {
	imgUrl: {
		type: STRING,
		// allowNull: false
	},
	name: {
		type: STRING,
		allowNull: false
	},
	number: {
		type: STRING,
		// allowNull: false
	},
	url: {
		type: STRING,
		// allowNull: false
	},
	description: {
		type: STRING,
		// allowNull: false
	},
	location: {
		type: STRING,
		// allowNull: false
	},
	underGradEnrollment: {
		type: STRING,
		// allowNull: false
	}
});

module.exports = Campus
