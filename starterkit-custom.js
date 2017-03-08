// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//



$(document).ready(function() {
	$("#orderedlist li").css("background-color","green");
	$("#orderedlist li").css("color","red");
	$("#orderedlist > li:last").hover(
						  function() {
							$( this ).css("color","white");
						  }, function() {
							$( this ).css("color","red");
						  }
						);
});
