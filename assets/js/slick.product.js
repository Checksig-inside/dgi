jQuery(document).on('ready', function() {
if (jQuery(window).width() < 960) {
  jQuery(".related .columns-4").slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
  });		
}
});
