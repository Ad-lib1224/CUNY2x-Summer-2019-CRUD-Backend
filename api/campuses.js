const router = require('express').Router();

//get all campuses
router.get("/", (req,res,next) => {
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
	res.json(allCampuses);
})

//get single campus
router.get("/HunterCollege", (res,req,next)=> {
	const hunterCollegeInfo = [
	{
		img: "https://www.algemeiner.com/wp-content/uploads/2015/11/Hunter.jpg",
		name: "Hunter College",
		phone: "(212) 772-4000",
		url: "https://hunter.cuny.edu/",
		description: "Discover a top-ranked and affordable public college in NYC, offering progressive undergraduate, graduate, and professional programs.",
		location: "695 Park Ave New York, NY 10065",
		underGradEnrollment: "15,632"
	}]
	res.json(hunterCollegeInfo)
})

router.get("/BrooklynCollege", (res,req,next)=> {
	const brooklynCollegeInfo = [{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2016_Brooklyn_College_Library.jpg/300px-2016_Brooklyn_College_Library.jpg",
		name: "Brooklyn College",
		phone: "(718) 951-5000",
		url: "www.brooklyn.cuny.edu/",
		description: "Brooklyn College is a public college in Brooklyn, New York City. It is part of the City University of New York. Brooklyn College originated in 1930 with the establishment of an extension division of the City College for Teachers.",
		location:"2900 Bedford Ave, Brooklyn, NY 11210",
		underGradEnrollment:"13,380"
	}]
	res.json(brooklynCollegeInfo)
})

router.get("/CityTech", (res,req,next) => {
	const cityTechInfo = [{
		img: "https://www.usnews.com/img/college-photo_8096.jpg",
		name: "New York City College of Technology",
		phone: "(718) 260-5500",
		url: "www.citytech.cuny.edu/",
		description: "The New York City College of Technology is a public college in New York City. Founded in 1946, it is the City University of New York's college of technology.",
		location: "300 Jay St, Brooklyn, NY 11201",
		underGradEnrollment: "16,040"
	}]
	res.json(cityTechInfo)
})

module.exports = router;