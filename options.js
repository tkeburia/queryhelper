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
});