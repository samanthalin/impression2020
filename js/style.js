$(document).ready(function(){
	$('.hamburger').click(function(){
		$('.mobile-menu').addClass('menu-show');
		return false;
	});
	$('.close-btn').click(function(){
		$('.mobile-menu').removeClass('menu-show');
		return false;
	});
	$('#page-program .intro-btn').click(function(){
		$('body').addClass('overflow');
		var target = $(this).attr('href');
		$(target).css('display', 'flex');
		$(target).find('.window').addClass('animated');
		return false;
	});
	$('.popup button').click(function() {
		$('.popup').hide();
		$('body').removeClass('overflow');
	});
	$('#page-ticket .question').click(function(){
		$(this).toggleClass('question--open');
		$(this).siblings().removeClass('question--open');
	});
});