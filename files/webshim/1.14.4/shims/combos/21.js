!function(a){var b=window.webshims;setTimeout(function(){b.isReady("geolocation",!0)});var c=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},d=0,e=b.cfg.geolocation||{};navigator.geolocation||(navigator.geolocation={}),a.extend(navigator.geolocation,function(){var f,g={getCurrentPosition:function(d,g,h){var i,j,k,l,m=2,n=function(){if(!k)if(f){if(k=!0,d(a.extend({timestamp:(new Date).getTime()},f)),p(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(f))}catch(b){}}else g&&!m&&(k=!0,p(),g({code:2,message:"POSITION_UNAVAILABLE"}))},o=function(){m--,q(),n()},p=function(){a(document).off("google-loader",p),clearTimeout(j),clearTimeout(i)},q=function(){if(f||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var b=google.loader.ClientLocation;return f={coords:{latitude:b.latitude,longitude:b.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:a.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},b.address)},!0},r=function(){if(!f&&(q(),!f&&window.JSON&&window.sessionStorage))try{f=sessionStorage.getItem("storedGeolocationData654321"),f=f?JSON.parse(f):!1,f.coords||(f=!1)}catch(a){f=!1}};return r(),f?void setTimeout(n,1):e.confirmText&&!confirm(e.confirmText.replace("{location}",location.hostname))?void(g&&g({code:1,message:"PERMISSION_DENIED"})):(l=function(){a.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(a){m--,a&&(f=f||{coords:{latitude:a.latitude,longitude:a.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:a.city,country:a.country_name,countryCode:a.country_code,county:"",postalCode:a.zipcode,premises:"",region:a.region_name,street:"",streetNumber:""}},n())},error:function(){m--,n()}})},a.ajax?l():(b.ready("jajax",l),b.loader.loadList(["jajax"])),clearTimeout(j),window.google&&window.google.loader?m--:j=setTimeout(function(){e.destroyWrite&&(document.write=c,document.writeln=c),a(document).one("google-loader",o),b.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),void(i=h&&h.timeout?setTimeout(function(){p(),g&&g({code:3,message:"TIMEOUT"})},h.timeout):setTimeout(function(){m=0,n()},1e4)))},clearWatch:a.noop};return g.watchPosition=function(a,b,c){return g.getCurrentPosition(a,b,c),d++,d},g}()),b.ready("WINDOWLOAD",function(){b.loader.loadList(["jajax"])}),b.isReady("geolocation",!0)}(webshims.$),webshims.register("details",function(a,b,c,d,e,f){var g=function(b){var c=a(b).parent("details");return c[0]&&c.children(":first").get(0)===b?c:void 0},h=function(b,c){b=a(b),c=a(c);var d=a.data(c[0],"summaryElement");a.data(b[0],"detailsElement",c),d&&b[0]===d[0]||(d&&(d.hasClass("fallback-summary")?d.remove():d.off(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),a.data(c[0],"summaryElement",b),c.prop("open",c.prop("open")))},i=function(b){var c=a.data(b,"summaryElement");return c||(c=a(b).children("summary:first-child"),c[0]?h(c,b):(a(b).prependPolyfill('<summary class="fallback-summary">'+f.text+"</summary>"),c=a.data(b,"summaryElement"))),c};b.createElement("summary",function(){var c=g(this);if(c&&!a.data(this,"detailsElement")){var d,e,f=a.attr(this,"tabIndex")||"0";h(this,c),a(this).on({"focus.summaryPolyfill":function(){a(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){a(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){a(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){a(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(b){var c=g(this);if(c){if(!e&&b.originalEvent)return e=!0,b.stopImmediatePropagation(),b.preventDefault(),a(this).trigger("click"),e=!1,!1;clearTimeout(d),d=setTimeout(function(){b.isDefaultPrevented()||c.prop("open",!c.prop("open"))},0)}},"keydown.summaryPolyfill":function(b){13!=b.keyCode&&32!=b.keyCode||b.isDefaultPrevented()||(e=!0,b.preventDefault(),a(this).trigger("click"),e=!1)}}).attr({tabindex:f,role:"button"}).prepend('<span class="details-open-indicator" />'),b.moveToFirstEvent(this,"click")}});var j;b.defineNodeNamesBooleanProperty("details","open",function(b){var c=a(a.data(this,"summaryElement"));if(c){var d=b?"removeClass":"addClass",e=a(this);if(!j&&f.animate){e.stop().css({width:"",height:""});var g={width:e.width(),height:e.height()}}if(c.attr("aria-expanded",""+b),e[d]("closed-details-summary").children().not(c[0])[d]("closed-details-child"),!j&&f.animate){var h={width:e.width(),height:e.height()};e.css(g).animate(h,{complete:function(){a(this).css({width:"",height:""})}})}}}),b.createElement("details",function(){j=!0;i(this);a.prop(this,"open",a.prop(this,"open")),j=!1})}),webshims.register("mediaelement-jaris",function(a,b,c,d,e,f){"use strict";var g=b.mediaelement,h=c.swfmini,i=b.support,j=i.mediaelement,k=h.hasFlashPlayerVersion("9.0.115"),l=0,m="ActiveXObject"in c&&j,n={paused:!0,ended:!1,currentSrc:"",duration:c.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,seeking:!1,error:null,buffered:{start:function(a){return a?void b.error("buffered index size error"):0},end:function(a){return a?void b.error("buffered index size error"):0},length:0}},o=Object.keys(n),p={currentTime:0,volume:1,muted:!1},q=(Object.keys(p),a.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,lastCalledTime:-500,_ppFlag:e,_calledMeta:!1,lastDuration:0,_timeDif:.3},n,p)),r=function(a){try{a.nodeName}catch(c){return null}var d=b.data(a,"mediaelement");return d&&"third"==d.isActive?d:null},s=function(b,c){c=a.Event(c),c.preventDefault(),a.event.trigger(c,e,b)},t=f.playerPath||b.cfg.basePath+"swf/"+(f.playerName||"JarisFLVPlayer.swf");b.extendUNDEFProp(f.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),b.extendUNDEFProp(f.vars,{controltype:"1",jsapi:"1"}),b.extendUNDEFProp(f.attrs,{bgcolor:"#000000"});var u=function(a,b){3>a&&clearTimeout(b._canplaythroughTimer),a>=3&&b.readyState<3&&(b.readyState=a,s(b._elem,"canplay"),b.paused||s(b._elem,"playing"),clearTimeout(b._canplaythroughTimer),b._canplaythroughTimer=setTimeout(function(){u(4,b)},4e3)),a>=4&&b.readyState<4&&(b.readyState=a,s(b._elem,"canplaythrough")),b.readyState=a},v=function(b){b.seeking&&Math.abs(b.currentTime-b._lastSeektime)<2&&(b.seeking=!1,a(b._elem).triggerHandler("seeked"))};g.jarisEvent={};var w,x={onPlayPause:function(a,b,c){var d,e;if(null==c)try{d=b.api.api_get("isPlaying")}catch(f){}else d=c;d==b.paused&&(b.paused=!d,e=b.paused?"pause":"play",b._ppFlag=!0,s(b._elem,e),b.readyState<3&&u(3,b),b.paused||s(b._elem,"playing"))},onSeek:function(b,c){c._lastSeektime=b.seekTime,c.seeking=!0,a(c._elem).triggerHandler("seeking"),clearTimeout(c._seekedTimer),c._seekedTimer=setTimeout(function(){v(c),c.seeking=!1},300)},onConnectionFailed:function(a,b){g.setError(b._elem,"flash connection error")},onNotBuffering:function(a,b){u(3,b)},onDataInitialized:function(a,b){var c,d=b.duration;b.duration=a.duration,d==b.duration||isNaN(b.duration)||b._calledMeta&&(c=Math.abs(b.lastDuration-b.duration))<2||(b.videoHeight=a.height,b.videoWidth=a.width,b.networkState||(b.networkState=2),b.readyState<1&&u(1,b),clearTimeout(b._durationChangeTimer),b._calledMeta&&b.duration?b._durationChangeTimer=setTimeout(function(){b.lastDuration=b.duration,s(b._elem,"durationchange")},c>50?0:c>9?9:99):(b.lastDuration=b.duration,b.duration&&s(b._elem,"durationchange"),b._calledMeta||s(b._elem,"loadedmetadata"),b._timeDif=b.duration>1&&b.duration<140?.2:b.duration<600?.25:.3),b._calledMeta=!0)},onBuffering:function(a,b){b.ended&&(b.ended=!1),u(1,b),s(b._elem,"waiting")},onTimeUpdate:function(b,c){var d=c.currentTime-c.lastCalledTime;c.ended&&(c.ended=!1),c.readyState<3&&(u(3,c),s(c._elem,"playing")),c.seeking&&v(c),(d>c._timeDif||-.3>d)&&(c.lastCalledTime=c.currentTime,a.event.trigger("timeupdate",e,c._elem,!0))},onProgress:function(b,c){if(c.ended&&(c.ended=!1),c.duration&&!isNaN(c.duration)){var d=b.loaded/b.total;d>.02&&.2>d?u(3,c):d>.2&&(d>.95&&(d=1,c.networkState=1),u(4,c)),c._bufferedEnd&&c._bufferedEnd>d&&(c._bufferedStart=c.currentTime||0),c._bufferedEnd=d,c.buffered.length=1,a.event.trigger("progress",e,c._elem,!0)}},onPlaybackFinished:function(a,b){b.readyState<4&&u(4,b),b.ended=!0,s(b._elem,"ended")},onVolumeChange:function(a,b){(b.volume!=a.volume||b.muted!=a.mute)&&(b.volume=a.volume,b.muted=a.mute,s(b._elem,"volumechange"))},ready:function(){var c=function(a){var b=!0;try{a.api.api_get("volume")}catch(c){b=!1}return b};return function(d,e){var f=0,g=function(){return f>9?void(e.tryedReframeing=0):(f++,e.tryedReframeing++,void(c(e)?(e.wasSwfReady=!0,e.tryedReframeing=0,z(e),y(e)):e.tryedReframeing<6?e.tryedReframeing<3?(e.reframeTimer=setTimeout(g,9),e.shadowElem.css({overflow:"visible"}),setTimeout(function(){e.shadowElem.css({overflow:"hidden"})},1)):(e.shadowElem.css({overflow:"hidden"}),a(e._elem).mediaLoad()):(clearTimeout(e.reframeTimer),b.error("reframing error"))))};e&&e.api&&(e.tryedReframeing||(e.tryedReframeing=0),clearTimeout(w),clearTimeout(e.reframeTimer),e.shadowElem.removeClass("flashblocker-assumed"),f?e.reframeTimer=setTimeout(g,9):g())}}()};x.onMute=x.onVolumeChange;var y=function(a){var c,d=a.actionQueue.length,e=0;if(d&&"third"==a.isActive)for(;a.actionQueue.length&&d>e;){e++,c=a.actionQueue.shift();try{a.api[c.fn].apply(a.api,c.args)}catch(f){b.warn(f)}}a.actionQueue.length&&(a.actionQueue=[])},z=function(b){b&&((b._ppFlag===e&&a.prop(b._elem,"autoplay")||!b.paused)&&setTimeout(function(){if("third"==b.isActive&&(b._ppFlag===e||!b.paused))try{a(b._elem).play(),b._ppFlag=!0}catch(c){}},1),b.muted&&a.prop(b._elem,"muted",!0),1!=b.volume&&a.prop(b._elem,"volume",b.volume))},A=a.noop;if(j){var B={play:1,playing:1},C=["play","pause","playing","loadstart","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],D=C.map(function(a){return a+".webshimspolyfill"}).join(" "),E=function(c){var d=b.data(c.target,"mediaelement");if(d){var e=c.originalEvent&&c.originalEvent.type===c.type;e==("third"==d.activating)&&(c.stopImmediatePropagation(),B[c.type]&&(d.isActive!=d.activating?a(c.target).pause():e&&(a.prop(c.target,"pause")._supvalue||a.noop).apply(c.target)))}};A=function(c){a(c).off(D).on(D,E),C.forEach(function(a){b.moveToFirstEvent(c,a)})},A(d)}g.setActive=function(c,d,e){if(e||(e=b.data(c,"mediaelement")),e&&e.isActive!=d){"html5"!=d&&"third"!=d&&b.warn("wrong type for mediaelement activating: "+d);var f=b.data(c,"shadowData");e.activating=d,a(c).pause(),e.isActive=d,"third"==d?(f.shadowElement=f.shadowFocusElement=e.shadowElem[0],a(c).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(a(c).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),f.shadowElement=f.shadowFocusElement=!1),a(c).trigger("mediaelementapichange")}};var F=function(){var a=["_calledMeta","lastDuration","_bufferedEnd","lastCalledTime","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","seeking","videoHeight","videoWidth"],b=a.length;return function(c){if(c){clearTimeout(c._seekedTimer);var d=b,e=c.networkState;for(u(0,c),clearTimeout(c._durationChangeTimer);--d>-1;)delete c[a[d]];c.actionQueue=[],c.buffered.length=0,e&&s(c._elem,"emptied")}}}(),G=function(){var e={},f=function(b){var c,f,g;return e[b.currentSrc]?c=e[b.currentSrc]:b.videoHeight&&b.videoWidth?(e[b.currentSrc]={width:b.videoWidth,height:b.videoHeight},c=e[b.currentSrc]):(f=a.attr(b._elem,"poster"))&&(c=e[f],c||(g=d.createElement("img"),g.onload=function(){e[f]={width:this.width,height:this.height},e[f].height&&e[f].width?H(b,a.prop(b._elem,"controls")):delete e[f],g.onload=null},g.src=f,g.complete&&g.onload&&g.onload())),c||{width:300,height:"video"==b._elemNodeName?150:50}},g=function(a,b){return a.style[b]||a.currentStyle&&a.currentStyle[b]||c.getComputedStyle&&(c.getComputedStyle(a,null)||{})[b]||""},h=["minWidth","maxWidth","minHeight","maxHeight"],i=function(a,b){var c,d,e=!1;for(c=0;4>c;c++)d=g(a,h[c]),parseFloat(d,10)&&(e=!0,b[h[c]]=d);return e},j=function(c){var d,e,h=c._elem,j={width:"auto"==g(h,"width"),height:"auto"==g(h,"height")},k={width:!j.width&&a(h).width(),height:!j.height&&a(h).height()};return(j.width||j.height)&&(d=f(c),e=d.width/d.height,j.width&&j.height?(k.width=d.width,k.height=d.height):j.width?k.width=k.height*e:j.height&&(k.height=k.width/e),i(h,k)&&(c.shadowElem.css(k),j.width&&(k.width=c.shadowElem.height()*e),j.height&&(k.height=(j.width?k.width:c.shadowElem.width())/e),j.width&&j.height&&(c.shadowElem.css(k),k.height=c.shadowElem.width()/e,k.width=k.height*e,c.shadowElem.css(k),k.width=c.shadowElem.height()*e,k.height=k.width/e),b.support.mediaelement||(k.width=c.shadowElem.width(),k.height=c.shadowElem.height()))),k};return j}(),H=function(b,c){var d,e=b.shadowElem;a(b._elem)[c?"addClass":"removeClass"]("webshims-controls"),("third"==b.isActive||"third"==b.activating)&&("audio"!=b._elemNodeName||c?(b._elem.style.display="",d=G(b),b._elem.style.display="none",e.css(d)):e.css({width:0,height:0}))},I=function(){var b={"":1,auto:1};return function(c){var d=a.attr(c,"preload");return null==d||"none"==d||a.prop(c,"autoplay")?!1:(d=a.prop(c,"preload"),!!(b[d]||"metadata"==d&&a(c).is(".preload-in-doubt, video:not([poster])")))}}(),J={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},K=function(a){return a.replace?a.replace(J.A,"%26").replace(J.a,"%26").replace(J.e,"%3D").replace(J.q,"%3F"):a};if("matchMedia"in c){var L=!1;try{L=c.matchMedia("only all").matches}catch(M){}L&&(g.sortMedia=function(a,b){try{a=!a.media||matchMedia(a.media).matches,b=!b.media||matchMedia(b.media).matches}catch(c){return 0}return a==b?0:a?-1:1})}g.createSWF=function(c,e,i){if(!k)return void setTimeout(function(){a(c).mediaLoad()},1);var m={};1>l?l=1:l++,i||(i=b.data(c,"mediaelement")),((m.height=a.attr(c,"height")||"")||(m.width=a.attr(c,"width")||""))&&(a(c).css(m),b.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull."));var n,o="audio/rtmp"==e.type||"video/rtmp"==e.type,p=a.extend({},f.vars,{poster:K(a.attr(c,"poster")&&a.prop(c,"poster")||""),source:K(e.streamId||e.srcProp),server:K(e.server||"")}),r=a(c).data("vars")||{},u=a.prop(c,"controls"),v="jarisplayer-"+b.getID(c),y=a.extend({},f.params,a(c).data("params")),z=c.nodeName.toLowerCase(),B=a.extend({},f.attrs,{name:v,id:v},a(c).data("attrs")),C=function(){"third"==i.isActive&&H(i,a.prop(c,"controls"))};return i&&i.swfCreated?(g.setActive(c,"third",i),i.currentSrc="",i.shadowElem.html('<div id="'+v+'">'),i.api=!1,i.actionQueue=[],n=i.shadowElem,F(i),i.currentSrc=e.srcProp):(a(d.getElementById("wrapper-"+v)).remove(),n=a('<div class="polyfill-'+z+" polyfill-mediaelement "+b.shadowClass+'" id="wrapper-'+v+'"><div id="'+v+'"></div>').css({position:"relative",overflow:"hidden"}),i=b.data(c,"mediaelement",b.objectCreate(q,{actionQueue:{value:[]},shadowElem:{value:n},_elemNodeName:{value:z},_elem:{value:c},currentSrc:{value:e.srcProp},swfCreated:{value:!0},id:{value:v.replace(/-/g,"")},buffered:{value:{start:function(a){return a>=i.buffered.length?void b.error("buffered index size error"):0},end:function(a){return a>=i.buffered.length?void b.error("buffered index size error"):(i.duration-i._bufferedStart)*i._bufferedEnd+i._bufferedStart},length:0}}})),n.insertBefore(c),j&&a.extend(i,{volume:a.prop(c,"volume"),muted:a.prop(c,"muted"),paused:a.prop(c,"paused")}),b.addShadowDom(c,n),b.data(c,"mediaelement")||b.data(c,"mediaelement",i),A(c),g.setActive(c,"third",i),H(i,u),a(c).on({"updatemediaelementdimensions loadedmetadata emptied":C,remove:function(a){!a.originalEvent&&g.jarisEvent[i.id]&&g.jarisEvent[i.id].elem==c&&(delete g.jarisEvent[i.id],clearTimeout(w),clearTimeout(i.flashBlock))}}).onWSOff("updateshadowdom",C)),g.jarisEvent[i.id]&&g.jarisEvent[i.id].elem!=c?void b.error("something went wrong"):(g.jarisEvent[i.id]||(g.jarisEvent[i.id]=function(a){if("ready"==a.type){var b=function(){i.api&&(i.paused||i.api.api_play(),I(c)&&i.api.api_preload(),x.ready(a,i))};i.api?b():setTimeout(b,9)}else i.currentTime=a.position,i.api&&(!i._calledMeta&&isNaN(a.duration)&&i.duration!=a.duration&&isNaN(i.duration)&&x.onDataInitialized(a,i),i._ppFlag||"onPlayPause"==a.type||x.onPlayPause(a,i),x[a.type]&&x[a.type](a,i)),i.duration=a.duration},g.jarisEvent[i.id].elem=c),a.extend(p,{id:v,evtId:i.id,controls:""+u,autostart:"false",nodename:z},r),o?p.streamtype="rtmp":"audio/mpeg"==e.type||"audio/mp3"==e.type?(p.type="audio",p.streamtype="file"):"video/youtube"==e.type&&(p.streamtype="youtube"),f.changeSWF(p,c,e,i,"embed"),clearTimeout(i.flashBlock),h.embedSWF(t,v,"100%","100%","9.0.115",!1,p,y,B,function(d){if(d.success){var e=function(){(!d.ref.parentNode&&n[0].parentNode||"none"==d.ref.style.display)&&(n.addClass("flashblocker-assumed"),a(c).trigger("flashblocker"),b.warn("flashblocker assumed")),a(d.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};i.api=d.ref,u||a(d.ref).attr("tabindex","-1").css("outline","none"),i.flashBlock=setTimeout(e,99),w||(clearTimeout(w),w=setTimeout(function(){e();var c=a(d.ref);c[0].offsetWidth>1&&c[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?b.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(c[0].offsetWidth<2||c[0].offsetHeight<2)&&b.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),c=null},8e3))}}),void s(i._elem,"loadstart"))};var N=function(a,b,c,d){return d=d||r(a),d?(d.api&&d.api[b]?d.api[b].apply(d.api,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};if(["audio","video"].forEach(function(c){var d,e={},f=function(a){("audio"!=c||"videoHeight"!=a&&"videoWidth"!=a)&&(e[a]={get:function(){var b=r(this);return b?b[a]:j&&d[a].prop._supget?d[a].prop._supget.apply(this):q[a]},writeable:!1})},g=function(a,b){f(a),delete e[a].writeable,e[a].set=b};g("seeking"),g("volume",function(a){var c=r(this);if(c)a*=1,isNaN(a)||((0>a||a>1)&&b.error("volume greater or less than allowed "+a/100),N(this,"api_volume",[a],c),c.volume!=a&&(c.volume=a,s(c._elem,"volumechange")),c=null);else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)}),g("muted",function(a){var b=r(this);if(b)a=!!a,N(this,"api_muted",[a],b),b.muted!=a&&(b.muted=a,s(b._elem,"volumechange")),b=null;else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)}),g("currentTime",function(a){var b=r(this);if(b)a*=1,isNaN(a)||N(this,"api_seek",[a],b);else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(a){e[a]={value:function(){var b=r(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),N(this,"play"==a?"api_play":"api_pause",[],b),b._ppFlag=!0,b.paused!=("play"!=a)&&(b.paused="play"!=a,s(b._elem,a));else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}}),o.forEach(f),b.onNodeNamesPropertyModify(c,"controls",function(b,d){var e=r(this);a(this)[d?"addClass":"removeClass"]("webshims-controls"),e&&("audio"==c&&H(e,d),N(this,"api_controls",[d],e))}),b.onNodeNamesPropertyModify(c,"preload",function(){var c,d,e;I(this)&&(c=r(this),c?N(this,"api_preload",[],c):!m||!this.paused||this.error||a.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!a(this).is(":not(.nonnative-api-active)")||(e=this,d=b.data(e,"mediaelementBase")||b.data(e,"mediaelementBase",{}),clearTimeout(d.loadTimer),d.loadTimer=setTimeout(function(){a(e).mediaLoad()},9)))}),d=b.defineNodeNameProperties(c,e,"prop"),i.mediaDefaultMuted||b.defineNodeNameProperties(c,{defaultMuted:{get:function(){return null!=a.attr(this,"muted")},set:function(b){b?a.attr(this,"muted",""):a(this).removeAttr("muted")}}},"prop")}),k&&a.cleanData){var O=a.cleanData,P=d.createElement("object"),Q={SetVariable:1,GetVariable:1,SetReturnValue:1,GetReturnValue:1},R={object:1,OBJECT:1};a.cleanData=function(a){var b,c,d,e=O.apply(this,arguments);if(a&&(c=a.length)&&l)for(b=0;c>b;b++)if(R[a[b].nodeName]&&"api_destroy"in a[b]){l--;try{if(a[b].api_destroy(),4==a[b].readyState)for(d in a[b])Q[d]||P[d]||"function"!=typeof a[b][d]||(a[b][d]=null)}catch(f){console.log(f)}}return e}}if(j?"media"in d.createElement("source")||b.reflectProperties("source",["media"]):(["poster","src"].forEach(function(a){b.defineNodeNamesProperty("src"==a?["audio","video","source"]:["video"],a,{reflect:!0,propType:"src"})}),b.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),b.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(a){b.defineNodeNamesBooleanProperty(["audio","video"],a)}),b.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"),k&&b.ready("WINDOWLOAD",function(){setTimeout(function(){l||(d.createElement("img").src=t)},9)})),j&&k&&!f.preferFlash){var S={3:1,4:1},T=function(c){var e,g,h;(a(c.target).is("audio, video")||(h=c.target.parentNode)&&a("source",h).last()[0]==c.target)&&(e=a(c.target).closest("audio, video"))&&!e.is(".nonnative-api-active")&&(g=e.prop("error"),setTimeout(function(){e.is(".nonnative-api-active")||(g&&S[g.code]&&(f.preferFlash=!0,d.removeEventListener("error",T,!0),a("audio, video").each(function(){b.mediaelement.selectSource(this)}),b.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+c.target.currentSrc+" Mediaerror: "+e.prop("error")+" error.code: "+g.code)),b.warn("There was a mediaelement error. Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"))}))};d.addEventListener("error",T,!0),setTimeout(function(){a("audio, video").each(function(){var b=a.prop(this,"error");b&&S[b]&&T({target:this})})})}}),webshims.register("track",function(a,b,c,d){"use strict";function e(a,c,e){3!=arguments.length&&b.error("wrong arguments.length for VTTCue.constructor"),this.startTime=a,this.endTime=c,this.text=e,this.onenter=null,this.onexit=null,this.pauseOnExit=!1,this.track=null,this.id=null,this.getCueAsHTML=function(){var a,b="",c="";return function(){var e,g;if(a||(a=d.createDocumentFragment()),b!=this.text)for(b=this.text,c=f.parseCueTextToHTML(b),t.innerHTML=c,e=0,g=t.childNodes.length;g>e;e++)a.appendChild(t.childNodes[e].cloneNode(!0));return a.cloneNode(!0)}}()}var f=b.mediaelement,g=((new Date).getTime(),{subtitles:1,captions:1,descriptions:1}),h=a("<track />"),i=b.support,j=i.ES5&&i.objectAccessor,k=function(a){var c={};return a.addEventListener=function(a,d){c[a]&&b.error("always use $.on to the shimed event: "+a+" already bound fn was: "+c[a]+" your fn was: "+d),c[a]=d},a.removeEventListener=function(a,d){c[a]&&c[a]!=d&&b.error("always use $.on/$.off to the shimed event: "+a+" already bound fn was: "+c[a]+" your fn was: "+d),c[a]&&delete c[a]},a},l={getCueById:function(a){for(var b=null,c=0,d=this.length;d>c;c++)if(this[c].id===a){b=this[c];break}return b}},m={0:"disabled",1:"hidden",2:"showing"},n={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(a){if(this.cues){var c=this.cues[this.cues.length-1];c&&c.startTime>a.startTime&&b.error("cue startTime higher than previous cue's startTime")}else this.cues=f.createCueList();a.track&&a.track.removeCue&&a.track.removeCue(a),a.track=this,this.cues.push(a)},removeCue:function(a){var c=this.cues||[],d=0,e=c.length;if(a.track!=this)return void b.error("cue not part of track");for(;e>d;d++)if(c[d]===a){c.splice(d,1),a.track=null;break}return a.track?void b.error("cue not part of track"):void 0}},o=["kind","label","srclang"],p={srclang:"language"},q=function(c,d){var e,f,g=[],h=[],i=[];if(c||(c=b.data(this,"mediaelementBase")||b.data(this,"mediaelementBase",{})),d||(c.blockTrackListUpdate=!0,d=a.prop(this,"textTracks"),c.blockTrackListUpdate=!1),clearTimeout(c.updateTrackListTimer),a("track",this).each(function(){var b=a.prop(this,"track");i.push(b),-1==d.indexOf(b)&&h.push(b)}),c.scriptedTextTracks)for(e=0,f=c.scriptedTextTracks.length;f>e;e++)i.push(c.scriptedTextTracks[e]),-1==d.indexOf(c.scriptedTextTracks[e])&&h.push(c.scriptedTextTracks[e]);for(e=0,f=d.length;f>e;e++)-1==i.indexOf(d[e])&&g.push(d[e]);if(g.length||h.length){for(d.splice(0),e=0,f=i.length;f>e;e++)d.push(i[e]);for(e=0,f=g.length;f>e;e++)a([d]).triggerHandler(a.Event({type:"removetrack",track:g[e]}));for(e=0,f=h.length;f>e;e++)a([d]).triggerHandler(a.Event({type:"addtrack",track:h[e]}));(c.scriptedTextTracks||g.length)&&a(this).triggerHandler("updatetrackdisplay")}},r=function(c,d){d||(d=b.data(c,"trackData")),d&&!d.isTriggering&&(d.isTriggering=!0,setTimeout(function(){a(c).closest("audio, video").triggerHandler("updatetrackdisplay"),d.isTriggering=!1},1))},s=function(){var c={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return c.captions=c.subtitles,function(d){var e,f,g=a.prop(d,"default");return g&&"metadata"!=(e=a.prop(d,"kind"))&&(f=a(d).parent().find("track[default]").filter(function(){return!!c[e][a.prop(this,"kind")]})[0],f!=d&&(g=!1,b.error("more than one default track of a specific kind detected. Fall back to default = false"))),g}}(),t=a("<div />")[0];c.VTTCue=e,c.TextTrackCue=function(){b.error("Use VTTCue constructor instead of abstract TextTrackCue constructor."),e.apply(this,arguments)},c.TextTrackCue.prototype=e.prototype,f.createCueList=function(){return a.extend([],l)},f.parseCueTextToHTML=function(){var a=/(<\/?[^>]+>)/gi,b=/^(?:c|v|ruby|rt|b|i|u)/,c=/\<\s*\//,d=function(a,b,d,e){var f;return c.test(e)?f="</"+a+">":(d.splice(0,1),f="<"+a+" "+b+'="'+d.join(" ").replace(/\"/g,"&#34;")+'">'),f},e=function(a){var c=a.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return c[0]&&(c[0]=c[0].toLowerCase(),b.test(c[0])?"c"==c[0]?a=d("span","class",c,a):"v"==c[0]&&(a=d("q","title",c,a)):a=""),a};return function(b){return b.replace(a,e)}}();var u=function(b){var c=b+"",d=this.getAttribute("begin")||"",e=this.getAttribute("end")||"",f=a.trim(a.text(this));return/\./.test(d)||(d+=".000"),/\./.test(e)||(e+=".000"),c+="\n",c+=d+" --> "+e+"\n",c+=f},v=function(b){return b=a.parseXML(b)||[],a(b).find("[begin][end]").map(u).get().join("\n\n")||""},w=0;f.loadTextTrack=function(c,d,e,h){var i="play playing loadedmetadata loadstart",j=e.track,k=function(){var g,h,l,m="disabled"==j.mode,n=!(!(a.prop(c,"readyState")>0||2==a.prop(c,"networkState"))&&a.prop(c,"paused")),o=(!m||n)&&a.attr(d,"src")&&a.prop(d,"src");if(o&&(a(c).off(i,k).off("updatetrackdisplay",k),!e.readyState)){g=function(){w--,e.readyState=3,j.cues=null,j.activeCues=j.shimActiveCues=j._shimActiveCues=null,a(d).triggerHandler("error")},e.readyState=1;try{j.cues=f.createCueList(),j.activeCues=j.shimActiveCues=j._shimActiveCues=f.createCueList(),w++,l=function(){h=a.ajax({dataType:"text",url:o,success:function(i){w--;var k=h.getResponseHeader("content-type")||"";k.indexOf("application/xml")?k.indexOf("text/vtt")&&b.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"):i=v(i),f.parseCaptions(i,j,function(b){b&&"length"in b?(e.readyState=2,a(d).triggerHandler("load"),a(c).triggerHandler("updatetrackdisplay")):g()})},error:g})},a.ajax&&a.ajaxSettings.xhr?m?setTimeout(l,2*w):l():(b.ready("jajax",l),b.loader.loadList(["jajax"]))}catch(p){g(),b.error(p)}}};e.readyState=0,j.shimActiveCues=null,j._shimActiveCues=null,j.activeCues=null,j.cues=null,a(c).on(i,k),h?(j.mode=g[j.kind]?"showing":"hidden",k()):a(c).on("updatetrackdisplay",k)},f.createTextTrack=function(c,d){var e,g;return d.nodeName&&(g=b.data(d,"trackData"),g&&(r(d,g),e=g.track)),e||(e=k(b.objectCreate(n)),j||o.forEach(function(b){var c=a.prop(d,b);c&&(e[p[b]||b]=c)}),d.nodeName?(j&&o.forEach(function(c){b.defineProperty(e,p[c]||c,{get:function(){return a.prop(d,c)}})}),e.id=a(d).prop("id"),g=b.data(d,"trackData",{track:e}),f.loadTextTrack(c,d,g,s(d))):(j&&o.forEach(function(a){b.defineProperty(e,p[a]||a,{value:d[a],writeable:!1})}),e.cues=f.createCueList(),e.activeCues=e._shimActiveCues=e.shimActiveCues=f.createCueList(),e.mode="hidden",e.readyState=2),"subtitles"!=e.kind||e.language||b.error("you must provide a language for track in subtitles state"),e.__wsmode=e.mode),e},f.parseCaptionChunk=function(){var a=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,c=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,d=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,f=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g,g=/^(\d{2})?:?(\d{2}):(\d{2})[\.\,](\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})[\.\,](\d+)\s*(.*)/;return function(h){var i,j,k,l,m,n,o,p,q;if(c.exec(h)||f.exec(h)||d.exec(h))return null;for(i=h.split(/\n/g);!i[0].replace(/\s+/gi,"").length&&i.length>0;)i.shift();for(i[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(o=String(i.shift().replace(/\s*/gi,""))),n=0;n<i.length;n++){var r=i[n];((p=a.exec(r))||(p=g.exec(r)))&&(m=p.slice(1),j=parseInt(60*(m[0]||0)*60,10)+parseInt(60*(m[1]||0),10)+parseInt(m[2]||0,10)+parseFloat("0."+(m[3]||0)),k=parseInt(60*(m[4]||0)*60,10)+parseInt(60*(m[5]||0),10)+parseInt(m[6]||0,10)+parseFloat("0."+(m[7]||0))),i=i.slice(0,n).concat(i.slice(n+1));break}return j||k?(l=i.join("\n"),q=new e(j,k,l),o&&(q.id=o),q):(b.warn("couldn't extract time information: "+[j,k,i.join("\n"),o].join(" ; ")),null)}}(),f.parseCaptions=function(a,c,d){var e,g,h,i,j;f.createCueList(),a?(h=/^WEBVTT(\s*FILE)?/gi,g=function(k,l){for(;l>k;k++)if(e=a[k],h.test(e)?j=!0:e.replace(/\s*/gi,"").length&&(e=f.parseCaptionChunk(e,k),e&&c.addCue(e)),i<(new Date).getTime()-30){k++,setTimeout(function(){i=(new Date).getTime(),g(k,l)},90);break}k>=l&&(j||b.error("please use WebVTT format. This is the standard"),d(c.cues))},a=a.replace(/\r\n/g,"\n"),setTimeout(function(){a=a.replace(/\r/g,"\n"),setTimeout(function(){i=(new Date).getTime(),a=a.split(/\n\n+/g),g(0,a.length)},9)},9)):b.error("Required parameter captionData not supplied.")},f.createTrackList=function(c,d){return d=d||b.data(c,"mediaelementBase")||b.data(c,"mediaelementBase",{}),d.textTracks||(d.textTracks=[],b.defineProperties(d.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(a){for(var b=null,c=0;c<d.textTracks.length;c++)if(a==d.textTracks[c].id){b=d.textTracks[c];break}return b}}}),k(d.textTracks),a(c).on("updatetrackdisplay",function(){for(var b,c=0;c<d.textTracks.length;c++)b=d.textTracks[c],b.__wsmode!=b.mode&&(b.__wsmode=b.mode,a([d.textTracks]).triggerHandler("change"))})),d.textTracks},i.track||(b.defineNodeNamesBooleanProperty(["track"],"default"),b.reflectProperties(["track"],["srclang","label"]),b.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),b.defineNodeNameProperties("track",{kind:{attr:i.track?{set:function(a){var c=b.data(this,"trackData");this.setAttribute("data-kind",a),c&&(c.attrKind=a)},get:function(){var a=b.data(this,"trackData");return a&&"attrKind"in a?a.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),a.each(o,function(c,d){var e=p[d]||d;
b.onNodeNamesPropertyModify("track",d,function(){var c=b.data(this,"trackData");c&&("kind"==d&&r(this,c),j||(c.track[e]=a.prop(this,d)))})}),b.onNodeNamesPropertyModify("track","src",function(c){if(c){var d,e=b.data(this,"trackData");e&&(d=a(this).closest("video, audio"),d[0]&&f.loadTextTrack(d,this,e))}}),b.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(b.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return f.createTextTrack(a(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),b.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var a=this,c=b.data(a,"mediaelementBase")||b.data(a,"mediaelementBase",{}),d=f.createTrackList(a,c);return c.blockTrackListUpdate||q.call(a,c,d),d},writeable:!1},addTextTrack:{value:function(a,c,d){var e=f.createTextTrack(this,{kind:h.prop("kind",a||"").prop("kind"),label:c||"",srclang:d||""}),g=b.data(this,"mediaelementBase")||b.data(this,"mediaelementBase",{});return g.scriptedTextTracks||(g.scriptedTextTracks=[]),g.scriptedTextTracks.push(e),q.call(this),e}}},"prop");var x=function(c){if(a(c.target).is("audio, video")){var d=b.data(c.target,"mediaelementBase");d&&(clearTimeout(d.updateTrackListTimer),d.updateTrackListTimer=setTimeout(function(){q.call(c.target,d)},0))}},y=function(a,b){return b.readyState||a.readyState},z=function(a){a.originalEvent&&a.stopImmediatePropagation()},A=function(){if(b.implement(this,"track")){var c,d=this.track;d&&(b.bugs.track||!d.mode&&!y(this,d)||(a.prop(this,"track").mode=m[d.mode]||d.mode),c=a.prop(this,"kind"),d.mode="string"==typeof d.mode?"disabled":0,this.kind="metadata",a(this).attr({kind:c})),a(this).on("load error",z)}};b.addReady(function(c,d){var e=d.filter("video, audio, track").closest("audio, video");a("video, audio",c).add(e).each(function(){q.call(this)}).on("emptied updatetracklist wsmediareload",x).each(function(){if(i.track){var c=a.prop(this,"textTracks"),d=this.textTracks;c.length!=d.length&&b.warn("textTracks couldn't be copied"),a("track",this).each(A)}}),e.each(function(){var a=this,c=b.data(a,"mediaelementBase");c&&(clearTimeout(c.updateTrackListTimer),c.updateTrackListTimer=setTimeout(function(){q.call(a,c)},9))})}),i.texttrackapi&&a("video, audio").trigger("trackapichange")});