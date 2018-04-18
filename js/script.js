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
            
			data.employment.forEach((jobs) => {
				$("#employment").append(`<ul><li><strong>${jobs.position}</strong></li><li>${jobs.company}</li><li>${jobs.address}</li><li>${jobs.date}</p><p>${jobs.description}</p><p id="accomp"><strong>Key Accomplishment/s: </strong>${jobs.accomplishment}</p></ul>`);
                
              //  loadAccomplishments(accompArray, $ulAccomp);
               
			});
        
		};
		
		function loadSkillsData() {

			data.skills.forEach((skills) => {
				$("#key-strengths-and-skills").append(`<ul><li>${skills.name}</li></ul>`);

			});
		};
        
      

      /*  function loadAccomplishments(accompArray, $ulAccomp) {

			data.employment.accomplishment.forEach((key) => {
                
                let $ulAccomp = $("<ul>");
                $("#employment").append($ulAccomp);
				
                loadKeyAccomplishments(keyArray, $ulAccomp);
                console.log(accompArray);

			});
		};
          function loadKeyAccomplishments(keyArray, $ulAccomp) {

			let $liKey = $("<li>");
              $ulAccomp.append($liKey);
              $liKey.append(`<li>${accomplishment.key}</li>`);
              console.log($liKey);
			
		};*/
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
				$(this).next().toggle();
				$("#ulTraining").toggle();
				$("#hideButtonTraining").show();
				$("#displayButtonTraining").hide();
			});
			$("#tabTraining").on("click", function () {
				$(this).next().show();
				$("#ulTraining").show();
				$("#hideButtonTraining").show();
				$("#displayButtonTraining").hide();
			});

		$("#hideButtonTraining").on("click", function () {
				$(this).next().toggle();
				$("#ulTraining").toggle();
				$("#hideButtonTraining").hide();
				$("#displayButtonTraining").show();
			});
			
				$("#tabCollapse").on("click", function () {
				$("#ulTraining").hide();
				$("#hideButtonTraining").hide();
				$("#displayButtonTraining").show();
			});
			};

	});







});