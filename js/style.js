$(document).ready(function(){
	$('#page-ticket .question').click(function(){
		$(this).toggleClass('question--open');
		$(this).siblings().removeClass('question--open');
	});
});