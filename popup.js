$(function(){
	var config;
	chrome.storage.local.get("queryHelperConfig", function(data) {
		config = data.queryHelperConfig;
		var list = $('#queryForm')
		$.each(data.queryHelperConfig.filters, function(index, object) {
			var input = $('<input/>')
				.addClass('radio')
				.attr('id', object.key)
				.attr('type', 'radio')
				.attr('name', 'user')
				.text(object.key)
				.appendTo(list);
			var label = $('<label/>')
				.attr('for', object.key)
				.text(object.key)
				.appendTo(list);
			$('<br/>').appendTo(label);
		});
	});

	$(document.body).on('click', '.radio', function(event){
		var targetId = event.target.id;
		var baseUrl = config.baseUrl;
		var filter =  $.grep(config.filters, function(e){
			return e.key === targetId; 
		});
		var encoded = encodeURIComponent(filter[0].value)
		var redirectUrl = baseUrl + "/issues/?jql=" + encoded

		chrome.runtime.sendMessage({redirect: redirectUrl});
	});
});

