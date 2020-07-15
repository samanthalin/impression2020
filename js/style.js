$(document).ready(function(){
	$('.hamburger').click(function(){
		$('.mobile-menu').addClass('menu-show');
		return false;
	});
	$('.close-btn').click(function(){
		$('.mobile-menu').removeClass('menu-show');
		return false;
	});
	$('#page-ticket .question').click(function(){
		$(this).toggleClass('question--open');
		$(this).siblings().removeClass('question--open');
	});
});