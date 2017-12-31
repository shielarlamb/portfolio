$(() => {
	
	console.log("hello");
	
	$.getJSON("data/data.json", (data)=>{
		 loadEmploymentData(data.employment);
		console.log(data.employment);
	
	
	function loadEmploymentData(){
		
		data.employment.forEach((jobs)=>{
			$("#employment").append(`<ul><li><strong>${jobs.position}</strong></li><li>${jobs.company}</li><li>${jobs.address}</li><li>${jobs.date}</li><p>${jobs.description}</p><p><strong>Key Accomplishment/s: </strong>${jobs.accomplishment}</p></ul>`);
		
		});
	};
			 

	
	});
	
	
	
	
	
	
	
});