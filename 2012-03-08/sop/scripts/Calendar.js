var Calendar = function() {
    var _d = new Date(),
        selectYear = _d.getFullYear(), //用于存储日历上当前选择的年份，默认为今天的年份
        selectMonth = _d.getMonth() + 1, //用于存储日历上当前选择的月份，默认为今天的月份
        selectDate = _d.getDate(), //用于存储日历上当前选择的日期，默认为今天的日期
        boolDay = false, //用于判断日历上的某一天是否是当月的日期
    //获取当天日期的string格式
        todayDate = selectYear + "-" + (selectMonth > 9 ? selectMonth : "0" + selectMonth) + "-" + (selectDate > 9 ? selectDate : "0" + selectDate),
        weekName = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"],
        selectedDay; //用于存储日历上当前选择的星期数

    return {
        today: todayDate, //返回当天日期的string格式
        init: function(el) { //对日历进行初始化，el不为空的话，日历会动态生成，但会占用更多的资源
            if (el) {
                Calendar.create(el);
            }

            $("#Calendar_year").html(selectYear + "年");
            $("#Calendar_month").html(selectMonth + "月");
            $("#yearPrev").parent().bind("click", { d: "Calendar_year", inc: -1 }, Calendar.change);
            $("#yearNext").parent().bind("click", { d: "Calendar_year", inc: 1 }, Calendar.change);
            $("#monthPrev").parent().bind("click", { d: "Calendar_month", inc: -1 }, Calendar.change);
            $("#monthNext").parent().bind("click", { d: "Calendar_month", inc: 1 }, Calendar.change);

            Calendar.change();

            var html = "<li remote='true' href='templates/tpl/jobwarning.html' cachekey='jobwarning' json='com.ai.esp.g3.workmanager.web.WorkRemindAction' params='action=getWorkReminds&staffId=" + staffId + "&remindState=-1&reqDate=" + todayDate + "'><a>日程提醒&nbsp;<span class='red'>0</span></a></li>" +
                       "<li remote='true' href='templates/tpl/mytask.html' cachekey='mytask' json='com.ai.esp.g3.workmanager.web.WorkTaskAction' params='action=getWorkTasksByDay&staffId=" + staffId + "&taskState=-1&reqDate=" + todayDate + "'><a>我的任务&nbsp;<span class='blue'>0</span></a></li>";
            $("#mycalendarList").html(html).attr("date", todayDate);
        },
        create: function(el) { //动态生成日历，放置在id为el的div内
            var head, content, html, i, j, that = this;

            head = '<div id="divhead"><table><tr><td><div id="yearPrev" ></div></td><td id="tdYear"><span id="Calendar_year"></span></td><td><div id="yearNext" ></div></td>' +
			   '<td><div id="monthPrev" ></div></td><td id="tdMonth"><span id="Calendar_month"></span></td><td><div id="monthNext" ></div></td></tr></table></div>';

            content = '<div id="divcontent"><table cellspacing="0" id="calendarTable"><thead><tr>';
            for (i = 0; i < weekName.length; i++) {
                content += '<th>' + weekName[i] + '</th>';
            }
            content += '</tr></thead><tbody>'
            for (i = 0; i < 6; i++) {
                content += '<tr>';
                for (j = 0; j < 7; j++) {
                    content += '<td><a></a></td>';
                }
                content += '</tr>';
            }
            content += '</tbody></table></div>';

            html = head + content;
            $("#" + el).append(html);
        },
        change: function(event) { //日历中年份月份选择的改变，或者初始化的时候，进行日期和数据的绑定
            var d, inc;
            if (event) {
                d = event.data.d;
                inc = event.data.inc;
            }
            if (inc) {
                if (d == "Calendar_year") {
                    selectYear += inc;
                }
                else {
                    selectMonth += inc;
                    if (selectMonth > 12 || selectMonth < 1) {
                        selectYear = selectYear + (selectMonth < 1 ? selectMonth - 1 : selectMonth) % 12;
                        selectMonth = selectMonth < 1 ? 12 : 1;
                        $("#Calendar_year").html(selectYear + "年");
                    }
                }
                $("#" + d).html(d == "Calendar_year" ? selectYear + "年" : selectMonth + "月");
            }
            var dateArray = Calendar.getDateArray(selectYear, selectMonth - 1);
            Calendar.show(dateArray); //绑定时间
            Calendar.getJson(dateArray, Calendar.update); //绑定数据
        },
        show: function(dateArray) { //对日历表格中的每个td进行日期和样式的绑定
            $("#calendarTable tbody td").removeClass("today").removeClass("selected").find(".hasschedule").remove();
            $("#calendarTable tbody td a").each(function(i) {
                var date = dateArray[i].substring(dateArray[i].lastIndexOf("-") + 1),
                td = $(this).parent();
                $(this).removeClass("padding").attr({ "date": dateArray[i] }).html(date);
                if (!Calendar.checkDate(date)) {
                    $(this).addClass("padding");
                }
                if (dateArray[i] == todayDate) {
                    td.addClass("today");
                }
            });
            dateArray = [];
        },
        update: function(json) { //数据获取成功后的绑定函数
            $("#calendarTable tbody td a").each(function() {
                var d = $(this).attr("date"), s = json[d] ? json[d] : [0, 0], td = $(this).parent();
                if (d == todayDate) {
                    $("#mycalendarList span.red").html(s[0]);
                    $("#mycalendarList span.blue").html(s[1]);
                }
                if (json[d]) {
                    var a = "<div class=hasschedule>";
                    if (s[0]) {
                        a += "<div class='note'></div>";
                    }
                    if (s[1]) {
                        a += "<div class='active'></div>";
                    }
                    td.append(a += "</div>");
                    var schedule = $("div.hasschedule", td);
                    if (schedule.children().length == 2) {
                        schedule.css("marginLeft", "10px");
                    }
                }
                td.bind("click", { count: s }, Calendar.loadCalendarList);
            });
        },
        getDateArray: function(y, m) { //获取当前这个月需要显示在日历中的日期的数组
            var firstDay = new Date(y, m, 1),
            nextFirstDay = new Date(y, m + 1, 1),
            lastDay = new Date(nextFirstDay.getTime() - 1000 * 60 * 60 * 24).getDate(),
            prevLastDay = new Date(firstDay.getTime() - 1000 * 60 * 60 * 24).getDate(),
            prevCount = firstDay.getDay() == 0 && 6 || firstDay.getDay() == 1 && 7 || firstDay.getDay() - 1,
            dataArray = [], i
            prevMonth = selectMonth - 1 == 0 ? 12 : selectMonth - 1,
            prevYear = selectMonth - 1 == 0 ? selectYear - 1 : selectYear,
            nextMonth = selectMonth + 1 == 13 ? 1 : selectMonth + 1,
            nextYear = selectMonth + 1 == 13 ? selectYear + 1 : selectYear;

            for (i = prevLastDay - prevCount + 1; i <= prevLastDay; i++) {
                dataArray.push(prevYear + "-" + Calendar.getDateString(prevMonth) + "-" + i);
            }
            for (i = 1; i <= lastDay; i++) {
                dataArray.push(selectYear + "-" + Calendar.getDateString(selectMonth) + "-" + Calendar.getDateString(i));
            }
            var lenght = dataArray.length;
            for (i = lenght; i <= 42; i++) {
                dataArray.push(nextYear + "-" + Calendar.getDateString(nextMonth) + "-" + Calendar.getDateString(i - lenght + 1));
            }

            return dataArray;
        },
        checkDate: function(arrDay) { //判断某个日期是否是当月的，因为日历中会显示当月日期和一部分的前一个月和后一个月的日期
            if (arrDay == 1) {
                boolDay = !boolDay;
            }
            return boolDay;
        },
        getDateString: function(i) { //日期中的月份和日如果是一位的，则前面加个0
            return i > 9 ? i : "0" + i;
        },
        getJson: function(dateArray, f) { //获取当前月中的提醒数和任务数的数据
            var fromdate = dateArray[0],
                todate = dateArray[dateArray.length - 1],
                data = "action=getScheduleIntervalRemind&staffId=" + staffId + "&fromDate=" + fromdate + "&toDate=" + todate;

            $.sendRequest({
                url: 'com.ai.esp.g3.workmanager.web.ScheduleManagerAction',
                data: data,
                success: function(data) {
                    f(data);
                },
                error: function(result) {
                }
            });

            dateArray = [];
        },
        loadCalendarList: function(event) { //点击某一天时，调用的函数，包括样式改变和任务提醒数的显示
            $("#calendarTable td").removeClass("selected");
            $(this).addClass("selected");
            var date = $(this).find("a").attr("date");
            $("#mycalendarList li").eq(0).attr({ "href": "templates/tpl/jobwarning.html", "cachekey": "jobwarning", "params": "action=getWorkReminds&staffId=" + staffId + "&remindState=-1&reqDate=" + date }).find("span.red").html(event.data.count[0])
            $("#mycalendarList li").eq(1).attr({ "href": "templates/tpl/mytask.html", "cachekey": "mytask", "params": "action=getWorkTasksByDay&staffId=" + staffId + "&taskState=-1&reqDate=" + date }).find("span.blue").html(event.data.count[1]);
            $("#mycalendarList").attr("date", date);
        },
        getDateList: function(date, type, num) { //通过某个日期，日期类型（周，月）及获取往前日期的数量，来获取往前的几个日期，用于预警任务的日期下拉框
            var list = [];
            if (date && num) {
                var year = parseInt(date.substring(0, 4), 10),
        	        month = parseInt(date.substring(5, 7), 10),
        	        day = parseInt(date.substring(8, 10), 10);
                if (type == "m") {
                    for (var i = 0; i < num; i++) {
                        var resultMonth = month - (i + 1);
                        list.push((resultMonth > 0 ? year : year - 1) + "-" + Calendar.getDateString(resultMonth > 0 ? resultMonth : resultMonth + 12) + "-01");
                    }
                }
                else if (type == "w") {
                    for (var i = 0; i < num; i++) {
                        var resultWeek = new Date(new Date(date).getTime() - (i + 1) * 7 * 1000 * 60 * 60 * 24);
                        list.push(resultWeek.getFullYear() + "-" + Calendar.getDateString(resultWeek.getMonth() + 1) + "-" + Calendar.getDateString(resultWeek.getDate()));
                    }
                }
            }
            return list;
        },
        changeSomeDay: function(date) { //更新某一天的任务提醒数，一般用于任务提醒设置完成已读后执行
            selectedDay = date;
            Calendar.getJson([date], Calendar.updateSomeDay);
        },
        updateSomeDay: function(json) { //完成获取数据后的该天数据绑定
            var s = json[selectedDay] ? json[selectedDay] : [0, 0],
    			that = $("#calendarTable tbody td a[date=" + selectedDay + "]"),
            	td = that.parent();
            $("div.hasschedule", td).remove();
            if (json[selectedDay]) {
                var a = "<div class=hasschedule>";
                if (s[0]) {
                    a += "<div class='note'></div>";
                }
                if (s[1]) {
                    a += "<div class='active'></div>";
                }
                td.append(a += "</div>");
                var schedule = $("div.hasschedule", td);
                if (schedule.children().length == 2) {
                    schedule.css("marginLeft", "10px");
                }
            }

            if ($("#mycalendarList").attr("date") == selectedDay) {
                $("#mycalendarList li").eq(0).find("span.red").html(s[0])
                $("#mycalendarList li").eq(1).find("span.blue").html(s[1]);
            }
            td.unbind("click").bind("click", { count: s }, Calendar.loadCalendarList);
        }
    };
} ();