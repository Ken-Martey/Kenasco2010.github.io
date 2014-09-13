function ws_photo(t,n,i){function o(t,n){return parseFloat(Math.random()*(n-t)+t)}function e(n,i,e,s,r,h){if(s&&i)var l=u,c=50-l/2,g=50-l/2,p=0,m=5;else var l=f,c=o(-10,90),g=o(-10,90),p=o(-30,30),m=i?5:e?3:2;n.css({position:"absolute",zIndex:m}),t.support.transition&&t.support.transform?n.css({top:d?0:g+"%",left:d?0:c+"%",width:l+"%",height:l+"%",transform:"translate3d("+(d?100*c/l:0)+"%,"+(d?100*g/l:0)+"%,0) rotate("+p+"deg)",transition:"all "+r+"ms ease-in-out"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){a(this).off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),h&&h()}):n.animate({top:g+"%",left:c+"%",width:l+"%",height:l+"%"},r,h?h:0)}for(var a=jQuery,s=a(this),r=a(".ws_list",i),d=/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent),i=i.parent(),h=(n.length,t.imagesCount||30),f=30,u=80,l=[],c=a("<div>").addClass("ws_effect").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",backgroundColor:"#DDDDDD"}).appendTo(i),g=a("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.6)",zIndex:4}).appendTo(c),p=Math.max(h,n.length),m=0,w=0;p>m;m++)w>=n.length&&(w-=n.length),a(n[w]).clone().addClass("ws_photoItem").appendTo(c),t.images&&m<n.length&&l.push(!t.images[w].noimage),w++;var v=c.children("img");v.each(function(n){e(a(this),t.startSlide==n,!1,!0,0)}),this.go=function(i,o){if(t.images&&!l[i]){l[i]=!0;for(var d=i;a(v[d]).attr("src",t.images[d%n.length].src),!(d>p);)d+=n.length}if(window.XMLHttpRequest){var h=.5*t.duration;v.each(function(t){e(a(this),i==t,o==t,!1,h)}),t.support.transition?g.css({opacity:0,transition:"all "+.7*h+"ms ease-in-out"}):g.fadeOut(.7*h),setTimeout(function(){v.each(function(t){e(a(this),i==t,o==t,!0,h,o==t?function(){s.trigger("effectEnd")}:0)}),t.support.transition?g.css("opacity",1):g.fadeIn(.7*h)},h)}else r.stop(!0).animate({left:i?-i+"00%":/Safari/.test(navigator.userAgent)?"0%":0},t.duration,"easeInOutExpo",function(){s.trigger("effectEnd")})}}

// init main object
// jQuery(document).ready - conflicted with some scripts
// Transition time = 2.4s = 20/10
// SlideShow delay = 6.5s = 20/10
jQuery('#wowslider-container1').wowSlider({
	effect:"photo", 
	prev:"", 
	next:"", 
	duration: 20*100, 
	delay:20*100, 
	width:960,
	height:360,
	autoPlay:true,
	playPause:false,
	stopOnHover:false,
	loop:false,
	bullets:true,
	caption: true, 
	captionEffect:"slide",
	controls:true,
	onBeforeStep:0,
	images:0
});
