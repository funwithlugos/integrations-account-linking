window.onload = function () {
	goBackToApp();
};

// redirect to app, passing along all query parameters
function goBackToApp() {
	window.location.href =
		'app://mobileapp.irrigationguardian.com/alexa' + window.location.search;
}
