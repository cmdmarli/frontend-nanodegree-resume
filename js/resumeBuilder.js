//Go fix your shit here: https://discussions.udacity.com/t/formatting-issues-bio-info-and-education-section/31355/3


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
		"locationInfo" : "South Africa, Johannesburg"
	},
	"pictureURL" : "images/marli.jpg",
	"welcomeMessage" : "Working in the fast paced industry of digital advertising and banking I have a keen sense for digital & mobile advertising; social media; user experience and interface design within the South African as well as African markets.",
	"skills" : [
		"UI design", "UX design", "Front-end development", "Animation"
	],
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobileInfo);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.emailInfo);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubInfo);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.locationInfo);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = [
	HTMLskills.replace("%data%", bio.skills[0]),
	HTMLskills.replace("%data%", bio.skills[1]),
	HTMLskills.replace("%data%", bio.skills[2]),
	HTMLskills.replace("%data%", bio.skills[3]),
];

/*
Header
*/

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedlocation);

$("#header").append(formattedPicture);
$("#header").append(formattedMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

/*
Work Experience
*/

var work = {};
work.position = "Mid-Weight Creative";
work.employer = "Gloo@Ogilvy";
work.years = 3.5;
work.workdates = "3 Jan 2012 - 31 Junie 2015";
work.worklocation = "Johannesburg";
work.workdiscription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum sit amet risus et elementum. Sed accumsan sem quis orci rhoncus egestas.<br>";


var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedWorkDate = HTMLworkDates.replace("%data%", work.workdates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.worklocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.workdiscription);

/*
Project
*/

var projects = {};
projects.projectTitle = "Standard Bank Internet banking";
projects.projectDate = "1 Junie 2015 - Future";
projects.projectDescription = "Donec tempor nec tortor eget feugiat. Sed vitae est mauris. Aliquam sit amet odio lectus. Nunc porta tellus ac lectus ultricies, non sagittis quam ornare.";
projects.projectImage = "images/197x148.gif";

var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projectTitle);
var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.projectDate);
var formattedprojectDesciption = HTMLprojectDescription.replace("%data%", projects.projectDescription);
var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projectImage);



/*
Work Experience
*/


$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedPosition);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDate);
$("#workExperience").append(formattedWorkDescription);


$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedPosition);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDate);
$("#workExperience").append(formattedWorkDescription);


/*
Project
*/

$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedprojectTitle);
$("#projects").append(formattedprojectDate);
$("#projects").append(formattedprojectDesciption);
$("#projects").append(formattedprojectImage);

