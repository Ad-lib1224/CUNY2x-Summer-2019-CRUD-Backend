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
			img: "",
			name: "",
			phone: "",
			url: "",
			description: "",
			location: "",
			underGradEnrollment: ""
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
	console.log("We ain't there yet")
})

module.exports = router;