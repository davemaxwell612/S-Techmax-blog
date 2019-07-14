$('.sticky-header').sticky();
$('.secondary-nav-flex').sticky({topSpacing: 40});
$('.flex-sticky').hide();

$('.secondary-nav-flex').on('sticky-start', function () {
	$('.flex-sticky').fadeIn(100);
	$('.fa-search').hide(100);
	$('.Home').hide(100);
	$('.free-trial').css('color', 'red');
})

$('.secondary-nav-flex').on('sticky-end', function () {
	$('.flex-sticky').hide();
	$('.fa-search').show(100);
	$('.Home').show(100);
	$('.free-trial').css('color', 'white');
})