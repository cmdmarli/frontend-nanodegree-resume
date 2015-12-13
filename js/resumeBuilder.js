var bio = {
    "name": "Marli du Plessis",
    "role": "| Front-end Developer",
    "welcomeMessage": "Working in the fast paced industry of online banking and ample experience in digital advertising - I  developed a keen sense for digital & mobile advertising, social media stratagies and user experience and interface design within the South African as well as African markets.",
    "contacts": {
        "mobileInfo": "(+27) 82 839 3375",
        "githubInfo": "cmdmarli",
        "emailInfo": "cmd.marli@gmail.com",
        "location": "Bramley, Johannesburg, South Africa",
        "twitter": "@cmdmarli"
    },
    "skills": [
        "User Interface design", "User Experience design", "Front-end Development", "Creative Direction", "Graphic design"
    ],
    "pictureURL": "images/marli.jpg"
};

$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobileInfo));
$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.emailInfo));
$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.githubInfo));
$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
//$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    $("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
    $("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
    $("#header").append(HTMLskills.replace("%data%", bio.skills[2]));
    $("#header").append(HTMLskills.replace("%data%", bio.skills[3]));
    $("#header").append(HTMLskills.replace("%data%", bio.skills[4]));
}

/*
Work Experience
*/

var work = {
    "jobs": [{
        "position": "Mid-Weight Creative",
        "employer": "Gloo@Ogilvy",
        "workdates": "3 Jan 2012 - 31 Junie 2015",
        "location": "Greenside, Johannesburg, South Africa",
        "workdiscription": "After finishing my degree it was the obvious choice to join Gloo - the leading digital design agency in South Africa. Here I started as a eager intern and left with ample knowledge and experience in digital advertising, visual design and stratagy development."
    }, {
        "position": "UI designer",
        "employer": "Standard Bank Global",
        "workdates": "1 July 2015 - Present",
        "location": "68 Grayston drive, Sandton, South Africa",
        "workdiscription": "Always seeking for new adventures, it was the obvious decition to move out of digital advertising and into product development and design. Standard Bank is one of South Africa's leading bank with the best IT devisions. I joined as a UI designer and alrady gained skills as a UX designer, brand stratagist and Front-end developer. Working with like-minded people keeps me inspired and motivated."
    }],

    displayWork: function() {
        for (var cnt in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[cnt].location));
            $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[cnt].employer));
            $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[cnt].position));
            $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[cnt].workdates));
            $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[cnt].workdiscription));
        }
    }
};

work.displayWork();

/*
Brands
*/

var projects = {
    "brands": [{
        "brandtitle": "Standard Bank",
        "brandrole": "Lead UI designer - Online banking",
        "date": "Current project",
        "brandDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "brandImage": "images/197x148_4.png"
    }, {
        "brandtitle": "South African Tourism",
        "brandrole": "Digital Advertising - Team lead",
        "date": "2014 - 2015",
        "brandDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "brandImage": "images/197x148_1.png"
    }, {
        "brandtitle": "Vodacom",
        "brandrole": "Digital Advertising - Mid-creative",
        "date": "2013-2014",
        "brandDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "brandImage": "images/197x148_2.png"
    }, {
        "brandtitle": "First National Bank",
        "brandrole": "Digital Advertising - Junior-creative",
        "date": "2012-2014",
        "brandDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.",
        "brandImage": "images/197x148_3.png"
    }],

    display: function() {
        for (var cnt in projects.brands) {
            $("#projects").append(HTMLprojectStart);
            $("#projects").append(HTMLprojectImage.replace("%data%", projects.brands[cnt].brandImage));
            $("#projects").append(HTMLprojectTitle.replace("%data%", projects.brands[cnt].brandtitle));
            $("#projects").append(HTMLprojectRole.replace("%data%", projects.brands[cnt].brandrole));
            $("#projects").append(HTMLprojectDates.replace("%data%", projects.brands[cnt].date));
            //$("#projects").append(HTMLprojectDescription.replace("%data%", projects.brands[cnt].brandDescription));
        }
    }
};

projects.display();


/*
Education
*/

var education = {
    "edu": [{
        "schoolName": "North-West Univercity of Potchefstroom",
        "degree": "BA Graphic design & Multi-media",
        "schoolDates": "2008-2011",
        "location": "Potchefstroom, South Africa",
        //"major" : "Graphic design - Multi-media",
    }, {
        "schoolName": "Hoërskool Centurion",
        "degree": "Matric with distinction",
        "schoolDates": "2002-2007",
        "location": "Centurion, South Africa",
        //"major" : "Graphic design - Multi-media",
    }],
    "crs": [{
        "onlineCourse": "Udacity Nano-degree - Front-end development",
        //"onlineSchool" : "Udacity Nano-degree",
        "onlineURL": "www.udacity.com",
        "onlineDates": "2015-2016"
    }],



    display: function() {
        for (var cnt in education.edu) {
            $("#education").append(HTMLschoolStart);
            $("#education").append(HTMLschoolLocation.replace("%data%", education.edu[cnt].location));
            $("#education").append(HTMLschoolName.replace("%data%", education.edu[cnt].schoolName));
            $("#education").append(HTMLschoolDegree.replace("%data%", education.edu[cnt].degree));
            $("#education").append(HTMLschoolDates.replace("%data%", education.edu[cnt].schoolDates));
            //("#education").append(HTMLschoolMajor.replace("%data%", education.edu[cnt].major))
        }

        for (var crs in education.crs) {
            $("#education").append(HTMLonlineStart);
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLonlineTitle.replace("%data%", education.crs[crs].onlineCourse));
            //$("#education").append(HTMLonlineSchool.replace("%data%", education.crs[crs].onlineSchool));
            $("#education").append(HTMLonlineURL.replace("%data%", education.crs[crs].onlineURL));
            $("#education").append(HTMLonlineDates.replace("%data%", education.crs[crs].onlineDates));
        }
    }
};

education.display();

$("#mapDiv").append(googleMap);