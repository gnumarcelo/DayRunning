(function() {
	dr.ui.createApplicationWindow = function() {
		// create tab group
		tabWindow = Ti.UI.createTabGroup();
		
		//
		// create base UI tab and root window
		//
		win1 = Ti.UI.createWindow({  
		    title:'Day Running',
		    backgroundColor:'#fff',
		    layout:'vertical'
		});		
		tab1 = Ti.UI.createTab({  
		    icon:'KS_nav_views.png',
		    title:'Calendário',
		    window:win1
		});
		
		// label1 = Ti.UI.createLabel(dr.combine($$.Label, {
			// text: 'I am Window 1',
			// textAlign:'center',
			// width:'auto'
		// }));

		
		win1.add(dr.ui.createMonthSelectionView());
		//win1.add(label1);
		
		//
		// create controls tab and root window
		//
		win2 = Ti.UI.createWindow({  
		    title:'Tab 2',
		    backgroundColor:'#fff'
		});
		tab2 = Ti.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Tab 2',
		    window:win2
		});
		
		label2 = Ti.UI.createLabel(dr.combine($$.Label,{
			color:'#999',
			text:'I am Window 2'
		}));
		
		win2.add(label2);
		
		//
		// create controls tab and root window
		//
		win3 = Ti.UI.createWindow({  
		    title:'Tab 3',
		    backgroundColor:'#fff'
		});
		tab3 = Ti.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Tab 3',
		    window:win3
		});

		helloButton = Ti.UI.createButton(dr.combine($$.Button,{
			title:"dizer olá!!!"
		}));

		helloButton.addEventListener('click', function() {
			altura = dr.ui.properties.platformHeight;
			//altura = win1.height;
			dr.ui.alert('Altura das tabs: ', ' ' + altura);
		});
		
		win3.add(helloButton);
				
		
		//
		//  add tabs
		//
		tabWindow.addTab(tab1);  
		tabWindow.addTab(tab2);  
		tabWindow.addTab(tab3);  
		
		return tabWindow;
	};
})();
