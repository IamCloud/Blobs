$(document).ready(function() {
	
	$("#imgDummy").on("click", function(e) {
		
		$(this).effect("highlight", "faster");
		var newValue = parseInt($("#intExperience").text()) + 1;
		$("#intExperience").text(newValue);
	});
	
		$.confirm({
		    title: 'Enter your name: ',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<input type="text" placeholder="Your name" class="chosenName form-control" maxlength="15" required />' +
    '</div>' +
    '</form>',
	boxWidth: '180px',
    useBootstrap: false,
	draggable:false,
	backgroundDismissAnimation: 'glow',
    buttons: {
        formSubmit: {
            text: 'Confirm',
            btnClass: 'btn-blue',
            action: function () {
                var name = this.$content.find('.chosenName').val();
                if(!name){
                    return false;
                }
				
				$("#lblName").text(name);
            }
        },
    },
    onContentReady: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
	});
});
