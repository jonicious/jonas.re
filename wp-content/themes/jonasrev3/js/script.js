$(document).ready(function() {

	$('.icon-search').click(function() {
		$('.icon-search').css('display', 'none');
		$('.x').css('display', 'block');
		$('#search').css('display', 'block');
		$('#searchinput').css('display', 'block');
	});
	
	$('.x').click(function() {
		$('.icon-search').css('display', 'block');
		$('.x').css('display', 'none');
		$('#search').css('display', 'none');
		$('#searchinput').css('display', 'none');
	});
});