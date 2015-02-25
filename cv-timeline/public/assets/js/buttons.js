(function(){var t,n,e,r,i,o,a,c,s,l,u,f,h,d,p=[].slice,m={}.hasOwnProperty,g=function(t,n){for(var e in n){if(m.call(n,e))t[e]=n[e]}function r(){this.constructor=t}r.prototype=n.prototype;t.prototype=new r;t.__super__=n.prototype;return t};r={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(r.script=document.getElementById(r.scriptId)){r.url=r.script.src.replace(/[?#].*$/,"").replace(/buttons.js$/,"")}o=function(){var t;function n(){}n.flatten=function(n){var e,r;e=function(n,i){var o,a,c,s,l,u;switch(t.call(n)){case"[object Object]":for(c in n){s=n[c];e(s,i?""+i+"."+c:c)}break;case"[object Array]":for(o=l=0,u=n.length;l<u;o=++l){a=n[o];e(a,i?""+i+"["+o+"]":"["+o+"]")}break;default:r[i]=n}};r={};e(n);return r};n.expand=function(n){var e,r,i,o,a,c,s,l,u,f,h,d,p,m;a=[];for(e in n){l=n[e];i=[];p=e.split(".");for(u=0,h=p.length;u<h;u++){r=p[u];o=r.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(o[1]){i.push(o[1])}if(o[2]){m=o[2].replace(/^\[|\]$/g,"").split("][");for(f=0,d=m.length;f<d;f++){c=m[f];i.push(Number(c))}}}s=a;r=0;while(i.length){if(s[r]==null){switch(t.call(i[0])){case"[object String]":s[r]={};break;case"[object Number]":s[r]=[]}}s=s[r];r=i.shift()}s[r]=l}return a[0]};t=Object.prototype.toString;return n}();s=function(){function t(){}t.stringify=function(t){var n,e,r;e=[];for(n in t){r=t[n];if(r==null){r=""}e.push(""+n+"="+r)}return e.join("&")};t.parse=function(t){var n,e,r,i,o,a,c,s;e={};c=t.split("&");for(o=0,a=c.length;o<a;o++){r=c[o];if(!(r!=="")){continue}s=r.split("="),n=s[0],i=2<=s.length?p.call(s,1):[];if(n!==""){e[n]=i.join("=")}}return e};return t}();c=function(){function t(){}t.encode=function(t){return"#"+encodeURIComponent(s.stringify(o.flatten(t)))};t.decode=function(t){if(t==null){t=document.location.hash}return o.expand(s.parse(decodeURIComponent(t.replace(/^#/,""))))||{}};return t}();i=function(){var t,n,e,r,i,o,a;function c(t,n){this.$=t&&t.nodeType===1?t:document.createElement(t);if(n){n.apply(this,[this.$])}}c.prototype.get=function(){return this.$};c.prototype.on=function(){var t,e,r,i,o,a,c;r=2<=arguments.length?p.call(arguments,0,o=arguments.length-1):(o=0,[]),i=arguments[o++];t=function(t){return function(n){return i.apply(t,[n||window.event])}}(this);for(a=0,c=r.length;a<c;a++){e=r[a];n(this.$,e,t)}};c.prototype.once=function(){var t,e,r,i,o,c,s;r=2<=arguments.length?p.call(arguments,0,o=arguments.length-1):(o=0,[]),i=arguments[o++];t=function(n){return function(e){var o,c,s;for(c=0,s=r.length;c<s;c++){o=r[c];a(n.$,o,t)}return i.apply(n,[e||window.event])}}(this);for(c=0,s=r.length;c<s;c++){e=r[c];n(this.$,e,t)}};c.prototype.addClass=function(n){if(!e(this.$,n)){t(this.$,n)}};c.prototype.removeClass=function(t){if(e(this.$,t)){o(this.$,t)}};c.prototype.hasClass=function(t){return e(this.$,t)};n=function(t,n,e){if(t.addEventListener){t.addEventListener(""+n,e)}else{t.attachEvent("on"+n,e)}};a=function(t,n,e){if(t.removeEventListener){t.removeEventListener(""+n,e)}else{t.detachEvent("on"+n,e)}};i=/[ \t\n\f\r]+/g;r=/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g;t=function(t,n){t.className+=" "+n};o=function(t,n){t.className=(" "+t.className+" ").replace(i," ").replace(" "+n+" ","").replace(r,"")};e=function(t,n){return(" "+t.className+" ").replace(i," ").indexOf(" "+n+" ")>=0};return c}();a=function(t){g(n,t);function n(t){n.__super__.constructor.call(this,"iframe",function(n){var e,r,i,o;i={allowtransparency:true,scrolling:"no",frameBorder:0};for(e in i){r=i[e];n.setAttribute(e,r)}o={border:"none",height:"0",width:"1px"};for(e in o){r=o[e];n.style[e]=r}if(t){t.apply(this,[n])}})}n.prototype.html=function(t){var n;try{n=this.$.contentWindow.document;n.open();n.write(t);n.close()}catch(e){}};n.prototype.load=function(t){return this.$.src=t};n.prototype.size=function(){var t,n,e,r;try{n=this.$.contentWindow.document;e=n.documentElement;t=n.body;e.style.overflow=t.style.overflow=window.opera?"scroll":"visible";r={width:""+t.scrollWidth+"px",height:""+t.scrollHeight+"px"};e.style.overflow=t.style.overflow="";return r}catch(i){return{}}};n.prototype.resize=function(t){var n,e,r;r=t!=null?t:this.size(),e=r.width,n=r.height;if(e){this.$.style.width=e}if(n){return this.$.style.height=n}};return n}(i);t=function(){var t;function n(){}n.parse=function(n){return{href:t(n.href),text:n.getAttribute("data-text")||n.textContent||n.innerText,data:{count:{api:function(){var t;if(t=n.getAttribute("data-count-api")){if("/"!==t.charAt(0)){t="/"+t}return t}}(),href:function(){var e;if((e=n.getAttribute("data-count-href"))&&(e=t(e))){return e}else{return t(n.href)}}()},style:function(){var t,e,i,o,a;if(e=n.getAttribute("data-style")){a=r.styles;for(i=0,o=a.length;i<o;i++){t=a[i];if(t===e){return e}}}return r.styles[0]}(),icon:function(){var t;if(t=n.getAttribute("data-icon")){return t}}()}}};t=function(t){if(!/^\s*javascript:/i.test(t)){return t}};return n}();n=function(t){g(n,t);function n(){var t,e,o;e=arguments[0],t=2<=arguments.length?p.call(arguments,1):[];n.__super__.constructor.call(this,t.shift());o=function(n){return function(){var i;i=n.size();n.once("load",function(){this.resize(i);if(t[0]){t.shift()(this.$)}});n.load(""+r.url+"buttons.html"+e)}}(this);this.once("load",function(){var t,n;if(t=this.$.contentWindow.callback){n=t.script;if(n.readyState){new i(n).on("readystatechange",function(){if(/loaded|complete/.test(n.readyState)){o()}})}else{new i(n).on("load","error",function(){o()})}}else{o()}});this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+r.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+e+'";</script>\n</head>\n<body>\n<script src="'+r.script.src+'"></script>\n</body>\n</html>')}return n}(a);e=function(){var t,n;function e(e){if(e&&e.data){document.body.className=e.data.style;document.getElementsByTagName("base")[0].href=e.href;new t(e,function(t){document.body.appendChild(t)});new n(e,function(t){document.body.appendChild(t)})}}t=function(t){g(n,t);function n(t,e){n.__super__.constructor.call(this,"a",function(n){n.className="button";if(t.href){n.href=t.href}new i("i",function(e){e=document.createElement("i");e.className=function(){var n;n=[t.data.icon||r.icon];if(r.iconClass){n.push(r.iconClass)}return n.join(" ")}();n.appendChild(e)});new i("span",function(t){t.appendChild(document.createTextNode(" "));n.appendChild(t)});new i("span",function(e){if(t.text){e.appendChild(document.createTextNode(t.text))}n.appendChild(e)});if(e){e(n)}})}return n}(i);n=function(t){g(n,t);function n(t,e){if(t.data.count.api){n.__super__.constructor.call(this,"a",function(n){n.className="count";if(t.data.count.href){n.href=t.data.count.href}new i("b",function(t){n.appendChild(t)});new i("i",function(t){n.appendChild(t)});new i("span",function(a){var c;n.appendChild(a);c=function(){var n,e;e=t.data.count.api.split("#")[0];n=s.parse(e.split("?").slice(1).join("?"));n.callback="callback";return""+e.split("?")[0]+"?"+s.stringify(n)}();new i("script",function(i){var s;i.async=true;i.src=""+r.api+c;window.callback=function(r){var i;window.callback=null;if(r.meta.status===200){i=o.flatten(r.data)[t.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(i)==="[object Number]"){i=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}a.appendChild(document.createTextNode(" "+i+" "));if(e){e(n)}}};window.callback.script=i;this.on("error",function(){window.callback=null});if(i.readyState){this.on("readystatechange",function(){if(i.readyState==="loaded"&&i.children&&i.readyState==="loading"){window.callback=null}})}s=document.getElementsByTagName("head")[0];s.insertBefore(i,s.firstChild)})})})}}return n}(i);return e}();if(r.script){if(document.querySelectorAll){u=document.querySelectorAll("a."+r.anchorClass)}else{u=function(){var t,n,e,o;e=document.getElementsByTagName("a");o=[];for(t=0,n=e.length;t<n;t++){l=e[t];if(new i(l).hasClass(r.anchorClass)){o.push(l)}}return o}()}f=function(e){new n(c.encode(t.parse(e)),function(t){e.parentNode.insertBefore(t,e)},function(){e.parentNode.removeChild(e)})};for(h=0,d=u.length;h<d;h++){l=u[h];f(l)}}else{new e(c.decode())}}).call(this);
//# sourceMappingURL=buttons.js.map