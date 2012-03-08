/**
map, like java.util.HashMap
*/
(function($) {
    $.NBMap = function(dat) {
        var _data = dat ? dat : {};
        var _that = this;
        this.put = function(key, value) {
            _data[key] = value;
            return _that;
        };
        this.get = function(key) {
            return _data[key];
        }
        this.remove = function(key) {
            delete _data[key];
        };
        this.data = function() {
            return _data;
        };
    };
})(jQuery);
/**
changed from iScroll 4 lite beta
*/
(function($) {
    var has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(), hasTouch = 'ontouchstart' in window, isIDevice = (/iphone|ipad|android/gi)
			.test(navigator.appVersion), RESIZE_EV = 'onorientationchange' in window ? 'orientationchange'
			: 'resize', START_EV = hasTouch ? 'touchstart' : 'mousedown', MOVE_EV = hasTouch ? 'touchmove'
			: 'mousemove', END_EV = hasTouch ? 'touchend' : 'mouseup', CANCEL_EV = hasTouch ? 'touchcancel'
			: 'mouseup', trnOpen = 'translate' + (has3d ? '3d(' : '('), trnClose = has3d ? ',0)'
			: ')', m = Math;
    var NBScroll = function(el, options) {
        var that = this, doc = document, i;
        that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
        that.wrapper.style.overflow = 'hidden';
        that.scroller = that.wrapper.children[0];
        that.scroller.style.cssText += '-webkit-transition-property:-webkit-transform;-webkit-transform-origin:0 0;-webkit-transform:' + trnOpen + '0,0' + trnClose;
        that.scroller.style.cssText += '-webkit-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-webkit-transition-duration:0;';
        that.options = {
            hScroll: false,
            vScroll: true,
            bounce: has3d,
            bounceLock: false,
            momentum: has3d,
            lockDirection: true,
            hScrollbar: false,
            vScrollbar: true,
            fixedScrollbar: false,
            fadeScrollbar: (isIDevice && has3d) || !hasTouch,
            hideScrollbar: isIDevice || !hasTouch,
            scrollbarClass: '',
            onScrollStart: null,
            onScrollEnd: null
        };
        for (i in options) {
            that.options[i] = options[i];
        }
        that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
        that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
        that.refresh();
        that._bind(RESIZE_EV, window);
        that._bind(START_EV);
    };
    NBScroll.prototype = {
        x: 0,
        y: 0,
        handleEvent: function(e) {
            var that = this;
            switch (e.type) {
                case START_EV:
                    that._start(e);
                    break;
                case MOVE_EV:
                    that._move(e);
                    break;
                case END_EV:
                case CANCEL_EV:
                    that._end(e);
                    break;
                case 'webkitTransitionEnd':
                    that._transitionEnd(e);
                    break;
                case RESIZE_EV:
                    that._resize();
                    break;
            }
        },
        _scrollbar: function(dir) {
            var that = this, doc = document, bar;

            if (!that[dir + 'Scrollbar']) {
                if (that[dir + 'ScrollbarWrapper']) {
                    that[dir + 'ScrollbarIndicator'].style.webkitTransform = '';
                    that[dir + 'ScrollbarWrapper'].parentNode
							.removeChild(that[dir + 'ScrollbarWrapper']);
                    that[dir + 'ScrollbarWrapper'] = null;
                    that[dir + 'ScrollbarIndicator'] = null;
                }
                return;
            }

            if (!that[dir + 'ScrollbarWrapper']) {
                // Create the scrollbar wrapper
                bar = doc.createElement('div');
                if (that.options.scrollbarClass) {
                    bar.className = that.options.scrollbarClass
							+ dir.toUpperCase();
                } else {
                    bar.style.cssText = 'position:absolute;z-index:100;'
							+ (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:7px'
									: 'width:6px;bottom:7px;top:2px;right:1px');
                }
                bar.style.cssText += 'pointer-events:none;-webkit-transition-property:opacity;-webkit-transition-duration:'
						+ (that.options.fadeScrollbar ? '350ms' : '0')
						+ ';overflow:hidden;opacity:'
						+ (that.options.hideScrollbar ? '0' : '1');

                that.wrapper.appendChild(bar);
                that[dir + 'ScrollbarWrapper'] = bar;
                bar = doc.createElement('div');
                if (!that.options.scrollbarClass) {
                    bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-webkit-background-clip:padding-box;-webkit-box-sizing:border-box;'
							+ (dir == 'h' ? 'height:100%;-webkit-border-radius:4px 3px;'
									: 'width:100%;-webkit-border-radius:3px 4px;');
                }
                bar.style.cssText += 'pointer-events:none;-webkit-transition-property:-webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-webkit-transition-duration:0;-webkit-transform:'
						+ trnOpen + '0,0' + trnClose;

                that[dir + 'ScrollbarWrapper'].appendChild(bar);
                that[dir + 'ScrollbarIndicator'] = bar;
            }

            if (dir == 'h') {
                that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
                that.hScrollbarIndicatorSize = m.max(m
						.round(that.hScrollbarSize * that.hScrollbarSize
								/ that.scrollerW), 8);
                that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize
						+ 'px';
                that.hScrollbarMaxScroll = that.hScrollbarSize
						- that.hScrollbarIndicatorSize;
                that.hScrollbarProp = that.hScrollbarMaxScroll
						/ that.maxScrollX;
            } else {
                that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
                that.vScrollbarIndicatorSize = m.max(m
						.round(that.vScrollbarSize * that.vScrollbarSize
								/ that.scrollerH), 8);
                that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize
						+ 'px';
                that.vScrollbarMaxScroll = that.vScrollbarSize
						- that.vScrollbarIndicatorSize;
                that.vScrollbarProp = that.vScrollbarMaxScroll
						/ that.maxScrollY;
            }
            that._indicatorPos(dir, true);
        },
        _resize: function() {
            var that = this;
            setTimeout(function() {
                that.refresh();
            }, 0);
        },

        _pos: function(x, y) {
            var that = this;
            that.x = that.hScroll ? x : 0;
            that.y = that.vScroll ? y : 0;
            that.scroller.style.webkitTransform = trnOpen + that.x + 'px,'
					+ that.y + 'px' + trnClose;
            //that._indicatorPos('h');
            that._indicatorPos('v');
        },

        _indicatorPos: function(dir, hidden) {
            var that = this, pos = dir == 'h' ? that.x : that.y;
            if (!that[dir + 'Scrollbar']) {
                return;
            }

            pos = that[dir + 'ScrollbarProp'] * pos;

            if (pos < 0) {
                pos = that.options.fixedScrollbar ? 0 : pos + pos * 3;
                if (that[dir + 'ScrollbarIndicatorSize'] + pos < 9)
                    pos = -that[dir + 'ScrollbarIndicatorSize'] + 8;
            } else if (pos > that[dir + 'ScrollbarMaxScroll']) {
                pos = that.options.fixedScrollbar ? that[dir
						+ 'ScrollbarMaxScroll'] : pos
						+ (pos - that[dir + 'ScrollbarMaxScroll']) * 3;
                if (that[dir + 'ScrollbarIndicatorSize']
						+ that[dir + 'ScrollbarMaxScroll'] - pos < 9)
                    pos = that[dir + 'ScrollbarIndicatorSize']
							+ that[dir + 'ScrollbarMaxScroll'] - 8;
            }
            that[dir + 'ScrollbarWrapper'].style.webkitTransitionDelay = '0';
            that[dir + 'ScrollbarWrapper'].style.opacity = hidden
					&& that.options.hideScrollbar ? '0' : '1';
            that[dir + 'ScrollbarIndicator'].style.webkitTransform = trnOpen
					+ (dir == 'h' ? pos + 'px,0' : '0,' + pos + 'px')
					+ trnClose;
        },

        _transitionTime: function(time) {
            var that = this;

            time += 'ms';
            that.scroller.style.webkitTransitionDuration = time;

            if (that.hScrollbar) {
                that.hScrollbarIndicator.style.webkitTransitionDuration = time;
            }
            if (that.vScrollbar) {
                that.vScrollbarIndicator.style.webkitTransitionDuration = time;
            }
        },

        _start: function(e) {
            $(':focus').blur();
            var that = this, point = hasTouch ? e.changedTouches[0] : e, matrix;
            that.moved = false;
            setTimeout(function() {
                that.refresh();
            }, 0);
            if (!/^(input|select|textarea)$/.test(e.target.nodeName.toLowerCase())) {
                e.preventDefault();
            }

            that.moved = false;
            that.distX = 0;
            that.distY = 0;
            that.absDistX = 0;
            that.absDistY = 0;
            that.dirX = 0;
            that.dirY = 0;
            that.returnTime = 0;
            that._transitionTime(0);
            if (that.options.momentum) {
                matrix = new WebKitCSSMatrix(window.getComputedStyle(
						that.scroller, null).webkitTransform);
                if (matrix.m41 != that.x || matrix.m42 != that.y) {
                    that._unbind('webkitTransitionEnd');
                    that._pos(matrix.m41, matrix.m42);
                }
            }

            that.scroller.style.webkitTransitionTimingFunction = 'cubic-bezier(0.33,0.66,0.66,1)';
            if (that.hScrollbar) {
                that.hScrollbarIndicator.style.webkitTransitionTimingFunction = 'cubic-bezier(0.33,0.66,0.66,1)';
            }
            if (that.vScrollbar) {
                that.vScrollbarIndicator.style.webkitTransitionTimingFunction = 'cubic-bezier(0.33,0.66,0.66,1)';
            }
            that.startX = that.x;
            that.startY = that.y;
            that.pointX = point.pageX;
            that.pointY = point.pageY;

            that.startTime = e.timeStamp;

            if (that.options.onScrollStart) {
                that.options.onScrollStart.call(that);
            }
            that._bind(MOVE_EV);
            that._bind(END_EV);
            that._bind(CANCEL_EV);
        },

        _move: function(e) {
            if (hasTouch && e.touches.length > 1) {
                return;
            }

            var that = this, point = hasTouch ? e.changedTouches[0] : e, deltaX = point.pageX
					- that.pointX, deltaY = point.pageY - that.pointY, newX = that.x
					+ deltaX, newY = that.y + deltaY;
            e.preventDefault();
            that.pointX = point.pageX;
            that.pointY = point.pageY;
            if (newX > 0 || newX < that.maxScrollX) {
                newX = that.options.bounce ? that.x + (deltaX / 2.4)
						: newX >= 0 || that.maxScrollX >= 0 ? 0
								: that.maxScrollX;
            }
            if (newY > 0 || newY < that.maxScrollY) {
                newY = that.options.bounce ? that.y + (deltaY / 2.4)
						: newY >= 0 || that.maxScrollY >= 0 ? 0
								: that.maxScrollY;
            }
            if (that.absDistX < 4 && that.absDistY < 4) {
                that.distX += deltaX;
                that.distY += deltaY;
                that.absDistX = m.abs(that.distX);
                that.absDistY = m.abs(that.distY);
                return;
            }
            if (that.options.lockDirection) {
                if (that.absDistX > that.absDistY + 3) {
                    newY = that.y;
                    deltaY = 0;
                } else if (that.absDistY > that.absDistX + 3) {
                    newX = that.x;
                    deltaX = 0;
                }
            }
            that.moved = true;
            that._pos(newX, newY);
            that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

            if (e.timeStamp - that.startTime > 300) {
                that.startTime = e.timeStamp;
                that.startX = that.x;
                that.startY = that.y;
            }
        },

        _end: function(e) {
            if (hasTouch && e.touches.length != 0) {
                return;
            }
            var that = this, point = hasTouch ? e.changedTouches[0] : e, target, ev, momentumX = {
                dist: 0,
                time: 0
            }, momentumY = {
                dist: 0,
                time: 0
            }, duration = e.timeStamp - that.startTime, newPosX = that.x, newPosY = that.y, newDuration;
            that._unbind(MOVE_EV);
            that._unbind(END_EV);
            that._unbind(CANCEL_EV);

            if (!that.moved) {
                if (hasTouch) {
                    that.doubleTapTimer = null;

                    target = point.target;
                    while (target.nodeType != 1) {
                        target = target.parentNode;
                    }

                    ev = document.createEvent('MouseEvents');
                    ev.initMouseEvent('click', true, true, e.view, 1,
							point.screenX, point.screenY, point.clientX,
							point.clientY, e.ctrlKey, e.altKey, e.shiftKey,
							e.metaKey, 0, null);
                    ev._fake = true;
                    target.dispatchEvent(ev);
                }
                that._resetPos();
                return;
            }

            if (duration < 300 && that.options.momentum) {
                momentumX = newPosX ? that._momentum(newPosX - that.startX,
						duration, -that.x, that.scrollerW - that.wrapperW
								+ that.x, that.options.bounce ? that.wrapperW
								: 0) : momentumX;
                momentumY = newPosY ? that._momentum(newPosY - that.startY,
						duration, -that.y,
						(that.maxScrollY < 0 ? that.scrollerH - that.wrapperH
								+ that.y : 0),
						that.options.bounce ? that.wrapperH : 0) : momentumY;

                newPosX = that.x + momentumX.dist;
                newPosY = that.y + momentumY.dist;

                if ((that.x > 0 && newPosX > 0)
						|| (that.x < that.maxScrollX && newPosX < that.maxScrollX))
                    momentumX = {
                        dist: 0,
                        time: 0
                    };
                if ((that.y > 0 && newPosY > 0)
						|| (that.y < that.maxScrollY && newPosY < that.maxScrollY))
                    momentumY = {
                        dist: 0,
                        time: 0
                    };
            }

            if (momentumX.dist || momentumY.dist) {
                newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);
                that.scrollTo(newPosX, newPosY, newDuration);
                return;
            }

            that._resetPos(200);
        },

        _resetPos: function(time) {
            var that = this, resetX = that.x, resetY = that.y;

            if (that.x >= 0) {
                resetX = 0;
            } else if (that.x < that.maxScrollX) {
                resetX = that.maxScrollX;
            }
            if (that.y >= 0 || that.maxScrollY > 0) {
                resetY = 0;
            } else if (that.y < that.maxScrollY) {
                resetY = that.maxScrollY;
            }
            if (resetX == that.x && resetY == that.y) {
                if (that.moved) {
                    if (that.options.onScrollEnd) {
                        that.options.onScrollEnd.call(that);
                    }
                    that.moved = false;
                }

                if (that.hScrollbar && that.options.hideScrollbar) {
                    that.hScrollbarWrapper.style.webkitTransitionDelay = '30ms';
                    that.hScrollbarWrapper.style.opacity = '0';
                }
                if (that.vScrollbar && that.options.hideScrollbar) {
                    that.vScrollbarWrapper.style.webkitTransitionDelay = '30ms';
                    that.vScrollbarWrapper.style.opacity = '0';
                }

                return;
            }
            if (time) {
                that.scroller.style.webkitTransitionTimingFunction = 'cubic-bezier(0.33,0.0,0.33,1)';
                if (that.hScrollbar) {
                    that.hScrollbarIndicator.style.webkitTransitionTimingFunction = 'cubic-bezier(0.33,0.0,0.33,1)';
                }
                if (that.vScrollbar) {
                    that.vScrollbarIndicator.style.webkitTransitionTimingFunction = 'cubic-bezier(0.33,0.0,0.33,1)';
                }
            }

            that.scrollTo(resetX, resetY, time || 0);
        },

        _transitionEnd: function(e) {
            var that = this;

            if (e) {
                e.stopPropagation();
            }
            that._unbind('webkitTransitionEnd');

            that._resetPos(that.returnTime);
            that.returnTime = 0;
        },
        _momentum: function(dist, time, maxDistUpper, maxDistLower, size) {
            var that = this, deceleration = 0.0006, speed = m.abs(dist) / time, newDist = (speed * speed)
					/ (2 * deceleration), newTime = 0, outsideDist = 0;
            if (dist > 0 && newDist > maxDistUpper) {
                outsideDist = size / (6 / (newDist / speed * deceleration));
                maxDistUpper = maxDistUpper + outsideDist;
                that.returnTime = 800 / size * outsideDist + 100;
                speed = speed * maxDistUpper / newDist;
                newDist = maxDistUpper;
            } else if (dist < 0 && newDist > maxDistLower) {
                outsideDist = size / (6 / (newDist / speed * deceleration));
                maxDistLower = maxDistLower + outsideDist;
                that.returnTime = 800 / size * outsideDist + 100;
                speed = speed * maxDistLower / newDist;
                newDist = maxDistLower;
            }
            newDist = newDist * (dist < 0 ? -1 : 1);
            newTime = speed / deceleration;

            return {
                dist: newDist,
                time: m.round(newTime)
            };
        },
        _bind: function(type, el) {
            (el || this.scroller).addEventListener(type, this, false);
        },
        _unbind: function(type, el) {
            (el || this.scroller).removeEventListener(type, this, false);
        },
        refresh: function() {
            var that = this;
            //that.wrapperW = that.wrapper.clientWidth;
            that.wrapperH = that.wrapper.clientHeight;
            //that.scrollerW = that.scroller.offsetWidth;
            that.scrollerH = that.scroller.offsetHeight;
            //that.maxScrollX = that.wrapperW - that.scrollerW;
            that.maxScrollY = that.wrapperH - that.scrollerH;

            that.dirX = 0;
            that.dirY = 0;
            that._transitionTime(0);
            //that.hScroll = that.options.hScroll && that.maxScrollX < 0;
            that.vScroll = that.options.vScroll
					&& (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);
            //that.hScrollbar = that.hScroll && that.options.hScrollbar;
            that.vScrollbar = that.vScroll && that.options.vScrollbar
					&& that.scrollerH > that.wrapperH;
            //that._scrollbar('h');
            that._scrollbar('v');
            that._resetPos();
        },
        scrollTo: function(x, y, time, relative) {
            var that = this;

            if (relative) {
                x = that.x - x;
                y = that.y - y;
            }

            time = !time
					|| (m.round(that.x) == m.round(x) && m.round(that.y) == m
							.round(y)) ? 0 : time;
            that.moved = true;
            if (time) {
                that._bind('webkitTransitionEnd');
            }
            that._transitionTime(time);
            that._pos(x, y);
            if (!time) {
                setTimeout(function() {
                    that._transitionEnd();
                }, 0);
            }
        }
    };
    $(document).ready(function() {
        var map = new $.NBMap(), key = 'sckey';
        $.fn.scrollTo = function(position, time) { //zhengxin 增加滚动时间参数，用到的多为0秒
            var s = map.get(this.attr(key)),
            	t = (!time && 0 != time) ? 250 : time;
            if (s) {
                s.scrollTo(0, position, t);
            }
            return this;
        };
        $.fn.disScroll = function() {
            map.remove(this.attr(key));
            return this;
        };
        $.fn.scroll = function(options) {
            if (map.get(this.attr(key))) {
                return this;
            }
            this.wrapInner('<div></div>');
            var scrolls = this.find('.scroll');
            var nbScroll = null;
            if (scrolls.length == 0) {
                nbScroll = new NBScroll(this.get(0), options);
            } else {
                nbScroll = new NBScroll(scrolls[0], options);
            }
            var skkey = key + new Date().getTime();
            map.put(skkey, nbScroll);
            this.attr(key, skkey);
            return this;
        };
        $.fn.hscroll = function(options) { //zhengxin ????????????????
            new NBScroll(this.attr("id"), options);
            return this;
        }
    });
})(jQuery);


(function($) {
    $.NBSection = function(opts) {
        var newPageCount = 1, hist = {}, backSelector = '.back', process = opts.process, _goBack = true;
        $("footer a").each(function() {
            hist[$(this).attr("name")] = [];
        });
        $.fn.doNavigation = function(goingBack, func) {
            $(':focus').blur();
            var fromPage = $('section>.current');
            var toPage = this;
            if (toPage.is('.current')) {
                return this;
            }
            var toStart = 'translateX(' + (goingBack ? '-' : '') + window.innerWidth + 'px)';
            var fromEnd = 'translateX(' + (goingBack ? '100%' : '-100%') + ')';
            toPage.css("webkitTransform", toStart).addClass("current");
            function navigationEndHandler() {
                fromPage.removeClass('current').unbind('webkitTransitionEnd');
                setHash(toPage);
                if (fromPage.attr('remove')) {
                    fromPage.disScroll().remove();
                }
                if (func) {
                    try {
                        var f = eval(func);
                        if (typeof (f) == 'function') {
                            f.call();
                        }
                    } catch (e) { }
                }
            }
            setTimeout(function() {
                fromPage.css("webkitTransform", fromEnd).bind('webkitTransitionEnd', navigationEndHandler);
                toPage.css("webkitTransform", "translateX(0%)");  //toEnd
            }, 10);
            if (goingBack) {
                //remote from history
                hist[$("footer a.current").attr("name")].shift();

            } else {

                if (toPage.attr("id") != $("footer a.current").attr("href").substring(1)) {
                    if (!fromPage.attr('remove')) {
                        addToHistory(toPage);
                    } else {
                        //flag
                        _goBack = false;
                    }
                }
            }
            $("footer a.current").attr("href", "#" + toPage.attr("id"));
            return this;
        };
        var addToHistory = function(page) {
            //add has to history '[hist]'
            hist[$("footer a.current").attr("name")].unshift({ page: page, hash: '#' + page.attr('id'), id: page.attr('id') });
        };
        var insertPage = function(node, options) {
            var $node = $(node);
            var $ref = options.referrer,
			    func = $ref.attr("func");
            var remove = $ref.attr('remove');
            if (remove) {
                $node.attr('remove', remove);
            }
            $node.attr('id', 'n-' + (++newPageCount)).appendTo('section').doNavigation(false, func).scroll(); //zhengxin ???
            $ref.attr('rhref', $ref.attr('href')).attr('href', '#' + 'n-' + (newPageCount));
        };
        var setHash = function(node) {
            var divId = node.attr('id');
            if (!divId) {
                node.attr('id', divId = 'n-' + newPageCount);
            }
            location.hash = divId;
        };
        var goBack = function() {
            if (_goBack) {
                var list = hist[$("footer a.current").attr("name")];
                if (location.hash != list[0].hash) {
                    if (list.length > 1) {
                        list[1].page.doNavigation(true);
                    }
                }
            } else {
                _goBack = true;
            }
        };
        var showPageByHref = function(href, options) {
            if (/^#/.test(href)) {
                var page = $(href);
                if (page.length != 0) {
                    page.doNavigation();
                }
            } else {
                var doPage = function() {
                    $.ajax({
                        url: href,
                        cache: false,
                        dataType: 'text',
                        success: function(node) {
                            insertPage(node, options);
                        }
                    });
                };
                if (typeof (process) == 'function') {
                    if (!process({ insert: function(node) { insertPage(node, options) }, href: href, referrer: options.referrer })) {
                        doPage();
                    }
                } else {
                    doPage();
                }
            }
        };
        var tapHandler = function(e) {
            var $el = $(e.target);
            var href = $el.attr('href');
            if ($el.is(backSelector)) {
                var list = hist[$("footer a.current").attr("name")];
                if (list.length > 1) {
                    list[1].page.doNavigation(true);
                }
            } else if ('#' != href) {
                showPageByHref(href, { referrer: $el });
            }
        };
        //zhengxin 更改历史记录，使用户无法返回到登陆页
        $.fn.historyShift = function() {
            hist[$("footer a.current").attr("name")].shift();
        }
        //zhengxin 获取最近一次的历史记录
        $.getPrevHistory = function() {
            return hist[$("footer a.current").attr("name")][1].hash;
        }
        $(document).ready(function() {
            var section = $('section');
            //            section.children().each(function() {
            //                $(this).scroll();
            //            });
            if (section.children('.current').length == 0) {
                section.children(':first').addClass('current');
            }
            var current = section.children('.current');
            setHash(current);
            addToHistory(current);
            $(window).bind('hashchange', function(e) {
                goBack();
            });
            $(document.body).bind('click', function(e) {
                var $tar = $(e.target);
                $el = $tar.attr('href') ? $tar : $tar.parents("li:first,a:first");
                //zhengxin ????footer??<a>????span????????????????e.target??span??????a?????$el.trigger('tap', e);??????
                if ($el.is("#footer li a")) {
                    $el.addClass("current").parent().siblings().find("a").removeClass("current");
                }
                if ($el && $el.attr('href')) {
                    e.preventDefault();
                    $el.trigger('tap', e);
                }
            }).bind('tap', tapHandler);
        });
        return this;
    }
})(jQuery);

/**
datas, cache data to localStorage and DataBase
*/
(function($) {
    $.NBData = function(opts) {
        var _db = window.openDatabase("DATA_DB", "1.0", "data of $.NBData", 1024 * 1024 * 2), TABLE_NAME = 'REQUESTS', RID = 'RID', JSONDATA = 'JSONDATA';
        _db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + TABLE_NAME + '(' + RID + ' INTEGER PRIMARY KEY AUTOINCREMENT, ' + JSONDATA + ')');
        });
        var invokeMethod = function(method, params) {
            if (method) {
                return method(params);
            }
            return false;
        };
        var ready = this.ready = function(o) {
            _db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM ' + TABLE_NAME, [], function(tx, rs) {
                    var _requests = [];
                    for (var i = 0; i < rs.rows.length; ++i) {
                        var item = rs.rows.item(i);
                        var _d = JSON.parse(item[JSONDATA]);
                        _d.id = item[RID];
                        _requests.push(_d);
                    }
                    invokeMethod(o.ready, _requests);
                }, function(tx, err) {
                    invokeMethod(o.ready, []);
                });
            });
        };
        var deleteById = function(id) {
            _db.transaction(function(tx) {
                tx.executeSql('DELETE FROM ' + TABLE_NAME + ' WHERE ' + RID + '=?', [id]);
            });
        };
        if (opts.ready) {
            this.ready(opts);
        }
        var saveRequest = function(o) {
            _db.transaction(function(tx) {
                tx.executeSql('INSERT INTO ' + TABLE_NAME + '(' + JSONDATA + ') VALUES(?)', [o.jsondata], function(tx, rs) {
                    invokeMethod(o.complete, { issuccess: true, detail: rs });
                }, function(tx, err) {
                    invokeMethod(o.complete, { issuccess: false, detail: err });
                });
            });
        };
        var rootURL = opts.rootURL ? opts.rootURL : '', map = new $.NBMap(), ident = 0, DEFAULT_TIMEOUT = 20000;
        $.navigationTo = function(opts) {
            var _a = false;
            var _id = false;
            if (opts.keepTo) {
                _a = $(opts.keepTo).find('>a:last');
                _id = _a.attr("id");
                if (_a.length != 0 && _id && _id.indexOf('_nav') != -1) {
                    _a.trigger('tap');
                    return;
                }
            }
            _id = '_nav' + (++ident);
            _a = $('<a id="' + _id + '" href="' + opts.url + '"' + (opts.json ? ' json="' + opts.json + '"' : '') + (opts.data ? ' params="' + opts.data + '"' : '') + (opts.cacheKey ? ' cacheKey="' + opts.cacheKey + '"' : '') + (opts.remote ? ' remote="true"' : '') + (opts.keepTo ? '' : ' remove="true"') + '></a>');
            _a.appendTo(!opts.keepTo ? 'body' : opts.keepTo).trigger('tap');
            map.put(_id, { complete: function() {
                if (!opts.keepTo) {
                    _a.remove();
                    map.remove(_id);
                }
                invokeMethod(opts.complete);
            }, options: opts
            });
        };
        $.sendRequest = function(opts) {
            var _cdata = { type: 'cache', online: navigator.onLine };
            if (opts._$saveTime) {
                if (!navigator.onLine) {
                    invokeMethod(opts.error, _cdata);
                    invokeMethod(opts.complete);
                    return;
                }
            }
            var doCache = function() {
                if (opts._$saveTime) {
                    invokeMethod(opts.error, _cdata);
                    invokeMethod(opts.complete);
                } else {
                    opts._$saveTime = new Date().getTime(); //save time
                    saveRequest({ jsondata: JSON.stringify(opts), complete: function(rs) {
                        _cdata.issuccess = rs.issuccess;
                        _cdata.detail = rs.detail;
                        invokeMethod(opts.error, _cdata);
                    } 
                    });
                }
            };
            if (!navigator.onLine) {	//off line
                doCache();
            } else {
                _cdata.type = 'jsonp';
                $.ajax({
                    url: (opts.rootURL ? opts.rootURL : rootURL) + opts.url,
                    dataType: _cdata.type,
                    timeout: opts.timeout ? opts.timeout : DEFAULT_TIMEOUT,
                    data: opts.data,
                    success: function(data) {
                        if (opts._$saveTime) {
                            deleteById(opts.id);
                        }
                        invokeMethod(opts.success, data);
                    }, error: function(e) {
                        doCache();
                    },
                    complete: function(d) {
                        invokeMethod(opts.complete);
                    }
                });
            }
        };
        this.NBSection = new $.NBSection({
            process: function(opts) {
                var $ref = opts.referrer;
                var jsonUrl = $ref.attr('json');
                if (jsonUrl) {
                    var successFunc = function(page) {
                        var page = $('<div></div>').setTemplate(page);
                        var params = $ref.attr('params');
                        if (params) {
                            var ps = params.split('&');
                            for (var i = 0; i < ps.length; i++) {
                                var p = ps[i].split('=');
                                page.setParam(p[0], p[1]);
                            }
                        }
                        var _opts = map.get($ref.attr('id'));
                        _opts = _opts ? _opts : { options: {} };
                        var processData = function(data) {
                            opts.insert(page.processTemplate(typeof (data) == 'object' ? data : eval('(' + data + ')')));
                            invokeMethod(_opts.complete);
                        };
                        var cacheKey = $ref.attr('cacheKey');
                        var remote = $ref.attr('remote');
                        var _cdata = { type: 'cache', online: navigator.onLine };
                        if (cacheKey && !navigator.onLine) {	//off line
                            var _data = localStorage.getItem(cacheKey);
                            if (_data) {
                                invokeMethod(_opts.options.success, _cdata);
                                processData(_data);
                            } else {
                                invokeMethod(_opts.options.error, _cdata);
                            }
                        } else {
                            if (cacheKey && !remote) {	//reander from cache ???zhengxin ???????????????????cacheKey????????cacheKey?????滻
                                var _data = localStorage.getItem(cacheKey);
                                if (_data) {
                                    invokeMethod(_opts.options.success, _cdata);
                                    processData(_data);
                                    return;
                                }
                            }

                            //zhengxin 显示数据载入等待提示,必须是远程取数据并且loading属性不能为false
                            if (remote == 'true' && $ref.attr('loading') != 'false') {
                                //showProgressDialog("请稍等…");
                            }

                            _cdata.type = remote == 'true' ? 'jsonp' : 'text';
                            if (!navigator.onLine && _cdata.type == 'jsonp') {
                                invokeMethod(_opts.options.error, _cdata);
                                return;
                            }
                            $.ajax({
                                url: remote == 'true' ? (_opts.options.rootURL ? _opts.options.rootURL : rootURL) + jsonUrl : jsonUrl,
                                cache: false,
                                data: params,
                                timeout: _opts.options.timeout ? _opts.options.timeout : DEFAULT_TIMEOUT,
                                dataType: _cdata.type,
                                success: function(data) {
                                    if (typeof (data) != 'object') {
                                        data = eval('(' + data + ')');
                                    }
                                    if (cacheKey) {
                                        data._saveTime = new Date().getTime();
                                        localStorage.setItem(cacheKey, JSON.stringify(data));
                                    }
                                    invokeMethod(_opts.options.success, _cdata);
                                    processData(data);
                                },
                                error: function(res) {
                                    invokeMethod(_opts.options.error, _cdata);
                                },
                                complete: function() {
                                    //zhengxin 隐藏数据载入等待提示
                                    //dismissProgressDialog();
                                }
                            });
                        }
                    };
                    //template
                    $.ajax({
                        url: opts.href,
                        cache: false,
                        dataType: 'text',
                        success: successFunc
                    });
                    return true;
                }
                return false;
            }
        });
        return this;
    };
    //singleton
    var _$instance = null;
    $.NBSetup = function(opts) {
        opts = $.extend({}, opts);
        if (_$instance) {
            return _$instance;
        }
        var NBData = this.NBData = new $.NBData({
            rootURL: opts.rootURL,
            ready: opts.ready
        });
        this.requests = function(o) {
            NBData.ready(o);
        };
        return _$instance = this;
    };
})(jQuery);