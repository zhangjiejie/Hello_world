// JavaScript Document

//tab content change

function tab(tabId, tabC){
	var len =document.getElementById('getId').getElementsByTagName('li').length;
 
	for(i=1; i <= len; i++){

		if ("tabId"+i==tabId){
			document.getElementById(tabId).className="tab_on";
		}else{
			document.getElementById("tabId"+i).className="";
		}
		if ("tabC"+i==tabC){
			document.getElementById(tabC).className="show";
		}else{
		    if(document.getElementById("tabC"+i)!=null){
			 document.getElementById("tabC"+i).className="hidden";
			}
		}	

	}

}
