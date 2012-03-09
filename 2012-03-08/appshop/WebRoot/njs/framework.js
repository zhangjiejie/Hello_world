// JavaScript Document
$(function(){
	noborder();

})
function sidebarMenu(){
	$(".sb-menu-til").mouseover(function(){
		$(this).parent().find(".active ul").hide();
		$(this).parent().find(".active").removeClass("active");
		$(this).parent().find(".sb-menu-til").css("z-index","1");
		$(this).css("z-index","999").addClass("active");
		$(this).find("ul").show();
	});
	$(".sb-menu-til").mouseout(function(){$(this).parent().find(".active").removeClass("active");})
	$(document).bind("mouseover",function(){$(".sb-menu-til.active ul").hide().parent().removeClass("active")})
	$(".sb-menu-til").bind("mouseover",function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=true});
}

function autoscroll(t,speed){
	var ul_wid=t.find("li").eq(0).width()*t.find("li").length;
	var html=t.html();
	t.html(html+html);
	t.css("width",ul_wid*2);
	var auto=setInterval(function(){
		var p_left=t.position().left;
		Math.abs(p_left)>ul_wid?p_left=0:p_left-=1;
		t.css("left",p_left);
	},speed);
	t.find("li").live("mouseover",function(){clearInterval(auto)});
	t.find("li").live("mouseout",function(){
		auto=setInterval(function(){
			var p_left=t.position().left;
			Math.abs(p_left)>ul_wid?p_left=0:p_left-=1;
			t.css("left",p_left);
		},speed)
	})
}
function scrolluptext(t){
	var p=t.find(".ct");		
	var goup=setInterval(function(){
		var top=p.position().top;
		(top<-140)?top=Math.abs(top)+50:top-=1;
		p.css("top",top);
	},26)
	t.hover(
		function(){clearInterval(goup)},
		function(){
			goup=setInterval(
			function(){
				var top=p.position().top;
				(top<-140)?top=Math.abs(top)+50:top-=1;
				p.css("top",top);
			},26)
		}
	)
}
function tips(t,c){
	var _t=t;
	t.find("li span img").mouseover(function(e){
		var e=e?e:window.event;
		//e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
		var Len=_t.find("li").length;
		//alert(14%6);
		var li=$(this).parent().parent().parent();
		var index=li.parent().find("li").index(li[0]);
		//alert(index+","+Len);
		(index>(Len/2-1))?(index=index-(Len/2)):(index=index);
		//alert(index);
		//可写到li的mouseover里 hide tip
		//$(this).mousemove(function(){
		var t=c.find(".tips").eq(index);
		t.addClass("tip-active");
		//alert(t.html());		
		t.show();
		//var distanX=e.clientX-$(this).offset().left;
		//var distanY=e.clientY-$(this).offset().top;
		//alert($(window).scrollTop());
		//$(window).scrollTop(0);
		$(this).mousemove(function(e){
			var e=e?e:window.event;
			t.css({"left":e.clientX+10,"top":e.clientY+$(window).scrollTop()+10});
		})
		$(this).mouseout(function(){
			$(".tip-active").hide().removeClass("tip-active");
		})
		//})
		//c.find(".ct").eq(index).css({"left":e.clientX,"top":e.clientY}).show();
		//alert(c.find(".ct").eq(index).html());
	})
	//$(document).bind("mouseover",function(){
		//$(".tip-active").hide();
	//})
}
function bigpic(){
	$(".thumbpic li div img").mouseover(function(){
		$(".bigpic img").attr("src",$(this).attr("tobig"));
		$(this).parent().parent().parent().parent().find(".selected").removeClass("selected");
		$(this).parent().parent().parent().addClass("selected");
	})
}
function noborder(){
	$(".product-list").each(function(){
		if($(this).hasClass("content")) return;
		else{
			var l=$(this).find("li").length;
			for(var i=l;i>l-5;i--){
				$(this).find("li").eq(i).css("border-bottom","none")
			}		
		}
	});
}