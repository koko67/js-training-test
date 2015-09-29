var SampleForm = function(){

};

SampleForm.prototype.fillName = function(name){
	$('[name=fullname]').val(name);
};

SampleForm.prototype.fillEmail = function(email){
	$('[name=email]').val(email);
};

SampleForm.prototype.selectGender = function(gender){
	$('[value='+ gender.toUpperCase() +']').prop('checked', true);
};

SampleForm.prototype.selectHobbies = function(hobbies){
	for (var i = 0; i < hobbies.length; i++) {
		$('[value='+ hobbies[i]+']').prop('checked', true);
	}
};

SampleForm.prototype.clickHeardSelection = function(){
	$( "#heard" ).click(function() {
	  	$( this ).show();
	});
};

SampleForm.prototype.setMessage = function(message){
	if (message.length < 20) {
		throw 'error, message has length less than 20'
	};
	$( "#message" ).val(message);
};

SampleForm.prototype.clickOnValidate = function(){
	$( "#message" ).click();
};

SampleForm.prototype.returnValidationMessage = function(){
	return $('[class="bs-callout bs-callout-info"]');
};