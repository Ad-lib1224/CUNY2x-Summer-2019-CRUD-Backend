//handles connection, seeds(populates), defines models
const Sequelize = require('sequelize');
const db= new Sequelize("postgres://localhost:5432/campuses",{logging:false})
const allCampuses = [
	{
		img: "https://www.algemeiner.com/wp-content/uploads/2015/11/Hunter.jpg",
		name: "Hunter College",
		phone: "(212) 772-4000",
		url: "https://hunter.cuny.edu/",
		description: "Discover a top-ranked and affordable public college in NYC, offering progressive undergraduate, graduate, and professional programs.",
		location: "695 Park Ave New York, NY 10065",
		underGradEnrollment: "15,632"
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2016_Brooklyn_College_Library.jpg/300px-2016_Brooklyn_College_Library.jpg",
		name: "Brooklyn College",
		phone: "(718) 951-5000",
		url: "www.brooklyn.cuny.edu/",
		description: "",
		location:"2900 Bedford Ave, Brooklyn, NY 11210",
		underGradEnrollment:"13,380"
	},
	{
		img: "https://www.usnews.com/img/college-photo_8096.jpg",
		name: "New York City College of Technology",
		phone: "(718) 260-5500",
		url: "www.citytech.cuny.edu/",
		description: "The New York City College of Technology is a public college in New York City. Founded in 1946, it is the City University of New York's college of technology.",
		location: "300 Jay St, Brooklyn, NY 11201",
		underGradEnrollment: "16,040"
	}
]

const Campus = db.define('campus', {
	imgUrl: {
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	number: {
		type: Sequelize.STRING,
		allowNull: false
	},
	url: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.STRING,
		allowNull: false
	},
	underGradEnrollment: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

const Student = db.define('student', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

const Elephants = db.define('elephant', {
	name:{type:Sequelize.STRING}
})

const init = async () => {
	await db.sync({force:true})

	for (let i = 0; i < allCampuses.length; i++) {
		await Campus.create({
			imgUrl:allCampuses[i].img,
			name: allCampuses[i].name,
			number: allCampuses[i].phone,
			url: allCampuses[i].url,
			description: allCampuses[i].description,
			location: allCampuses[i].location,
			underGradEnrollment:allCampuses[i].underGradEnrollment
		})
	}
	// await db.close();
}

init()

module.exports = {db, Campus}