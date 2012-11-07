(function( $ ) {
  $.fn.userWindow = function( options ) {
	  var settings = $.extend({
		  width: 400,
		  height: 400,
		  title: 'Modal window'
	  }, options);

	  return $('#modal').dialog({
		  modal: true,
		  title: settings.title,
		  height: settings.height,
		  width: settings.width
	  })
  };
})( jQuery );

jQuery(document).ready(function() {

	$('a[data-modal=true]').each(function(index, value){
		$(this).click(function(event) {
			var that = this;
			event.preventDefault();
			$('#modal').dialog({
				title: this.title,
				draggable: false,
				modal: true,
				width: ($(this).data('options').width) ? $(this).data('options').width : 400,
				height: ($(this).data('options').height) ? $(this).data('options').height : 400,
				open: function(event, ui) {
					console.log(event, ui, this, 'open');
				}
			});
/*			$(this).userWindow({
				title: value.title
			});
*/
		})
	});
});