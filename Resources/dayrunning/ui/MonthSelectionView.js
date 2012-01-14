(function() {
	dr.ui.createMonthSelectionView = function() {
		//win = Titanium.UI.currentWindow;
		Ti.API.info('Inicio: createMonthSelectionView');

		var myViews = [];
		
		for(var i=0;i<12;i++) {
			v = Ti.UI.createView({height:100,width:100,top:20,left:20, backgroundColor: 'yellow'});
			label = Ti.UI.createLabel({text:i+1});
			v.add(label);
			v.addEventListener('click', function(e){
				Ti.App.fireEvent("monthClicked");
			});	
					
			myViews.push(v);
		}
		

		
		monthView = Ti.UI.createScrollView($$.ScrollView);

		monthView.add(myViews);

		//Handle navigation events
		Ti.App.addEventListener("monthClicked", function(e) {
			//dr.ui.alert('voce clicou em um dos meses!');
			monthView.add(Ti.UI.createView({height:100,width:100,top:20,left:20, backgroundColor: 'blue'}));
		});

		
		return monthView;
	};

})();