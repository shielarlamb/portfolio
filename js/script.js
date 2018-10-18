$(() => {

    console.log("hello");

    $.getJSON("data/data.json", (data) => {
        loadEmploymentData(data.employment);
        loadSkillsData(data.skills);
        loadEducationData(data.education);
        loadTrainingnData(data.training);
        toggleElements();
        console.log(data.employment);


        function loadEmploymentData() {
            let $article = $("<article>");
            $("#employment").append($article);
            data.employment.forEach((jobs) => {
                $article.append(`<ul><li style="padding-top: 20px;"><strong>${jobs.position}</strong></li><li>${jobs.company}</li><li>${jobs.address}</li><li>${jobs.date}</p><p>${jobs.description}</p><p id="accomp"><strong>Key Accomplishment/s: </ul>`);

                loadAccomplishments(jobs.accomplishment, $article);

            });

        };

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
                $("#education").append(`<ul><li><strong>${education.name}</strong></li><li>${education.school}</li><li>${education.date}</li></ul>`);

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
                $("#hideButtonTraining").show();
                $("#displayButtonTraining").hide();
            });

            $("#hideButtonTraining").on("click", function () {
                $(this).next().toggle("fold");
                $("#ulTraining").toggle("fold");
                $("#hideButtonTraining").hide("fold");
                $("#displayButtonTraining").show("fold");
            });

            $("#tabCollapse").on("click", function () {
                $("#ulTraining").hide("fold");
                $("#hideButtonTraining").hide("fold");
                $("#displayButtonTraining").show("fold");
            });
        };

    });


});