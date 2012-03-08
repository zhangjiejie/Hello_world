var staffId = 100004578867, staffTel = 13803834274, root = 'http://10.1.248.120:8080/G3EsopV1.0/business/';
//staffId = 100004578867,100004570158,100005788302
$(function(){
	var s = new $.NBSetup({
	    rootURL: root,
		//Http://baseWebApp/business/  写在上面作为固定的地址
        //WorkRemindAction.do?method=getWorkReminds&aa=1&bb=3  写在各个标签的json里
		ready:function(requests){
			for(var i = 0; i < requests.length; ++ i){
				var request = requests[i];
				
//				$.sendRequest($.extend({success:function(){
//					alert(1)
//				}, error:function(){
//					
//				}, complete:function(){
//					
//				}}, request));
				
				
//				request.success = function(data){	//
//					alert('success: response data: ' + JSON.stringify(data));
//				};
//				request.error = function(r){		//offline
//					alert('error, online: ' + r.online + ', type: ' + r.type);
//				};
//				request.complete = function(){		//
//					alert('complete');
//				}


				//$.sendRequest(request);
			}
		}
	});
});

$(document).ready(function() {

    if (!localStorage.getItem("groupmember")) {
        var json = { "GroupMembersInfo": [] };
        window.localStorage.setItem("groupmember", JSON.stringify(json));
    }

    //通过esop.js获取IMEI和IMSI
    var imeisi = [4000021,100001],
        data = "action=terminalAuthentication&imei=" + imeisi[0] + "&imsi=" + imeisi[1];
    
    $(".editpassword").bind({
        "focus" : function(){$(this).addClass("editpassword-focus").removeClass("editpassword-inset");},
        "blur" : function(){$(this).addClass("editpassword-inset").removeClass("editpassword-focus");}
    });
})

$(function() {
    $("#datetypeSel").live("change", function() {
        var selected = $("option:selected", $(this)).val();
        $(this).siblings("select").removeClass("hide");
        $(this).siblings("select:not([id=" + selected + "])").addClass("hide");
    });

    $("#wrapper .horizontalslide div").live("click", function(e) {
        var o = "#groupSearch",
        txt = $(this).text();
        $(o).val("");
        $(this).addClass("highlight").siblings().removeClass("highlight");
        searchGroup(o, txt);
    });

    $("#selectOpera").live("change", function() {
        $("#tdOpera").html($(this).find("option:selected").val());
    })

    $("input.photo").live("click", function() { //拍照
        show_pic();
    });

    $("input[type=text]:not(#userPhoneNum),input[type=password]:not(#userPassword),input[type=tel],textarea").live({
        "focus" : function(){      	
        	$(this).addClass("editpassword-focus");
        },
        "blur" : function(){$(this).removeClass("editpassword-focus");},
        "click" : function(){
        	var that = $(this);
        	//防止输入法遮盖输入框而对滚动条进行调整
    		var scrollTransform = that.parents("div.scroll").children().eq(0).css("WebkitTransform"),
    			scrollTop = trim(scrollTransform.substring(scrollTransform.lastIndexOf(',') + 1, scrollTransform.lastIndexOf(')')));
    		setTimeout(function() {
    			var parent = that.parent(),
        			bottom = $("section").height() - parent.offset().top - parent.height(),
        			top = parent.offset().top - 45,
        			scrollTop = trim(scrollTransform.substring(scrollTransform.lastIndexOf(',') + 1, scrollTransform.lastIndexOf(')')));
    			if (bottom < 0){
    				that.parents("div.current:first").scrollTo(bottom + parseInt(scrollTop));
    			}
    			if (top < 0){
    				that.parents("div.current:first").scrollTo(parseInt(scrollTop) - top);
    			}
    		}, 500);
        }
    });

    $("input[type=button]:not(#btn_Login), li:not(#footer li)").live({
        "mousedown": function(){
            $(this).addClass("liSelected");
        },
        "mousemove": function(){
            $(this).removeClass("liSelected");
        },
        "mouseup": function(){
            $(this).removeClass("liSelected");
        }
    });
    
    $("tr a").live({
        "mousedown": function(){
            $(this).parents("tr:first").addClass("liSelected");
        },
        "mousemove": function(){
            $(this).parents("tr:first").removeClass("liSelected");
        },
        "mouseup": function(){
            $(this).parents("tr:first").removeClass("liSelected");
        }
    });

    $("span.labelClass").live("click", function() {
        var that = $(this);
        if (that.is("#forgotpassbtn") && $("#autologinbtn").is(".highClass")) {
            return false;
        }

        if (that.is(".highClass")) {
            if (!that.is(".radio")) {
                that.removeClass("highClass").animate({ "background-position-y": -2 });
            }
        }
        else {
            that.addClass("highClass").animate({ "background-position-y": -28 });
            if (that.is(".radio")) {
                that.siblings().removeClass("highClass").animate({ "background-position-y": -2 });
            }
            if (that.is("#autologinbtn")) {
                $("#forgotpassbtn").addClass("highClass").animate({ "background-position-y": -28 });
            }
        }
    })

    $("#btn_Login").bind("click", function() {
        var username = trim($("#userPhoneNum").val()),
            password = trim($("#userPassword").val()),
            data = "action=userLogin&userCode=" + username + "&pwd=" + password,
            today = Calendar.today;

        $.sendRequest({
            url: 'com.ai.esp.g3.sys.web.UserInfoAction',
            data: data,
            success: function(data) {
                if (data.resultCode == 1) {
                    $("#login").addClass("logLoading").children().hide();
                    $(document.body).css("overflow", "hidden");
                    var _a = $("<a></a>").attr({ "href": "templates/tpl/main.html", "json": "datas/json/blank.json", "func": "showFooter();", "params": "action=getModulesInfo&staffId="+staffId+"&today=" + today });
                    _a.appendTo('body').trigger('tap');
                    //todo 更改历史记录，使用户无法返回到此页，或者需要通过注销
                }
                else {
                    $("#login").addClass("logLoading").children().hide();
                    $(document.body).css("overflow", "hidden");
                    var _a = $("<a></a>").attr({ "href": "templates/tpl/main.html", "json": "datas/json/blank.json", "func": "showFooter();", "params": "action=getModulesInfo&staffId="+staffId+"&today=" + today });
//                    var _a = $("<a></a>")
//						.attr(
//								{
//									"href" : "templates/tpl/main.html",
//									"json" : "com.ai.esp.g3.sys.web.SysNavigationAction",
//									"func" : "showFooter();",
//									"remote" : "true",			
//									"params" : "action=getModulesInfo&staffId="
//											+ staffId
//											+ "&today="
//											+ today
//								});
                    _a.appendTo('body').trigger('tap').remove();
                }
                $(this).historyShift();
            },
            error: function(result) {
                //alert('result: ' + result.issuccess);  //cache	true/false
                //alert('detail: ' + result.detail);     //detail.rows.length detail.insertId, detail.rowsAffected	//sql lite
                //alert('type: ' + result.type);         //'cache'/'jsonp'		ajax error
                //alert('online: ' + result.online);     //true(jsonp error)/false(cache error)
            }
        });
    })
});

function loadSearchList(container, json, tpl, params, func, prev) {
	subRequest({
		action : json,
		data : params,
		f : function(data) {
			var obj = prev ? $("#" + container, $("#" + prev)) : $("#" + container);
			obj.setTemplateURL("templates/tpl/" + tpl + ".html",
					null, {
						filter_data : false
					});
			if (typeof(params) != "object"){
				var ps = params.split('&');
	            for (var i = 0; i < ps.length; i++) {
	                var p = ps[i].split('=');
	                obj.setParam(p[0], p[1]);
	            }
			}
			obj.processTemplate(data);
			if (obj.is(".rounded")){ //解决rounded样式ul在刷新时样式改变的情况
				obj.addClass("rounded");
			}
			
			if (func){
				func(data);
			}
		}
	});
}

function setMM(o) {
    var obj = $(o).parent(),
        $tab = $("#" + obj.attr("ul"), $(o).parents(".myul:first"));
    $("li",obj.parent()).removeClass("cur"); 
    obj.addClass("cur"); 
    $tab.fadeIn().siblings("ul").hide(); 
    return false;
}

function finishWarn(o, action, id, meg, reqDate, workExtId) {
	var e = event || window.event, array = {
		"setRemindState" : {
			"action" : action,
			"staffId" : staffId,
			"remindState" : "1",
			"remindId" : id,
			"url" : "WorkRemindAction"
		},
		"setTaskState" : {
			"action" : action,
			"staffId" : staffId,
			"execState" : "4",
			"taskId" : id,
			"url" : "WorkTaskAction"
		},
		"setHolidayVisitState" : {
			"action" : action,
			"staffId" : staffId,
			"visitState" : "1",
			"workDtlId" : id,
			"url" : "WorkTaskAction"
		},
		"setGroupTaskState" : {
			"action" : action,
			"staffId" : staffId,
			"execState" : "4",
			"taskId" : id,
			"url" : "WorkTaskAction"
		},
		"setSaleTaskState" : {
			"action" : action,
			"staffId" : staffId,
			"taskId" : id,
			"url" : "WorkTaskAction"
		}
	}, 
		data = array[action], 
		url = 'com.ai.esp.g3.workmanager.web.' + data.url, 
		finish = action == "setRemindState" ? "已读" : "已完成";
	if (workExtId){
		data.workTaskExecId = workExtId; //任务执行ID
	}
	if (confirm(meg)) {
		subRequest({
			action : url,
			data : data,
			f : function(data) {
				if (data.resultCode == 1) {
					var obj = $(o).parent().clone(),
						ul = $(o).parents("ul:first"),
						number = ul.find("li").length - 1;
					obj.find("a").remove();
					obj.append(
							'<span class="rightpink" style="color: #3F6F9F;">' + finish
									+ '</span>').appendTo(
											ul.next());
					$(o).parent().remove();
					if (!number){
						ul.append('<li class="nobackimage"><a>暂无任务提醒</a></li>');
					}
					
					//更新日历及主页的数据
					if (reqDate && $("#mycalendar")[0]){
						Calendar.changeSomeDay(reqDate);
					}
					subRequest({
						action : "com.ai.esp.g3.sys.web.SysNavigationAction",
						data : "action=getModulesInfo&staffId=" + staffId + "&today=" + Calendar.today,
						f : function(data) {
							var p, json = data.data;
							for (p in json){
								if (parseInt(json[p])){
									$("#" + p).remove("span").append('<span class="badge">' + json[p] + '</span>');
								}
							}
						},
						loading: false
					});
					
					//更新详细页面的状态
					var finishInput = $("table input[finishId="+ id +"]");
					if (finishInput[0]){
						finishInput.val(finish);
						finishInput.eq(0).parents("div:first").next().find("a").hide();
					}
					
					
					alert("提交成功");
				} else {
					alert(data.resultDesc ? data.resultDesc : "提交失败");
				}
			},
			error: function(){
				alert("提交失败");
			}
		});
	}
	
	$(o).parents("li:first").removeClass("liSelected");
	e.preventDefault();
	e.stopPropagation();
	return false;
}
function finishWarnAtLast(action, id, meg, reqDate, workExtId){
	var o = $($.getPrevHistory()).find("a[myId="+id+"]")[0];
	finishWarn(o, action, id, meg, reqDate, workExtId);
}

function stopClick() {
    var e = event || window.event;
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function showNextContent(obj) {
	scrollTop($(obj).parents("div.scroll:first").parent(), 0);
	
	var next = $(obj).next(),
		canSlide = !next.find(".longContent")[0]; //如果存在longContent样式，则不能使用slideToggle
	if (next.css("display") == "none") {
		$("div.bookimg", $(obj).parent()).removeClass("open");
		$("div", $(obj)).addClass("open");
		$(obj).siblings(".tit").next().css("display", "none");
		if (!canSlide){
			next.show()
		}
	} else {
		$("div", $(obj)).removeClass("open");
		if (!canSlide){
			next.hide()
		}
	}
	if (canSlide){
		next.slideToggle("fast");
	}
}


function searchYuying(groupNo, o, dt, id, type, createTime) {
	var container = $("#yujing" + "_" + type + "_" + id);
	if (type == "keyperson"){
	    $("#yujing2", container).removeClass("hide").prev().addClass("hide");
	}
	
	if (!o){
		var month = $("#month option", container).eq(0).html(),
			week = $("#week option", container).eq(0).html(),
			monthList = Calendar.getDateList(month, "m", 6),
			weekList = Calendar.getDateList(week, "w", 6),
			i = 0;
		for (i; i < 6; i++) {
			$("#month", container).append("<option>" + monthList[i] + "</option>");
			$("#week", container).append("<option>" + weekList[i] + "</option>");
		}
		
		if (dt){
			if (dt == "4"){
				$("#datetypeSel option[value=month]", container).attr("selected", "selected");
				$("#datetypeSel", container).trigger("change");
				if (createTime){
					$("#month option", container).each(function(){
						var that = $(this);
						if (that.html() == createTime){
							that.attr("selected", "selected");
						}
					});
				}
			}
			else{
				if (createTime){
					$("#week option", container).each(function(){
						var that = $(this);
						if (that.html() == createTime){
							that.attr("selected", "selected");
						}
					});
				}
			}
		}
	}
	
	var datetype = $("option:selected", $("#datetypeSel", container)).val(), 
		date_type = datetype == "week" ? 2 : 4, 
		selected = $("select[id=" + datetype + "]", container).find("option:selected").val(), 
		json = {
		  	"yujing1": ["yujing1", "com.ai.esp.g3.bi.web.KpiAlarmManagerAction", "yujinggroup", "action=getMyCustKpiAlarms&staffId=" + staffId + "&periodType=" + date_type + "&kpiDate=" + selected+ "&groupNo=" + groupNo],
		  	"yujing2": ["yujing2", "com.ai.esp.g3.bi.web.KpiAlarmManagerAction", "yujingmember", "action=getMyMemberKpiAlarms&staffId=" + staffId + "&periodType=" + date_type + "&kpiDate=" + selected + "&memberType=3&groupNo=" + groupNo]
		}, 
		array = json[$("ul:not(.hide)", container).attr("id")];

	loadSearchList(array[0], array[1], array[2], array[3], function(){}, "yujing" + "_" + type + "_" + id);
}

function searchKPI() {
    var today = $("#textKPI").val() ? $("#textKPI").val() : $("#textKPI").attr("placeholder"),
        tomonth = today.substring(0, 6);
    //用于获取当天或者当月的绩效
    if ($("ul.tabs li[ul=KPI1]").is("li.cur")) {
        loadSearchList("KPI1", "searchsingle", "KPIday","", bindpercent);
    }
    else {
        loadSearchList("KPI2", "searchsingle", "KPImonth","", bindpercent);
    }
    
    function bindpercent(){
        $("div.percent").each(function() {
            var percent = parseFloat($(this).attr("percent")),
    	                position = percent < 50 ? "-29px" : "-43px",
    	                width = 75 * percent / 100;
            $("div", $(this)).css({ "backgroundPosition": "left " + position, "width": width + "px" });
        });
    }
}

function searchmember(o) {
	var container = $(o).is("div") ? $(o) : $(o).parents("div.content:first"),
		tel = $("#groupmemberSearch", container).val(),
		params = "action=getMemberBaseInfo&staffId=" + staffId + "&telphone=" + tel;
	if (!tel || !/^[0-9]*$/.test(tel)){
    	alert("请确认号码是否正确输入");
    	return false;
    }
	
	subRequest({
		action : "com.ai.esp.g3.customer.web.MemberServiceAction",
		data : params,
		f : function(data) {
			if (data.GroupMembersInfo.length){
				//window.localStorage.setItem("groupmember" + staffId, encrypt(_pwd,JSON.stringify(data))); // 完成数据查询后保持到缓存，下次进来的时候可以直接取到
			}
			var obj = $("#groupmemberList", container);
			
			obj.setTemplateURL("templates/tpl/groupmembersearch.html", null, {filter_data : false});
			if (typeof(params) != "object"){
				var ps = params.split('&');
	            for (var i = 0; i < ps.length; i++) {
	                var p = ps[i].split('=');
	                obj.setParam(p[0], p[1]);
	            }
			}
			obj.processTemplate(data);
		},
		error : function() {
			alert("该手机号不存在");
		}
	});
}

function searchGroup(o, txt) {
    var val = txt ? txt.toLowerCase() : trim($(o).val().toLowerCase()),
        arg1, arg2, arg3;
    if (!txt) {

        if (/\d/g.test(val)) {
            arg1 = "code";
            arg2 = "tel";
        }
        else if (/[a-z]/g.test(val)) {
            arg1 = "spell";
            arg2 = "jianpin";
        }
        else if (/[^x00-xff]/g.test(val)) { //判断中文 + 符号
            arg1 = arg2 = "name";
        }
        else if (val){ //解决android系统的退格的bug
            arg1 = $(o).attr("arg1");
            arg2 = $(o).attr("arg2");
        }
    }
    else {
        arg3 = "jianpin";
    }
    if (val) {
        $(o).attr({ "arg1": arg1, "arg2": arg2 });
    }
    
    $("#groupList li").each(function() {
        var that = $(this);
        that.removeClass("hide");
        if (!txt) {
            if (arg1) {
                if (that.attr(arg1).toLowerCase().indexOf(val) == -1 && that.attr(arg2).toLowerCase().indexOf(val) == -1) {
                    that.addClass("hide");
                }
            }
            else if (val != "") {
                that.addClass("hide");
            }
        }
        else {
            if (that.attr(arg3).toLowerCase().charAt(0) != val) {
                that.addClass("hide");
            }
        }
    });
}

function product(o, name, groupid, serviceId, groupname) {
	if (/(VPMN)/g.test(name)) {
		$(o).attr({
			"href" : "templates/tpl/productlist.html",
			"json" : "com.ai.esp.g3.businessopt.web.VNetServiceAction",
			"remote" : "true",
			"params" : "action=getPackageList&staffId=" + staffId
					+ "&telphone=" + staffTel + "&groupNo=" + groupid
					+ "&groupName=" + groupname + "&servCode="
					+ serviceId + "&pName=集团V网" 
		});
	}
	else {
		var params = "staffId=" + staffId + "&groupNo=" + groupid
				+ "&groupName=" + groupname + "&packageName=" + name + "&servCode="
				+ serviceId;
		product_load(o, name, params);
	}
}

function product_load(o, name, params) {
	var tpl = /(集团V网)/.test(name) && "productVW" || /(集团彩铃)/.test(name)
			&& "productMMS" || "productOpera"; // 分别是集团V网，集团彩信和预约
	if (tpl != "productOpera"){
	    $(o).attr({
		    "href" : "templates/tpl/" + tpl + ".html",
		    "json" : "datas/json/blank.json",
		    "params" : params
	    });
	    if (tpl == "productMMS") {
		    $(o).attr("func", "$('table div.iswitch').iphoneSwitch('on','','',{'switch_height': 28});");
	    } 
	}
	else{
	    $(o).attr({
		    "href" : "templates/tpl/" + tpl + ".html",
		    "json" : "com.ai.esp.g3.businessopt.web.ProductOperationServiceAction",
		    "params" : params + "&action=getOperationsBySvcCode",
		    "remote" : "true"
	    });
	}
}

function takeBusiness(o, groupname, prodname, id, feeCode, groupNo) { //集团V网，集团彩信业务办理
    var container = $(o).parent().prev(), 
		tel = $("input[type=tel]", container).eq(0).val();
	if (checkPhoneNumber(tel)) {
		if ($("select option:selected", container).val() == "deleteMMS") { // 删除用户
			if (confirm("您要将" + tel + "用户从" + groupname + "的" + prodname + "中删除吗？")) {
				if (prodname == "集团彩铃") {
					deleteProduct(
							"com.ai.esp.g3.businessopt.web.CRBTServiceAction",
							"action=removeCRBT&staffId=" + staffId
									+ "&telphone=" + tel + "&businessCode="
									+ id);
				} else {
					deleteProduct(
							"com.ai.esp.g3.businessopt.web.VNetServiceAction",
							"action=removeVNet&staffId=" + staffId
									+ "&telphone=" + tel + "&businessCode="
									+ id);
				}
			}
		} else { // 添加用户
			if (prodname == "集团彩铃") {
				var istotal = $(".iswitch", container).attr("type")
						.toLowerCase() == "on" ? 1 : 0;
				submit("com.ai.esp.g3.businessopt.web.CRBTServiceAction",
						"action=addCRBT&staffId=" + staffId + "&telphone="
								+ tel + "&businessCode=" + id + "&serviceNo="
								+ id + "&paymentType=" + istotal);
			} else if (prodname == "集团V网") {
				var shortNo = $("input[type=tel]", container).eq(1).val();
				submit("com.ai.esp.g3.businessopt.web.VNetServiceAction",
						"action=addVNet&staffId=" + staffId + "&telphone="
								+ tel + "&businessCode=" + id + "&serviceNo="
								+ id + "&feeCode=" + feeCode + "&shortNumber="
								+ shortNo);
			} else { //预约受理
				if ($("input[type=text]", container).eq(0).val()){
					var options = {
						"action" : "createOrderAction",
						"staffId" : staffId,
						"telphone" : tel,
						"customerCode" : groupNo,
						"serviceNo" : id,
						"customerName" : encodeURI(groupname),
						"prodName" : encodeURI(prodname),
						"preDate" : $("div.dateselect", container).eq(0).html(), 
						"memberName": encodeURI($("input[type=text]", container).eq(0).val())
					};
						
					subRequest({
						action : "com.ai.esp.g3.businessopt.web.PreOprtAction",
						data : options,
						f : function(data) {
							if (data.resultCode == 1) {
								toastAlert("提交成功");
							} else {
								androidAlert(data.resultDesc ? data.resultDesc : "提交失败");
							}
						},
						title : "正在处理，请稍等…",
						func: function(){
							window.history.go(-1);
							$("input[type=text],input[type=tel]", container).val("");
						},
						error: function(){
							androidAlert("服务器超时，请检查网络");
						}
					});
				}
				else{
					androidAlert("请先进行号码验证");
				}
			}
		}
	} else {
		androidAlert("请确认手机号码是否正确输入");
	}
	return false;
}

function deleteProduct(action, data) {
    $.sendRequest({
        url: action,
        data: data,
        success: function(data) {
            if (data.resultCode == 1) {
                alert("删除成功");
            }
            else {
                if (data.resultDes) {
                    alert(data.resultDes);
                }
                else {
                    alert("删除失败");
                }
            }
        },
        error: function(result) {
            //alert('result: ' + result.issuccess);  //cache	true/false
            //alert('detail: ' + result.detail);     //detail.rows.length detail.insertId, detail.rowsAffected	//sql lite
            //alert('type: ' + result.type);         //'cache'/'jsonp'		ajax error
            alert('online: ' + result.online);     //true(jsonp error)/false(cache error)
        }
    });
}

function submit(action, data, params) {
	var success = 0;
	subRequest({
		action : action,
		data : data,
		f : function(data) {
			if (data.resultCode == 1) {
				alert("提交成功");
				success = 1;
			} else {
				alert(data.resultDesc ? data.resultDesc : "提交失败");
			}
		},
		title : "正在处理，请稍等…",
		func: function(){
			if (success == 1){
				window.history.go(-1);
				if (params){
					refresh(params);
				}
			}
		},
		error: function(){
			alert("服务器超时，请检查网络");
		}
	});
}

function submitFollow(o, id, isadd, workid) {
	var action = isadd ? "createWorkNote" : "updateWorkNoteByTrack", 
		input = $(o).parent().prev().find("input"), 
		textarea = $(o).parent().prev().find("textarea"),
		timeDiv = $(o).parent().prev().find("div.dateselect"),
		data = {
		"action" : action,
		"staffId" : staffId,
		"workTitle":encodeURI(input.eq(0).val()),
		"workPurpose" : encodeURI(input.eq(1).val()),
		"workDate" : timeDiv.eq(0).html(),
		"workContent" : encodeURI(textarea.eq(0).val()),
		"workResult" : encodeURI(input.eq(2).val()),
		"startDate" : timeDiv.eq(1).html(),
		"endDate" : timeDiv.eq(2).html(),
		"groupNo" : $(o).parent().prev().find("select option:selected").val(),
		"groupName" : encodeURI($(o).parent().prev().find("select option:selected").html()),
		"workTaskExecId" : id
	};
	if (!isadd) {
		data["workNoteId"] = workid;
	}
	
	if (!input.eq(1).val() || !input.eq(2).val()){
		alert("跟踪目的或跟踪结果不能为空");
		return false;
	}

	var params = {
		"container" : "followUL", 
		"json" : "com.ai.esp.g3.workmanager.web.WorkNoteAction",
		"tpl" : "followrefresh",
		"params" : "action=getWorkNotesByTaskId&staffId=" + staffId + "&workTaskExecId=" + id + "&workTitle=" + input.eq(0).val(),
		"dom" : o,
		"isadd" : isadd
	};
	submit("com.ai.esp.g3.workmanager.web.WorkNoteAction", data, params);
}

function refresh(options) {
	if (options.isadd){
		$(options.dom).parent().prev().find("textarea,input[type=text]:not([readonly=readonly])").val("").end().find("div.imageshow").children().remove();
		var arr = options["default"];
		if (arr){
			setDefault(arr[0], arr[1], arr[2]);
		}
	}
	loadSearchList(options.container, options.json, options.tpl, options.params, options.func);
}

function submitBaifang(o, groupid, isadd, logId) {
    var action = isadd ? "createWorkNoteByCustomer" : "updateWorkNote",
        input = $(o).parent().prev().find("input"),
        textarea = $(o).parent().prev().find("textarea"),
        data = { "action": action, "staffId": staffId, "workPurpose": encodeURI(input.eq(1).val()), "logType": 11, "workDate": input.eq(2).val(), "workResult": encodeURI(input.eq(4).val()), "workContent": encodeURI(textarea.eq(0).val()), "groupName": encodeURI(input.eq(0).val()), "groupNo": groupid, "attachment": "info/111.jpg" };
    if (!isadd) {
        data["workNoteId"] = logId;
    }

    submit("com.ai.esp.g3.workmanager.web.WorkNoteAction", data);
}

function submitOpponent(o, groupid, isadd, competitorsId) {
    var action = isadd ? "createCompeteInfo" : "updateCompeteInfo",
        input = $(o).parent().prev().find("input[type=text]"),
        textarea = $(o).parent().prev().find("textarea"),
        radio = $(o).parent().prev().find("span.highClass").html() == "电信" ? "01" : "02",
        data = { "action": action, "staffId": 1, "competitors": encodeURI(radio), "title": encodeURI(input.eq(1).val()), "desc": encodeURI(textarea.eq(0).val()), "groupName": encodeURI(input.eq(0).val()), "groupNo": groupid, "attachment": "info/111.jpg" };
    if (!isadd) {
        data["competitorsId"] = competitorsId;
    }

    submit("com.ai.esp.g3.customer.web.CompeteInfoServiceAction", data);
}

function deleteEsop(data, action, id, g) {
    data = "action="+ data +"&staffId=1&" + id;
    $.sendRequest({
        url: "com.ai.esp.g3." + g + ".web." + action,
        data: data,
        success: function(data) {
            if (data.resultCode == 1) {
                alert("删除成功");
            }
            else {
                alert("删除失败");
            }
        },
        error: function(result) {
            //alert('result: ' + result.issuccess);  //cache	true/false
            //alert('detail: ' + result.detail);     //detail.rows.length detail.insertId, detail.rowsAffected	//sql lite
            //alert('type: ' + result.type);         //'cache'/'jsonp'		ajax error
            alert('online: ' + result.online);     //true(jsonp error)/false(cache error)
        }
    });
}

function loadToday() {//opponentedit.html
    if (!$("input.nowday[type=text]").val()) {
        $("input.nowday[type=text]").val(Calendar.today);
    }
}

//function showFooter() {
//    $("#footer").css("bottom", "-48px").removeClass("hide").animate({ "bottom": 0 });
//    $("#login").css("backgroundImage", "none");
//}

function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}


function followRefresh(id) { //刷新任务跟踪列表     抑或可以放在新建修改删除的按钮里
    var data = "action=getWorkNotesByTaskId&staffId=1&workTaskExecId=" + id;
    loadSearchList("followUL", "com.ai.esp.g3.workmanager.web.WorkNoteAction", "followrefresh", data);
}

function addPosition(o, staffId, groupNo) {
    var position = "12.23,123.22"; //todo 通过phonegap获取经纬度
    $.sendRequest({
        url: "com.ai.esp.g3.customer.web.CustomerServiceAction",
        data: "action=uploadCustomerPosition&staffId=" + staffId + "&groupNo=" + groupNo + "&position=" + position,
        success: function(data) {
            if (data.resultCode == 1) {
                $(o).prev().attr("params", "position=" + position);
                alert("位置信息上传成功");
            }
            else {
                alert("位置信息上传失败");
            }
        },
        error: function(result) {
            //alert('result: ' + result.issuccess);  //cache	true/false
            //alert('detail: ' + result.detail);     //detail.rows.length detail.insertId, detail.rowsAffected	//sql lite
            //alert('type: ' + result.type);         //'cache'/'jsonp'		ajax error
            alert('online: ' + result.online);     //true(jsonp error)/false(cache error)
        }
    });
}

//phonegap相关

function mainDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Main (id unique, data)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_group", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_mem", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_remind", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_yujing", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_notice", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_perfor", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_own", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_text", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_play", 1)');
    window.localStorage.setItem("main", 1); //用于以后使用判断是否已经存在Main表
}

function queryDB(tx) {
    tx.executeSql('SELECT * FROM Main', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var len = results.rows.length;
    $("#main .item").show();
    if (len) {
        for (var i = 0; i < len; i++) {
            if (results.rows.item(i).data == 0) {
                $("#" + results.rows.item(i).id).hide();
            }
        }
    }
}

function errorCB() {
    //alert("error");
}

function showFooter() {
    $("#footer a.current").attr("href","#n-2");

    //图标显示，优化可以生成json放入模板加载时进行加载
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000),
        footer = $("#footer").css("webkitTransform","translateY(100%)").removeClass("hide");
    db.transaction(queryDB, errorCB);
    
    setTimeout(function() {
        footer.css("webkitTransform", "translateY(0)").bind('webkitTransitionEnd', function(){
            footer.unbind('webkitTransitionEnd');
            subRequest({
			    action : "com.ai.esp.g3.sys.web.SysNavigationAction",
			    data : "action=getModulesInfo&staffId=" + staffId + "&today=" + Calendar.today,
			    f : function(data) {
				    var p, json = data.data;
				    for (p in json){
					    if (parseInt(json[p])){
						    $("#" + p).append('<span class="badge">' + json[p] + '</span>');
					    }
				    }
			    }
		    });
        });
    }, 10);

//    $("#footer").css("bottom", "-48px").removeClass("hide").animate({"bottom" : 0},function(){
//		subRequest({
//			action : "com.ai.esp.g3.sys.web.SysNavigationAction",
//			data : "action=getModulesInfo&staffId=" + staffId + "&today=" + Calendar.today,
//			f : function(data) {
//				var p, json = data.data;
//				for (p in json){
//					if (parseInt(json[p])){
//						$("#" + p).append('<span class="badge">' + json[p] + '</span>');
//					}
//				}
//			}
//		});
//	});
	$("#wlanloginId").parent().attr("params","action=getMyCustomers&staffId=" + staffId + "&reqDate=" + Calendar.today);
	$("#searchSp").parent().attr("params","staffId=" + staffId);
	$("#login").remove();
}

function mainWitch() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM Main', [], function(tx, results) {
            var len = results.rows.length, obj;
            for (var i = 0; i < len; i++) {
                obj = $('#selectSearch #' + results.rows.item(i).id);
                if (results.rows.item(i).data == 0) {
                    obj.attr("type", "off").iphoneSwitch('off');
                }
                else {
                    obj.attr("type", "on").iphoneSwitch('on');
                }
            }
        });
    });
}

function saveMain() {
    var obj = $('#selectSearch .iswitch'), i,
		db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(function(tx) {
        for (i = 0; i < obj.length; i++) {
            tx.executeSql("update Main set data=? where id=?", [obj.eq(i).attr("type") == "on" ? 1 : 0, obj.eq(i).attr("id")]);
        }
    }, errorCB, successCB);
}

function successCB() {
    alert("提交成功");
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(queryDB, errorCB);
}

function showCostDetail(arrearsDetail, tel) {
    if (arrearsDetail) {
        var costArr = arrearsDetail.split("|"), detailArr, html = "";
        for (var i = 0; i < costArr.length; i++) {
            detailArr = costArr[i].split(",");
            html += "<div class='normalList'>" + detailArr[0] + "月 ：<span>" + detailArr[1] + "元</span></div>";
        }
    }
    $("#qianfei_" + tel).html(html);
}

//集团客户查询tips
$(document).ready(function() {

    $("nav ul").live({
        "mousemove": function(e) {
            var tip = e.target.innerHTML;
            $("m.tips").html(tip);
            var o = "#groupSearch";
            searchGroup(o, tip == "#" ? "" : tip);
        },
        "mousedown": function(e) {
            scrollTop("group", 0);
        
            var tip = e.target.innerHTML;
            $("nav.vertical").css("background-color", "rgba(169,169,169,0.3)");
            $("m.tips").html(tip).show();
            var o = "#groupSearch";
            searchGroup(o, tip == "#" ? "" : tip);
        },
        "mouseup": function() {
            $("nav.vertical").css("background-color", "Transparent");
            $("m.tips").hide();
        }
    });

   // var ul = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
});

function creatTips() {
    var p = $("<m class='tips'></m>").appendTo($(document.body)),
        width = self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height = self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    p.css({ "top": (height / 2) - (p.height() / 2) + 'px', "left": (width / 2) - (p.width() / 2) + 'px' });
}

function setHistoryParams(id) {
    var params;
    $("#" + id).find("li").each(function() {
        params = $(this).attr("params");
        $(this).attr("params", params + "&prevHistory=" + window.location.hash.substring(1));
    });
}

function scrollTop(o, time){
    var	container = typeof(o) == "object" ? o : $("#" + o),
        matrix = new WebKitCSSMatrix(window.getComputedStyle(container.find("div.scroll").children()[0], null).webkitTransform);
    $("div.current").scrollTo(-matrix.m42, time);
    delete matrix;
}

function imgAutoSize(imgD, FitWidth, FitHeight) {
    var image1 = new Image();
    image1.onload = function() {
        if (this.width > 0 && this.height > 0) {
            if (this.width / this.height >= FitWidth / FitHeight) {
                if (this.width > FitWidth) {
                    imgD.width = FitWidth;
                    imgD.height = (this.height * FitWidth) / this.width;
                }
                else {
                    imgD.width = this.width;
                    imgD.height = this.height;
                }
            }
            else {
                if (this.height > FitHeight) {
                    imgD.height = FitHeight;
                    imgD.width = (this.width * FitHeight) / this.height;
                } else {
                    imgD.width = this.width;
                    imgD.height = this.height;
                }
            }
        }
        image1 = null;
    }
    image1.src = imgD.src;
    $(imgD).show();
}

function showPic(o, url) {
    $(o).parent().find("img").attr("src", root + url);
}

function goToGroupMember(tel) {
	var _a = $("<a></a>").attr({
        "href": "templates/tpl/groupmember.html",
        "json": "com.ai.esp.g3.customer.web.MemberServiceAction",
        "cachekey": "groupmember",
        "func": "var container = $(window.location.hash);$('#groupmemberSearch', container).val(" + tel + ");searchmember(container);",
        "params": "staffId=" + staffId + "&today=" + Calendar.today
    });
    _a.appendTo('body').trigger('tap').remove();
}

function goToGroup(groupNo) { 
    var group = $("div.grouplistdetails");
    if (!group[0] || !group.is("div[groupNo=" + groupNo + "]")) {
        var _a = $("<a></a>").attr({
            "href": "templates/tpl/grouplistdetails.html",
            "json": "com.ai.esp.g3.customer.web.CustomerServiceAction",
            "remote": "true",
            "params": "action=getCustomerBaseInfo&groupNo=" + groupNo + "&staffId=" + staffId + "&reqDate=" + Calendar.today
        });
        _a.appendTo('body').trigger('tap').remove();
    }
    else {
        $("div.grouplistdetails[groupNo=" + groupNo + "]").parent().parent().doNavigation();
    }
}

function checkTel(o){
	var that = $(o),
	tel = that.prev().val();
	subRequest({
		action : "com.ai.esp.g3.customer.web.MemberServiceAction",
		data : "action=getMemberBaseInfo&staffId=" + staffId + "&telphone=" + tel,
		f : function(data) {
			if (data.GroupMembersInfo.length){
				toastAlert("验证成功");
				that.parent().next().find("input[type=text]").val(data.GroupMembersInfo[0].memberName);
			}
			else{
				androidAlert("手机号码不存在");
			}
		},
		error : function(result) {
			androidAlert("验证失败");
		},
		title : "正在验证号码，请稍等…",
	});
}

function clearTel(o){
	$(o).parent().next().find("input[type=text]").val("");
}



function Navigation(container, typeId){
	var ul = typeId ? $("#" + container + "_" + typeId) : $("#" + container);
	ul.find("li").remove().end().parents("div.scroll:first").find(".edit").addClass("hide");
	
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
	db.transaction(queryCustomerTest, errorCB);
	
	function queryCustomerTest(tx) {
		if (!typeId){
			tx.executeSql('CREATE TABLE IF NOT EXISTS CustomerTest (id unique, tit)');
			tx.executeSql('SELECT * FROM CustomerTest', [], function(tx, results){
				var len = results.rows.length, title, id;
				if (len) {
					for ( var i = 0; i < len; i++) {
						id = results.rows.item(i).id;
						title = results.rows.item(i).tit;
						ul.append('<li dataid="'+id+'" href="templates/tpl/customertestdetail.html" json="datas/json/blank.json" func="Navigation(\'customertestdetailList\', '+id+')" params="id='+id+'&title='+title+'"><a class="fontbold minia">'+title+'</a><input type="text" class="hide" value="'+title+'" /><div onclick="deleteTest(this)" class="deletetest hide"></div></li>');
					}
				}
				else{
					ul.append('<li class="nobackimage nodata minia"><a>没有可以体验的业务</a></li>');
				}
			}, errorCB);
		}
		else{
			tx.executeSql('CREATE TABLE IF NOT EXISTS CustomerTestDetail (id unique, tit, uri, typeId)');
			tx.executeSql('SELECT * FROM CustomerTestDetail WHERE typeId=?', [typeId.toString()], function(tx, results){ //参数必须为string格式，number格式无效
				var len = results.rows.length, title, id, uri;
				if (len) {
					for ( var i = 0; i < len; i++) {
						id = results.rows.item(i).id;
						title = results.rows.item(i).tit;
						uri = results.rows.item(i).uri;
						ul.append('<li class="nobackimage" dataid="'+id+'"><div class="spanTitle fontbold longContent" style="width:70%; margin: 0">'+title+'</div><a style="float:right; padding: 0;" onclick="Video.playVideo(\''+uri+'\');"><span class="submit">播放</span></a><input type="text" class="hide" value="'+title+'" /><div onclick="deleteTest(this,'+typeId+')" class="deletetest hide"></div></li>');
					}
				}
				else{
					ul.append('<li class="nobackimage nodata minia"><a>没有可以体验的业务</a></li>');
				}
			}, errorCB);
		}
	}
}

//点击客户体验页面中的编辑按钮，可以使列表在编辑和查看两种状态之间进行切换
function editCustomerTest(o, typeId){
    var ul = $(o).parent().next().find("ul").eq(0),
        li = $("li", ul),
        edit = $(o).parents("div.current").find(".edit");
    if (edit.is(".hide")){ //开始编辑
        if (li.eq(0).is(".nodata")){ //无数据
            if (!typeId){
            	li.eq(0).remove();
            }
        }
        else{ //有数据
            li.each(function(){
                $(this).addClass("nobackimage").removeAttr("href").find(":not(.hide)").hide().end().find(".hide").show();
            })
        }
        if (!typeId){
        	ul.append('<li class="nobackimage"><input type="text" placeholder="请输入新增分类" /><div class="addtest" onclick="addTest(this)"></div></li>');
        }
        edit.removeClass("hide");
    }
    else{ //取消编辑
        Navigation(typeId ? 'customertestdetailList' : 'customertestList', typeId);
        if (!typeId){
            $("div.customertestdetail").remove();
        }
    }
}

//客户体验大类修改和新增的保存，写入本地数据库
function saveTest(){
	var obj = $('#customertestList li'), i, 
	db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
	db.transaction(function(tx) {
		for (i = 0; i < obj.length - 1; i++) {
			tx.executeSql("update CustomerTest set tit=? where id=?", [
					obj.eq(i).find("input[type=text]").val(),
					obj.eq(i).attr("dataid") ]);
		}
		if (obj.last().find("input[type=text]").val()){
			var id = new Date().getTime();
			tx.executeSql('INSERT INTO CustomerTest (id, tit) VALUES ("'+id+'", "'+obj.last().find("input[type=text]").val()+'")');
		}
	}, errorCB, function(){
		alert("保存修改成功");
		Navigation("customertestList");
	});
}

//对客户体验大类及客户体验视频的新增保存，写入本地数据库
function addTest(o, typeId){
	var that = $(o),
		e = event || window.event;
	if (!typeId){
		var title = that.prev().val();
		if (title){
			var id = new Date().getTime(), 
				db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
			db.transaction(function(tx) {
				tx.executeSql('INSERT INTO CustomerTest (id, tit) VALUES ("'+id+'", "'+title+'")');
			}, errorCB, function(){
				alert("提交成功");
				that.prev().val("").parent().before('<li class="nobackimage" dataid="'+id+'"><input type="text" value="'+title+'" /><div onclick="deleteTest(this)" class="deletetest"></div></li>');
			});
		}
		else{
			alert("请输入新增分类");
		}
	}
	else{
		var input = that.parent().parent().find("input[type=text]");
			title = input.eq(0).val(),
			uri = input.eq(1).val();
		if (title){
			var id = new Date().getTime(), 
				db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
			db.transaction(function(tx) {
				tx.executeSql('INSERT INTO CustomerTestDetail (id, tit, uri, typeId) VALUES ("'+id+'", "'+title+'", "'+uri+'", "'+typeId+'")');
			}, errorCB, function(){
				alert("提交成功");
				that.parent().siblings("input[type=text]").val("");
				var ul = that.parent().parent().prev();
				if (ul.find("li.nodata")[0]){
					ul.find("li.nodata").remove();
				}
				ul.append('<li class="nobackimage" dataid="'+id+'"><input type="text" value="'+title+'" /><div onclick="deleteTest(this, '+id+')" class="deletetest"></div></li>');
			});
		}
		else{
			alert("视频信息不完整");
		}
	}
	
	
	e.preventDefault();
	e.stopPropagation();
	return false;
}

//对客户体验大类及客户体验视频的删除，写入本地数据库
function deleteTest(o, typeId){
	var that = $(o),
		id = that.parent().attr("dataid"),
		e = event || window.event,
		content = typeId ? "视频" : "大类";
	if (confirm("是否删除此"+content+"?")){
		var	db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
		db.transaction(function(tx) {
			if (typeId){
				tx.executeSql('DELETE FROM CustomerTestDetail WHERE id=?',[id]);
			}else{
				tx.executeSql('DELETE FROM CustomerTest WHERE id=?',[id]);
			}
		}, errorCB, function(){
			alert("删除成功");
			if (!that.parent().siblings().length && typeId){
				that.parents("ul:first").append('<li class="nobackimage nodata minia"><a>没有可以体验的业务</a></li>')
			}
			that.parent().remove();
		});
	}
	
	e.preventDefault();
	e.stopPropagation();
	return false;
}


function getPicture(o) {
        var imageUri = new Date().getTime() + ".png";
    	var obj = $(o).parents("tr:first"), 
    		img = $("input.hide", obj).val(),
    		count = $("img", obj.next()).length; //获取一共多少张图片，用于删除的时候进行定位
    	$("input.hide", obj).val(img + imageUri + ',');
    	var newImg = $("<img></img>").attr("src", imageUri);
    	$("<div class='moreimage'></div>").append("<a class='closeimage' index='" + count + "'></a>").append(newImg).appendTo("div.imageshow",obj.next());
    	$("div.imageshow",obj.next()).append("<br />");
    	imgAutoSize(newImg[0], 180, 180);
}

function imgAutoSize(imgD,FitWidth,FitHeight) { 
    var image1=new Image(); 
    image1.onload = function () { 
         if(this.width>0 && this.height>0) { 
	         if(this.width/this.height>= FitWidth/FitHeight) { 
		         if(this.width>FitWidth) { 
			         imgD.width=FitWidth; 
			         imgD.height=(this.height*FitWidth)/this.width; 
		         }
		         else { 
			         imgD.width=this.width; 
			         imgD.height=this.height; 
		         } 
	         } 
	         else { 
		         if(this.height>FitHeight) { 
			         imgD.height=FitHeight; 
			         imgD.width=(this.width*FitHeight)/this.height; 
		         } else { 
			         imgD.width=this.width; 
			         imgD.height=this.height; 
		         } 
	         } 
         } 
         image1 = null;
    }
    image1.src=imgD.src;
}

function checkTel(o){
	var that = $(o),
	tel = that.prev().val();
	subRequest({
		action : "com.ai.esp.g3.customer.web.MemberServiceAction",
		data : "action=getMemberBaseInfo&staffId=" + staffId + "&telphone=" + tel,
		f : function(data) {
			if (data.GroupMembersInfo.length){
				that.parents("tr:first").next().find("input").val(data.GroupMembersInfo[0].memberName);
			}
			else{
				alert("手机号码不存在");
			}
		},
		error : function(result) {
			alert("验证失败");
		},
		title : "正在验证手机号码，请稍等…"
	});
}

function changeOutline(o){
    var value = $(o).find("option:selected").val();
    if (value == "outline"){
        $(o).parents("tr:first").siblings("tr.outline").removeClass("hide");
    }
    else{
        $(o).parents("tr:first").siblings("tr.outline").addClass("hide");
    }
}

function addMember(o, groupNo){
    var action = "addMemberInfo", 
        container = $(o).parent().prev(),
        input = container.find("input"),
        data = {
		    "action" : action,
		    "staffId" : staffId,
		    "memberType" : container.find("select option:selected").val() == "outline" ? 4 : 2,
		    "groupNo" : groupNo,
		    "telphone" : input.eq(1).val(),
		    "staffName" : encodeURI(input.eq(2).val()),
		    "cardNumber" : input.eq(3).val()
	    };
	    
	subRequest({
		action : "com.ai.esp.g3.customer.web.MemberServiceAction",
		data : data,
		f : function(data) {
			if (data.resultCode == 1) {
				toastAlert("提交成功");
				window.history.go(-1);
				container.find("input:not([disabled=disabled])").val("");
			} else {
				androidAlert("集团成员添加失败");
			}
		},
		error : function() {
			androidAlert("集团成员添加失败");
		}
	});
}

function subRequest(options) {
	var settings = {
		title : '请稍等…',
		f : function(data) {
		}
	};

	if (options) {
		jQuery.extend(settings, options);
	}

	$.sendRequest({
		url : settings.action,
		data : settings.data,
		timeout : 10000,
		success : function(data) {
			settings.f(data);
		},
		error : function(result) {
			if (settings.error) {
				settings.error();
			}
		},
		complete : function() {
			if (settings.func) {
				settings.func();
			}
		}
	});
}


//添加黑白名单
function addBlacklist(o, groupNo, serviceId){
    var action = "addOrDeleteList", 
        container = $(o).parent().prev(),
        data = {
		    "action" : action,
		    "staffId" : staffId,
		    "operationType" : container.find("select option:selected").val() == "add" ? 1 : 3,
		    "groupNo" : groupNo,
		    "servCode" : container.find("input[type=tel]").val(),
		    "groupBillId" : serviceId
	    };
	subRequest({
		action : "com.ai.esp.g3.businessopt.web.ListServiceAction",
		data : data,
		f : function(data) {
			if (data.resultCode == 1) {
				alert("提交成功");
				window.history.go(-1);
				container.find("input[type=tel]").val("");
			} else {
				alert(data.resultDesc ? data.resultDesc : "操作失败");
			}
		},
		error : function() {
			alert("操作失败");
		}
	});
}

//操作位讯通
function submitWXT(o, groupNo, serviceId, feeCode){
    var action = "addOrDeleteWXT", 
        container = $(o).parent().prev(),
        data = {
		    "action" : action,
		    "staffId" : staffId,
		    "operationType" : container.find("select option:selected").val(),
		    "groupNo" : groupNo,
		    "servCode" : container.find("input[type=tel]").val(),
		    "groupBillId" : serviceId,
		    "feeCode" : feeCode,
		    "paymentType" : container.find("div.iswitch").attr("type") == "ON" ? 1 : 0
	    };
	subRequest({
		action : "com.ai.esp.g3.businessopt.web.WXTServiceAction",
		data : data,
		f : function(data) {
			if (data.resultCode == 1) {
				toastAlert("提交成功");
				window.history.go(-1);
				container.find("input[type=tel]").val("");
			} else {
				alert(data.resultDesc ? data.resultDesc : "操作失败");
			}
		},
		error : function() {
			alert("操作失败");
		}
	});
}

function getStorage(name, isJson){
	var data = window.localStorage.getItem(name);
	return isJson && (data && eval('(' + data + ')') || {}) || data;
}


//分页
(function($) {
    $.fn.pageIndex = function(cachekey, tpl, params, number){
        if (cachekey){
            var n = number || 8,
                json = getStorage(cachekey, true),
                result, that = $(this),
                pageDiv = $("div.page[data=" + cachekey + "]");
            if (!pageDiv[0]){
                pageDiv = $("<div class='page hide' data='" + cachekey + "'></div>");
                that.after(pageDiv);
            }
            if (json.data.length){
                if (json.data.length > n){
                    result = {"data": json.data.slice(0, n)};
                    pageDiv.append("<div class='prev'>上一页</div><div class='next'>下一页</div>");
                    var count = json.data.length % n == 0 ? json.data.length / n : parseInt(json.data.length / n) + 1,
                        i = 0, length = count <= 5 ? count : 5;
                    for(i; i < length; i++){
                        pageDiv.append("<a index='" + (i + 1) + "'>" + (i + 1) + "</a>");
                    }
                    pageDiv.find("a[index=1]").addClass("pageSelected");
                    if (pageDiv.find("a:first").is("a.pageSelected")){
                        pageDiv.find("div.prev").css("visibility","hidden");
                    }
                    if (pageDiv.find("a:last").is("a.pageSelected")){
                        pageDiv.find("div.next").css("visibility","hidden");
                    }
                    pageDiv.removeClass("hide");
                }
                else{
                    result = json;
                }

                that.setTemplateURL("templates/tpl/" + tpl + ".html", null, { filter_data : false });
	            if (typeof(params) != "object"){
		            var ps = params.split('&');
                    for (var i = 0; i < ps.length; i++) {
                        var p = ps[i].split('=');
                        that.setParam(p[0], p[1]);
                    }
	            }
	            that.processTemplate(result);
	        }
        }
        
        pageDiv.find("div").bind(function(){
             
        });
        
        return this;
    }
    $.fn.pageTo = function(o, cachekey, tpl, params, number, index){
        return this;
    }
    
})(jQuery);


function tapFooter(o){
    var name = typeof(o) == "object" ? $(o).attr('name') : o;
    $("footer a[name=" + name + "]").addClass("current").click().parent().siblings().find("a").removeClass("current");
}

//$(window).bind("resize", function(){
//    var o = document.activeElement;
//    if (/^(input|select|textarea)$/.test(o.nodeName.toLowerCase())) {
//        var footerTop = $("footer").offset().top,
//            myTop = $(o).offset().top + $(o).height();
//        if (myTop > footerTop){
//            $("div.current").scrollTo(footerTop - myTop - 45, 0);
//        }
//    }
//});

function setRemindState(o, id, reqDate){
	if (!$(o).is("li.readed")){
		var data = {
			    "action" : "setRemindState",
			    "staffId" : staffId,
			    "remindState" : "1",
			    "remindId" : id,
			    "url" : "WorkRemindAction"
		    },
		    url = 'com.ai.esp.g3.workmanager.web.' + data.url;
		    
	    subRequest({
			action : url,
			data : data,
			f : function(data) {
				if (data.resultCode == 1) {
					$(o).addClass("readed");
					var number = $(o).parents("ul[name=bigUl]").find("ul").find("li:not(.readed)").length;
					
					//更新日历及主页的数据
					if (reqDate && $("#mycalendar")[0]){
						Calendar.changeSomeDay(reqDate);
					}
					if (reqDate && reqDate == Calendar.today){
						var dom = "ic_remind";
						if (number > 0){
							$("#" + dom + " span.badge").html(number);
						}else{
							$("#" + dom + " span.badge").remove();
						}
					}
					
					alert("已读设置成功");
				} 
			}
		});
	}
}

function checkPhoneNumber(tel){
	var reg =/^1{1}(3[0-9]|5[7-9]|53|56|8[7-9])[0-9]{8}$/;
	return reg.test(tel);
}

function checkCardNumber(cardId){
	//身份证正则表达式(15位) 
	var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; 
	//身份证正则表达式(18位) 
	var isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/; 
	
	return reg.test(isIDCard1) || reg.test(isIDCard2);
}

function setGroupSelect(groupNo){
	var groupStorage = getStorage("group", true);
	if (JSON.stringify(groupStorage) != "{}"){
		var	groupInfo = groupStorage["CustomerInfo"],
			container = $(window.location.hash);
		for (var i = 0; i < groupInfo.length; i++){
			$("select", container).append("<option value="+groupInfo[i].GROUPNO+">"+groupInfo[i].GROUPNAME+"</option>");
		}
		if (groupNo){
			$("select option[value="+groupNo+"]", container).attr("selected", "selected");
		}
		else{
			$("div.dateselect", container).html(Calendar.today);
		}
	}
	else{
		subRequest({
			action : "com.ai.esp.g3.customer.web.CustomerServiceAction",
			data : "action=getMyCustomers&staffId=" + staffId + "&reqDate=" + Calendar.today,
			f : function(data) {
				window.localStorage.setItem("group" + staffId,encrypt(_pwd,JSON.stringify(data)));
				var	groupInfo = data["CustomerInfo"],
					container = $(window.location.hash);
				for (var i = 0; i < groupInfo.length; i++){
					$("select", container).append("<option value="+groupInfo[i].GROUPNO+">"+groupInfo[i].GROUPNAME+"</option>");
				}
				if (groupNo){
					$("select option[value="+groupNo+"]", container).attr("selected", "selected");
				}
				else{
					$("div.dateselect", container).html(Calendar.today);
				}
			},
			error : function() {
				alert("网络连接超时，请检查您的网络");
			}
		});
	}
}


function refreshMain(container, json, tpl, params){
	refresh({
		"container" : container, 
		"json" : json,
		"tpl" : tpl,
		"params" : params
	});
}