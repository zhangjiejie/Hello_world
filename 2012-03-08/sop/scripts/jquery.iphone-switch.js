/************************************************ 
*  jQuery iphoneSwitch plugin                   *
*                                               *
*  Author: Daniel LaBare                        *
*  Date:   2/4/2008                             *
************************************************/

jQuery.fn.iphoneSwitch = function(start_state, switched_on_callback, switched_off_callback, options) {

    var state = start_state == 'on' ? start_state : 'off';

    // define default settings
    var settings = {
        mouse_over: 'pointer',
        mouse_out: 'default',
        switch_on_container_path: 'themes/apple/img/iphone_switch_container.gif',
        switch_off_container_path: 'themes/apple/img/iphone_switch_container.gif',
        switch_path: 'themes/apple/img/iphone_switch.png',
        switch_height: 27,
        switch_width: 94
    };

    if (options) {
        jQuery.extend(settings, options);
    }

    // create the switch
    return this.each(function() {

        var container;
        var image;

        if ($(this).attr("type")) {
            state = $(this).attr("type").toLowerCase();
        }

        // make the container
        container = jQuery('<div class="iphone_switch_container" style="height:' + settings.switch_height + 'px; width:' + settings.switch_width + 'px; position: relative; overflow: hidden"></div>');

        // make the switch image based on starting state
        image = jQuery('<img class="iphone_switch" style="height:' + settings.switch_height + 'px; width:' + settings.switch_width + 'px; background-image:url(' + settings.switch_path + '); background-repeat:none; background-position:' + (state == 'on' ? 0 : -53) + 'px" src="' + (state == 'on' ? settings.switch_on_container_path : settings.switch_off_container_path) + '" /></div>');

        // insert into placeholder
        jQuery(this).html(jQuery(container).html(jQuery(image)));

        jQuery(this).mouseover(function() {
            jQuery(this).css("cursor", settings.mouse_over);
        });

        jQuery(this).mouseout(function() {
            jQuery(this).css("background", settings.mouse_out);
        });

        // click handling
        jQuery(this).bind("click", function() {
            if ($(this).attr("type")) {
                state = $(this).attr("type").toLowerCase();
            }
            if (state == 'on') {
                jQuery(this).find('.iphone_switch').animate({ backgroundPosition: -53 }, 300, function() {
                    jQuery(this).attr('src', settings.switch_off_container_path);
                    if (switched_off_callback) {
                        switched_off_callback();
                    }
                });
                state = 'off';
            }
            else {
                jQuery(this).find('.iphone_switch').animate({ backgroundPosition: 0 }, 300, function() {
                    if (switched_on_callback) {
                        switched_on_callback();
                    }
                });
                jQuery(this).find('.iphone_switch').attr('src', settings.switch_on_container_path);
                state = 'on';
            }
            $(this).attr("type", state);
        });
    });
};
