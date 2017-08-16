$(document).ready(function() {
	$("#imgDummy").on("click", function(e) {
		var newValue = parseInt($("#intExperience").text()) + 1;
		$("#intExperience").text(newValue);
	});
});
