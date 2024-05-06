$(document).ready(function() {
  let amenities = {};
  $('input[type="checkbox"]').change(function() {
    if ($(this).is(':checked')) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    let amenitiesList = Object.values(amenities).join(', ');
    $('div.amenities h4').text(amenitiesList);
  });
});

$.ajax({
	url: 'http://0.0.0.0:5001/api/v1/status/',
	type: 'GET',
	dataType: 'json',
	success: function (data) { 
	if (data.status === 'OK') {
		$('DIV#api_status').addClass('available');
	}else {
		$('DIV#api_status').removeClass('available');
	}
	}
});     
