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


    /*
      $("#main-animation").mousemove(
    function animateCircles (event) {
        const circle = $('div class="circle">');
        const colors = ['#ccc', '#6cf', '#eba13a', '#b666d2'];
        
      //  circle.setAttribute("class", "circle");
       // $("#main-animation").append(circle);
        
        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';
        
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        circle.style.borderColor = color;
        
        circle.style.transition = "all 0.5s linear 0s";
        
        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.top = circle.offsetTop - 20 + 'px';
        
        circle.style.width = "50px"; 
        circle.style.height = "50px";
        circle.style.borderwidth = "1px";
        circle.style.opacity = 0;
        
    })*/




});