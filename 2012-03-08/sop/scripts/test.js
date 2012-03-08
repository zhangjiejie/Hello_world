var staffId, staffTel, root = 'http://192.168.0.35:8080/aiesp/business/';

$(function() {
    var s = new $.NBSetup({
        rootURL: root,
        // Http://baseWebApp/business/ 写在上面作为固定的地址
        // WorkRemindAction.do?method=getWorkReminds&aa=1&bb=3 写在各个标签的json里
        ready: function(requests) {
            for (var i = 0; i < requests.length; ++i) {
                var request = requests[i];

                // $.sendRequest($.extend({success:function(){
                // alert(1)
                // }, error:function(){
                //					
                // }, complete:function(){
                //					
                // }}, request));
                // request.success = function(data){ //
                // alert('success: response data: ' + JSON.stringify(data));
                // };
                // request.error = function(r){ //offline
                // alert('error, online: ' + r.online + ', type: ' + r.type);
                // };
                // request.complete = function(){ //
                // alert('complete');
                // }
                $.sendRequest(request);
            }
        }
    });
});

$(document).ready(function() {
    if (!localStorage.getItem("groupmember")) {
        var json = {
            "GroupMembersInfo": []
        };
        window.localStorage.setItem("groupmember", JSON.stringify(json));
    }

    if (checkNetWorkState()) {
        var data = window.localStorage.getItem("userInfo"),
        userInfo = eval('(' + data + ')');
        if (userInfo.forgotpass) {
            $("#userPhoneNum").val(userInfo.username);
            $("#userPassword").val(userInfo.password);
            if (userInfo.autologin) {
                $("#btn_Login").click();
            }
        } else {
            // 将通过IMEI IMSI获取用户名密码都写进了getIMEISI里
            getIMEISI(getUserInfo);
        }
    } else {
        setupNetWork("outLine");
    }

    // 绑定事件
    $("#datetypeSel").live("change",
    function() {
        var selected = $("option:selected", $(this)).val();
        $(this).siblings("select").removeClass("hide");
        $(this).siblings("select:not([id=" + selected + "])").addClass("hide");
    });

    $("#selectOpera").live("change",
    function() {
        $("#tdOpera").html($(this).find("option:selected").val());
    })

    $("#footer li a").live("click",
    function() {
        $(this).addClass("current").parent().siblings().find("a").removeClass("current");
    });

    $("span.labelClass").live("touchend",
    function() {
        var that = $(this);
        if (that.is("#forgotpassbtn") && $("#autologinbtn").is(".highClass")) {
            return false;
        }

        if (that.is(".highClass")) {
            if (!that.is(".radio")) {
                that.removeClass("highClass").animate({
                    "background-position-y": -2
                });
            }
        } else {
            that.addClass("highClass").animate({
                "background-position-y": -28
            });
            if (that.is(".radio")) {
                that.siblings().removeClass("highClass").animate({
                    "background-position-y": -2
                });
            }
            if (that.is("#autologinbtn")) {
                $("#forgotpassbtn").addClass("highClass").animate({
                    "background-position-y": -28
                });
            }
        }
    });

    $("input.dateselect").live({
        "touchend": function() {
            var id = $(this).attr("id");
            if (!id) {
                id = "input_date_" + new Date().getTime();
                $(this).attr("id", id);
            }
            getCalendar(id);
        },
        "focus": function() {
            $(this).blur();
        }
    });

    $("#btn_Login").bind("click",
    function() {
        var username = trim($("#userPhoneNum").val()),
        password = trim($("#userPassword").val()),
        data = "action=login&userCode=" + username + "&pwd=" + password,
        today = Calendar.today,
        forgotpass = $("#forgotpassbtn").is(".highClass") ? true: false,
        autologin = $("#forgotpassbtn").is(".highClass") ? true: false;

        subRequest({
            action: "com.ai.esp.g3.sys.web.SysLoginManagerAction",
            data: data,
            f: function(data) {
                if (data.resultCode == 1) {
                    window.localStorage.setItem("userInfo", JSON.stringify({
                        "username": username,
                        "password": password,
                        "staffId": data.staffId,
                        "telphone": data.telphone,
                        "forgotpass": forgotpass,
                        "autologin": autologin
                    }));
                    staffId = data.staffId;
                    staffTel = data.telphone;
                    $("#login").addClass("logLoading").children().hide();
                    $(document.body).css("overflow", "hidden");
                    var _a = $("<a></a>").attr({
                        "href": "templates/tpl/main.html",
                        "json": "com.ai.esp.g3.sys.web.SysNavigationAction",
                        "func": "showFooter();",
                        "remote": "true",
                        "loading": "false",
                        "params": "action=getModulesInfo&staffId=" + staffId + "&today=" + today
                    });
                    _a.appendTo('body').trigger('tap');
                    $(this).historyShift(); // 更改历史记录，使用户无法返回到此页，或者需要通过注销
                } else {
                    alert("登陆失败,请尝试手动登陆");
                    $("#userPhoneNum").removeAttr("readonly");
                    $("#userPassword").removeAttr("readonly");
                }
            },
            error: function() {
                $("#login").addClass("logLoading").children().hide();
                $(document.body).css("overflow", "hidden");
                var _a = $("<a></a>").attr({
                    "href": "templates/tpl/main.html",
                    "json": "datas/json/blank.json",
                    "func": "showFooter();",
                    "loading": "false",
                    "params": "staffId=" + staffId + "&today=" + today
                });
                _a.appendTo('body').trigger('tap');
                $(this).historyShift(); // 更改历史记录，使用户无法返回到此页，或者需要通过注销
            },
            title: "正在登陆，请稍等…"
        });
    });
})

function subRequest(options) {
    var settings = {
        title: '请稍等…',
        f: function(data) {}
    };

    if (options) {
        jQuery.extend(settings, options);
    }

    showProgressDialog(settings.title);
    $.sendRequest({
        url: settings.action,
        data: settings.data,
        timeout: 10000,
        success: function(data) {
            settings.f(data);
        },
        error: function(result) {
            // alert('result: ' + result.issuccess); //cache true/false
            // alert('detail: ' + result.detail); //detail.rows.length
            // detail.insertId, detail.rowsAffected //sql lite
            // alert('type: ' + result.type); //'cache'/'jsonp' ajax error
            // alert('online: ' + result.online); //true(jsonp
            // error)/false(cache error)
            if (settings.error) {
                settings.error();
            }
        },
        complete: function() {
            dismissProgressDialog();
            if (settings.func) {
                settings.func();
            }
        }
    });
}

function getUserInfo(imeisi) {
    var im = imeisi.split(","),
    data = "action=terminalAuthentication&imei=" + im[0] + "&imsi=" + im[1];

    subRequest({
        action: "com.ai.esp.g3.sys.web.SysLoginManagerAction",
        data: data,
        f: function(data) {
            if (data.userCode) {
                $("#userPhoneNum").val(data.userCode);
                $("#userPassword").val(data.pwd);
            } else {
                //暂时解决loading和alert同时弹出的时候出现的系统异常
                setTimeout('alert("终端身份认证失败,请尝试手动登陆");', 500);
                //alert("终端身份认证失败,请尝试手动登陆");
                $("#userPhoneNum").removeAttr("readonly");
                $("#userPassword").removeAttr("readonly");
                // 测试之用
                $("#userPhoneNum").val("A657511");
                $("#userPassword").val("6C68663A39383F");
            }
        },
        error: function() {
            setupNetWork("outLine");
        },
        title: "正在获取用户信息，请稍等…"
    });
};

function outLine() { // 选择离线登录后执行函数，从缓存获取用户信息
    var data = window.localStorage.getItem("userInfo"),
    userInfo = eval('(' + data + ')');
    if (userInfo) {
        $("#userPhoneNum").val(userInfo.username);
        $("#userPassword").val(userInfo.password);
        // 设置全局变量缓存
        staffId = userInfo.staffId;
        staffTel = userInfo.telphone;
    } else {
        // 测试之用
        $("#userPhoneNum").val("A657511");
        $("#userPassword").val("6C68663A39383F");
    }
}

function loadSearchList(container, json, tpl, params, func, prev) {
    subRequest({
        action: json,
        data: params,
        f: function(data) {
            var obj = prev ? $("#" + container, $("#" + prev)) : $("#" + container);
            obj.setTemplateURL("templates/tpl/" + tpl + ".html", null, {
                filter_data: false
            });
            obj.processTemplate(data);
        },
        func: func
    });
}

function setMM(o) {
    var obj = $(o),
    $tab = $("#" + obj.attr("ul"), $(o).parents(".myul:first"));
    $("li", obj.parent()).removeClass("cur");
    obj.addClass("cur");
    $tab.fadeIn().siblings("ul").hide();
    return false;
}

function finishWarn(o, action, id, meg) {
    var e = event || window.event,
    array = {
        "setRemindState": ["WorkRemindAction", "remindState", "remindId", "1"],
        "setTaskState": ["WorkTaskAction", "execState", "taskId", "4"],
        "setHolidayVisitState": ["WorkTaskAction", "visitState", "workDtlId", "1"],
        "setGroupTaskState": ["WorkTaskAction", "execState", "taskId", "4"]
    } [action],
    data = "action=" + action + "&staffId=" + staffId + "&" + array[1] + "=" + array[3] + "&" + array[2] + "=" + id,
    url = 'com.ai.esp.g3.workmanager.web.' + array[0],
    finish = action == "setRemindState" ? "已读": "已完成";
    if (confirm(meg)) {
        subRequest({
            action: url,
            data: data,
            f: function(data) {
                if (data.resultCode == 1) {
                    var obj = $(o).parent().clone();
                    obj.find("input[type=button]").remove();
                    obj.append('<span class="rightpink pink">' + finish + '</span>').appendTo($(o).parent().parent().next());
                    $(o).parent().remove();
                } else {
                    alert("更新失败");
                }
            }
        });
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
}

function stopClick() {
    var e = event || window.event;
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function showNextContent(obj) {
    scrollTop("groupdetails", 0);

    var next = $(obj).next();
    if (next.css("display") == "none") {
        $("div.bookimg", $(obj).parent()).removeClass("open");
        $("div", $(obj)).addClass("open");
        $(obj).siblings(".tit").next().css("display", "none");
    } else {
        $("div", $(obj)).removeClass("open");
    }
    next.slideToggle("fast");
}

function searchYuying() {
    var month = $("#month option").eq(0).html(),
    week = $("#week option").eq(0).html(),
    monthList = Calendar.getDateList(month, "m", 6),
    weekList = Calendar.getDateList(week, "w", 6),
    i = 0;
    for (i; i < 6; i++) {
        $("#month").append("<option>" + monthList[i] + "</option>");
        $("#week").append("<option>" + weekList[i] + "</option>");
    }

    var datetype = $("option:selected", $("#datetypeSel")).val(),
    type = datetype == "week" ? 2 : 4,
    selected = $("select[id=" + datetype + "]").find("option:selected").val(),
    json = {
        "yujing1": ["yujing1", "com.ai.esp.g3.bi.web.KpiAlarmManagerAction", "yujinggroup", "action=getMyCustKpiAlarms&staffId=24000020&periodType=" + type + "&kpiDate=2011-06-06"],
        "yujing2": ["yujing2", "com.ai.esp.g3.bi.web.KpiAlarmManagerAction", "yujingmember", "action=getMyMemberKpiAlarms&staffId=24000020&periodType=" + type + "&kpiDate=2011-06-13&memberType=3"],
        "yujing3": ["yujing3", "com.ai.esp.g3.bi.web.KpiAlarmManagerAction", "yujingmember", "action=getMyMemberKpiAlarms&staffId=24000020&periodType=" + type + "&kpiDate=2011-06-13&memberType=2"]
    },
    array = json[$("#yujingUL li.cur").attr("ul")];

    loadSearchList(array[0], array[1], array[2], array[3]);
}

function searchKPI() {
    var today = $("#textKPI").val() ? $("#textKPI").val() : $("#textKPI").attr("placeholder"),
    tomonth = today.substring(0, 6);
    // 用于获取当天或者当月的绩效
    if ($("ul.tabs li[ul=KPI1]").is("li.cur")) {
        loadSearchList("KPI1", "searchsingle", "KPIday", "", bindpercent);
    } else {
        loadSearchList("KPI2", "searchsingle", "KPImonth", "", bindpercent);
    }

    function bindpercent() {
        $("div.percent").each(function() {
            var percent = parseFloat($(this).attr("percent")),
            position = percent < 50 ? "-29px": "-43px",
            width = 75 * percent / 100;
            $("div", $(this)).css({
                "backgroundPosition": "left " + position,
                "width": width + "px"
            });
        });
    }
}

function searchmember() {
    var tel = $("#groupmemberSearch").val();
    subRequest({
        action: "com.ai.esp.g3.customer.web.MemberServiceAction",
        data: "action=getMemberBaseInfo&staffId=" + staffId + "&telphone=" + tel,
        f: function(data) {
            window.localStorage.setItem("groupmember", JSON.stringify(data)); // 完成数据查询后保持到缓存，下次进来的时候可以直接取到
            $("#groupmemberList").setTemplateURL("templates/tpl/groupmembersearch.html", null, {
                filter_data: false
            });
            $("#groupmemberList").processTemplate(data);
        },
        error: function() {
            alert("该手机号不存在");
        }
    });
}

function creatTips() {
    var p = $("<m class='tips'></m>").appendTo($(document.body)),
    width = self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height = self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    p.css({
        "top": (height / 2) - (p.height() / 2) + 'px',
        "left": (width / 2) - (p.width() / 2) + 'px'
    });

    var ul = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0],
    startX,
    startY,
    touchPostion;

    ul.addEventListener("touchstart",
    function(e) {
        e.preventDefault();

        scrollTop("group", 0);

        var tip = e.target.innerHTML;
        $("nav.vertical").css("background-color", "rgba(169,169,169,0.3)");
        $("m.tips").html(tip).show();
        searchGroup("#groupSearch", tip == "#" ? "": tip);

        var touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;

        $("nav li").each(function(i) {
            if ($(this).is($(e.target))) {
                touchPostion = i;
            }
        });
    },
    false);

    ul.addEventListener("touchmove",
    function(e) {
        e.preventDefault();
        var touch = e.touches[0],
        x = touch.pageX - startX,
        y = touch.pageY - startY,
        ra = y / 14,
        tip = touchPostion + ra >= 0 ? $("nav li").eq(touchPostion + ra).html() : "";
        $("m.tips").html(tip);

        searchGroup("#groupSearch", tip == "#" ? "": tip);
    },
    false);

    ul.addEventListener("touchend",
    function() {
        $("nav.vertical").css("background-color", "Transparent");
        $("m.tips").hide();
    },
    false);
}

function searchGroup(o, txt) {
    var val = txt ? txt.toLowerCase() : trim($(o).val().toLowerCase()),
    arg1,
    arg2,
    arg3;
    if (!txt) {
        $("#wrapper .horizontalslide div").removeClass("highlight");

        if (/\d/g.test(val)) {
            arg1 = "code";
            arg2 = "tel";
        } else if (/[a-z]/g.test(val)) {
            arg1 = "spell";
            arg2 = "jianpin";
        } else if (/[^x00-xff]/g.test(val)) { // 判断中文 + 符号
            arg1 = arg2 = "name";
        } else if (val) { // 解决android系统的退格的bug
            arg1 = $(o).attr("arg1");
            arg2 = $(o).attr("arg2");
        }
    } else {
        arg3 = "jianpin";
    }
    if (val) {
        $(o).attr({
            "arg1": arg1,
            "arg2": arg2
        });
    }

    $("#groupList li").each(function() {
        var that = $(this);
        that.removeClass("hide");
        if (!txt) {
            if (arg1) {
                if (that.attr(arg1).toLowerCase().indexOf(val) == -1 && that.attr(arg2).toLowerCase().indexOf(val) == -1) {
                    that.addClass("hide");
                }
            } else if (val != "") {
                that.addClass("hide");
            }
        } else {
            if (that.attr(arg3).toLowerCase().charAt(0) != val) {
                that.addClass("hide");
            }
        }
    });
}

function product(o, name, groupid, serviceId, groupname) {
    if (/(VPMN)/g.test(name)) {
        $(o).attr({
            "href": "templates/tpl/productlist.html",
            "json": "com.ai.esp.g3.businessopt.web.VNetServiceAction",
            "remote": "true",
            "params": "action=getPackageList&staffId=" + staffId + "&telphone=" + staffTel + "&groupNo=" + groupid + "&groupName=" + groupname + "&serviceNo=" + serviceId
        });
    } else {
        var params = "staffId=" + staffId + "&groupNo=" + groupid + "&groupName=" + groupname + "&packageName=" + name + "&myId=" + serviceId;
        product_load(o, name, params);
    }
}

function product_load(o, name, params) {
    var tpl = /(集团V网)/g.test(name) && "productVW" || /(集团彩铃)/g.test(name) && "productMMS" || "productOrder"; // 分别是集团V网，集团彩信和预约
    $(o).attr({
        "href": "templates/tpl/" + tpl + ".html",
        "json": "datas/json/blank.json",
        "params": params
    });
    if (tpl == "productMMS") {
        $(o).attr("func", "$('.iswitch').iphoneSwitch('on','','',{'switch_height': 28});");
    } else if (tpl == "productOrder") {
        $(o).attr("func", "$('input.dateselect[name=yuyue]').val('" + Calendar.today + "')");
    }
}

function takeBusiness(o, groupname, prodname, id, feeCode, groupNo) { // 集团V网，集团彩信业务办理
    var container = $(o).parent().prev(),
    tel = $("input[type=tel]", container).eq(0).val();
    if (tel) {
        if ($("select option:selected", container).val() == "deleteMMS") { // 删除用户
            if (confirm("您要将" + tel + "用户从" + groupname + "的" + prodname + "中删除吗？")) {
                // todo 应该只需要传入staffId和telephone，业务id通过不同的action里去写死
                if (prodname == "集团彩铃") {
                    deleteProduct("com.ai.esp.g3.businessopt.web.CRBTServiceAction", "action=removeCRBT&staffId=" + staffId + "&telphone=" + tel + "&businessCode=" + id);
                } else {
                    deleteProduct("com.ai.esp.g3.businessopt.web.VNetServiceAction", "action=removeVNet&staffId=" + staffId + "&telphone=" + tel + "&businessCode=" + id);
                }
            }
        } else { // 添加用户
            if (/(集团彩铃)/g.test(prodname)) {
                var istotal = $(".iswitch", container).attr("type").toLowerCase() == "on" ? 1 : 0;
                submit("com.ai.esp.g3.businessopt.web.CRBTServiceAction", "action=addCRBT&staffId=" + staffId + "&telphone=" + tel + "&businessCode=" + id + "&serviceNo=" + id + "&paymentType=" + istotal);
            } else if (/(VPMN)/g.test(prodname)) {
                var shortNo = $("input[type=tel]", container).eq(1).val();
                submit("com.ai.esp.g3.businessopt.web.VNetServiceAction", "action=addVNet&staffId=" + staffId + "&telphone=" + tel + "&businessCode=" + id + "&serviceNo=" + id + "&feeCode=" + feeCode + "&shortNumber=" + shortNo);
            } else {
                var data = {
                    "action": "createOrderAction",
                    "staffId": staffId,
                    "telphone": tel,
                    "customerCode": groupNo,
                    "serviceNo": id,
                    "customerName": encodeURI(groupname),
                    "prodName": encodeURI(prodname),
                    "preDate": $("input[type=text]", container).eq(0).val(),
                    "memberName": encodeURI($("input[type=text]", container).eq(1).val())
                };
                submit("com.ai.esp.g3.businessopt.web.PreOprtAction", data);
            }
        }
    } else {
        alert("您还未填写手机号码");
    }
    return false;
}

function deleteProduct(action, data) {
    subRequest({
        action: action,
        data: data,
        f: function(data) {
            if (data.resultCode == 1) {
                alert("删除成功");
            } else {
                if (data.resultDes) {
                    alert(data.resultDes);
                } else {
                    alert("删除失败");
                }
            }
        },
        title: "正在处理，请稍等…"
    });
}

function submit(action, data, params, o, isadd) {
    var success = 0;
    subRequest({
        action: action,
        data: data,
        f: function(data) {
            if (data.resultCode == 1) {
                alert("提交成功");
                if (params) {
                    success = 1;
                }
            } else {
                success = 2;
                alert("提交失败");
            }
        },
        title: "正在处理，请稍等…",
        func: function() {
            if (success == 1) {
                window.history.go( - 1);
                refresh(params);
            }
        },
        error: function() {
            alert("服务器超时，请检查网络");
        }
    });
}

function submitFollow(o, id, isadd, workid) {
    var action = isadd ? "createWorkNote": "updateWorkNoteByTrack",
    input = $(o).parent().prev().find("input"),
    textarea = $(o).parent().prev().find("textarea"),
    data = {
        "action": action,
        "staffId": staffId,
        "workPurpose": encodeURI(input.eq(0).val()),
        "workDate": input.eq(1).val(),
        "workContent": encodeURI(textarea.eq(0).val()),
        "workResult": encodeURI(input.eq(2).val()),
        "workTaskExecId": id
    };
    if (!isadd) {
        data["workNoteId"] = workid;
    }

    var params = {
        "container": "followUL",
        "json": "com.ai.esp.g3.workmanager.web.WorkNoteAction",
        "tpl": "followrefresh",
        "params": "action=getWorkNotesByTaskId&staffId=" + staffId + "&workTaskExecId=" + id,
        "dom": o,
        "isadd": isadd
    };
    submit("com.ai.esp.g3.workmanager.web.WorkNoteAction", data, params);
}

function submitBaifang(o, groupid, isadd, logId) {
    var action = isadd ? "createWorkNoteByCustomer": "updateWorkNote";
    /*         input = $(o).parent().prev().find("input"),
        textarea = $(o).parent().prev().find("textarea"),
        data = { "action": action, "staffId": staffId, "workPurpose": encodeURI(input.eq(1).val()), "logType": 11, "workDate": input.eq(2).val(), "workResult": encodeURI(input.eq(4).val()), "workContent": encodeURI(textarea.eq(0).val()), "groupName": encodeURI(input.eq(0).val()), "groupNo": groupid, "attachment": "info/111.jpg" };
    if (!isadd) {
        data["workNoteId"] = logId;
    }

    submit("com.ai.esp.g3.workmanager.web.WorkNoteAction", data);
*/
    showProgressDialog("图片上传中，请稍候...") var input = $(o).parent().prev().find("input[type=text]");
    var textarea = $(o).parent().prev().find("textarea");
    var workPurpose = encodeURI(input.eq(1).val());
    var logType = 11;
    var workDate = input.eq(2).val();
    var workResult = encodeURI(input.eq(4).val());
    var workContent = encodeURI(textarea.eq(0).val());
    var groupName = encodeURI(input.eq(0).val());
    var groupNo = groupid;
    var imageURI = encodeURI(input.eq(5).val());

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";

    var params = new Object();
    // params.action = "createCompeteInfo";
    params.staffId = staffId;
    params.groupNo = groupNo;
    params.logType = logType;
    params.workDate = workDate;
    params.workPurpose = workPurpose;
    params.workResult = workResult;
    params.workContent = workContent;

    if (!isadd) {
        params.workNoteId = logId;
    }

    options.params = params;

    var ft = new FileTransfer();
    function win(r) {
        dismissProgressDialog();
        //	    alert("Code = " + r.responseCode);
        //	    alert("Response = " + r.response);
        //	    alert("Sent = " + r.bytesSent);
        var result = eval('(' + r.response + ')');
        if (result.resultCode == 1) {
            alert("提交成功");
            window.history.go( - 1);
            var today = Calendar.today;
            refresh({
                "container": "bifangList",
                "json": "com.ai.esp.g3.workmanager.web.WorkNoteAction",
                "tpl": "baifangrefresh",
                "params": {
                    "action": "getWorkNoteByCustomerId",
                    "staffId": staffId,
                    "groupNo": groupNo,
                    "groupName": groupName,
                    "fromDate": today,
                    "toDate": today
                },
                "dom": o,
                "isadd": isadd
            });
        } else {
            alert("提交失败");
        }
    }

    ft.upload(imageURI, root + "com.ai.esp.g3.workmanager.web.WorkNoteAction?action=" + action, win, fail, options);
}

function submitOpponent(o, groupid, isadd, competitorsId) {
    var action = isadd ? "createCompeteInfo": "updateCompeteInfo";

    showProgressDialog("图片上传中，请稍候...") var input = $(o).parent().prev().find("input[type=text]");
    var textarea = $(o).parent().prev().find("textarea");
    var radio = $(o).parent().prev().find("span.highClass").html() == "电信" ? "01": "02";
    var competitors = encodeURI(radio);
    var title = encodeURI(input.eq(1).val());
    var desc = encodeURI(textarea.eq(0).val());
    var groupName = encodeURI(input.eq(0).val());
    var groupNo = groupid;
    var imageURI = input.eq(3).val();

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";

    var params = new Object();
    // params.action = "createCompeteInfo";
    params.competitors = competitors;
    params.title = title;
    params.desc = desc;
    params.groupName = groupName;
    params.groupNo = groupNo;

    if (!isadd) {
        params.competitorsId = competitorsId;
    }

    options.params = params;

    var ft = new FileTransfer();
    function win(r) {
        dismissProgressDialog();

        var result = eval('(' + r.response + ')');
        if (result.resultCode == 1) {
            alert("提交成功");
            window.history.go( - 1);
            refresh({
                "container": "opponentList",
                "json": "com.ai.esp.g3.customer.web.CompeteInfoServiceAction",
                "tpl": "opponentrefresh",
                "params": {
                    "action": "getCustomerCompeteInfos",
                    "staffId": staffId,
                    "groupCode": groupNo,
                    "groupName": groupName,
                    "competitors": 3
                },
                "dom": o,
                "isadd": isadd
            });
        } else {
            alert("提交失败");
        }
    }

    ft.upload(imageURI, root + "com.ai.esp.g3.customer.web.CompeteInfoServiceAction?action=" + action, win, fail, options);
}

function fail(error) {
    dismissProgressDialog();
    //alert("An error has occurred: Code = " = error.code);
    alert("提交失败");
}

function deleteEsop(data, action, id, type, refreshParams) {
    var today = Calendar.today;
    var options = {
        "worknote": {
            "container": "followUL",
            "json": "com.ai.esp.g3.workmanager.web.WorkNoteAction",
            "tpl": "followrefresh",
            "params": refreshParams
        },
        "opponent": {
            "container": "opponentList",
            "json": "com.ai.esp.g3.customer.web.CompeteInfoServiceAction",
            "tpl": "opponentrefresh",
            "params": refreshParams
        },
        "baifang": {
            "container": "bifangList",
            "json": "com.ai.esp.g3.workmanager.web.WorkNoteAction",
            "tpl": "baifangrefresh",
            "params": refreshParams + "&fromDate=" + today + "&toDate=" + today
        }
    }

    subRequest({
        action: action,
        data: "action=" + data + "&staffId=" + staffId + "&" + id,
        f: function(data) {
            if (data.resultCode == 1) {
                alert("删除成功");
            } else {
                alert("删除失败");
            }
        },
        title: "正在处理，请稍等…",
        func: function() {
            window.history.go( - 1);
            refresh(options[type]);
        }
    });
}

function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

function refresh(options) { // 刷新group里集团信息
    if (options.isadd) {
        $(options.dom).parent().prev().find("textarea,input[type=text]:not([readonly=readonly])").val("");
    }
    loadSearchList(options.container, options.json, options.tpl, options.params, '', window.location.hash.substring(1));
}

function addPosition(o, staffId, groupNo) {
    var f = function(position) {
        subRequest({
            action: "com.ai.esp.g3.customer.web.CustomerServiceAction",
            data: "action=uploadCustomerPosition&staffId=" + staffId + "&groupNo=" + groupNo + "&position=" + position,
            f: function(data) {
                if (data.resultCode == 1) {
                    $(o).prev().bind("click",
                    function() {
                        mapNavigation('d', position);
                    });
                    alert("位置信息上传成功");
                } else {
                    alert("位置信息上传失败");
                }
            },
            title: "正在上传，请稍等…"
        });
    };
    getLocation(f);
}

function setURL(name) {
    var hash = window.location.hash;
    $("a[name=" + name + "]").attr("href", hash);
}

// phonegap相关
function mainDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Main (id unique, data)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_group", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_mem", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_remind", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_yujing", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_notice", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_perfor", 1)'); // 隐藏绩效
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_own", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_text", 1)');
    tx.executeSql('INSERT INTO Main (id, data) VALUES ("ic_play", 1)');
    window.localStorage.setItem("main", 1); // 用于以后使用判断是否已经存在Main表
}

function queryDB(tx) {
    tx.executeSql('SELECT * FROM Main', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    var len = results.rows.length;
    $("#main .item").hide(); // 隐藏绩效
    if (len) {
        for (var i = 0; i < len; i++) {
            if (results.rows.item(i).data == 1) {
                $("#" + results.rows.item(i).id).show();
            }
        }
    }
}

function errorCB() {
    // alert("error");
}

function showFooter() {
    // 图标显示，优化可以生成json放入模板加载时进行加载
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(queryDB, errorCB);

    $("#footer").css("bottom", "-48px").removeClass("hide").animate({
        "bottom": 0
    });
    $("#wlanloginId").parent().attr("params", "action=getMyCustomers&staffId=" + staffId + "&reqDate=" + Calendar.today);
    $("#login").css("backgroundImage", "none");
}

function mainWitch() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM Main', [],
        function(tx, results) {
            var len = results.rows.length,
            obj;
            for (var i = 0; i < len; i++) {
                obj = $('#selectSearch #' + results.rows.item(i).id);
                if (results.rows.item(i).data == 0) {
                    obj.attr("type", "off").iphoneSwitch('off');
                } else {
                    obj.attr("type", "on").iphoneSwitch('on');
                }
            }
        });
    });
}

function saveMain() {
    var obj = $('#selectSearch .iswitch'),
    i,
    db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(function(tx) {
        for (i = 0; i < obj.length; i++) {
            tx.executeSql("update Main set data=? where id=?", [obj.eq(i).attr("type") == "on" ? 1 : 0, obj.eq(i).attr("id")]);
        }
    },
    errorCB, successCB);
}

function successCB() {
    alert("提交成功");
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100000);
    db.transaction(queryDB, errorCB);
    $('#n-2').doNavigation(); // 跳转回main.html
}

function showCostDetail(arrearsDetail, tel) {
    if (arrearsDetail) {
        var costArr = arrearsDetail.split("|"),
        detailArr,
        html = "";
        for (var i = 0; i < costArr.length; i++) {
            detailArr = costArr[i].split(",");
            html += "<div class='normalList'>" + detailArr[0].substring(0, 4) + "年" + detailArr[0].substring(5) + "月 ：<span>" + detailArr[1] + "元</span></div>";
        }
    }
    $("#qianfei_" + tel).html(html);
}

function imgAutoSize(imgD, FitWidth, FitHeight) {
    var image1 = new Image();
    image1.onload = function() {
        if (this.width > 0 && this.height > 0) {
            if (this.width / this.height >= FitWidth / FitHeight) {
                if (this.width > FitWidth) {
                    imgD.width = FitWidth;
                    imgD.height = (this.height * FitWidth) / this.width;
                } else {
                    imgD.width = this.width;
                    imgD.height = this.height;
                }
            } else {
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
    $(image1).show();
}

function showPic(o, url) {
    $(o).parent().find("img").attr("src", "http://192.168.0.85:8080/aiesp/business/" + url);
}

function scrollTop(id, time) {
    var scrollTransform = $("#" + id).find("div.scroll").children().eq(0).css("WebkitTransform"),
    scrollTop = trim(scrollTransform.substring(scrollTransform.lastIndexOf(',') + 1, scrollTransform.lastIndexOf(')')));
    $("div.current").scrollTo( - parseInt(scrollTop), time);
}