window.onload = function () {
	goBackToApp();
};

// redirect to app, passing along all query parameters
function goBackToApp() {
	window.location.href =
		'app://mobile.irrigationguardian.com/alexa' + window.location.search;
}
