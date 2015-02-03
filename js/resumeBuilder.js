var bio = {
	"name" : "Nathan Beddome",
	"role" : "A Rad Dude",
	"contacts" : {
		"mobile": "512-656-2581",
		"email": "nrb1122@gmail.com",
		"github": "nrb1122",
		"twitter": "NathanBeddome",
		"location": "Austin, Tx"
	},
	"WelcomeMessage" : "I'm Nathan and I love to eat + play",
	"skills": ["marketing", "front-end programming", "SEO", "Advertising"],
	"biopic" : "https://pbs.twimg.com/profile_images/2473147808/yka4fhduwdsex02woxxk.jpeg",
	"display": function () {
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);

var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(formattedWelcome);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
}
};

//$("#main").append(bio.Welcome);

//var formattedName = HTMLheaderName.replace("%data%", "Nathan Beddome");

var education = {
	"schools": [
//object 1
		{
			"name": "Austin Community College",
			"location": "Austin, Tx",
			"degree": "General Education",
			"majors": ["General Education"],
			"dates": 2011,
			"url": "http://www.austincc.edu/"
		},
//object 2
		{
			"name": "University of Texas at Austin",
			"location": "Austin, Tx",
			"degree": "Advertising",
			"majors": ["Advertising", "Media"],
			"dates": 2015,
			"url": "http://www.utexas.edu/"
		}

	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/ud304"
		},

		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},

		{
			"title": "Intro to jQuery",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/ud245"
		}
	],
	"display": function (){
		for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedUrl = formattedName.replace("#", education.schools[school].url);
		var i = 0
		var text = "";
		while(education.schools[school].majors[i]) {
			var formattedMajors = HTMLschoolMajor.replace("%data%", text += education.schools[school].majors[i] + ", ");
			i++;
		}
		var formattedEverything = formattedUrl + formattedLocation + formattedDegree + formattedDates + formattedMajors;

		$(".education-entry:last").append(formattedEverything);
	}

$(".education-entry:last").append(HTMLonlineClasses);

for (course in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var insertTitleUrl = formattedTitle.replace("#", education.onlineCourses[course].url);
		var insertUrlUrl = formattedUrl.replace("#", education.onlineCourses[course].url);
		var formattedEverything = insertTitleUrl + formattedSchool + formattedDate;
		$(".education-entry:last").append(formattedEverything);
}
	}
}

var work = {
	"jobs": [
		{
			"employer": "Google Inc",
			"title": "BOLD Intern",
			"location": "San Francisco, CA",
			"dates": 2014,
			"description": "Worked on gTech Ads' Rich Media Services team to create a presentation guide for Googlers and Clients that highlighted the end-to-end life cycle of an HTML5 campaign."
		},
		{
			"employer": "Volacci",
			"title": "Digital Marketing Intern",
			"location": "Austin, TX",
			"dates": 2013,
			"description": "Helped many clients expand their SEO and digital media presence."
		}
	],
	"display": function () {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedEmployerTitle = formattedEmployer + formattedLocation + formattedTitle + formattedDate + formattedDescr;

	$(".work-entry:last").append(formattedEmployerTitle)
}
}
}

var projects = {
	"projects":[
		{
			"title": "DoubleClick T-Mobile HTML5 Case Study",
			"dates": 2014,
			"description": "Worked with gTech Ads' Rich Media Services Team to conceptualize a case study that highlighted important findings of a T-Mobile HTML5 rich media campaign.",
			"images": ["images/TMobile.png", "images/doubleclick2.PNG"]
		},
		{
			"title": "Daily Texan Native Advertising Plan",
			"dates": 2014,
			"description": "Built the native advertising infrastructure for The Daily Texan that will increase digital revenue by 10%.",
			"images": ["images/dtnative.PNG", "images/dtnativ2.PNG"]
		}
	],
	"display" : function () {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formatProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formatProjectTitle);

		var formatProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formatProjectDates);

		var formatDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formatDescription);

		for (var i = 0; i < 2; i++){
		var formatImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
		$(".project-entry:last").append(formatImage);
	}
	}
	}
}

bio.display ();
work.display ();
projects.display ();
education.display ();

$("#mapDiv").append(googleMap);
initializeMap();

//smooth scroll for menu navigation
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




