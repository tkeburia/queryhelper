$(function(){
	$('#readJson').click(function() {
		var json = $('#jsonInput').val();
		var obj; 
		try {
			obj = $.parseJSON(json);
		} catch (e) {
			$('#errorMessage').text(e)
			return;
		}
		obj = jQuery.parseJSON(json);
		chrome.storage.local.set({"queryHelperConfig" : obj}, function() {
			if (chrome.extension.lastError) {
				$('#errorMessage').text('Error saving data')
			} else {
				window.close()
			}
		});	
	});
	let config;
	chrome.storage.local.get("queryHelperConfig", function(data) {
		config = data.queryHelperConfig;
		$('#currentConfig').text(JSON.stringify(config, null, "    "));
	});

	$('#toggleCurrentConfig').on('click', function() {
		if ($('#toggleCurrentConfig').html() === 'Show current config') {
			$('#toggleCurrentConfig').html('Hide current config');
		} else {
			$('#toggleCurrentConfig').html('Show current config');
		}
		$('#currentConfigContainer').toggle();
	});
});