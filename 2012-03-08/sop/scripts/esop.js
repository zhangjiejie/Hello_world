
function onResume(){
}


function initIChannel(){
	if(IChannel.ready()){
		//getRecord(onUserRecord);
	}
}
  
function callNum(phoneNum) {
    window.location="tel:"+phoneNum;
}

function onDeviceReady(){
	initIChannel();

    //首页模块显示的存储
	if (!window.localStorage.getItem("main")) {
	    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
	    db.transaction(mainDB, errorCB);
	}
}
document.addEventListener("deviceready", onDeviceReady, false);	//register


function getIMEISI(imeisi) {
	if(imeisi != undefined) {
		return imeisi; //取值
	} else {
		IChannel.Info.getIMEISI(getIMEISI);
	}
}

function send(phonenumber, msg) {
	IChannel.Info.send(phonenumber, msg);
}

function dump_pic(data) {
    var viewport = document.getElementById('viewport');
    console.log(data);
    viewport.style.display = "";
    viewport.style.top = "10px";
    viewport.style.left = "10px";
    document.getElementById("test_img").src = "data:image/jpeg;base64," + data;
}

function fail(msg) {
    alert(msg);
}

function show_pic() {
    navigator.camera.getPicture(dump_pic, fail, {quality : 50});
}


function mapNavigation(mode, reach) {

    IChannel.MapUI.mapNavigation(mode, reach);
}

var getLocation = function() {
    var suc = function(p) {
        alert(p.coords.latitude + " " + p.coords.longitude);
    };
    var locFail = function() {
    };
    navigator.geolocation.getCurrentPosition(suc, locFail);
};