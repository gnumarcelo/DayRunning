(function() {
	dr.ui = {};
	
    //shorthand for alert dialog
	dr.ui.alert = function(/*String*/ _title, /*String*/ _message) {
		Ti.UI.createAlertDialog({
			title:_title, 
			message:_message
		}).show();
	};
	
})();

//Include major UI components and styling properties
Ti.include(
	'/dayrunning/ui/styles.js',
	'/dayrunning/ui/MonthSelectionView.js',
	'/dayrunning/ui/ApplicationWindow.js'
);
