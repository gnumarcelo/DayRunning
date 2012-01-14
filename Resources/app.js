
Ti.include('/dayrunning/dayrunning.js');

dr.app.mainWindow = dr.ui.createApplicationWindow();
dr.app.mainWindow.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});
