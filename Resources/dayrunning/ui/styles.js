
(function() {	
	//Globally available theme object to hold theme colors/constants
	dr.ui.theme = {
		textColor:'#000000',
		grayTextColor:'#888888',
		headerColor:'#333333',
		lightBlue:'#006cb1',
		darkBlue:'#93caed',
		fontFamily: 'Helvetica Neue'
	};
	
	//All shared property sets are declared here.
	dr.ui.properties = {
		//grab platform dimensions only once to save a trip over the bridge
		platformWidth: Ti.Platform.displayCaps.platformWidth,
		platformHeight: Ti.Platform.displayCaps.platformHeight,
		
		//we use these for default components
		Button: {
			//backgroundImage:'images/button_bg.png', 
			height:50,
			width:250,
			color:'#000',
			font: {
				fontSize:18,
				fontWeight:'bold'
			}
		},
		Label: {
			color:dr.ui.theme.textColor,
			font: {
				fontFamily:dr.ui.theme.fontFamily,
				fontSize:12
			},
			height:'auto'
		},
		Window: {
			backgroundImage:'images/ruff.png',
			navBarHidden:true,
		},
		TableView: {
			backgroundImage:'images/ruff.png',
			separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
		},
		TableViewRow: {
			backgroundImage:'images/tweet_bg.png',
			selectedBackgroundColor: dr.ui.theme.darkBlue, //I know, this is dumb, but it's currently inconsistent x-platform
			backgroundSelectedColor: dr.ui.theme.darkBlue,
			//height:110,
			className:'tvRow'
		},
		TextField: {
			height:55,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			color:'#000000'
		},
		TextArea: {
			borderRadius:10,
			backgroundColor:'#efefef',
			//gradient will only work on iOS
			backgroundGradient:{
				type:'linear',
				colors:[
					{color:'#efefef',position:0.0},
					{color:'#cdcdcd',position:0.50},
					{color:'#efefef',position:1.0}
				]
			}
		},
		ScrollView: {
			top:0,
			left:0,
			height:367,
			backgroundColor:'red',
			layout:'horizontal',
			contentHeight:'auto',
			showVerticalScrollIndicator:true
		},
		
		
		//we use these as JS-based 'style classes'
		animationDuration: 500,
		stretch: {
			top:0,bottom:0,left:0,right:0
		},
		variableTopRightButton: {
			top:5,
			right:5,
			height:30,
			width:60,
			color:'#ffffff',
			font: {
				fontSize:12,
				fontWeight:'bold'
			},
			backgroundImage:'images/button_bg_black.png'
		},
		topRightButton: {
			top:5,
			right:5,
			height:30,
			width:38
		},
		headerText: {
			top:8,
			height:'auto',
			textAlign:'center',
			color:dr.ui.theme.headerColor,
			font: {
				fontFamily:dr.ui.theme.fontFamily,
				fontSize:18,
				fontWeight:'bold'
			}
		},
		headerView: {
			backgroundImage:'images/header_bg.png',
			height:40
		},
		boldHeaderText: {
			height:'auto',
			color:'#000000',
			font: {
				fontFamily:dr.ui.theme.fontFamily,
				fontSize:14,
				fontWeight:'bold'
			}
		},
		smallText: {
			color:dr.ui.theme.grayTextColor,
			font: {
				fontFamily:dr.ui.theme.fontFamily,
				fontSize:10
			},
			height:'auto'
		},
		spacerRow: {
			backgroundImage:'images/spacer_row.png',
			height:30,
			className:'spacerRow'
		}
	};

})();


//global shortcut for UI properties, since these get used A LOT. polluting the global
//namespace, but for a good cause (saving keystrokes)
var $$ = dr.ui.properties;
