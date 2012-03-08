$(document).ready(function() {
    creatTips();

    $("nav ul").bind({
        "mousemove": function(e) {
            var tip = e.target.innerHTML;
            $("m.tips").html(tip);
            var o = "#groupSearch";
            searchGroup(o, e.target.innerHTML);
        },
        "mousedown": function(e) {
            $("nav.vertical").css("background-color", "rgba(169,169,169,0.3)");
            $("m.tips").html(e.target.innerHTML).show();
            var o = "#groupSearch";
            searchGroup(o, e.target.innerHTML);
        },
        "mouseup": function() {
            $("nav.vertical").css("background-color", "Transparent");
            $("m.tips").hide();
        }
    });
});

function creatTips() {
    var p = $("<m class='tips'></m>").appendTo($(document.body)),
        width = self.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height = self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    p.css({ "top": (height / 2) - (p.height() / 2) + 'px', "left": (width / 2) - (p.width() / 2) + 'px' });
}