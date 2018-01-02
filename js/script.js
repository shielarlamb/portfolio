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

			data.employment.forEach((jobs) => {
				$("#employment").append(`<ul><li><strong>${jobs.position}</strong></li><li>${jobs.company}</li><li>${jobs.address}</li><li>${jobs.date}</li><p>${jobs.description}</p><p><strong>Key Accomplishment/s: </strong>${jobs.accomplishment}</p></ul>`);

			});
		};

		function loadSkillsData() {

			data.skills.forEach((skills) => {
				$("#section3").append(`<ul><li>${skills.name}</li></ul>`);

			});
		};

		function loadEducationData() {

			data.education.forEach((education) => {
				$("#section2").append(`<ul><li><strong>${education.name}</strong></li><li>${education.school}</li><li>${education.date}</li></ul>`);

			});
		};

		function loadTrainingnData() {
			$("#displayButtonTraining").show();
			$("#hideButtonTraining").hide();
			const $divTraining = $(`<div id="ulTraining">`);
			$("#section7").append($divTraining);
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
		};

	});







});