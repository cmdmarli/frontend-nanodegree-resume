/*
Header
*/

var bio = {
	"name" : "Marli du Plessis",
	"role" : "Front-end Developer",
	"contacts" : {
		"mobileInfo" : "(+27) 82 839 3375",
		"githubInfo" : "cmdmarli",
		"emailInfo" : "cmd.marli@gmail.com",
		"locationInfo" : "South Africa, Johannesburg",
		"twitter" : "@cmdmarli",
		"welcomeMessage" : "Working in the fast paced industry of digital advertising and banking I have a keen sense for digital & mobile advertising; social media; user experience and interface design within the South African as well as African markets."
	},
	"skills" : [
		"UI design", "UX design", "Front-end development", "Animation"
	],
	"pictureURL" : "images/marli.jpg"
};

		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobileInfo));
		$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.emailInfo));
		$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.githubInfo));
		$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.locationInfo));
		//$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));
		$("#header").append(HTMLskillsStart);
		$("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
		$("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
		$("#header").append(HTMLskills.replace("%data%", bio.skills[2]));
		$("#header").append(HTMLskills.replace("%data%", bio.skills[3]));

/*
Work Experience
*/

var work =
{
	"jobs" :
	[
		{
			"position" : "Mid-Weight Creative",
			"employer" : "Gloo@Ogilvy",
			"workdates" : "3 Jan 2012 - 31 Junie 2015",
			"worklocation" : "Johannesburg - South Africa",
			"workdiscription" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum sit amet risus et elementum. Sed accumsan sem quis orci rhoncus egestas.<br>"
		},
		{
			"position" : "UI designer",
			"employer" : "Standard Bank Global",
			"workdates" : "1 July 2015 - Present",
			"worklocation" : "Johannesburg - South Africa",
			"workdiscription" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum sit amet risus et elementum. Sed accumsan sem quis orci rhoncus egestas.<br>"
		}
	],

	display : function () {
		for (var cnt in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[cnt].employer));
			$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[cnt].position));
			$("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[cnt].workdates));
			$("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[cnt].worklocation));
			$("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[cnt].workdiscription));
		}
	}
};

work.display();

/*
Project
*/

var projects =
{
	"brands" :
	[
		{
			"brandtitle" : "South African Tourism",
			"date" : "2015",
			"brandDescription" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"brandImage" : "images/197x148.gif"
		},
		{
			"brandtitle" : "Vodacom",
			"date" : "2014-2015",
			"brandDescription" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"brandImage" : "images/197x148.gif"
		},
		{
			"brandtitle" : "First National Bank",
			"date" : "2012-2014",
			"brandDescription" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"brandImage" : "images/197x148.gif"
		},
		{
			"brandtitle" : "Standard Bank",
			"date" : "2015",
			"brandDescription" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"brandImage" : "images/197x148.gif"
		}
	],

	display : function ()
	{
		for (var cnt in projects.brands)
		{
			$("#projects").append(HTMLprojectStart);
			$("#projects").append(HTMLprojectTitle.replace("%data%", projects.brands[cnt].brandtitle));
			$("#projects").append(HTMLprojectImage.replace("%data%", projects.brands[cnt].brandImage));
			$("#projects").append(HTMLprojectDates.replace("%data%", projects.brands[cnt].date));
			$("#projects").append(HTMLprojectDescription.replace("%data%", projects.brands[cnt].brandDescription));

		}
	}
};

projects.display();


/*
Education
*/

var education =
{
	"edu" :
	[
		{
			"schoolName" : "North-West Univercity of Potchefstroom",
			"degree" : "BA",
			"schoolDates" : "2009-2011",
			"schoolLocation" : "Potchefstroom - South Africa",
			"major" : "Graphic design - Multi-media",
			"onlineCourse" : "Front-end development",
			"onlineSchool" : "Udacity Nano-degree",
			"onlineDates" : "2015-2016",
			"onlineURL" : "https://www.udacity.com"
		}

	],
	display : function ()
	{
		for (var cnt in projects.brands)
		{
			$("#education").append(HTMLschoolStart);
			$("#education").append(HTMLschoolName.replace("%data%", education.edu[cnt].schoolName));
			$("#education").append(HTMLschoolDegree.replace("%data%", education.edu[cnt].degree));
			$("#education").append(HTMLschoolDates.replace("%data%", education.edu[cnt].schoolDates));
			$("#education").append(HTMLschoolLocation.replace("%data%", education.edu[cnt].schoolLocation));
			$("#education").append(HTMLschoolMajor.replace("%data%", education.edu[cnt].major));
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLonlineTitle.replace("%data%", education.edu[cnt].onlineCourse));
			$("#education").append(HTMLonlineSchool.replace("%data%", education.edu[cnt].onlineSchool));
			$("#education").append(HTMLonlineDates.replace("%data%", education.edu[cnt].onlineDates));
			$("#education").append(HTMLonlineURL.replace("%data%", education.edu[cnt].onlineURL));

		}
	}
};

education.display();


/*

*/








