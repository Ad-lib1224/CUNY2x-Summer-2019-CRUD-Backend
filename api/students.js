
//Setting up routes for GET, POST, PUT, DELETE
const router = require("express").Router();


//get a list of students from the database api/students
//require, respond, next request
router.get("/", (req,res,next) => {
	res.json("All of the students");
	//res.send(allStudents);
})

//dummy data
router.get("/:id", (req,res, next) => {
	const id = req.params.id
	if( id === "1") {
		const Thomas = [{
			id: "1",
 			name: "Thomas Bravado",
 			gpa: "3.4",
 			school: "Baruch",
 			classYear: "2020",
 			major: "Finance"
		}]

		res.json(Thomas);
	}
	else if( id === "2") {
		const Jessica = [{
			id:"2",
			name: "Jessica Mada",
			gpa: "3.6",
			school: "NYU",
			classYear: "2021",
			major: "Math"
		}]

		res.json(Jessica);
	}
	else if( id === "3") {
		const Aaaron = [{
			id: "3",
			name: "Aaaron Stark",
			gpa: "3.0",
			school: "CCNY",
			classYear: "2021",
			major: "Mechanical Engineering"
		}]

		res.json(Aaaron);
	}
})

//add new student to database api/students
router.post("/", (req,res,next) => {
	res.json("Post/Register information for new student")
	//let id = req.body.id;
	//res.redirect("/"+ id);
})

//update a student in the database api/students/:id
router.put("/:id", (req, res, next) => {
	res.send({type: 'PUT'})
})

//delete a student from the database api/students/:id
router.delete("/:id", (req, res, next) => {
	res.send({type: 'DELETE'})	
})

//export the routes to use on our app
module.exports = router;