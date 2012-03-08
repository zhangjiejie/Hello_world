function nameOfFunc(fn){
	var m = fn.toString().match(/^\s*function\s+([^\s\(]+)/);
    return m[1];
}

var IChannel = {
	ready : function(){
		return true;
	},
	Info:{
		getIMEISI: function(cb) {
			window.iInfo.getIMEISI(nameOfFunc(cb));
		},
		send: function(phonenumber, msg) {
			window.iInfo.sendSMS(phonenumber, msg);
		}
	},
	MapUI:{
		mapNavigation: function(mode, reach){
			window.iMapUI.mapNavigation(mode, reach);
			//mapNavigation('d', '34.289371,113.076885')
			//34.8050662,113.6863848
			//d.r.w
		}
	}
};