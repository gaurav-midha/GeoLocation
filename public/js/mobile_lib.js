$(document).ready(function() {
	/*for Mobile Navigation*/
	$(".topMenuAction").click( function() {
		if ($("#openCloseIdentifier").is(":hidden")) {
			$("#slider").animate({ 
			marginLeft: "-90%"
			}, 500 );
		$("#topMenuImage").html('<img src="/public/images/open_icon.png" alt="open" />');
		$("#openCloseIdentifier").show();
		$("#slider").css("background","none");
		$("#openCloseWrap").css("background-color","transparent")
			} else {
			$("#slider").animate({
			marginLeft: "0px"
			}, 500 );
		$("#topMenuImage").html('<img src="/public/images/close_icon.png" alt="close" />');
		$("#openCloseIdentifier").hide();
		$("#slider").css("background","url(images/nav_bg.png) 0 0");
		$("#openCloseWrap").css("background-color","#341B04")
		}
	});
	
	/*for Read More*/	
	$(".mobileReadMore").click(function(){
	$(".mobileReadMoreContent").slideDown();
	$(".mobileReadMore").hide();
})  
});