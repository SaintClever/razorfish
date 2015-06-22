
// have the title pushed in
var container = $('div.title');


$('input#myDiv').click(function(){
	$.ajax({
		type: 'GET',
		url: './gallery.json',
		dataType: 'json',
		success: function(data){
			$.each(data, function(index, item){
				$each(item, function(key, value){
					container.append(key + ': ' + value + '</br>');
				});
				container.append('<br/></br>');
			});
		}
	});
})

// have the image details pushed in
// var details