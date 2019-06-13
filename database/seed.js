// const Campusus = require("../Campuses")
const db = require('./db')

(async () => {
	try {
		// await db.sync({force:true})
		console.log('Yay!!')
	} catch (err) {
		console.log('Error caught')
		console.error(err)
	}
})()