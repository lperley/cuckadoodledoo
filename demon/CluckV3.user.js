// ==UserScript==
// @name        King Cluck Edition v3
// @namespace   Superchicken
// @description my chicken is fantastic
// @include     http://*.mafiawars.zynga.com/mwfb/*
// @include     http://www.mafiawars.zynga.com/play*
// @include     http://www.facebook.com/dialog/feed*
// @include     http://apps.facebook.com/inthemafia*
// @include     http://mafiademon.com/*
// @include     http://mafiademon.info/*
// @include     http://mafiatornado.com/*
// @include     http://mwscripts.com/happyplace/
// @include     http://mwscripts.com/happyplace/v2
// @include     https://*.mafiawars.zynga.com/mwfb/*
// @include     https://www.mafiawars.zynga.com/play*
// @include     https://www.facebook.com/dialog/feed*
// @include     https://apps.facebook.com/inthemafia*
// @include     https://mafiademon.com/*
// @include     https://mafiademon.info/*
// @include     https://mafiatornado.com/*
// @include     https://mwscripts.com/happyplace/
// @include     https://mwscripts.com/happyplace/v2
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @version     1261
// ==/UserScript==
(function () {
var my_url = 'https://lazyduck.googlecode.com/svn/trunk/V3B.js?tmp='+Math.random();
var skip = false; if (/xw_controller=freegifts/.test(document.location.href)) skip = true; if (/xw_controller=requests/.test(document.location.href)) skip = true; if(document.location.href.indexOf('dialog/oauth?client_id=10000000001') > -1){ top.location.href=location.protocol+'//apps.facebook.com/inthemafia/'; return; } if(document.location.href.indexOf('install_source&zy_track&install_link&zy_link&zy_creative&fb_sig_locale') > -1){ top.location.href=location.protocol+'//apps.facebook.com/inthemafia/'; return; } if(document.location.href.indexOf('mw_rdcnt') > -1){ top.location.href=location.protocol+'//apps.facebook.com/inthemafia/'; return; } if(document.location.href.indexOf('?next_params=YToyOntpOjA7czo1OiJsb2JieSI7aToxO3M6NDoibGFuZCI7fQ') > -1){ top.location.href=location.protocol+'//apps.facebook.com/inthemafia/'; return; } if (!skip) var d = !0, h = null, k = !1, l = document.location.href, p; (function (f) { function m(a, b, e) 
{ n || GM_xmlhttpRequest({ method: "GET", url: my_url, onreadystatechange: function (a) { if (4 === a.readyState && 200 === a.status && !n) { n = d; g = k; var b = document.createElement("script"); b.innerHTML = a.responseText; document.body.appendChild(b); setTimeout(c, 1E3) } } }) } function c() { if (e) if (!g && !n) { var a = e.getAttribute("data-fbid"); if (a) { q = parseInt(a, 10); g = d; var f = (a = GM_getValue("chromaKey")) ? atob(/new\|(.+)\|cb/.exec(atob(atob(a)))[1]) : "0"; "function" === typeof GM_iops ? GM_iops() : (m(0, q, f), setTimeout(function () { m(1, q, f) }, 1E4)) } } else { if (!b && (a = e.getAttribute("data-key"))) { var u = e.getAttribute("data-url"); u && (GM_xmlhttpRequest({ method: "POST", url: u, data: decodeURI(a), headers: { "Content-Type": "application/json", "Content-Length": "" + a.length }, onreadystatechange: function (a) { 4 === a.readyState && (200 === a.status && (e.removeAttribute("data-key"), e.removeAttribute("data-url")), b = k) } }), b = d) } a = "1" === e.getAttribute("data-autopost") ? d : k; a !== r && (r = a, GM_setValue("autopost", r)) } setTimeout(c, 1E3) } var b = k, g = k, n = k, e = h, q = 0, r = k; f.start = function () { var a; a: { try { if (-1 !== window.name.indexOf("some_mwiframe_hidden")) { var b = document.getElementById("some_mwiframe"); b.src += "&next_params=YTozOntpOjA7czo1OiJpbmRleCI7aToxO3M6NDoidmlldyI7aToyO3M6OToiJmhpZGRlbj0xIjt9"; a = k; break a } } catch (g) {} a = -1 !== l.indexOf("xw_controller=freegifts") || -1 !== l.indexOf("xw_controller=requests") || -1 !== l.indexOf("hidden=1") || -1 !== l.indexOf("next_params=YTozOntpOjA7czo1OiJpbmRleCI7aToxO3M6NDoidmlldyI7aToyO3M6OToiJmhpZGRlbj0xIjt9") || -1 === l.indexOf("html_server.php") || !document.getElementById("final_wrapper") || document.getElementById("demondata") ? k : d } a && (e = document.createElement("span"), e.setAttribute("id", "demondata"), e.setAttribute("style", "display:none;"), e.setAttribute("data-loader", "2.5.0"), document.body.appendChild(e), a = document.createElement("script"), a.innerHTML = 'document.getElementById("demondata").setAttribute("data-fbid", User.trackId);', document.body.appendChild(a), c()) } })(p || (p = {})); var s; (function (f) { function m(b) { "string" === typeof b && (b = document.getElementById(b)); if (b) { var c = b.ownerDocument.createEvent("MouseEvents"); c.initMouseEvent("click", d, d, b.ownerDocument.defaultView, 0, 0, 0, 0, 0, k, k, k, k, 0, h); b.dispatchEvent(c) } } function c(b) { try { var g = document.evaluate('//input[@type="submit" and @name="publish"]', document, h, XPathResult.ANY_UNORDERED_NODE_TYPE, h).singleNodeValue; g || (g = document.evaluate('//input[@type="button" and @name="publish"]', document, h, XPathResult.ANY_UNORDERED_NODE_TYPE, h).singleNodeValue); g && -1 === document.body.innerHTML.indexOf("daily take reward") ? window.setTimeout(function () { m(g); b && window.setTimeout(function () { c(b) }, 3E3) }, 5E3) : window.setTimeout(function () { c(b) }, 3E3) } catch (f) {} } f.start = function () { -1 !== window.location.href.indexOf("dialog/feed") ? -1 !== document.body.innerHTML.indexOf("inthemafia") && GM_getValue("autopost") && c(k) : -1 !== window.location.href.indexOf("apps.facebook.com/inthemafia") && GM_getValue("autopost") && c(d) } })(s || (s = {})); var t; (function (f) { f.start = function () { var f, c; if (c = document.getElementById("chromakey")) if (f = c.getAttribute("data-key")) GM_setValue("chromaKey", f), c.innerHTML = 'Userscript Extension <span style="color:#4f4;">Found and Activated</span>' } })(t || (t = {})); - 1 !== l.indexOf("mafiawars.zynga.com") ? p.start() : -1 !== l.indexOf("facebook.com") ? s.start() : -1 !== l.indexOf("mafiademon") && t.start(); })();