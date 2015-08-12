(function(global, $){

	$.getJSON('game-of-thrones.json', function(data){
		var template = $('#houses').html();
		$('body').append(Handlebars.compile(template)(data));
		$('.sortable-list').sortable();
		$('.sortable-list').disableSelection();
		$('select')
			.select2({
				width: '500px',
				placeholder: 'Show All'
			})
			.on('change', function(event, ui){
				var selected = $('select').val(),
					selectors;

				if (!selected) {
					$('.house').show();
				} else {
					selectors = $('select').val().map(function(item){
						return '#' + item;
					}).join(',');
					$('.house').not(selectors).hide();
					$(selectors).show();	
				}
			});
	});

})(this, $)