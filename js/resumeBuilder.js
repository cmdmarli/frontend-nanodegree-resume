
var bio = {
    "name": 'Marli du Plessis',
    "role": '| Front-end Developer',
    "contacts": {
        "mobile": '(+27) 82 839 3375',
        "github": 'cmdmarli',
        "email": 'cmd.marli@gmail.com',
        "location": 'Bramley, Johannesburg, South Africa',
        "twitter": '@cmdmarli'
        },
    "welcomeMessage": 'Working in the fast paced industry of online banking and ample experience in digital advertising - I  developed a keen sense for digital & mobile advertising, social media stratagies and user experience and interface design within the South African as well as African markets.',
    "skills": [
        'User Interface design', 'User Experience design', 'Front-end Development', 'Creative Direction', 'Graphic design'
    ],
    "biopic": 'https://pbs.twimg.com/profile_images/548106488468996099/XUXilZho.jpeg',

    display: function() {
            $("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
            $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
            $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
            $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
            $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
            $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
            $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
            $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
            $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

            $("#header").append(HTMLskillsStart);
            var len = bio.skills.length;
            for (var cnt = 0; cnt < len; cnt++)
            {
                $("#header").append(HTMLskills.replace("%data%", bio.skills[cnt]));
            }
    }
};

bio.display();

/*
Work Experience
*/

var work = {
    "jobs": [{
        "title": 'Mid-Weight Creative',
        "employer": 'Gloo@Ogilvy',
        "dates": '3 Jan 2012 - 31 Junie 2015',
        "location": 'Greenside, Johannesburg, South Africa',
        "description": 'After finishing my degree it was the obvious choice to join Gloo - the leading digital design agency in South Africa. Here I started as a eager intern and left with ample knowledge and experience in digital advertising, visual design and stratagy development.'
    }, {
        "title": 'UI designer',
        "employer": 'Standard Bank Global',
        "dates": '1 July 2015 - Present',
        "location": '68 Grayston drive, Sandton, South Africa',
        "description": 'Always seeking for new adventures, it was the obvious decition to move out of digital advertising and into product development and design. Standard Bank is one of South Africas leading bank with the best IT devisions. I joined as a UI designer and alrady gained skills as a UX designer, brand stratagist and Front-end developer. Working with like-minded people keeps me inspired and motivated.'
    }],

    display: function() {
        var len = work.jobs.length;
        for (var cnt = 0; cnt < len; cnt++)
        {
            $("#workExperience").append(HTMLworkStart);
            $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[cnt].location));
            $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[cnt].employer));
            $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[cnt].title));
            $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[cnt].dates));
            $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[cnt].description));
        }
    }
};

work.display();


/*
Brands
*/

var career = {
    "projects": [{
        "title": 'Standard Bank',
        "role": 'Lead UI designer - Online banking',
        "dates": 'Current project',
        "description": '- Moving forward -',
        "images": ['images/197x148_4.png']
    }, {
        "title": 'South African Tourism',
        "role": 'Digital Advertising - Team lead',
        "dates": '2014 - 2015',
        "description": '- A million new experiences awaits -',
        "images": ['images/197x148_1.png']
    }, {
        "title": 'Vodacom',
        "role": 'Digital Advertising - Mid-creative',
        "dates": '2013-2014',
        "description": '- Power to you -',
        "images": ['images/197x148_2.png']
    }, {
        "title": 'First National Bank',
        "role": 'Digital Advertising - Junior-creative',
        "dates": '2012-2014',
        "description": '- How can we help you -',
        "images": ['images/197x148_3.png']
    }],

    display: function() {
        var len = career.projects.length;
        for (var cnt = 0; cnt < len; cnt++)
        {
            $("#projects").append(HTMLprojectStart);
            $("#projects").append(HTMLprojectImage.replace("%data%", career.projects[cnt].images[0]));
            $("#projects").append(HTMLprojectTitle.replace("%data%", career.projects[cnt].title));
            $("#projects").append(HTMLprojectRole.replace("%data%", career.projects[cnt].role));
            $("#projects").append(HTMLprojectDates.replace("%data%", career.projects[cnt].dates));
            $("#projects").append(HTMLprojectDescription.replace("%data%", career.projects[cnt].description));
        }
    }
};

career.display();


/*
Education
*/

var education = {
    "schools": [{
        "name": 'North-West University of Potchefstroom',
        "url": 'http://www.nwu.ac.za/content/nwu-potchefstroom-campus',
        "degree": 'BA Graphic design',
        "date": '2011',
        "location": 'Potchefstroom, South Africa',
        "majors": ['Multi-media']
    }, {
        "name": 'Centurion High',
        "url": 'http://hscenturion.co.za/',
        "degree": 'Matric with distinction',
        "date": '2007',
        "location": 'Centurion, South Africa',
        "majors": ['NA']
    }],
    "crs": [{
        "onlineCourses": 'Front-end development',
        "school" : 'Udacity Nano-degree',
        "url": 'www.udacity.com',
        "date": '2016'
    }],


    display: function() {
        var len = education.schools.length;
        for (var cnt = 0; cnt < len; cnt++)

        {
            $("#education").append(HTMLschoolStart);
            $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[cnt].location));
            $("#education").append(HTMLschoolName.replace("%data%", education.schools[cnt].name).replace("%url%", education.schools[cnt].url));
            $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[cnt].degree));
            $("#education").append(HTMLschoolDates.replace("%data%", education.schools[cnt].date));
            $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[cnt].majors[0]));
        }

        var len = education.crs.length;
        for (var crs = 0; crs < len; crs++)
        {
            $("#education").append(HTMLonlineStart);
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLonlineTitle.replace("%data%", education.crs[crs].onlineCourses));
            $("#education").append(HTMLonlineSchool.replace("%data%", education.crs[crs].school));
            $("#education").append(HTMLonlineDates.replace("%data%", education.crs[crs].date));
            $("#education").append(HTMLonlineURL.replace("%data%", education.crs[crs].url));
        }
    }
};

education.display();


$("#mapDiv").append(googleMap);