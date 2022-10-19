$(() => {

    console.log("hello");



    $.getJSON("data/data.json", (data) => {
        loadEmploymentData(data.employment);
        loadSkillsData(data.skills);
        loadEducationData(data.education);
        loadCoreClasses(data.core);
        loadTrainingnData(data.training);
        toggleElements();
        loadDates();
        console.log(data.employment);
        loadCertData(data.certifications);



        function loadEmploymentData() {

            $("#displayButtonEmployment").show();
            $("#hideButtonEmployment").hide();
            const $divEmployment = $(`<div id="ulEmployment">`);
            $("#employment").append($divEmployment);
            $divEmployment.hide();
            data.employment.forEach((jobs) => {
                $divEmployment.append(`<ul><li style="padding-top: 20px;"><strong>${jobs.position}</strong></li><li>${jobs.company}</li><li>${jobs.address}</li><li>${jobs.date}</p><p>${jobs.description}</p><p id="accomp"><strong>Key Accomplishment/s: </ul>`);

                loadAccomplishments(jobs.accomplishment, $divEmployment);

            });

        };

        function loadDates() {
            const d = new Date();
            const currYear = d.getFullYear();
            d.setFullYear(currYear);
            console.log(d);

            $("#currDate").append(d);

            $("#currYear").append(currYear);

        }

        function loadSkillsData() {

            data.skills.forEach((skills) => {
                $("#key-strengths-and-skills").append(`<ul><li>${skills.name}</li></ul>`);

            });
        };



        function loadAccomplishments(accompArray, $article) {


            accompArray.forEach((key) => {

                loadKeyAccomplishments(key, $article);
                console.log(accompArray);

            });
        };

        function loadKeyAccomplishments(accomplishment, $article) {


            $article.append(`<ul id=key-accomp"><li style ="text-align: left; list-style: disc; padding-right: 70px;
	margin-left: 30px; line-height: normal;">${accomplishment.key}</li></ul>`);

        };

        function loadEducationData() {


            data.education.forEach((education) => {
                $("#degrees").append(`<p><strong>${education.name}</strong></p><p class="educ-details"><strong>${education.recognition}</strong></p><p class="educ-details">${education.school}</p><p class="educ-details">${education.date}</p><br>`);

            });
        };

               function loadCertData() {


            data.certifications.forEach((certifications) => {
                $("#certName").append(`<p><strong>${certifications.name}</strong></p><p class="cert-details"><strong>${certifications.issuer}</strong></p><p class="cert-details">${certifications.issuedate}</p><p class="cert-details">${certifications.expdate}</p><br>`);

            });
        };
        
        function loadCoreClasses() {

            data.core.forEach((core) => {
                $("#techCourses").append(`<ul><li id="liCore">${core.class}</li></ul>`);

            });
        };


        function loadTrainingnData() {
            $("#displayButtonTraining").show();
            $("#hideButtonTraining").hide();
            const $divTraining = $(`<div id="ulTraining">`);
            $("#training").append($divTraining);
            $divTraining.hide();
            data.training.forEach((training) => {
                $divTraining.append(`<ul><li><strong>${training.name}</strong></li><li>${training.school}</li><li>${training.date}</li></ul>`);

            });
        };

        function toggleElements() {
            $("#displayButtonTraining").on("click", function () {
                $(this).next().toggle("fold");
                $("#ulTraining").toggle("fold");
                $("#hideButtonTraining").show("fold");
                $("#displayButtonTraining").hide("fold");
            });
            $("#tabTraining").on("click", function () {
                $(this).next().show("fold");
                $("#ulTraining").show("fold");
                $("#hideButtonTraining").show("fold");
                $("#displayButtonTraining").hide("fold");
            });

            $("#hideButtonTraining").on("click", function () {
                $(this).next().toggle("fold");
                $("#ulTraining").toggle("fold");
                $("#hideButtonTraining").hide("fold");
                $("#displayButtonTraining").show("fold");
            });

            $("#tabProject").on("click", function () {
                $("#ulTraining").hide("fold");
                $("#hideButtonTraining").hide("fold");
                $("#displayButtonTraining").show("fold");
                $("#ulEmployment").hide("fold");
                $("#hideButtonEmployment").hide("fold");
                $("#displayButtonEmployment").show("fold");
            });

            $("#displayButtonEmployment").on("click", function () {
                $(this).next().toggle("fold");
                $("#ulEmployment").show("fold");
                $("#hideButtonEmployment").show("fold");
                $("#displayButtonEmployment").hide("fold");
            });

            $("#tabEmployment").on("click", function () {
                $(this).next().show("fold");
                $("#ulEmployment").show("fold");
                $("#hideButtonEmployment").show("fold");
                $("#displayButtonEmployment").hide("fold");
            });

            $("#hideButtonEmployment").on("click", function () {
                $(this).next().toggle("fold");
                $("#ulEmployment").hide("fold");
                $("#hideButtonEmployment").hide("fold");
                $("#displayButtonEmployment").show("fold");
            });

            /*         $("#tabEducation").on("click", function () {
                         $(this).next().toggle("fold");
                         $("#ulEmployment").hide("fold");
                         $("#hideButtonEmployment").hide("fold");
                         $("#displayButtonEmployment").show("fold");
                         $("#ulTraining").hide("fold");

                     });*/

        };

    });


});