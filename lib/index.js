"use strict";

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

var _jQuery = require("jQuery");

var _jQuery2 = _interopRequireDefault(_jQuery);

require("./css/main.css");

require("./css/style.css");

require("./css/writeup.css");

require("./css/zoom.css");

require("./css/flexible-grid.css");

require("./css/animate.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Main    ************* //
(0, _jQuery2.default)(function () {
	console.log(_d2.default);
	var url = window.location.href,
	    svgUrl;
	if (isMobile()) {
		svgUrl = "phone.svg";
	} else {
		svgUrl = "desktop.svg";
	}
	_jQuery2.default.ajax({
		url: svgUrl,
		dataType: 'html',
		type: 'GET',
		success: function success(data) {
			(0, _jQuery2.default)("#svg-wrapper").append(data);
			var isLink = url.split("#");
			if (isLink.length > 1) {
				(0, _jQuery2.default)("#portfolio-start").show(0);
			} else {
				(0, _jQuery2.default)("#desktop").slideDown(550, function () {
					(0, _jQuery2.default)("#portfolio-start").show(0, function () {});
				});
			}

			setCalendarDate();
			addD3Interactivity();
		}
	});

	(0, _jQuery2.default)(".nav-left").click(function (event) {
		event.preventDefault();
		(0, _jQuery2.default)('html, body').animate({
			scrollTop: (0, _jQuery2.default)("#portfolio-start").offset().top
		}, 450);
	});

	(0, _jQuery2.default)(".nav-right").click(function (event) {
		event.preventDefault();
		(0, _jQuery2.default)('html, body').animate({
			scrollTop: (0, _jQuery2.default)("#about").offset().top
		}, 450);
	});
});

function isMobile() {
	var check = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

function about() {
	(0, _jQuery2.default)("html").show("slide", { direction: "left" }, 1000);
}

function setCalendarDate() {
	var d = new Date();

	var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	var month = months[d.getMonth()];
	var date = d.getDate();
	(0, _jQuery2.default)("#month").html(month);
	(0, _jQuery2.default)("#date").html(date).attr("text-anchor", "middle");
}

function addD3Interactivity() {
	var defs = _d2.default.select("svg").append("defs");

	var filter = defs.append("filter").attr("id", "dropshadow");

	filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 2).attr("result", "blur");
	filter.append("feOffset").attr("in", "blur").attr("dx", 1).attr("dy", 1).attr("result", "offsetBlur");

	var feMerge = filter.append("feMerge");

	feMerge.append("feMergeNode").attr("in", "offsetBlur");
	feMerge.append("feMergeNode").attr("in", "SourceGraphic");

	// Define the div for the tooltip
	var tooltip = _d2.default.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

	//add filter on hover
	_d2.default.selectAll(".clickable-hover").on("mouseover", function () {
		//d3.select(this).style("stroke", "black")
		_d2.default.select(this).transition(400).attr("transform", "translate(0, -3)").attr("filter", "url(#dropshadow)");

		tooltip.transition().duration(200).style("opacity", .9);
		tooltip.html(_d2.default.select(this).attr("title")).style("left", _d2.default.event.pageX + "px").style("top", _d2.default.event.pageY - 28 + "px");
	}).on('mouseout', function () {
		_d2.default.select(this).transition(400).attr("transform", "translate(0, 3)").attr("filter", "none");

		tooltip.transition().duration(500).style("opacity", 0);
	}).on("click", function () {
		if (this.id == "portfolio") {
			(0, _jQuery2.default)('html, body').animate({
				scrollTop: (0, _jQuery2.default)("#portfolio-start").offset().top
			}, 750);
		} else if (this.id == "tablet") {
			(0, _jQuery2.default)('html, body').animate({
				scrollTop: (0, _jQuery2.default)("#ubus").offset().top
			}, 750);
		} else if (this.id == "resume-svg") {
			window.open("img/resume.pdf");
		} else if (this.id == "research") {
			window.open("img/ubus/ubus.pdf");
		} else if (this.id == "mail") {
			window.location.href = "mailto:mfern93@gmail.com";
		} else if (this.id == "computer") {
			location.reload();
		} else if (this.id == "notebook") {
			window.open("https://medium.com/@mikefern");
		} else if (this.id == "coffee") {
			window.open("https://www.yelp.com/user_details?userid=0d6z6BvYpKMoxvBXpiGf-g");
		} else if (this.id == "phone") {
			alert("Call me at: 206-434-0881");
		} else if (this.id == "wireframe") {
			(0, _jQuery2.default)('html, body').animate({
				scrollTop: (0, _jQuery2.default)("#caid").offset().top
			}, 750);
		} else if (this.id == "wireframe") {
			(0, _jQuery2.default)('html, body').animate({
				scrollTop: (0, _jQuery2.default)("#ubus").offset().top
			}, 750);
		} else if (this.id == "time") {
			window.open("https://www.productivityvis.com");
		}
	});
}

// transition  ********** //
+function ($) {
	'use strict';

	// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	// ============================================================

	function transitionEnd() {
		var el = document.createElement('bootstrap');

		var transEndEventNames = {
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'transitionend',
			OTransition: 'oTransitionEnd otransitionend',
			transition: 'transitionend'
		};

		for (var name in transEndEventNames) {
			if (el.style[name] !== undefined) {
				return { end: transEndEventNames[name] };
			}
		}

		return false; // explicit for ie8 (  ._.)
	}

	// http://blog.alexmaccaw.com/css-transitions
	$.fn.emulateTransitionEnd = function (duration) {
		var called = false;
		var $el = this;
		$(this).one('bsTransitionEnd', function () {
			called = true;
		});
		var callback = function callback() {
			if (!called) $($el).trigger($.support.transition.end);
		};
		setTimeout(callback, duration);
		return this;
	};

	$(function () {
		$.support.transition = transitionEnd();

		if (!$.support.transition) return;

		$.event.special.bsTransitionEnd = {
			bindType: $.support.transition.end,
			delegateType: $.support.transition.end,
			handle: function handle(e) {
				if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
			}
		};
	});
}(_jQuery2.default);

//
//   +function ($) { "use strict";

//   /**
//    * The zoom service
//    */
//   function ZoomService () {
//     this._activeZoom            =
//     this._initialScrollPosition =
//     this._initialTouchPosition  =
//     this._touchMoveListener     = null

//     this._$document = $(document)
//     this._$window   = $(window)
//     this._$body     = $(document.body)

//     this._boundClick = $.proxy(this._clickHandler, this)
//   }

//   ZoomService.prototype.listen = function () {
//     this._$body.on('click', '[data-action="zoom"]', $.proxy(this._zoom, this))
//   }

//   ZoomService.prototype._zoom = function (e) {
//     var target = e.target

//     if (!target || target.tagName != 'IMG') return

//     if (this._$body.hasClass('zoom-overlay-open')) return

//     if (e.metaKey || e.ctrlKey) {
//       return window.open((e.target.getAttribute('data-original') || e.target.src), '_blank')
//     }

//     if (target.width >= ($(window).width() - Zoom.OFFSET)) return

//     this._activeZoomClose(true)

//     this._activeZoom = new Zoom(target)
//     this._activeZoom.zoomImage()

//     // todo(fat): probably worth throttling this
//     this._$window.on('scroll.zoom', $.proxy(this._scrollHandler, this))

//     this._$document.on('keyup.zoom', $.proxy(this._keyHandler, this))
//     this._$document.on('touchstart.zoom', $.proxy(this._touchStart, this))

//     // we use a capturing phase here to prevent unintended js events
//     // sadly no useCapture in jquery api (http://bugs.jquery.com/ticket/14953)
//     if (document.addEventListener) {
//       document.addEventListener('click', this._boundClick, true)
//     } else {
//       document.attachEvent('onclick', this._boundClick, true)
//     }

//     if ('bubbles' in e) {
//       if (e.bubbles) e.stopPropagation()
//     } else {
//       // Internet Explorer before version 9
//       e.cancelBubble = true
//     }
//   }

//   ZoomService.prototype._activeZoomClose = function (forceDispose) {
//     if (!this._activeZoom) return

//     if (forceDispose) {
//       this._activeZoom.dispose()
//     } else {
//       this._activeZoom.close()
//     }

//     this._$window.off('.zoom')
//     this._$document.off('.zoom')

//     document.removeEventListener('click', this._boundClick, true)

//     this._activeZoom = null
//   }

//   ZoomService.prototype._scrollHandler = function (e) {
//     if (this._initialScrollPosition === null) this._initialScrollPosition = $(window).scrollTop()
//     var deltaY = this._initialScrollPosition - $(window).scrollTop()
//     if (Math.abs(deltaY) >= 40) this._activeZoomClose()
//   }

//   ZoomService.prototype._keyHandler = function (e) {
//     if (e.keyCode == 27) this._activeZoomClose()
//   }

//   ZoomService.prototype._clickHandler = function (e) {
//     if (e.preventDefault) e.preventDefault()
//     else event.returnValue = false

//     if ('bubbles' in e) {
//       if (e.bubbles) e.stopPropagation()
//     } else {
//       // Internet Explorer before version 9
//       e.cancelBubble = true
//     }

//     this._activeZoomClose()
//   }

//   ZoomService.prototype._touchStart = function (e) {
//     this._initialTouchPosition = e.touches[0].pageY
//     $(e.target).on('touchmove.zoom', $.proxy(this._touchMove, this))
//   }

//   ZoomService.prototype._touchMove = function (e) {
//     if (Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10) {
//       this._activeZoomClose()
//       $(e.target).off('touchmove.zoom')
//     }
//   }


//   /**
//    * The zoom object
//    */
//   function Zoom (img) {
//     this._fullHeight      =
//     this._fullWidth       =
//     this._overlay         =
//     this._targetImageWrap = null

//     this._targetImage = img

//     this._$body = $(document.body)
//   }

//   Zoom.OFFSET = 80
//   Zoom._MAX_WIDTH = 2560
//   Zoom._MAX_HEIGHT = 4096

//   Zoom.prototype.zoomImage = function () {
//     var img = document.createElement('img')
//     img.onload = $.proxy(function () {
//       this._fullHeight = Number(img.height)
//       this._fullWidth = Number(img.width)
//       this._zoomOriginal()
//     }, this)
//     img.src = this._targetImage.src
//   }

//   Zoom.prototype._zoomOriginal = function () {
//     this._targetImageWrap           = document.createElement('div')
//     this._targetImageWrap.className = 'zoom-img-wrap'

//     this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage)
//     this._targetImageWrap.appendChild(this._targetImage)

//     $(this._targetImage)
//       .addClass('zoom-img')
//       .attr('data-action', 'zoom-out')

//     this._overlay           = document.createElement('div')
//     this._overlay.className = 'zoom-overlay'

//     document.body.appendChild(this._overlay)

//     this._calculateZoom()
//     this._triggerAnimation()
//   }

//   Zoom.prototype._calculateZoom = function () {
//     this._targetImage.offsetWidth // repaint before animating

//     var originalFullImageWidth  = this._fullWidth
//     var originalFullImageHeight = this._fullHeight

//     var scrollTop = $(window).scrollTop()

//     var maxScaleFactor = originalFullImageWidth / this._targetImage.width

//     var viewportHeight = ($(window).height() - Zoom.OFFSET)
//     var viewportWidth  = ($(window).width() - Zoom.OFFSET)

//     var imageAspectRatio    = originalFullImageWidth / originalFullImageHeight
//     var viewportAspectRatio = viewportWidth / viewportHeight

//     if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
//       this._imgScaleFactor = maxScaleFactor

//     } else if (imageAspectRatio < viewportAspectRatio) {
//       this._imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor

//     } else {
//       this._imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor
//     }
//   }

//   Zoom.prototype._triggerAnimation = function () {
//     this._targetImage.offsetWidth // repaint before animating

//     var imageOffset = $(this._targetImage).offset()
//     var scrollTop   = $(window).scrollTop()

//     var viewportY = scrollTop + ($(window).height() / 2)
//     var viewportX = ($(window).width() / 2)

//     var imageCenterY = imageOffset.top + (this._targetImage.height / 2)
//     var imageCenterX = imageOffset.left + (this._targetImage.width / 2)

//     this._translateY = viewportY - imageCenterY
//     this._translateX = viewportX - imageCenterX

//     var targetTransform = 'scale(' + this._imgScaleFactor + ')'
//     var imageWrapTransform = 'translate(' + this._translateX + 'px, ' + this._translateY + 'px)'

//     if ($.support.transition) {
//       imageWrapTransform += ' translateZ(0)'
//     }

//     $(this._targetImage)
//       .css({
//         '-webkit-transform': targetTransform,
//             '-ms-transform': targetTransform,
//                 'transform': targetTransform
//       })

//     $(this._targetImageWrap)
//       .css({
//         '-webkit-transform': imageWrapTransform,
//             '-ms-transform': imageWrapTransform,
//                 'transform': imageWrapTransform
//       })

//     this._$body.addClass('zoom-overlay-open')
//   }

//   Zoom.prototype.close = function () {
//     this._$body
//       .removeClass('zoom-overlay-open')
//       .addClass('zoom-overlay-transitioning')

//     // we use setStyle here so that the correct vender prefix for transform is used
//     $(this._targetImage)
//       .css({
//         '-webkit-transform': '',
//             '-ms-transform': '',
//                 'transform': ''
//       })

//     $(this._targetImageWrap)
//       .css({
//         '-webkit-transform': '',
//             '-ms-transform': '',
//                 'transform': ''
//       })

//     if (!$.support.transition) {
//       return this.dispose()
//     }

//     $(this._targetImage)
//       .one($.support.transition.end, $.proxy(this.dispose, this))
//       .emulateTransitionEnd(300)
//   }

//   Zoom.prototype.dispose = function () {
//     if (this._targetImageWrap && this._targetImageWrap.parentNode) {
//       $(this._targetImage)
//         .removeClass('zoom-img')
//         .attr('data-action', 'zoom')

//       this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap)
//       this._overlay.parentNode.removeChild(this._overlay)

//       this._$body.removeClass('zoom-overlay-transitioning')
//     }
//   }

//   // wait for dom ready (incase script included before body)
//   $(function () {
//     new ZoomService().listen()
//   })

// }(jQuery)