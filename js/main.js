// JavaScript Document
$(document).ready(function(){
	
	
	$('.search-icon').click(function(){
		if($('.searchdiv').hasClass('visible'))
		{
			$('.searchdiv').css('display','none');
			$('.searchdiv').removeClass('visible');
		}
		else
		{
			$('.searchdiv').css('display','inline');
			$('.searchdiv').addClass('visible');
		}
	});
	$('.menu-icon').click(function(){
		$('.menuhover').toggle();
	});
	$('.toggle-menu').click(function(){
		$('.menuhover').toggle();
	});
});