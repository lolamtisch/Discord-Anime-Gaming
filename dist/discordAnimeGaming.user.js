// ==UserScript==
// @name Discord-Anime-Gaming
// @namespace https://greasyfork.org/users/92233
// @description Sets the discord playing state
// @version 0.25.0
// @author lolamtisch@gmail.com
// @license GPL-3.0
// @grant GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_listValues
// @match *://myanimelist.net/anime/*
// @match *://myanimelist.net/manga/*
// @match *://myanimelist.net/animelist/*
// @match *://myanimelist.net/mangalist/*
// @match *://myanimelist.net/anime.php?id=*
// @match *://myanimelist.net/manga.php?id=*
// @match *://myanimelist.net/character/*
// @match *://myanimelist.net/people/*
// @match *://myanimelist.net/search/*
// @match *://anilist.co/*
// @match *://kitsu.io/*
// @match *://kissanime.ru/Anime/*
// @match *://kissanime.to/Anime/*
// @match *://kissmanga.com/Manga/*
// @match *://*.9anime.to/watch/*
// @match *://*.9anime.is/watch/*
// @match *://*.9anime.ru/watch/*
// @match *://*.9anime.ch/watch/*
// @match *://*.9anime.nl/watch/*
// @match *://*.9anime.live/watch/*
// @match *://*.crunchyroll.com/*
// @match *://*.mangadex.org/manga/*
// @match *://*.mangadex.org/title/*
// @match *://*.mangadex.org/chapter/*
// @match *://mangarock.com/*
// @match *://*.gogoanime.tv/*
// @match *://*.gogoanime.io/*
// @match *://*.gogoanime.in/*
// @match *://*.gogoanime.se/*
// @match *://*.gogoanime.sh/*
// @match *://*.gogoanimes.co/*
// @match *://*.anime4you.one/show/1/aid/*
// @match *://*.branitube.org/assistir/*
// @match *://*.branitube.org/animes/*
// @match *://*.www.turkanime.tv/video/*
// @match *://*.www.turkanime.tv/anime/*
// @match *://twist.moe/*
// @match *://app.emby.media/*
// @match *://app.plex.tv/*
// @match *://www.netflix.com/*
// @match *://otakustream.tv/anime/*
// @match *://otakustream.tv/movie/*
// @match *://animepahe.com/play/*
// @match *://animepahe.com/anime/*
// @match *://animeflv.net/anime/*
// @match *://animeflv.net/ver/*
// @match *://jkanime.net/*
// @match *://vrv.co/*
// @match *://proxer.me/*
// @match *://*.openload.co/*
// @match *://*.streamango.com/*
// @match *://*.mp4upload.com/*
// @match *://*.mcloud.to/*
// @match *://*.prettyfast.to/*
// @match *://*.rapidvideo.com/*
// @match *://*.static.crunchyroll.com/*
// @match *://*.static.vrv.co/*
// @match *://*.vidstreaming.io/*
// @match *://*.xstreamcdn.com/*
// @match *://*.oload.tv/*
// @match *://*.mail.ru/*
// @match *://*.myvi.ru/*
// @match *://*.sibnet.ru/*
// @match *://*.tune.pk/*
// @match *://*.vimple.ru/*
// @match *://*.href.li/*
// @match *://*.vk.com/*
// @match *://*.cloudvideo.tv/*
// @match *://*.fembed.net/*
// @match *://*.fembed.com/*
// @match *://*.youpload.co/*
// @match *://*.yourupload.com/*
// @match *://*.vidlox.me/*
// @match *://*.kwik.cx/*
// @match *://*.mega.nz/*
// @match *://*.animeflv.net/*
// @match *://*.hqq.tv/*
// @match *://*.jkanime.net/*
// @match *://*.ok.ru/*
// @match *://*.novelplanet.me/*
// @match *://*.stream.proxer.me/*
// @match *://verystream.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://greasyfork.org/scripts/33416-discord-io/code/discordio.js?version=240880
// @run-at document_start
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
var $ = jQuery;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/MALSync/src/api/storage/userscriptLegacy.ts
var userscriptLegacy = __webpack_require__(6);

// CONCATENATED MODULE: ./src/MALSync/src/api/request/requestUserscriptLegacy.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const requestUserscriptLegacy = {
    xhr(method, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var request = {
                    method: method,
                    url: url,
                    synchronous: false,
                    headers: [],
                    data: null,
                    onload: function (response) {
                        console.log(response);
                        var responseObj = {
                            finalUrl: response.finalUrl,
                            responseText: response.responseText,
                            status: response.status
                        };
                        resolve(responseObj);
                    }
                };
                if (typeof url === 'object') {
                    request.url = url.url;
                    request.headers = url.headers;
                    request.data = url.data;
                }
                GM_xmlhttpRequest(request);
            });
        });
    },
};

// EXTERNAL MODULE: ./src/MALSync/src/api/settings.ts
var settings = __webpack_require__(7);

// CONCATENATED MODULE: ./src/MALSync/src/api/userscript.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return userscript_settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });



var storage = userscriptLegacy["a" /* userscriptLegacy */];
var request = requestUserscriptLegacy;
var userscript_settings = settings["a" /* settingsObj */];
var type = 'userscript';


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(j, api, con, utils) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlPart", function() { return urlPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlParam", function() { return urlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseText", function() { return getBaseText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favicon", function() { return favicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watching", function() { return watching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planTo", function() { return planTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "episode", function() { return episode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncRegex", function() { return syncRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getselect", function() { return getselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absoluteLink", function() { return absoluteLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlChangeDetect", function() { return urlChangeDetect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDetect", function() { return changeDetect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitUntilTrue", function() { return waitUntilTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlFromTags", function() { return getUrlFromTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUrlInTags", function() { return setUrlInTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResumeWaching", function() { return setResumeWaching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResumeWaching", function() { return getResumeWaching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContinueWaching", function() { return setContinueWaching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContinueWaching", function() { return getContinueWaching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMalImages", function() { return handleMalImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMalToKissArray", function() { return getMalToKissArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTooltip", function() { return getTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epPredictionUI", function() { return epPredictionUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeDiffToText", function() { return timeDiffToText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canHideTabs", function() { return canHideTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epPrediction", function() { return epPrediction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusTag", function() { return statusTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCache", function() { return timeCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashm", function() { return flashm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashConfirm", function() { return flashConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyload", function() { return lazyload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementInViewport", function() { return elementInViewport; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function urlPart(url, part) {
    try {
        return url.split("/")[part].split("?")[0].split("#")[0];
    }
    catch (e) {
        return undefined;
    }
}
function urlParam(url, name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}
function getBaseText(element) {
    var text = element.text();
    element.children().each(function () {
        //@ts-ignore
        text = text.replace(j.$(this).text(), '');
    });
    return text;
}
function favicon(domain) {
    if (domain.indexOf('animeheaven') !== -1)
        return 'http://animeheaven.eu/favicon.ico';
    return 'https://www.google.com/s2/favicons?domain=' + domain;
}
function watching(type) {
    if (type == "manga")
        return 'Reading';
    return 'Watching';
}
function planTo(type) {
    if (type == "manga")
        return 'Plan to Read';
    return 'Plan to Watch';
}
function episode(type) {
    if (type == "manga")
        return api.storage.lang("UI_Chapter");
    return api.storage.lang("UI_Episode");
}
var syncRegex = /(^settings\/.*|^resume\/.*|^continue\/.*|^.*\/Offset$|^updateCheckTime$|^tempVersion$)/;
var status;
(function (status) {
    status[status["watching"] = 1] = "watching";
    status[status["completed"] = 2] = "completed";
    status[status["onhold"] = 3] = "onhold";
    status[status["dropped"] = 4] = "dropped";
    status[status["planToWatch"] = 6] = "planToWatch";
})(status || (status = {}));
function getselect(data, name) {
    var temp = data.split('name="' + name + '"')[1].split('</select>')[0];
    if (temp.indexOf('selected="selected"') > -1) {
        temp = temp.split('<option');
        for (var i = 0; i < temp.length; ++i) {
            if (temp[i].indexOf('selected="selected"') > -1) {
                return temp[i].split('value="')[1].split('"')[0];
            }
        }
    }
    else {
        return '';
    }
}
function absoluteLink(url, domain) {
    if (typeof url === "undefined") {
        return url;
    }
    if (!url.startsWith("http")) {
        if (url.charAt(0) !== '/')
            url = '/' + url;
        url = domain + url;
    }
    return url;
}
;
function urlChangeDetect(callback) {
    var currentPage = window.location.href;
    return setInterval(function () {
        if (currentPage != window.location.href) {
            currentPage = window.location.href;
            callback();
        }
    }, 1000);
}
function changeDetect(callback, func) {
    var currentPage = func();
    return setInterval(function () {
        var temp = func();
        if (typeof temp != 'undefined' && currentPage != temp) {
            currentPage = func();
            callback();
        }
    }, 1000);
}
function waitUntilTrue(condition, callback) {
    var Interval = null;
    Interval = setInterval(function () {
        if (condition()) {
            clearInterval(Interval);
            callback();
        }
    }, 1000);
    return Interval;
}
function getUrlFromTags(tags) {
    if (!api.settings.get('malTags'))
        return undefined;
    if (/malSync::[\d\D]+::/.test(tags)) {
        return atobURL(tags.split("malSync::")[1].split("::")[0]);
    }
    if (/last::[\d\D]+::/.test(tags)) {
        return atobURL(tags.split("last::")[1].split("::")[0]);
    }
    return undefined;
    function atobURL(encoded) {
        try {
            return atob(encoded);
        }
        catch (e) {
            return encoded;
        }
    }
}
function setUrlInTags(url, tags) {
    if (!api.settings.get('malTags'))
        return tags;
    var addition = "malSync::" + btoa(url) + "::";
    if (/(last|malSync)::[\d\D]+::/.test(tags)) {
        tags = tags.replace(/(last|malSync)::[^\^]*?::/, addition);
    }
    else {
        tags = tags + ',' + addition;
    }
    return tags;
}
function setResumeWaching(url, ep, type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.set('resume/' + type + '/' + id, { url: url, ep: ep });
    });
}
function getResumeWaching(type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        //@ts-ignore
        if (!api.settings.get('malResume'))
            return undefined;
        return api.storage.get('resume/' + type + '/' + id);
    });
}
function setContinueWaching(url, ep, type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.set('continue/' + type + '/' + id, { url: url, ep: ep });
    });
}
function getContinueWaching(type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        //@ts-ignore
        if (!api.settings.get('malContinue'))
            return undefined;
        return api.storage.get('continue/' + type + '/' + id);
    });
}
function handleMalImages(url) {
    if (url.indexOf('questionmark') !== -1)
        return api.storage.assetUrl('questionmark.gif');
    return url;
}
function getMalToKissArray(type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            var url = 'https://kissanimelist.firebaseio.com/Data2/Mal' + type + '/' + id + '/Sites.json';
            api.request.xhr('GET', url).then((response) => __awaiter(this, void 0, void 0, function* () {
                var json = j.$.parseJSON(response.responseText);
                for (var pageKey in json) {
                    var page = json[pageKey];
                    if (!api.settings.get(pageKey)) {
                        con.log(pageKey + ' is deactivated');
                        delete json[pageKey];
                        continue;
                    }
                    for (var streamKey in page) {
                        var stream = page[streamKey];
                        var streamUrl = 'https://kissanimelist.firebaseio.com/Data2/' + stream + '/' + encodeURIComponent(streamKey) + '.json';
                        var cache = yield api.storage.get('MalToKiss/' + stream + '/' + encodeURIComponent(streamKey), null);
                        if (typeof (cache) != "undefined") {
                            var streamJson = cache;
                        }
                        else {
                            var streamRespose = yield api.request.xhr('GET', streamUrl);
                            var streamJson = j.$.parseJSON(streamRespose.responseText);
                            api.storage.set('MalToKiss/' + stream + '/' + encodeURIComponent(streamKey), streamJson);
                        }
                        if (pageKey == 'Crunchyroll') {
                            streamJson['url'] = streamJson['url'] + '?season=' + streamKey;
                        }
                        json[pageKey][streamKey] = streamJson;
                    }
                }
                con.log('Mal2Kiss', json);
                resolve(json);
            }));
        });
    });
}
function getTooltip(text, style = '', direction = 'top') {
    var rNumber = Math.floor((Math.random() * 1000) + 1);
    return '<div id="tt' + rNumber + '" class="icon material-icons" style="font-size:16px; line-height: 0; color: #7f7f7f; padding-bottom: 20px; padding-left: 3px; ' + style + '">contact_support</div>\
  <div class="mdl-tooltip mdl-tooltip--' + direction + ' mdl-tooltip--large" for="tt' + rNumber + '">' + text + '</div>';
}
function epPredictionUI(malid, type = 'anime', callback) {
    return __awaiter(this, void 0, void 0, function* () {
        utils.epPrediction(malid, function (pre) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!pre)
                    callback(false);
                var updateCheckTime = yield api.storage.get("updateCheckTime");
                var aniCache = yield api.storage.get('mal/' + malid + '/aniSch');
                var elCache = undefined;
                if (typeof updateCheckTime != 'undefined' && updateCheckTime && updateCheckTime != '0') {
                    elCache = yield api.storage.get('updateCheck/' + type + '/' + malid);
                }
                if (pre === false && typeof elCache == 'undefined')
                    return;
                var UI = {
                    tag: '',
                    text: '',
                    color: '',
                    colorStyle: '',
                    tagEpisode: false,
                    prediction: pre,
                    aniCache: aniCache,
                    elCache: elCache
                };
                //
                var airing = pre.airing;
                var episode = pre.episode;
                if (typeof aniCache != 'undefined') {
                    var timestamp = aniCache.nextEpTime * 1000;
                    if (Date.now() < timestamp) {
                        episode = aniCache.currentEp;
                        var delta = (timestamp - Date.now()) / 1000;
                        pre.diffDays = Math.floor(delta / 86400);
                        delta -= pre.diffDays * 86400;
                        pre.diffHours = Math.floor(delta / 3600) % 24;
                        delta -= pre.diffHours * 3600;
                        pre.diffMinutes = Math.floor(delta / 60) % 60;
                        delta -= pre.diffMinutes * 60;
                    }
                    else {
                        if (Date.now() - timestamp < 1000 * 60 * 60 * 24) {
                            episode = aniCache.currentEp + 1;
                        }
                    }
                }
                if (typeof elCache != 'undefined' && typeof elCache.error == 'undefined') {
                    if (!elCache.finished) {
                        airing = true;
                    }
                    if (elCache.newestEp && elCache.newestEp != '' && typeof elCache.newestEp != 'undefined') {
                        episode = elCache.newestEp;
                        UI.color = 'red';
                    }
                }
                if (UI.color != '') {
                    //UI.colorStyle = 'text-decoration: underline overline !important; text-decoration-color: '+UI.color+' !important;'
                    UI.colorStyle = 'background-color: #00ff0057;';
                }
                //
                if (airing) {
                    if (pre.airing) {
                        UI.text = api.storage.lang("prediction_Episode", [pre.diffDays + 'd ' + pre.diffHours + 'h ' + pre.diffMinutes + 'm']);
                    }
                    if (episode) {
                        UI.tag = '<span class="mal-sync-ep-pre" title="' + UI.text + '">[<span style="' + UI.colorStyle + ';">' + episode + '</span>]</span>';
                        UI.tagEpisode = episode;
                    }
                }
                else {
                    if (pre) {
                        UI.text = '<span class="mal-sync-ep-pre">';
                        UI.text += api.storage.lang("prediction_Airing", [((pre.diffWeeks * 7) + pre.diffDays) + 'd ' + pre.diffHours + 'h ' + pre.diffMinutes + 'm ']);
                        UI.text += '</span>';
                    }
                }
                callback(UI);
            });
        });
    });
}
function timeDiffToText(delta) {
    var text = '';
    delta = delta / 1000;
    var diffDays = Math.floor(delta / 86400);
    delta -= diffDays * 86400;
    if (diffDays) {
        text += diffDays + 'd ';
    }
    var diffHours = Math.floor(delta / 3600) % 24;
    delta -= diffHours * 3600;
    if (diffHours && diffDays < 2) {
        text += diffHours + 'h ';
    }
    var diffMinutes = Math.floor(delta / 60) % 60;
    delta -= diffMinutes * 60;
    if (diffMinutes && !diffDays && diffHours < 3) {
        text += diffMinutes + 'min ';
    }
    return text;
}
function canHideTabs() {
    if (typeof browser != 'undefined' && typeof browser.tabs.hide != 'undefined') {
        return true;
    }
    return false;
}
function epPrediction(malId, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!api.settings.get('epPredictions'))
            return;
        var timestamp = yield api.storage.get('mal/' + malId + '/release');
        if (typeof (timestamp) != "undefined") {
            var airing = 1;
            var episode = 0;
            if (Date.now() < timestamp)
                airing = 0;
            if (airing) {
                var delta = Math.abs(Date.now() - timestamp) / 1000;
            }
            else {
                var delta = Math.abs(timestamp - Date.now()) / 1000;
            }
            var diffWeeks = Math.floor(delta / (86400 * 7));
            delta -= diffWeeks * (86400 * 7);
            if (airing) {
                //We need the time until the week is complete
                delta = (86400 * 7) - delta;
            }
            var diffDays = Math.floor(delta / 86400);
            delta -= diffDays * 86400;
            var diffHours = Math.floor(delta / 3600) % 24;
            delta -= diffHours * 3600;
            var diffMinutes = Math.floor(delta / 60) % 60;
            delta -= diffMinutes * 60;
            if (airing) {
                episode = diffWeeks - (new Date().getFullYear() - new Date(timestamp).getFullYear()); //Remove 1 week between years
                episode++;
                if (episode > 50) {
                    episode = 0;
                }
            }
            var maxEp = yield api.storage.get('mal/' + malId + '/release');
            if (typeof (maxEp) === "undefined" || episode < maxEp) {
                callback({
                    timestamp: timestamp,
                    airing: airing,
                    diffWeeks: diffWeeks,
                    diffDays: diffDays,
                    diffHours: diffHours,
                    diffMinutes: diffMinutes,
                    episode: episode
                });
                return;
            }
        }
        callback(false);
    });
}
function statusTag(status, type, id) {
    var info = {
        anime: {
            1: {
                class: 'watching',
                text: 'CW',
                title: 'Watching'
            },
            2: {
                class: 'completed',
                text: 'CMPL',
                title: 'Completed'
            },
            3: {
                class: 'on-hold',
                text: ' HOLD',
                title: 'On-Hold'
            },
            4: {
                class: 'dropped',
                text: 'DROP',
                title: 'Dropped'
            },
            6: {
                class: 'plantowatch',
                text: 'PTW',
                title: 'Plan to Watch'
            }
        },
        manga: {
            1: {
                class: 'reading',
                text: 'CR',
                title: 'Reading'
            },
            2: {
                class: 'completed',
                text: 'CMPL',
                title: 'Completed'
            },
            3: {
                class: 'on-hold',
                text: ' HOLD',
                title: 'On-Hold'
            },
            4: {
                class: 'dropped',
                text: 'DROP',
                title: 'Dropped'
            },
            6: {
                class: 'plantoread',
                text: 'PTR',
                title: 'Plan to Read'
            }
        }
    };
    $.each([1, 2, 3, 4, 6], function (i, el) {
        info.anime[info.anime[el].title] = info.anime[el];
        info.manga[info.manga[el].title] = info.manga[el];
    });
    if (status) {
        var tempInfo = info[type][status];
        return ` <a href="https://myanimelist.net/ownlist/${type}/${id}/edit?hideLayout=1" title="${tempInfo.title}" class="Lightbox_AddEdit button_edit ${tempInfo.class}">${tempInfo.text}</a>`;
    }
    return false;
}
function notifications(url, title, message, iconUrl = '') {
    var messageObj = {
        type: 'basic',
        title: title,
        message: message,
        iconUrl: iconUrl,
    };
    con.log('Notification', url, messageObj);
    api.storage.get('notificationHistory').then((history) => {
        if (typeof history === 'undefined') {
            history = [];
        }
        if (history.length >= 10) {
            history.shift();
        }
        history.push({
            url: url,
            title: messageObj.title,
            message: messageObj.message,
            iconUrl: messageObj.iconUrl,
            timestamp: Date.now()
        });
        api.storage.set('notificationHistory', history);
    });
    try {
        return chrome.notifications.create(url, messageObj);
    }
    catch (e) {
        con.error(e);
    }
}
function timeCache(key, dataFunction, ttl) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var value = yield api.storage.get(key);
            if (typeof value !== 'undefined' && new Date().getTime() < value.timestamp) {
                resolve(value.data);
                return;
            }
            var result = yield dataFunction();
            api.storage.set(key, { data: result, timestamp: new Date().getTime() + ttl }).then(() => {
                resolve(result);
            });
        }));
    });
}
//flashm
function flashm(text, options) {
    if (!j.$('#flash-div-top').length) {
        initflashm();
    }
    con.log("[Flash] Message:", text);
    var colorF = "#323232";
    if (typeof options !== 'undefined' && typeof options.error !== 'undefined' && options.error) {
        var colorF = "#3e0808";
    }
    var flashdiv = '#flash-div-bottom';
    if (typeof options !== 'undefined' && typeof options.position !== 'undefined' && options.position) {
        flashdiv = '#flash-div-' + options.position;
    }
    var messClass = "flash";
    if (typeof options !== 'undefined' && typeof options.type !== 'undefined' && options.type) {
        var tempClass = "type-" + options.type;
        j.$(flashdiv + ' .' + tempClass + ', #flashinfo-div .' + tempClass)
            .removeClass(tempClass)
            .fadeOut({
            duration: 1000,
            queue: false,
            complete: function () { j.$(this).remove(); }
        });
        messClass += " " + tempClass;
    }
    var mess = '<div class="' + messClass + '" style="display:none;">\
        <div style="display:table; pointer-events: all; padding: 14px 24px 14px 24px; margin: 0 auto; margin-top: 5px; max-width: 60%; -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 2px;color: white;background:' + colorF + '; ">\
          ' + text + '\
        </div>\
      </div>';
    if (typeof options !== 'undefined' && typeof options.hoverInfo !== 'undefined' && options.hoverInfo) {
        messClass += " flashinfo";
        mess = '<div class="' + messClass + '" style="display:none; max-height: 5000px; overflow: hidden;"><div style="display:table; pointer-events: all; margin: 0 auto; margin-top: -2px; max-width: 60%; -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 2px;color: white;background:' + colorF + '; position: relative;"><div style="max-height: 60vh; overflow-y: auto; padding: 14px 24px 14px 24px;">' + text + '</div></div></div>';
        j.$('#flashinfo-div').addClass('hover');
        var flashm = j.$(mess).appendTo('#flashinfo-div');
        if (typeof options !== 'undefined' && typeof options.minimized !== 'undefined' && options.minimized)
            flashm.css('max-height', '8px');
    }
    else {
        var flashm = j.$(mess).appendTo(flashdiv);
    }
    if (typeof options !== 'undefined' && typeof options.permanent !== 'undefined' && options.permanent) {
        flashm.slideDown(800);
    }
    else if (typeof options !== 'undefined' && typeof options.hoverInfo !== 'undefined' && options.hoverInfo) {
        flashm.slideDown(800).delay(4000).queue(function () { j.$('#flashinfo-div').removeClass('hover'); flashm.css('max-height', '8px'); });
    }
    else {
        flashm.slideDown(800).delay(4000).slideUp(800, () => {
            // @ts-ignore
            j.$(this).remove();
        });
    }
    return flashm;
}
function flashConfirm(message, type, yesCall = () => { }, cancelCall = () => { }) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            message = '<div style="text-align: center;">' + message + '</div><div style="display: flex; justify-content: space-around;"><button class="Yes" style="background-color: transparent; border: none; color: rgb(255,64,129);margin-top: 10px; cursor:pointer;">OK</button><button class="Cancel" style="background-color: transparent; border: none; color: rgb(255,64,129);margin-top: 10px; cursor:pointer;">CANCEL</button></div>';
            var flasmessage = flashm(message, { permanent: true, position: "top", type: type });
            flasmessage.find('.Yes').click(function (evt) {
                j.$(evt.target).parentsUntil('.flash').remove();
                resolve(true);
                yesCall();
            });
            flasmessage.find('.Cancel').click(function (evt) {
                j.$(evt.target).parentsUntil('.flash').remove();
                resolve(false);
                cancelCall();
            });
        });
    });
}
function initflashm() {
    api.storage.addStyle('.flashinfo{\
                    transition: max-height 2s;\
                 }\
                 .flashinfo:hover{\
                    max-height:5000px !important;\
                    z-index: 2147483647;\
                 }\
                 .flashinfo .synopsis{\
                    transition: max-height 2s, max-width 2s ease 2s;\
                 }\
                 .flashinfo:hover .synopsis{\
                    max-height:9999px !important;\
                    max-width: 500px !important;\
                    transition: max-height 2s;\
                 }\
                 #flashinfo-div{\
                  z-index: 2;\
                  transition: 2s;\
                 }\
                 #flashinfo-div:hover, #flashinfo-div.hover{\
                  z-index: 2147483647;\
                 }\
                 \
                 #flash-div-top, #flash-div-bottom, #flashinfo-div{\
                    font-family: "Helvetica","Arial",sans-serif;\
                    color: white;\
                    font-size: 14px;\
                    font-weight: 400;\
                    line-height: 17px;\
                 }\
                 #flash-div-top h2, #flash-div-bottom h2, #flashinfo-div h2{\
                    font-family: "Helvetica","Arial",sans-serif;\
                    color: white;\
                    font-size: 14px;\
                    font-weight: 700;\
                    line-height: 17px;\
                    padding: 0;\
                    margin: 0;\
                 }\
                 #flash-div-top a, #flash-div-bottom a, #flashinfo-div a{\
                    color: #DF6300;\
                 }');
    j.$('body').after('<div id="flash-div-top" style="text-align: center;pointer-events: none;position: fixed;top:-5px;width:100%;z-index: 2147483647;left: 0;"></div>\
        <div id="flash-div-bottom" style="text-align: center;pointer-events: none;position: fixed;bottom:0px;width:100%;z-index: 2147483647;left: 0;"><div id="flash" style="display:none;  background-color: red;padding: 20px; margin: 0 auto;max-width: 60%;          -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;background:rgba(227,0,0,0.6);"></div></div>\
        <div id="flashinfo-div" style="text-align: center;pointer-events: none;position: fixed;bottom:0px;width:100%;left: 0;">');
}
var lazyloaded = false;
var lazyimages = new Array();
function lazyload(doc, scrollElement = '.mdl-layout__content') {
    /* lazyload.js (c) Lorenzo Giuliani
     * MIT License (http://www.opensource.org/licenses/mit-license.html)
     *
     * expects a list of:
     * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
     */
    function loadImage(el, fn) {
        if (!j.$(el).is(':visible'))
            return false;
        if (j.$(el).hasClass('lazyBack')) {
            j.$(el).css('background-image', 'url(' + el.getAttribute('data-src') + ')').removeClass('lazyBack');
        }
        else {
            var img = new Image(), src = el.getAttribute('data-src');
            img.onload = function () {
                if (!!el.parent)
                    el.parent.replaceChild(img, el);
                else
                    el.src = src;
                fn ? fn() : null;
            };
            img.src = src;
        }
    }
    for (var i = 0; i < lazyimages.length; i++) {
        $(lazyimages[i]).addClass('init');
    }
    ;
    lazyimages = new Array();
    var query = doc.find('img.lazy.init, .lazyBack.init'), processScroll = function () {
        for (var i = 0; i < lazyimages.length; i++) {
            if (utils.elementInViewport(lazyimages[i], 600)) {
                loadImage(lazyimages[i], function () {
                    lazyimages.splice(i, i);
                });
            }
            if (!$(lazyimages[i]).length) {
                lazyimages.splice(i, i);
            }
        }
        ;
    };
    // Array.prototype.slice.call is not callable under our lovely IE8
    for (var i = 0; i < query.length; i++) {
        lazyimages.push(query[i]);
        $(query[i]).removeClass('init');
    }
    ;
    processScroll();
    if (!lazyloaded) {
        lazyloaded = true;
        doc.find(scrollElement).scroll(function () {
            processScroll();
        });
    }
}
function elementInViewport(el, horizontalOffset = 0) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0
        && rect.left >= 0
        // @ts-ignore
        && (rect.top - horizontalOffset) <= (window.innerHeight || document.documentElement.clientHeight));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(1), __webpack_require__(4), __webpack_require__(2)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
var log = function () {
    return Function.prototype.bind.call(console.log, console, "%cMAL-Sync", "background-color: #2e51a2; color: white; padding: 2px 10px; border-radius: 3px;");
}();
var error = function () {
    return Function.prototype.bind.call(console.error, console, "%cMAL-Sync", "background-color: #8f0000; color: white; padding: 2px 10px; border-radius: 3px;");
}();
var info = function () {
    return Function.prototype.bind.call(console.info, console, "%cMAL-Sync", "background-color: wheat; color: black; padding: 2px 10px; border-radius: 3px;");
}();


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pages; });
/* unused harmony export pageSearch */
/* harmony import */ var _Kissanime_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _Kissmanga_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _nineAnime_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _Crunchyroll_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _Mangadex_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _Mangarock_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Gogoanime_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _Anime4you_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _Branitube_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _Turkanime_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _Twistmoe_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _Emby_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var _Plex_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var _Netflix_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _Otakustream_main__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _animepahe_main__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _Animeflv_main__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24);
/* harmony import */ var _Jkanime_main__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25);
/* harmony import */ var _Vrv_main__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26);
/* harmony import */ var _Proxer_main__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27);




















const pages = {
    Kissanime: _Kissanime_main__WEBPACK_IMPORTED_MODULE_0__[/* Kissanime */ "a"],
    Kissmanga: _Kissmanga_main__WEBPACK_IMPORTED_MODULE_1__[/* Kissmanga */ "a"],
    nineAnime: _nineAnime_main__WEBPACK_IMPORTED_MODULE_2__[/* nineAnime */ "a"],
    Crunchyroll: _Crunchyroll_main__WEBPACK_IMPORTED_MODULE_3__[/* Crunchyroll */ "a"],
    Mangadex: _Mangadex_main__WEBPACK_IMPORTED_MODULE_4__[/* Mangadex */ "a"],
    Mangarock: _Mangarock_main__WEBPACK_IMPORTED_MODULE_5__[/* Mangarock */ "a"],
    Gogoanime: _Gogoanime_main__WEBPACK_IMPORTED_MODULE_6__[/* Gogoanime */ "a"],
    Anime4you: _Anime4you_main__WEBPACK_IMPORTED_MODULE_7__[/* Anime4you */ "a"],
    Branitube: _Branitube_main__WEBPACK_IMPORTED_MODULE_8__[/* Branitube */ "a"],
    Turkanime: _Turkanime_main__WEBPACK_IMPORTED_MODULE_9__[/* Turkanime */ "a"],
    Twistmoe: _Twistmoe_main__WEBPACK_IMPORTED_MODULE_10__[/* Twistmoe */ "a"],
    animeflv: _Animeflv_main__WEBPACK_IMPORTED_MODULE_16__[/* animeflv */ "a"],
    Jkanime: _Jkanime_main__WEBPACK_IMPORTED_MODULE_17__[/* Jkanime */ "a"],
    Emby: _Emby_main__WEBPACK_IMPORTED_MODULE_11__[/* Emby */ "a"],
    Plex: _Plex_main__WEBPACK_IMPORTED_MODULE_12__[/* Plex */ "a"],
    Netflix: _Netflix_main__WEBPACK_IMPORTED_MODULE_13__[/* Netflix */ "a"],
    Otakustream: _Otakustream_main__WEBPACK_IMPORTED_MODULE_14__[/* Otakustream */ "a"],
    animepahe: _animepahe_main__WEBPACK_IMPORTED_MODULE_15__[/* animepahe */ "a"],
    Vrv: _Vrv_main__WEBPACK_IMPORTED_MODULE_18__[/* Vrv */ "a"],
    Proxer: _Proxer_main__WEBPACK_IMPORTED_MODULE_19__[/* Proxer */ "a"],
};
const pageSearch = {
    Crunchyroll: {
        name: 'Crunchyroll',
        type: 'anime',
        domain: 'www.crunchyroll.com',
        searchUrl: (titleEncoded) => { return 'http://www.crunchyroll.com/search?q=' + titleEncoded; }
    },
    Netflix: {
        name: 'Netflix',
        type: 'anime',
        domain: 'www.netflix.com',
        searchUrl: (titleEncoded) => { return 'https://www.netflix.com/search?q=' + titleEncoded; }
    },
    nineAnime: {
        name: '9Anime',
        type: 'anime',
        domain: '9anime.to',
        googleSearchDomain: '9anime.to/watch',
        searchUrl: (titleEncoded) => { return 'https://www1.9anime.to/search?keyword=' + titleEncoded; }
    },
    Otakustream: {
        name: 'Otakustream',
        type: 'anime',
        domain: 'otakustream.tv',
        searchUrl: (titleEncoded) => { return 'https://otakustream.tv/?s=' + titleEncoded; },
    },
    Kissanime: {
        name: 'Kissanime',
        type: 'anime',
        domain: 'kissanime.ru',
        searchUrl: (titleEncoded) => { return ''; },
        completeSearchTag: (title, linkContent) => { return '<form class="mal_links" target="_blank" action="https://kissanime.ru/Search/Anime" style="display: inline;" id="kissanimeSearch" method="post" _lpchecked="1"><a href="#" class="submitKissanimeSearch" onclick="document.getElementById(\'kissanimeSearch\').submit(); return false;">' + linkContent + '</a><input type="hidden" id="keyword" name="keyword" value="' + title + '"/></form>'; }
    },
    Gogoanime: {
        name: 'Gogoanime',
        type: 'anime',
        domain: 'www.gogoanime.in',
        searchUrl: (titleEncoded) => { return 'http://gogoanimes.co/search.html?keyword=' + titleEncoded; }
    },
    Turkanime: {
        name: 'Turkanime',
        type: 'anime',
        domain: 'www.turkanime.tv/',
        searchUrl: (titleEncoded) => { return 'https://www.google.com/search?q=' + titleEncoded + '+site:turkanime.tv/anime/'; },
        googleSearchDomain: 'turkanime.tv/anime/'
    },
    animeflv: {
        name: 'animeflv',
        type: 'anime',
        domain: 'animeflv.net',
        searchUrl: (titleEncoded) => { return 'https://animeflv.net/browse?q=' + titleEncoded; }
    },
    Jkanime: {
        name: 'Jkanime',
        type: 'anime',
        domain: 'jkanime.net',
        searchUrl: (titleEncoded) => { return 'https://jkanime.net/buscar/' + titleEncoded + '/1/'; }
    },
    Mangadex: {
        name: 'Mangadex',
        type: 'manga',
        domain: 'mangadex.org',
        searchUrl: (titleEncoded) => { return 'https://mangadex.org/quick_search/' + titleEncoded; }
    },
    Mangarock: {
        name: 'Mangarock',
        type: 'manga',
        domain: 'mangarock.com',
        searchUrl: (titleEncoded) => { return 'https://mangarock.com/search?q=' + titleEncoded; }
    },
    Kissmanga: {
        name: 'Kissmanga',
        type: 'manga',
        domain: 'kissmanga.com',
        searchUrl: (titleEncoded) => { return ''; },
        completeSearchTag: (title, linkContent) => { return '<form class="mal_links" target="_blank" action="https://kissmanga.com/Search/Manga" style="display: inline;" id="kissanimeSearch" method="post" _lpchecked="1"><a href="#" class="submitKissanimeSearch" onclick="document.getElementById(\'kissanimeSearch\').submit(); return false;">' + linkContent + '</a><input type="hidden" id="keyword" name="keyword" value="' + title + '"/></form>'; }
    },
    AniList: {
        name: 'AniList',
        type: 'anime',
        domain: 'anilist.co',
        searchUrl: (titleEncoded) => { return 'https://anilist.co/search/anime?sort=SEARCH_MATCH&search=' + titleEncoded; }
    },
    AniListManga: {
        name: 'AniList',
        type: 'manga',
        domain: 'anilist.co',
        searchUrl: (titleEncoded) => { return 'https://anilist.co/search/manga?sort=SEARCH_MATCH&search=' + titleEncoded; }
    },
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userscriptLegacy; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const userscriptLegacy = {
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            GM_setValue(key, value);
        });
    },
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = GM_getValue(key);
            return value;
        });
    },
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            GM_deleteValue(key);
        });
    },
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            var reverseArray = {};
            j.$.each(GM_listValues(), function (index, cache) {
                reverseArray[cache] = index;
            });
            return reverseArray;
        });
    },
    addStyle(css) {
        return __awaiter(this, void 0, void 0, function* () {
            GM_addStyle(css);
        });
    },
    version() {
        return GM_info.script.version;
    },
    lang(selector, args) {
        var message = i18n[selector];
        if (typeof args !== 'undefined') {
            for (var argIndex = 0; argIndex < args.length; argIndex++) {
                message = message.replace("$" + (argIndex + 1), args[argIndex]);
            }
        }
        return message;
    },
    assetUrl(filename) {
        return 'https://raw.githubusercontent.com/lolamtisch/MALSync/master/assets/assets/' + filename;
    },
    injectCssResource(res, head) {
        head.append(j.$('<style>')
            .attr("rel", "stylesheet")
            .attr("type", "text/css")
            .html(GM_getResourceText(res)));
    },
    injectjsResource(res, head) {
        var s = document.createElement('script');
        s.text = GM_getResourceText(res);
        s.onload = function () {
            // @ts-ignore
            this.remove();
        };
        head.get(0).appendChild(s);
    },
    updateDom(head) {
        var s = document.createElement('script');
        s.text = `
        document.getElementsByTagName('head')[0].onclick = function(e){
          try{
            componentHandler.upgradeDom();
          }catch(e){
            console.log(e);
            setTimeout(function(){
              componentHandler.upgradeDom();
            },500);
          }
        }`;
        s.onload = function () {
            // @ts-ignore
            this.remove();
        };
        head.get(0).appendChild(s);
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingsObj; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var settingsObj = {
    options: {
        autoTrackingModeanime: 'video',
        autoTrackingModemanga: 'instant',
        forceEn: false,
        userscriptMode: false,
        syncMode: 'MAL',
        delay: 0,
        videoDuration: 85,
        malTags: true,
        malContinue: true,
        malResume: true,
        epPredictions: true,
        theme: 'light',
        posLeft: 'left',
        miniMALonMal: false,
        floatButtonStealth: false,
        floatButtonHide: false,
        autoCloseMinimal: false,
        outWay: true,
        miniMalWidth: '500px',
        miniMalHeight: '90%',
        malThumbnail: 100,
        friendScore: true,
        SiteSearch: true,
        '9anime': true,
        Crunchyroll: true,
        Gogoanime: true,
        Kissanime: true,
        Masterani: true,
        Animeheaven: true,
        Twistmoe: true,
        Anime4you: true,
        Kissmanga: true,
        Mangadex: true,
        Mangarock: true,
        Netflix: true,
        Proxeranime: true,
        Proxermanga: true,
        autofull: false,
        introSkip: 85,
        updateCheckNotifications: true,
        'anilistToken': '',
        'kitsuToken': '',
    },
    init: function () {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                for (var key in this.options) {
                    var store = yield api.storage.get('settings/' + key);
                    if (typeof store != 'undefined') {
                        this.options[key] = store;
                    }
                }
                con.log('Settings', this.options);
                resolve(this);
            }));
        });
    },
    get: function (name) {
        return this.options[name];
    },
    set: function (name, value) {
        if (this.options.hasOwnProperty(name)) {
            this.options[name] = value;
            return api.storage.set('settings/' + name, value);
        }
        else {
            con.error(name + ' is not a defined option');
        }
    },
    getAsync: function (name) {
        return __awaiter(this, void 0, void 0, function* () {
            var value = yield api.storage.get('settings/' + name);
            if (typeof value === 'undefined' && typeof this.options[name] !== undefined)
                return this.options[name];
            return value;
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils, j, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kissanime; });
const Kissanime = {
    name: 'kissanime',
    domain: 'http://kissanime.ru',
    database: 'Kissanime',
    type: 'anime',
    isSyncPage: function (url) {
        if (typeof utils.urlPart(url, 5) != 'undefined') {
            if (j.$('#centerDivVideo').length) {
                return true;
            }
        }
        return false;
    },
    sync: {
        getTitle: function (url) { return j.$('#navsubbar a').first().text().replace('Anime', '').replace('information', '').trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 5).join('/'); },
        getEpisode: function (url) {
            var episodePart = utils.urlPart(url, 5);
            episodePart = episodePart.replace(/1080p/i, ' ').replace(/720p/i, ' ');
            var temp = [];
            temp = episodePart.match(/[e,E][p,P][i,I]?[s,S]?[o,O]?[d,D]?[e,E]?\D?\d{3}/);
            if (temp !== null) {
                episodePart = temp[0];
            }
            temp = episodePart.match(/\d{3}/);
            if (temp === null) {
                temp = episodePart.match(/\d{2,}\-/);
                if (temp === null) {
                    episodePart = 1;
                }
                else {
                    episodePart = temp[0];
                }
            }
            else {
                episodePart = temp[0];
            }
            return episodePart;
        },
        nextEpUrl: function (url) { return url.replace(/\/[^\/]*$/, '') + '/' + j.$('#selectEpisode option:selected').next().val(); }
    },
    overview: {
        getTitle: function () { return j.$('.bigChar').first().text(); },
        getIdentifier: function (url) { return Kissanime.sync.getIdentifier(url); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".bigChar").first()); },
        list: {
            offsetHandler: true,
            elementsSelector: function () { return j.$(".listing tr"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find('a').first().attr('href'), Kissanime.domain); },
            elementEp: function (selector) {
                var url = Kissanime.overview.list.elementUrl(selector);
                if (/_ED/.test(url))
                    return NaN;
                return Kissanime.sync.getEpisode(url);
            },
        }
    },
    init(page) {
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(29).toString());
        j.$(document).ready(function () { page.handlePage(); });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils, j, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kissmanga; });
const Kissmanga = {
    name: 'kissmanga',
    domain: 'http://kissmanga.com',
    database: 'Kissmanga',
    type: 'manga',
    isSyncPage: function (url) {
        if (typeof utils.urlPart(url, 5) != 'undefined') {
            return true;
        }
        return false;
    },
    sync: {
        getTitle: function (url) { return j.$('#navsubbar a').first().text().replace('Manga', '').replace('information', '').trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 5).join('/'); },
        getEpisode: function (url) {
            var episodePart = utils.urlPart(url, 5);
            //var temp = [];
            /*try{
              episodePart = episodePart.replace(j.$('.bigChar').attr('href').split('/')[2],'');
            }catch(e){
              episodePart = episodePart.replace(kalUrl.split("/")[4],'');
            }*/
            var temp = episodePart.match(/[c,C][h,H][a,A]?[p,P]?[t,T]?[e,E]?[r,R]?\D?\d+/);
            if (temp === null) {
                episodePart = episodePart.replace(/[V,v][o,O][l,L]\D?\d+/, '');
                temp = episodePart.match(/\d{3}/);
                if (temp === null) {
                    temp = episodePart.match(/\d+/);
                    if (temp === null) {
                        episodePart = 0;
                    }
                    else {
                        episodePart = temp[0];
                    }
                }
                else {
                    episodePart = temp[0];
                }
            }
            else {
                episodePart = temp[0].match(/\d+/)[0];
            }
            return episodePart;
        },
        getVolume: function (url) {
            try {
                url = url.match(/[V,v][o,O][l,L]\D?\d{3}/)[0];
                url = url.match(/\d+/)[0].slice(-3);
            }
            catch (e) {
                return;
            }
            return url;
        },
    },
    overview: {
        getTitle: function () { return j.$('.bigChar').first().text(); },
        getIdentifier: function (url) { return Kissmanga.sync.getIdentifier(url); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".bigChar").first()); },
        list: {
            offsetHandler: true,
            elementsSelector: function () { return j.$(".listing tr"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find('a').first().attr('href'), Kissmanga.domain); },
            elementEp: function (selector) {
                var url = Kissmanga.overview.list.elementUrl(selector);
                if (/_ED/.test(url))
                    return NaN;
                return Kissmanga.sync.getEpisode(url);
            },
        }
    },
    init(page) {
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(31).toString());
        j.$(document).ready(function () { page.handlePage(); });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nineAnime; });
const nineAnime = {
    name: '9anime',
    domain: 'https://9anime.to',
    database: '9anime',
    type: 'anime',
    isSyncPage: function (url) { return true; },
    sync: {
        getTitle: function (url) { return j.$('h1.title').text(); },
        getIdentifier: function (url) {
            url = url.split("/")[4].split("?")[0];
            if (url.indexOf(".") > -1) {
                url = url.split(".")[1];
            }
            return url;
        },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 5).join('/'); },
        getEpisode: function (url) { return parseInt(j.$(".servers .episodes a.active").attr('data-base')); },
        nextEpUrl: function (url) { return nineAnime.domain + j.$(".servers .episodes a.active").parent('li').next().find('a').attr('href'); },
        uiSelector: function (selector) { j.$('<div class="widget info"><div class="widget-body"> <p id="malp">' + selector.html() + '</p></div></div>').insertBefore(j.$(".widget.info").first()); },
    },
    overview: {
        getTitle: function (url) { return ''; },
        getIdentifier: function (url) { return ''; },
        uiSelector: function (selector) { },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$(".episodes.range a"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.attr('href'), nineAnime.domain); },
            elementEp: function (selector) { return selector.attr('data-base'); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(33).toString());
        utils.waitUntilTrue(function () { return j.$('.servers').length; }, function () {
            con.info('Start check');
            page.handlePage();
            utils.urlChangeDetect(function () {
                con.info('Check');
                page.handlePage();
            });
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crunchyroll; });
//TODO: Add mal2kiss season argument
const Crunchyroll = {
    name: 'Crunchyroll',
    domain: 'http://www.crunchyroll.com',
    database: 'Crunchyroll',
    type: 'anime',
    isSyncPage: function (url) {
        if (typeof url.split('/')[4] != 'undefined') {
            if (j.$('#showmedia_video').length) {
                return true;
            }
        }
        return false;
    },
    sync: {
        getTitle: function (url) { return Crunchyroll.sync.getIdentifier(urlHandling(url)); },
        getIdentifier: function (url) {
            var script = (j.$("#template_body script")[1]).innerHTML;
            script = script.split('mediaMetadata =')[1].split('"name":"')[1].split(' -')[0];
            script = JSON.parse('"' + script.replace('"', '\\"') + '"');
            return script;
        },
        getOverviewUrl: function (url) { return urlHandling(url).split('/').slice(0, 4).join('/') + '?season=' + Crunchyroll.sync.getIdentifier(urlHandling(url)); },
        getEpisode: function (url) {
            return episodeHelper(url, j.$('h1.ellipsis').text().replace(j.$('h1.ellipsis > a').text(), '').trim());
        },
        nextEpUrl: function (url) { return Crunchyroll.domain + j.$('.collection-carousel-media-link-current').parent().next().find('.link').attr('href'); }
    },
    overview: {
        getTitle: function (url) { return Crunchyroll.overview.getIdentifier(urlHandling(url)); },
        getIdentifier: function (url) {
            if (j.$('.season-dropdown').length > 1) {
                throw new Error('MAL-Sync does not support multiple seasons');
            }
            else {
                if (j.$('.season-dropdown').length) {
                    return j.$('.season-dropdown').first().text();
                }
                else {
                    return j.$('#source_showview h1 span').text();
                }
            }
        },
        uiSelector: function (selector) { selector.insertBefore(j.$("#tabs").first()); },
        list: {
            offsetHandler: true,
            elementsSelector: function () { return j.$("#showview_content_videos .list-of-seasons .group-item a"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.attr('href'), Crunchyroll.domain); },
            elementEp: function (selector) {
                var url = Crunchyroll.overview.list.elementUrl(selector);
                return episodeHelper(urlHandling(url), selector.find('.series-title').text().trim());
            },
        }
    },
    init(page) {
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(35).toString());
        page.setCacheTemp = page.setCache;
        page.setCache = function (url, toDatabase, identifier = null) {
            if (this.page.isSyncPage(this.url)) {
                this.setCacheTemp(url, toDatabase, identifier);
            }
        };
        page.databaseRequestTemp = page.databaseRequest;
        page.databaseRequest = function (malurl, toDatabase, identifier, kissurl = null) {
            this.databaseRequestTemp(malurl, toDatabase, identifier, this.url + '?..' + encodeURIComponent(identifier.toLowerCase().split('#')[0]).replace(/\./g, '%2E'));
        };
        j.$(document).ready(function () {
            if (j.$('.season-dropdown').length > 1) {
                j.$('.season-dropdown').append('<span class="exclusivMal" style="float: right; margin-right: 20px; color: #0A6DA4;" onclick="return false;">MAL</span>');
                j.$('.exclusivMal').click(function (evt) {
                    j.$('#showview_content').before('<div><a href="' + page.url.split('?')[0] + '">Show hidden seasons</a></div>');
                    var thisparent = j.$(evt.target).parent();
                    j.$('.season-dropdown').not(thisparent).siblings().remove();
                    j.$('.season-dropdown').not(thisparent).remove();
                    j.$('.portrait-grid').css('display', 'block').find("li.group-item img.landscape").each(function () {
                        // @ts-ignore
                        void 0 === j.$(this).attr("src") && j.$(this).attr("src", j.$(this).attr("data-thumbnailUrl"));
                    }),
                        j.$('.exclusivMal').remove();
                    page.handlePage();
                });
                var season = new RegExp('[\?&]' + 'season' + '=([^&#]*)').exec(page.url);
                if (season != null) {
                    // @ts-ignore
                    season = season[1] || null;
                    if (season != null) {
                        // @ts-ignore
                        season = decodeURIComponent(decodeURI(season));
                        j.$('.season-dropdown[title="' + season + '" i] .exclusivMal').first().click();
                    }
                }
                return;
            }
            else {
                page.handlePage();
            }
        });
    }
};
function urlHandling(url) {
    var langslug = j.$('#home_link, #logo_beta a').first().attr('href');
    if (langslug == '/') {
        return url;
    }
    else {
        return url.replace(langslug, '');
    }
}
function episodeHelper(url, episodeText) {
    var episodePart = utils.urlPart(urlHandling(url), 4);
    try {
        if (/\d+\.\d+/.test(episodeText)) {
            episodePart = 'episode' + episodeText.match(/\d+\.\d+/)[0];
        }
    }
    catch (e) {
        con.error(e);
    }
    var temp = [];
    temp = episodePart.match(/[e,E][p,P][i,I]?[s,S]?[o,O]?[d,D]?[e,E]?\D?\d+/);
    if (temp !== null) {
        episodePart = temp[0];
    }
    else {
        episodePart = '';
    }
    temp = episodePart.match(/\d+/);
    if (temp === null) {
        episodePart = 1;
    }
    else {
        episodePart = temp[0];
    }
    return episodePart;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mangadex; });
const Mangadex = {
    name: 'Mangadex',
    domain: 'https://www.mangadex.org',
    database: 'Mangadex',
    type: 'manga',
    isSyncPage: function (url) {
        if (url.split('/')[3] !== 'chapter') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.manga-link, a.manga_title').text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(Mangadex.sync.getOverviewUrl(url), 4); },
        getOverviewUrl: function (url) { return utils.absoluteLink(j.$('a.manga-link, a.manga_title').first().attr('href'), Mangadex.domain); },
        getEpisode: function (url) {
            var chapterId = url.split('/')[4];
            var curOption = j.$('#jump-chapter option[value="' + chapterId + '"], #jump_chapter option[value="' + chapterId + '"]');
            if (curOption.length) {
                var temp = curOption.text().trim().match(/(ch\.|chapter)\D?\d+/i);
                if (temp !== null) {
                    return EpisodePartToEpisode(temp[0]);
                }
            }
            return NaN;
        },
        getVolume: function (url) {
            var chapterId = url.split('/')[4];
            var curOption = j.$('#jump-chapter option[value="' + chapterId + '"], #jump_chapter option[value="' + chapterId + '"]');
            if (curOption.length) {
                var temp = curOption.text().trim().match(/(vol\.|volume)\D?\d+/i);
                if (temp !== null) {
                    temp = temp[0].match(/\d+/);
                    if (temp !== null) {
                        return parseInt(temp[0]);
                    }
                }
            }
            return 0;
        },
    },
    overview: {
        getTitle: function () { return j.$('.card-header').first().text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        uiSelector: function (selector) {
            j.$(".container .card .edit.row > * > .row").first().after('<div class="row m-0 py-1 px-0 border-top"><div class="col-lg-3 col-xl-2 strong">MyAnimeList:</div><div class="col-lg-9 col-xl-10 kal-ui"></div></div>');
            selector.appendTo(j.$(".container .card .kal-ui").first());
        },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$(".chapter-container > .row:not(:first-of-type) .chapter-row"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Mangadex.domain); },
            elementEp: function (selector) { return selector.attr('data-chapter'); },
        }
    },
    init(page) {
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(37).toString());
        if (j.$('.card-header').length) {
            if (/chapter\/\d+\/comments/i.test(window.location.href)) {
                con.info('Comments');
                return;
            }
            j.$(document).ready(function () { page.handlePage(); });
        }
        else {
            con.info('Waiting');
            utils.waitUntilTrue(function () { return Mangadex.sync.getOverviewUrl(''); }, function () {
                con.info('Start');
                page.handlePage();
                var tempChapterId = utils.urlPart(window.location.href, 4);
                utils.urlChangeDetect(function () {
                    var newTempChapterId = utils.urlPart(window.location.href, 4);
                    if (tempChapterId !== newTempChapterId) {
                        tempChapterId = newTempChapterId;
                        con.info('Check');
                        page.handlePage();
                    }
                    else {
                        con.info('Nothing to do');
                    }
                });
            });
        }
        j.$(document).ready(function () {
            switch ($('#theme_id').val()) {
                case "2":
                case "4":
                case "6":
                case "7":
                    $('body').addClass('MALSyncDark');
                    break;
                default:
            }
        });
    }
};
function EpisodePartToEpisode(string) {
    if (!string)
        return '';
    if (!(isNaN(parseInt(string)))) {
        return string;
    }
    var temp = [];
    temp = string.match(/(ch\.|chapter)\D?\d+/i);
    console.log(temp);
    if (temp !== null) {
        string = temp[0];
        temp = string.match(/\d+/);
        if (temp !== null) {
            return temp[0];
        }
    }
    return '';
}
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils, j, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mangarock; });
const Mangarock = {
    name: 'Mangarock',
    domain: 'https://mangarock.com',
    database: 'Mangarock',
    type: 'manga',
    isSyncPage: function (url) {
        if (typeof utils.urlPart(url, 5) != 'undefined') {
            return true;
        }
        return false;
    },
    sync: {
        getTitle: function (url) {
            return j.$('a[href*="' + Mangarock.overview.getIdentifier(url) + '"]').text().trim();
        },
        getIdentifier: function (url) { return Mangarock.overview.getIdentifier(url); },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 5).join('/'); },
        getEpisode: function (url) {
            con.log(j.$("option:contains('Chapter')").first().parent().find(':selected').text());
            return EpisodePartToEpisode(j.$("option:contains('Chapter')").first().parent().find(':selected').text());
        },
        getVolume: function (url) {
            return 0;
        },
    },
    overview: {
        getTitle: function () { return j.$('h1').first().text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4).replace(/mrs-serie-/i, ''); },
        uiSelector: function (selector) {
            selector.insertBefore($("#chapters-list").first());
        },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('[data-test="chapter-table"] tr'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Mangarock.domain); },
            elementEp: function (selector) { return EpisodePartToEpisode(selector.find('a').text()); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(39).toString());
        start();
        utils.urlChangeDetect(function () {
            page.url = window.location.href;
            page.UILoaded = false;
            $('#flashinfo-div, #flash-div-bottom, #flash-div-top').remove();
            start();
        });
        function start() {
            if (!/manga/i.test(utils.urlPart(page.url, 3))) {
                con.log('Not a manga page!');
                return;
            }
            if (Mangarock.isSyncPage(page.url)) {
                utils.waitUntilTrue(function () { return Mangarock.sync.getTitle(page.url); }, function () {
                    page.handlePage();
                });
            }
            else {
                j.$(document).ready(function () {
                    var waitTimeout = false;
                    utils.waitUntilTrue(function () {
                        con.log('visibility', j.$('#page-content .col-lg-8 .lazyload-placeholder:visible').length);
                        return !j.$('#page-content .col-lg-8 .lazyload-placeholder:visible').length || waitTimeout;
                    }, function () {
                        page.handlePage();
                    });
                    setTimeout(function () {
                        waitTimeout = true;
                    }, 1000);
                });
            }
        }
    }
};
function EpisodePartToEpisode(string) {
    if (!string)
        return '';
    if (!(isNaN(parseInt(string)))) {
        return string;
    }
    //https://mangarock.com/manga/mrs-serie-124208
    string = string.replace(/(campaign|battle)/i, 'Chapter');
    var temp = [];
    temp = string.match(/Chapter\ \d+/i);
    con.log(temp);
    if (temp !== null) {
        string = temp[0];
        temp = string.match(/\d+/);
        if (temp !== null) {
            return temp[0];
        }
    }
    else {
        var tempString = string.replace(/vol(ume)?.?\d+/i, '');
        tempString = tempString.replace(/:.+/i, '');
        temp = tempString.match(/\d+/i);
        if (temp !== null && temp.length === 1) {
            return temp[0];
        }
    }
    return '';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils, j, api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gogoanime; });
const Gogoanime = {
    name: 'Gogoanime',
    domain: ['https://gogoanimes.co', 'https://gogoanime.tv'],
    database: 'Gogoanime',
    type: 'anime',
    isSyncPage: function (url) {
        if (utils.urlPart(url, 3) === 'category') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.anime-info a').first().text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 3).split('-episode')[0]; },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 3).join('/') + '/category/' + Gogoanime.sync.getIdentifier(url); },
        getEpisode: function (url) { return utils.urlPart(url, 3).split('episode-')[1]; },
        nextEpUrl: function (url) { return Gogoanime.domain + j.$('.anime_video_body_episodes_r a').last().attr('href'); }
    },
    overview: {
        getTitle: function (url) { return Gogoanime.overview.getIdentifier(url); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        uiSelector: function (selector) { selector.prependTo(j.$(".anime_info_body").first()); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$("#episode_related a"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.attr('href').replace(/^ /, ''), Gogoanime.domain); },
            elementEp: function (selector) {
                var url = Gogoanime.overview.list.elementUrl(selector);
                return Gogoanime.sync.getEpisode(url);
            },
            paginationNext: function () {
                var next = false;
                var nextReturn = false;
                j.$(j.$('#episode_page a').get().reverse()).each(function (index, el) {
                    if (next && !nextReturn) {
                        el.click();
                        nextReturn = true;
                        return;
                    }
                    if (j.$(el).hasClass('active')) {
                        next = true;
                    }
                });
                return nextReturn;
            }
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(41).toString());
        if (Gogoanime.isSyncPage(page.url)) {
            j.$(document).ready(function () {
                start();
            });
        }
        else {
            con.log('noSync');
            utils.waitUntilTrue(function () { return j.$('#episode_related').length; }, function () {
                start();
            });
        }
        function start() {
            Gogoanime.domain = window.location.protocol + "//" + window.location.hostname;
            page.handlePage();
            j.$('#episode_page').click(function () {
                setTimeout(function () {
                    page.handleList();
                }, 500);
            });
        }
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anime4you; });
const Anime4you = {
    name: 'Anime4you',
    domain: 'https://www.anime4you.one',
    database: 'Anime4you',
    type: 'anime',
    isSyncPage: function (url) {
        if (url.split('/')[7] !== 'epi') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.titel').text().replace(j.$('.titel h5').text(), '').trim(); },
        getIdentifier: function (url) { return parseInt(utils.urlPart(url, 6)).toString(); },
        getOverviewUrl: function (url) {
            return Anime4you.domain + '/show/1/aid/' + Anime4you.sync.getIdentifier(url);
        },
        getEpisode: function (url) {
            return parseInt(utils.urlPart(url, 8));
        },
        nextEpUrl: function (url) { return Anime4you.domain + j.$('.vidplayer .forward a').first().attr('href'); },
        uiSelector: function (selector) { selector.insertAfter(j.$("#beschreibung > p").first()); },
    },
    overview: {
        getTitle: function (url) { return Anime4you.sync.getTitle(url); },
        getIdentifier: function (url) { return Anime4you.sync.getIdentifier(url); },
        uiSelector: function (selector) { Anime4you.sync.uiSelector(selector); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('.episoden li'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Anime4you.domain); },
            elementEp: function (selector) { return Anime4you.sync.getEpisode(Anime4you.overview.list.elementUrl(selector)); },
        }
    },
    init(page) {
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(43).toString());
        j.$(document).ready(function () {
            page.handlePage();
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Branitube; });
const Branitube = {
    name: 'Branitube',
    domain: 'https://branitube.org',
    type: 'anime',
    isSyncPage: function (url) {
        if (url.split('/')[3] !== 'assistir') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.infosAtulEpisodio .nomeAnime').text(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        getOverviewUrl: function (url) {
            return Branitube.domain + '/animes/' + Branitube.sync.getIdentifier(url);
        },
        getEpisode: function (url) {
            return parseInt(utils.urlPart(url, 6));
        },
        nextEpUrl: function (url) { return utils.absoluteLink(j.$('[title^="Proximo Episodio"]').first().attr('href'), Branitube.domain); },
    },
    overview: {
        getTitle: function (url) { return j.$('.nameAnime').text(); },
        getIdentifier: function (url) { return Branitube.sync.getIdentifier(url); },
        uiSelector: function (selector) { j.$('<div class="animeResult" style="margin-bottom: 10px; padding: 12px"> <p id="malp">' + selector.html() + '</p></div>').prependTo(j.$(".theUpdates .contentLastUpdatesEps").first()); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('.imgefeito > .episodio'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a.episodioImages").first().attr('href'), Branitube.domain); },
            elementEp: function (selector) { return Branitube.sync.getEpisode(Branitube.overview.list.elementUrl(selector)); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(45).toString());
        j.$(document).ready(function () {
            page.handlePage();
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Turkanime; });
const Turkanime = {
    name: 'Turkanime',
    domain: 'http://www.turkanime.tv',
    type: 'anime',
    isSyncPage: function (url) {
        if (url.split('/')[3] !== 'video') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.breadcrumb a').first().text().trim(); },
        getIdentifier: function (url) { return Turkanime.overview.getIdentifier(Turkanime.sync.getOverviewUrl(url)); },
        getOverviewUrl: function (url) {
            return utils.absoluteLink(j.$('.breadcrumb a').first().attr('href'), Turkanime.domain);
        },
        getEpisode: function (url) {
            return getEpisode(Turkanime.sync.getIdentifier(url), Turkanime.overview.getIdentifier(url));
        },
        nextEpUrl: function (url) {
            if (j.$('.panel-footer a[href^="video"]').last().attr('href') != j.$('.panel-footer a[href^="video"]').first().attr('href')) {
                return utils.absoluteLink(j.$('.panel-footer a[href^="video"]').last().attr('href'), Turkanime.domain);
            }
        },
    },
    overview: {
        getTitle: function (url) { return j.$('#detayPaylas .panel-title').first().text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        uiSelector: function (selector) { selector.prependTo(j.$("#detayPaylas .panel-body").first()); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('.list.menum > li'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").last().attr('href').replace(/^\/\//, 'http://'), Turkanime.domain); },
            elementEp: function (selector) {
                var url = Turkanime.overview.list.elementUrl(selector);
                return getEpisode(Turkanime.overview.getIdentifier(window.location.href), Turkanime.overview.getIdentifier(url));
                return Turkanime.sync.getEpisode(Turkanime.overview.list.elementUrl(selector));
            },
        }
    },
    init(page) {
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(47).toString());
        j.$(document).ready(function () {
            if (Turkanime.isSyncPage(page.url)) {
                page.handlePage();
            }
            else {
                utils.waitUntilTrue(function () { return j.$('.list.menum').length; }, function () {
                    page.handlePage();
                });
            }
        });
    }
};
function getEpisode(selector, episodeSelector) {
    var diff = episodeSelector.replace(selector, '').replace(/-/g, ':');
    con.log('getEpisode', selector, episodeSelector, diff);
    var temp = diff.match(/\d+/);
    if (temp === null) {
        return 0;
    }
    else {
        return parseInt(temp[0]);
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Twistmoe; });
const Twistmoe = {
    name: 'Twistmoe',
    domain: 'https://twist.moe',
    database: 'Twistmoe',
    type: 'anime',
    isSyncPage: function (url) { return true; },
    sync: {
        getTitle: function (url) { return j.$('.series-title').text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        getOverviewUrl: function (url) {
            return Twistmoe.domain + '/a/' + Twistmoe.sync.getIdentifier(url) + '/1';
        },
        getEpisode: function (url) {
            return parseInt(utils.urlPart(url, 5));
        },
        nextEpUrl: function (url) {
            return utils.absoluteLink(j.$('.episode-list .current').first().parent().next().find('a').attr('href'), Twistmoe.domain);
        },
        uiSelector: function (selector) { selector.insertAfter(j.$(".information").first()); },
    },
    overview: {
        getTitle: function (url) { return ''; },
        getIdentifier: function (url) { return ''; },
        uiSelector: function (selector) { return ''; },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('.episode-list li'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Twistmoe.domain); },
            elementEp: function (selector) { return Twistmoe.sync.getEpisode(Twistmoe.overview.list.elementUrl(selector)); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(49).toString());
        j.$(document).ready(function () {
            start();
            utils.urlChangeDetect(function () {
                page.url = window.location.href;
                page.UILoaded = false;
                $('#flashinfo-div, #flash-div-bottom, #flash-div-top').remove();
                start();
            });
        });
        function start() {
            if (utils.urlPart(page.url, 3).toLowerCase() != 'a') {
                con.log('Not an anime page!');
                return;
            }
            page.handlePage();
        }
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(api, con, utils, j) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emby; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var item = undefined;
function getApiKey() {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.get('emby_Api_Key');
    });
}
function setApiKey(key) {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.set('emby_Api_Key', key);
    });
}
function getBase() {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.get('emby_Base');
    });
}
function setBase(key) {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.set('emby_Base', key);
    });
}
function checkApi(page) {
    return __awaiter(this, void 0, void 0, function* () {
        var videoEl = $('video');
        if (videoEl.length) {
            $('html').addClass('miniMAL-hide');
            var url = videoEl.attr('src');
            con.log(url);
            //@ts-ignore
            if (/blob\:/i.test(url)) {
                var apiBase = yield getBase();
                var itemId = yield returnPlayingItemId();
                var apiKey = yield getApiKey();
            }
            else {
                var apiBase = url.split('/').splice(0, 4).join('/');
                var itemId = utils.urlPart(url, 5);
                var apiKey = yield getApiKey();
                setBase(apiBase);
            }
            var reqUrl = apiBase + '/Items?ids=' + itemId + '&api_key=' + apiKey;
            con.log('reqUrl', reqUrl, 'base', apiBase, 'apiKey', apiKey);
            api.request.xhr('GET', reqUrl).then((response) => {
                var data = JSON.parse(response.responseText);
                item = data.Items[0];
                reqUrl = apiBase + '/Genres?Ids=' + item.SeriesId + '&api_key=' + apiKey;
                con.log(data);
                return api.request.xhr('GET', reqUrl);
            }).then((response) => {
                var genres = JSON.parse(response.responseText);
                con.log('genres', genres);
                for (var i = 0; i < genres.Items.length; i++) {
                    var genre = genres.Items[i];
                    if (genre.Name === 'Anime') {
                        con.info('Anime detected');
                        page.url = window.location.origin + '/#!/itemdetails.html?id=' + itemId;
                        page.handlePage(page.url);
                        $('html').removeClass('miniMAL-hide');
                        break;
                    }
                }
            });
        }
    });
}
function urlChange(page) {
    return __awaiter(this, void 0, void 0, function* () {
        $('html').addClass('miniMAL-hide');
        if (window.location.href.indexOf('id=') !== -1) {
            var id = utils.urlParam(window.location.href, 'id');
            var reqUrl = '/Items?ids=' + id;
            apiCall(reqUrl).then((response) => {
                var data = JSON.parse(response.responseText);
                switch (data.Items[0].Type) {
                    case 'Season':
                        con.log('Season', data);
                        item = data.Items[0];
                        reqUrl = '/Genres?Ids=' + item.SeriesId;
                        apiCall(reqUrl).then((response) => {
                            var genres = JSON.parse(response.responseText);
                            con.log('genres', genres);
                            for (var i = 0; i < genres.Items.length; i++) {
                                var genre = genres.Items[i];
                                if (genre.Name === 'Anime') {
                                    con.info('Anime detected');
                                    page.handlePage();
                                    $('html').removeClass('miniMAL-hide');
                                    break;
                                }
                            }
                        });
                        break;
                    case 'Series':
                        con.log('Series', data);
                        break;
                    default:
                        con.log('Not recognized', data);
                }
            });
        }
    });
}
function returnPlayingItemId() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(); }, 10000);
        }).then(() => {
            return apiCall('/Sessions').then((response) => {
                con.error(response);
                var data = JSON.parse(response.responseText);
                con.log(data);
                for (var i = 0; i < data.length; i++) {
                    var sess = data[i];
                    if (typeof sess.NowPlayingItem !== 'undefined') {
                        con.log(sess.NowPlayingItem);
                        return sess.NowPlayingItem.Id;
                    }
                }
            });
        });
    });
}
function waitForBase() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            utils.waitUntilTrue(function () {
                return j.$('*[data-url]').length;
            }, function () {
                var base = j.$('*[data-url]').first().attr('data-url').split('/').splice(0, 4).join('/');
                con.log('Base Found', base);
                resolve(base);
            });
        });
    });
}
function testApi() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var base = yield getBase();
            if (typeof base === 'undefined' || base === '') {
                con.info('No base');
                base = yield waitForBase();
            }
            setBase(base);
            apiCall('/System/Info', null, base).then((response) => {
                if (response.status !== 200) {
                    con.error('Not Authenticated');
                    setBase('');
                    reject();
                    return false;
                }
                resolve();
                return true;
            });
        }));
    });
}
function askForApiKey() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            var msg = utils.flashm(`<p>${api.storage.lang('Emby_Authenticate')}</p>
      <p><input id="MS-ApiKey" type="text" placeholder="Please enter the Api Key here" style="width: 100%;"></p>
      <div style="display: flex; justify-content: space-around;">
        <button class="Yes" style="background-color: transparent; border: none; color: rgb(255,64,129);margin-top: 10px; cursor:pointer;">OK</button>
        <button class="Cancel" style="background-color: transparent; border: none; color: rgb(255,64,129);margin-top: 10px; cursor:pointer;">CANCEL</button>
      </div>
      `, { position: 'bottom', permanent: true, type: 'getApi' });
            msg.find('.Yes').click(function (evt) {
                var api = j.$('#MS-ApiKey').val();
                con.info('api', api);
                setApiKey(api);
                j.$(evt.target).parentsUntil('.flash').remove();
                testApi()
                    .then(() => {
                    resolve(true);
                }).catch(() => __awaiter(this, void 0, void 0, function* () {
                    utils.flashm('Could not Authenticate');
                    yield askForApiKey();
                    resolve(true);
                }));
            });
            msg.find('.Cancel').click(function (evt) {
                j.$(evt.target).parentsUntil('.flash').remove();
                reject(false);
            });
        });
    });
}
//Helper
function apiCall(url, apiKey = null, base = null) {
    return __awaiter(this, void 0, void 0, function* () {
        if (apiKey === null)
            apiKey = yield getApiKey();
        if (base === null)
            base = yield getBase();
        if (url.indexOf('?') !== -1) {
            var pre = '&';
        }
        else {
            var pre = '?';
        }
        url = base + url + pre + 'api_key=' + apiKey;
        con.log('Api Call', url);
        return api.request.xhr('GET', url);
    });
}
const Emby = {
    name: 'Emby',
    domain: 'http://app.emby.media',
    type: 'anime',
    isSyncPage: function (url) {
        if (item.Type === 'Episode') {
            return true;
        }
        return false;
    },
    sync: {
        getTitle: function (url) { return item.SeriesName + ((item.ParentIndexNumber > 1) ? ' Season ' + item.ParentIndexNumber : ''); },
        getIdentifier: function (url) {
            if (typeof item.SeasonId !== 'undefined')
                return item.SeasonId;
            if (typeof item.SeriesId !== 'undefined')
                return item.SeriesId;
            return item.Id;
        },
        getOverviewUrl: function (url) { return Emby.domain + '/#!/itemdetails.html?id=' + Emby.sync.getIdentifier(url); },
        getEpisode: function (url) { return item.IndexNumber; },
    },
    overview: {
        getTitle: function (url) { return item.SeriesName + ((item.IndexNumber > 1) ? ' Season ' + item.IndexNumber : ''); },
        getIdentifier: function (url) { return item.Id; },
        uiSelector: function (selector) { selector.appendTo(j.$(".page:not(.hide) .detailSection").first()); },
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(51).toString());
        testApi()
            .catch(() => {
            con.info('Not Authenticated');
            return askForApiKey();
        })
            .then(() => {
            con.info('Authenticated');
            utils.changeDetect(() => {
                page.UILoaded = false;
                $('#flashinfo-div, #flash-div-bottom, #flash-div-top').remove();
                checkApi(page);
            }, () => {
                var src = $('video').first().attr('src');
                if (typeof src === 'undefined')
                    return 'NaN';
                return src;
            });
            utils.urlChangeDetect(function () {
                if (!(window.location.href.indexOf('video') !== -1) && !(window.location.href.indexOf('#dlg') !== -1)) {
                    $('#flashinfo-div, #flash-div-bottom, #flash-div-top, #malp').remove();
                    page.UILoaded = false;
                    urlChange(page);
                }
            });
            j.$(document).ready(function () {
                utils.waitUntilTrue(function () {
                    return j.$('.page').length;
                }, function () {
                    urlChange(page);
                });
            });
            document.addEventListener("fullscreenchange", function () {
                //@ts-ignore
                if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
                    $('html').addClass('miniMAL-Fullscreen');
                }
                else {
                    $('html').removeClass('miniMAL-Fullscreen');
                }
            });
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(4), __webpack_require__(2), __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(api, utils, con, j) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plex; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var item = undefined;
function getApiKey() {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.get('Plex_Api_Key');
    });
}
function setApiKey(key) {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.set('Plex_Api_Key', key);
    });
}
function getBase() {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.get('Plex_Base');
    });
}
function setBase(key) {
    return __awaiter(this, void 0, void 0, function* () {
        return api.storage.set('Plex_Base', key);
    });
}
function urlChange(page, curUrl = window.location.href, player = false) {
    return __awaiter(this, void 0, void 0, function* () {
        $('html').addClass('miniMAL-hide');
        var path = utils.urlParam(curUrl, 'key');
        if (!path)
            return;
        if (!(path.indexOf('metadata') !== -1))
            return;
        apiCall(decodeURIComponent(path)).then((response) => {
            if (response.status !== 200) {
                con.error('No Api Key');
                $("html").addClass("noApiKey");
                return;
            }
            try {
                var data = JSON.parse(response.responseText);
            }
            catch (e) {
                con.error(e);
                $('html').addClass('noApiKey');
                return;
            }
            if (!/(anime|asian)/i.test(data.MediaContainer.librarySectionTitle)) {
                con.info('!Not an Anime!');
                return;
            }
            item = data.MediaContainer.Metadata[0];
            switch (item.type) {
                case 'show':
                    con.log('Show', data);
                    utils.waitUntilTrue(function () { return j.$('[data-qa-id="preplayMainTitle"]').length; }, function () {
                        page.UILoaded = false;
                        page.handlePage(curUrl);
                        $('html').removeClass('miniMAL-hide');
                    });
                    break;
                case 'episode':
                    con.log('Episode', data);
                    if (player) {
                        page.handlePage(curUrl);
                        $('html').removeClass('miniMAL-hide');
                    }
                    break;
                default:
                    con.log('Not recognized', data);
            }
        });
    });
}
//Helper
function apiCall(url, apiKey = null, base = null) {
    return __awaiter(this, void 0, void 0, function* () {
        if (apiKey === null)
            apiKey = yield getApiKey();
        if (base === null)
            base = yield getBase();
        if (url.indexOf('?') !== -1) {
            var pre = '&';
        }
        else {
            var pre = '?';
        }
        url = base + url + pre + 'X-Plex-Token=' + apiKey;
        con.log('Api Call', url);
        return api.request.xhr('GET', {
            url: url,
            headers: {
                'Accept': 'application/json',
            },
        });
    });
}
const Plex = {
    name: 'Plex',
    domain: 'http://app.plex.tv',
    type: 'anime',
    isSyncPage: function (url) {
        if (item.type === 'episode') {
            return true;
        }
        return false;
    },
    sync: {
        getTitle: function (url) { return item.grandparentTitle + ((item.parentIndex > 1) ? ' Season ' + item.parentIndex : ''); },
        getIdentifier: function (url) {
            if (typeof item.parentKey !== 'undefined')
                return item.parentKey.split('/')[3];
            if (typeof item.grandparentKey !== 'undefined')
                return item.grandparentKey.split('/')[3];
            return item.key.split('/')[3];
        },
        getOverviewUrl: function (url) { return Plex.domain + $('[class^="AudioVideoPlayerView"] [class*="MetadataPosterTitle"][data-qa-id="metadataTitleLink"]').first().attr('href'); },
        getEpisode: function (url) { return item.index; },
    },
    overview: {
        getTitle: function (url) { return item.title; },
        getIdentifier: function (url) { return item.key.split('/')[3]; },
        uiSelector: function (selector) { selector.insertAfter(j.$('[data-qa-id="preplayMainTitle"]').first()); },
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(53).toString());
        utils.changeDetect(() => {
            var href = $('[download]').attr('href');
            var apiBase = href.split('/').splice(0, 3).join('/');
            var apiKey = utils.urlParam(href, 'X-Plex-Token');
            con.info('Set Api', apiBase, apiKey);
            setApiKey(apiKey);
            setBase(apiBase);
            $('html').removeClass('noApiKey');
        }, () => {
            var src = $('[download]').length;
            return src;
        });
        utils.urlChangeDetect(function () {
            if (!$('[class^="AudioVideoPlayerView"] [class*="MetadataPosterTitle"] [data-qa-id="metadataTitleLink"]').length) {
                urlChange(page);
            }
        });
        j.$(document).ready(function () {
            if (!$('[class^="AudioVideoPlayerView"] [class*="MetadataPosterTitle"] [data-qa-id="metadataTitleLink"]').length) {
                urlChange(page);
            }
        });
        utils.changeDetect(() => {
            page.UILoaded = false;
            $('#flashinfo-div, #flash-div-bottom, #flash-div-top').remove();
            var metaUrl = $('[class^="AudioVideoPlayerView"] [class*="MetadataPosterTitle"] [data-qa-id="metadataTitleLink"]').first().attr('href');
            if (typeof metaUrl === 'undefined')
                return;
            urlChange(page, Plex.domain + metaUrl, true);
        }, () => {
            var src = $('[class^="AudioVideoPlayerView"] [class*="MetadataPosterTitle"] [data-qa-id="metadataTitleLink"]').first().attr('href');
            if (typeof src === 'undefined')
                return 'NaN';
            return src;
        });
        document.addEventListener("fullscreenchange", function () {
            //@ts-ignore
            if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
                $('html').addClass('miniMAL-Fullscreen');
            }
            else {
                $('html').removeClass('miniMAL-Fullscreen');
            }
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2), __webpack_require__(4), __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils, api, con, j) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Netflix; });
var ident = undefined;
var ses = undefined;
var genres = [
    '2797624',
    '7424',
    '67614',
    '2653',
    '587',
    '625',
    '79307',
    '9302',
    '79488',
    '452',
    '79448',
    '11146',
    '79440',
    '3063',
    '79543',
    '79427',
    '10695',
    '2729',
    '79329',
    '79572',
    '64256',
    '2951909',
];
function getSeries(page) {
    var videoId = utils.urlPart(window.location.href, 4);
    var reqUrl = Netflix.domain + '/title/' + videoId;
    api.request.xhr('GET', reqUrl).then((response) => {
        con.log(response);
        var anime = false;
        genres.forEach(function (genre) {
            if (response.responseText.indexOf('"genres","' + genre + '"') !== -1) {
                anime = true;
            }
        });
        if (!anime) {
            con.info('No Anime');
            return;
        }
        ses = getSeason();
        ident = utils.urlPart(response.finalUrl, 4) + ses;
        page.handlePage();
        $('html').removeClass('miniMAL-hide');
    });
    function getSeason() {
        var sesText = j.$('.ellipsize-text span').first().text().trim();
        var temp = sesText.match(/^S\d+/);
        if (temp !== null) {
            return '?s=' + temp[0].replace('S', '');
        }
        throw 'No Season found';
    }
}
const Netflix = {
    name: 'Netflix',
    domain: 'https://www.netflix.com',
    database: 'Netflix',
    type: 'anime',
    isSyncPage: function (url) {
        return true;
    },
    sync: {
        getTitle: function (url) { return j.$('.ellipsize-text h4').text().trim() + ' Season ' + ses.replace('?s=', ''); },
        getIdentifier: function (url) { return ident; },
        getOverviewUrl: function (url) {
            return Netflix.domain + '/title/' + Netflix.sync.getIdentifier(url);
        },
        getEpisode: function (url) {
            var epText = j.$('.ellipsize-text span').first().text().trim();
            var temp = epText.match(/\d+$/);
            if (temp !== null) {
                return parseInt(temp[0]);
            }
            return 1;
        },
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(55).toString());
        j.$(document).ready(function () {
            ready();
        });
        utils.urlChangeDetect(function () {
            ready();
        });
        function ready() {
            $('#flashinfo-div, #flash-div-bottom, #flash-div-top, #malp').remove();
            $('html').addClass('miniMAL-hide');
            if (utils.urlPart(window.location.href, 3) == 'watch') {
                utils.waitUntilTrue(function () {
                    return j.$('.ellipsize-text').length;
                }, function () {
                    getSeries(page);
                });
            }
        }
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(1), __webpack_require__(4), __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Otakustream; });
const Otakustream = {
    name: 'Otakustream',
    domain: 'https://otakustream.tv',
    type: 'anime',
    isSyncPage: function (url) {
        if (url.split('/')[3] === 'movie')
            return true;
        if (typeof url.split('/')[5] === 'undefined' || url.split('/')[5] == '') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) {
            if (url.split('/')[3] === 'movie')
                return Otakustream.overview.getTitle(url);
            return j.$('#breadcrumbs a').last().text().trim();
        },
        getIdentifier: function (url) { return utils.urlPart(url, 4).toLowerCase(); },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 5).join('/'); },
        getEpisode: function (url) {
            var EpText = utils.urlPart(url, 5);
            var temp = EpText.match(/-\d+/);
            if (temp !== null) {
                EpText = temp[0];
            }
            temp = EpText.match(/\d+/);
            if (temp === null) {
                return 1;
            }
            return parseInt(temp[0]);
        },
        nextEpUrl: function (url) { return utils.absoluteLink(j.$('.navigation-right').first().attr('href'), Otakustream.domain); },
    },
    overview: {
        getTitle: function (url) { return j.$('.breadcrumb_last').text().trim(); },
        getIdentifier: function (url) { return Otakustream.sync.getIdentifier(url); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".single-details h1").first()); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('.ep-list li'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Otakustream.domain); },
            elementEp: function (selector) { return Otakustream.sync.getEpisode(Otakustream.overview.list.elementUrl(selector)); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(57).toString());
        j.$(document).ready(function () {
            page.handlePage();
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animepahe; });
const animepahe = {
    name: 'animepahe',
    domain: 'https://animepahe.com',
    type: 'anime',
    isSyncPage: function (url) {
        if (url.split('/')[3] !== 'play') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.theatre-info h1 a').first().text(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        getOverviewUrl: function (url) {
            return animepahe.domain + '/anime/' + animepahe.sync.getIdentifier(url);
        },
        getEpisode: function (url) {
            return j.$('.theatre-info h1')[0].childNodes[2].textContent.replace(/[^0-9\.]+/g, '');
        },
        nextEpUrl: function (url) { return animepahe.domain + j.$('.sequel a').first().attr('href'); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".anime-season")); },
    },
    overview: {
        getTitle: function (url) { return utils.getBaseText(j.$('.title-wrapper h1').first()).trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4); },
        uiSelector: function (selector) {
            selector.insertAfter(j.$(".anime-detail"));
        },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('.episode-list .episode'); },
            elementUrl: function (selector) { return animepahe.domain + selector.find("a").first().attr('href'); },
            elementEp: function (selector) { return selector.find('.episode-number').first().text().replace(selector.find('.episode-number > *').text(), ''); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(59).toString());
        if (!animepahe.isSyncPage(page.url)) {
            utils.waitUntilTrue(function () { return animepahe.overview.list.elementsSelector(); }, function () {
                page.handlePage();
            });
        }
        else {
            j.$(document).ready(function () {
                page.handlePage();
            });
        }
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animeflv; });
const animeflv = {
    name: 'animeflv',
    domain: 'https://animeflv.net',
    type: 'anime',
    isSyncPage: function (url) {
        if (j.$('h2.SubTitle').length) {
            return true;
        }
        return false;
    },
    sync: {
        getTitle: function (url) { return j.$('h1.Title').text().split(' Episodio')[0].trim(); },
        getIdentifier: function (url) { return utils.urlPart(animeflv.domain + j.$(".fa-th-list").attr('href'), 4) + '/' + utils.urlPart(animeflv.domain + j.$(".fa-th-list").attr('href'), 5); },
        getOverviewUrl: function (url) { return animeflv.domain + j.$(".fa-th-list").attr('href'); },
        getEpisode: function (url) { return parseInt(j.$('h2.SubTitle').text().replace('Episodio ', '').trim()); },
        nextEpUrl: function (url) { return animeflv.domain + j.$(".fa-chevron-right").attr('href'); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".CapOptns")); },
    },
    overview: {
        getTitle: function (url) { return j.$('h2.Title').text(); },
        getIdentifier: function (url) { return utils.urlPart(url, 4) + '/' + utils.urlPart(url, 5); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".Description")); },
        list: {
            offsetHandler: false,
            elementsSelector: function () {
                var url = window.location.href;
                document.body.insertAdjacentHTML('afterbegin', '<div id="MALSync" class="MALSync" style="display: none;"><ul id="MALSyncUl" class="MALSyncUl"></ul></div>');
                var idMALSync = document.getElementById('MALSyncUl');
                var patron = /<script>\s\s   var([^]*?)<\/script>/g;
                var html = document.body.innerHTML;
                var scriptEps = patron.exec(html);
                if (scriptEps != null) {
                    // @ts-ignore
                    scriptEps = scriptEps[1] || null;
                    if (scriptEps != null) {
                        // @ts-ignore
                        var patron2 = /\[([^\[\]]{0,10},{0,10})\]/g;
                        // @ts-ignore
                        var eps = scriptEps.toString().match(patron2);
                        if (eps != null) {
                            // @ts-ignore
                            eps.forEach(element => {
                                if (idMALSync != null) {
                                    var Url = animeflv.domain + '/ver/' + element.split(',')[1].replace(']', '') + '/' + utils.urlPart(url, 5) + '-' + element.split(',')[0].replace('[', '');
                                    var Episodio = element.split(',')[0].replace('[', '');
                                    idMALSync.innerHTML += '<li><a href="' + Url + '" epi="' + Episodio + '"></a> </li>';
                                }
                            });
                        }
                    }
                }
                return j.$(".MALSync a");
            },
            elementUrl: function (selector) { return utils.absoluteLink(selector.attr('href'), animeflv.domain); },
            elementEp: function (selector) { return selector.attr('epi'); },
            handleListHook: function (epi, epilist) {
                epi++;
                if ((epilist.length - 1) >= epi) {
                    var cover = j.$('.AnimeCover img').attr('src');
                    var name = j.$('.Container h2').text();
                    var epiAct = '<li class="fa-play-circle Next"><a href="' + epilist[epi][0].toString() + '"><figure><img src="' + cover + '" alt=""></figure><h3 class="Title">' + name + '</h3><p>Episodio ' + epi + '</p><span style="position: absolute; top: 0; bottom: 0; margin: auto; right: 20px; line-height: 30px; font-size: 16px; font-weight: 700; height: 30px;">Siguiente Episodio</span></a></li>';
                    j.$('.Main .ListCaps').prepend(epiAct);
                }
            },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(61).toString());
        if (document.title == "Just a moment...") {
            con.log("loading");
            page.cdn();
            return;
        }
        j.$(document).ready(function () { page.handlePage(); });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(4)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils, j, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jkanime; });
/*By kaiserdj*/
var check = 0;
const Jkanime = {
    name: 'Jkanime',
    domain: 'https://jkanime.net/',
    type: 'anime',
    isSyncPage: function (url) {
        if (isNaN(parseInt(utils.urlPart(url, 4))) == true) {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.video-header h1').text().split(" - ")[0]; },
        getIdentifier: function (url) { return utils.urlPart(url, 3); },
        getOverviewUrl: function (url) { return j.$('.vnav-list').attr('href'); },
        getEpisode: function (url) { return j.$('.video-header h1').text().split(" - ")[1]; },
        nextEpUrl: function (url) {
            var nextUrl = j.$('.vnav-right').attr('href');
            if (nextUrl == '#')
                return undefined;
            return nextUrl;
        },
        uiSelector: function (selector) { selector.insertAfter(j.$(".server-box")); },
    },
    overview: {
        getTitle: function (url) { return j.$('.sinopsis-box h2').text(); },
        getIdentifier: function (url) { return utils.urlPart(url, 3); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".sinopsis-links")); },
        list: {
            offsetHandler: false,
            elementsSelector: function () {
                document.body.insertAdjacentHTML('afterbegin', '<div id="MALSync" class="MALSync" style="display: none;"><ul id="MALSyncUl" class="MALSyncUl"></ul></div>');
                var idMALSync = document.getElementById('MALSyncUl');
                var lastEps = j.$('.navigation a').last().text().split('-')[1].trim();
                for (var i = 1; i <= lastEps; i++) {
                    if (idMALSync != null) {
                        idMALSync.innerHTML += '<li><a href="' + document.URL + i + '" epi="' + i + '"></a> </li>';
                    }
                }
                return j.$('.MALSync a');
            },
            elementUrl: function (selector) { return utils.absoluteLink(selector.attr('href'), Jkanime.domain); },
            elementEp: function (selector) { return selector.attr('epi'); },
            handleListHook: function (epi, epilist) {
                epi++;
                if (epilist.length >= epi) {
                    if (check == 0) {
                        var buttons = j.$('.navigation a');
                        for (var i = 0; i < buttons.length; i++) {
                            if (buttons[i].text.split('-')[0].split() <= epi && buttons[i].text.split('-')[1].split() >= epi) {
                                buttons[i].click();
                            }
                        }
                        check = 1;
                    }
                    setTimeout(function () {
                        j.$('#episodes-content .cap-post').each(function (i, obj) {
                            if (obj.innerText.split(' ')[1] == epi) {
                                j.$('#episodes-content .cap-post').eq(i).addClass('mal-sync-active');
                                if (check == 0) {
                                    j.$('#episodes-content .cap-post:eq(' + i + ')').find('i').first().remove();
                                }
                            }
                        });
                    }, 500);
                }
            },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(63).toString());
        j.$(document).ready(function () { page.handlePage(); });
        j.$('.navigation a').click(function () {
            if (check == 1) {
                page.handleList();
            }
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(api, con, utils, j) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vrv; });
var json = undefined;
var ident = undefined;
var seasonInterval = undefined;
function getSeries(page, overview = '') {
    json = undefined;
    ident = undefined;
    api.request.xhr('GET', page.url).then((response) => {
        con.log(response);
        json = JSON.parse('{' + response.responseText.split('__INITIAL_STATE__ = {')[1].split('};')[0] + '}');
        con.log(json);
        if (overview.length) {
            json.seriesPage.seasons.forEach(function (element) {
                if (overview.indexOf(element.json.title) !== -1) {
                    con.log('Season Found', element);
                    ident = element;
                }
            });
        }
        else {
            if (json.seriesPage.seasons.length) {
                con.log('Season', json.seriesPage.seasons[0]);
                ident = json.seriesPage.seasons[0];
            }
        }
        page.handlePage();
    });
}
const Vrv = {
    name: 'Vrv',
    domain: 'https://vrv.co',
    type: 'anime',
    isSyncPage: function (url) {
        if (utils.urlPart(window.location.href, 3) == 'series')
            return false;
        return true;
    },
    sync: {
        getTitle: function (url) { return json.watch.mediaResource.json.series_title + ' - ' + json.watch.mediaResource.json.season_title.replace(json.watch.mediaResource.json.series_title, ''); },
        getIdentifier: function (url) { return json.watch.mediaResource.json.season_id; },
        getOverviewUrl: function (url) { return Vrv.domain + '/series/' + json.watch.mediaResource.json.series_id + '?season=' + Vrv.sync.getIdentifier(url); },
        getEpisode: function (url) { return json.watch.mediaResource.json.episode_number; },
        nextEpUrl: function (url) {
            if (typeof json.watch.mediaResource.json.next_episode_id === 'undefined')
                return '';
            return Vrv.domain + '/watch/' + json.watch.mediaResource.json.next_episode_id;
        },
    },
    overview: {
        getTitle: function (url) { return json.seriesPage.series.json.title + ' - ' + ident.json.title.replace(json.seriesPage.series.json.title, ''); },
        getIdentifier: function (url) { return ident.json.id; },
        uiSelector: function (selector) {
            selector.insertAfter($('.erc-series-info .series-title').first());
        },
        list: {
            offsetHandler: true,
            elementsSelector: function () { return j.$('.erc-series-media-list-element'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Vrv.domain); },
            elementEp: function (selector) {
                var epInfo = selector.find('.episode-title').text().trim();
                var temp = epInfo.match(/^E\d+/i);
                if (temp !== null) {
                    return temp[0].replace('E', '');
                }
                return '';
            },
            getTotal: function () {
                throw 'Not supported';
                return 0;
            }
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(65).toString());
        j.$(document).ready(function () {
            ready();
        });
        utils.urlChangeDetect(function () {
            page.url = window.location.href;
            ready();
        });
        function ready() {
            clearInterval(seasonInterval);
            $('#flashinfo-div, #flash-div-bottom, #flash-div-top, #malp').remove();
            page.UILoaded = false;
            if (utils.urlPart(window.location.href, 3) == 'watch') {
                getSeries(page);
            }
            if (utils.urlPart(window.location.href, 3) == 'series') {
                utils.waitUntilTrue(function () {
                    return j.$('.erc-series-info .series-title').first().length;
                }, function () {
                    if (!j.$('.erc-series-media-list-element').length || typeof j.$('.erc-series-media-list-element a').first().attr('href') !== 'undefined') {
                        getSeries(page, $('.controls-select-trigger .season-info').text().trim());
                    }
                    seasonInterval = utils.changeDetect(function () {
                        $('#flashinfo-div, #flash-div-bottom, #flash-div-top, #malp').remove();
                        page.UILoaded = false;
                        getSeries(page, $('.controls-select-trigger .season-info').text().trim());
                    }, function () {
                        return j.$('.erc-series-media-list-element a').first().attr('href');
                    });
                });
            }
        }
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(4), __webpack_require__(2), __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, con, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Proxer; });
const Proxer = {
    name: "Proxer",
    domain: "https://proxer.me",
    database: "Proxer",
    type: "anime",
    isSyncPage: function (url) {
        if (url.split("/")[3] === "watch" || url.split("/")[3] === "read") {
            return true;
        }
        else {
            return false;
        }
    },
    sync: {
        getTitle: function (url) {
            if (url.indexOf("watch") != -1) {
                return j
                    .$(".wName")
                    .text()
                    .trim();
            }
            else {
                if (url.indexOf("read") != -1) {
                    return j.$("div#breadcrumb a:first").text();
                }
            }
        },
        getIdentifier: function (url) {
            return url.split("/")[4];
        },
        getOverviewUrl: function (url) {
            return ("https://proxer.me/info/" + Proxer.sync.getIdentifier(url) + "/list");
        },
        getEpisode: function (url) {
            if (url.indexOf("watch") != -1) {
                return getEpisodeFallback('episode ' + $('.wEp').last().text().trim(), url.split("/")[5]);
            }
            else {
                return getEpisodeFallback($('#breadcrumb > a').last().text().trim(), url.split("/")[5]);
            }
        },
        nextEpUrl: function (url) {
            return (Proxer.domain +
                $(".no_details a")
                    .last()
                    .attr("href"));
        }
    },
    overview: {
        getTitle: function (url) { return j.$('#pageMetaAjax').text().split(' - ')[0]; },
        getIdentifier: function (url) { return Proxer.sync.getIdentifier(url); },
        uiSelector: function (selector) { selector.insertAfter(j.$(".hreview-aggregate > span").first()); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('span[id^="listTitle"]').parent().parent(); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find('a[href^="/watch"],a[href^="/read"],a[href^="/chapter"]').first().attr('href'), Proxer.domain); },
            elementEp: function (selector) {
                return getEpisodeFallback(selector.find('span[id^="listTitle"]').first().text().trim(), Proxer.overview.list.elementUrl(selector).split("/")[5]);
            },
            paginationNext: function (updateCheck) {
                con.error('sadsad', updateCheck);
                if (updateCheck) {
                    var el = j.$('.menu').last();
                    if (typeof el[0] == 'undefined' || el.hasClass('active')) {
                        return false;
                    }
                    else {
                        el[0].click();
                        return true;
                    }
                }
                else {
                    var el = j.$('.menu.active').first().next();
                    if (typeof el[0] == 'undefined') {
                        return false;
                    }
                    else {
                        el[0].click();
                        return true;
                    }
                }
            },
            getTotal: function () {
                var el = $('img[src="/images/misc/manga.png"], img[src="/images/misc/play.png"]').last().parent().parent().parent().parent();
                if (el.length) {
                    return Proxer.overview.list.elementEp(el);
                }
                return undefined;
            }
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(67).toString());
        if (page.url.split("/")[3] === "watch" || page.url.split("/")[3] === "read") {
            if (page.url.split("/")[3] === "watch") {
                Proxer.type = "anime";
                Proxer.database = "Proxeranime";
            }
            else if (page.url.split("/")[3] === "read") {
                Proxer.type = "manga";
                Proxer.database = "Proxermanga";
            }
            j.$(document).ready(function () {
                page.handlePage();
            });
        }
        ajaxHandle(page);
        utils.urlChangeDetect(function () {
            page.url = window.location.href;
            page.UILoaded = false;
            $('#flashinfo-div, #flash-div-bottom, #flash-div-top').remove();
            ajaxHandle(page);
        });
    }
};
var current = 0;
function ajaxHandle(page) {
    if (utils.urlPart(page.url, 3) !== 'info')
        return;
    var detailPart = utils.urlPart(page.url, 5);
    con.info('page', detailPart);
    if (detailPart == 'list') {
        utils.waitUntilTrue(function () {
            return j.$("#contentList").length;
        }, function () {
            if (j.$('#simple-navi a[href*="manga"]').length) {
                Proxer.type = "manga";
                Proxer.database = "Proxermanga";
            }
            else {
                Proxer.type = "anime";
                Proxer.database = "Proxeranime";
            }
            var tempCurrent = parseInt(Proxer.overview.getIdentifier(page.url));
            if (tempCurrent !== current) {
                current = tempCurrent;
                page.handlePage();
            }
            else {
                try {
                    page.handleList();
                }
                catch (e) {
                    con.error(e);
                    page.handlePage();
                }
            }
        });
    }
    if (detailPart == 'details' || typeof detailPart == 'undefined') {
        utils.waitUntilTrue(function () {
            return j.$(".hreview-aggregate").length;
        }, function () {
            current = parseInt(Proxer.overview.getIdentifier(page.url));
            if (j.$('#simple-navi a[href*="manga"]').length) {
                Proxer.type = "manga";
                Proxer.database = "Proxermanga";
            }
            else {
                Proxer.type = "anime";
                Proxer.database = "Proxeranime";
            }
            page.handlePage();
        });
    }
}
function getEpisodeFallback(string, fallback) {
    var exclude = string.match(/(special|extra)/gi);
    if (exclude !== null) {
        return '';
    }
    var temp = string.match(/(kapitel |ep. |chapter |episode )\d+/gi);
    if (temp !== null) {
        return temp[0].match(/\d+/)[0];
    }
    return fallback;
}
/*
Chapter 10
Ep. 10
Kapitel 10
Episode 10
*/
/* Exclude
Special 1
Extra Story
*/

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(4), __webpack_require__(1)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(api, con, j, utils) {/* harmony import */ var _MALSync_src_pages_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

api.storage.addStyle = function () { };
var css = "font-size: 40px; padding-bottom: 3px; color: white; text-shadow: -1px -1px #2e51a2, 1px -1px #2e51a2, -1px 1px #2e51a2, 1px 1px #2e51a2, 2px 2px #2e51a2, 3px 3px #2e51a2;";
console.log("%cDiscord-Anime-Gaming", css, "Version: " + api.storage.version());
var interval = 5000;
$(document).ready(function () { main(); });
function main() {
    var page = getPage(window.location.href);
    if (page && !(window.location.href.indexOf('static.crunchyroll.com') > -1)) {
        con.log('Page found', page.name);
        handlePage(page);
    }
    else {
        con.log('Video Iframe');
        setInterval(function () {
            var timeLeft = getTimeleft();
            con.log('[IFRAME]', timeLeft);
            if (timeLeft != '' && timeLeft) {
                con.log('[IFRAME] Set', timeLeft);
                GM_setValue('timeLeft', timeLeft);
            }
        }, interval);
    }
}
function getPage(url) {
    for (var key in _MALSync_src_pages_pages__WEBPACK_IMPORTED_MODULE_0__[/* pages */ "a"]) {
        var page = _MALSync_src_pages_pages__WEBPACK_IMPORTED_MODULE_0__[/* pages */ "a"][key];
        if (j.$.isArray(page.domain)) {
            for (var k in page.domain) {
                var singleDomain = page.domain[k];
                if (checkDomain(singleDomain)) {
                    page.domain = singleDomain;
                    return page;
                }
            }
        }
        else {
            if (checkDomain(page.domain)) {
                return page;
            }
        }
        function checkDomain(domain) {
            if (url.indexOf(utils.urlPart(domain, 2).split('.').slice(-2, -1)[0] + '.') > -1) {
                return true;
            }
            return false;
        }
    }
    return null;
}
function handlePage(page) {
    page.init({ url: window.location.href, handlePage() {
            if (page.isSyncPage(window.location.href)) {
                login(page);
            }
            else {
                con.log('Overview page');
            }
        } });
}
function login(page) {
    var token = '';
    if (GM_getValue('token', 0)) {
        token = GM_getValue('token');
    }
    else {
        //@ts-ignore
        token = prompt("Please enter your token.\nCheck the description for more information");
        GM_setValue('token', token);
    }
    var client = new Discord.Client({
        token: token,
        autorun: true
    });
    client.on('ready', function () {
        console.log(client.username + " (" + client.id + ") logged in");
        GM_deleteValue('timeLeft');
        setInterval(function () { setgame(); }, interval);
        setgame();
    });
    client.on('disconnect', function (errMsg, code) {
        alert(errMsg);
        if (code == 4004) {
            GM_deleteValue('token');
        }
    });
    function setgame() {
        var gameType = 3;
        if (page.type !== 'anime') {
            gameType = 1;
        }
        var timeLeft = getTimeleft();
        if (timeLeft == '' && GM_getValue('timeLeft', '') != '') {
            timeLeft = GM_getValue('timeLeft', '');
            GM_deleteValue('timeLeft');
        }
        var episode = page.sync.getEpisode(window.location.href);
        if (episode == null || episode == 0 || isNaN(episode)) {
            episode = '';
        }
        else {
            if (page.type === 'anime') {
                episode = 'Ep. ' + episode;
            }
            else {
                episode = 'Chapter ' + episode;
            }
        }
        var title = page.sync.getTitle(window.location.href).replace('&amp;', '&').trim();
        var message = title + " " + episode + " " + timeLeft;
        client.setPresence({
            game: {
                name: message,
                type: gameType
            }
        });
        con.log('Set Game', message);
    }
    //@ts-ignore
    $(window).unload(function () {
        client.setPresence({ game: { name: "", } });
    });
}
function getTimeleft() {
    var timeLeft = '';
    var paused = false;
    if (typeof $('video').get(0) != 'undefined') {
        //@ts-ignore
        var duration = $('video').get(0).duration;
        //@ts-ignore
        var current = $('video').get(0).currentTime;
        //@ts-ignore
        paused = $('video').get(0).paused;
        //@ts-ignore
        var time = Math.ceil((duration - current));
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        //@ts-ignore
        if (seconds < 10)
            seconds = '0' + seconds;
        //@ts-ignore
        if (time == null || time == 0 || isNaN(time)) {
            timeLeft = '';
        }
        else {
            timeLeft = " (" + minutes + ":" + seconds + " Left)";
        }
        if (paused === true) {
            timeLeft = "(PAUSED)";
        }
    }
    return timeLeft;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(4), __webpack_require__(0), __webpack_require__(2)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(30);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #d5f406;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #d5f406;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#footer {\n  z-index: 2;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  height: auto !important;\n}\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(32);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #72cefe;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #72cefe;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#footer {\n  z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(34);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #694ba1;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #694ba1;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#MalData select option {\n  background-color: white;\n}\nbody.dark #MalData select option {\n  background-color: #1c1b26 !important;\n}\n#malp {\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(36);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #b2d1ff !important;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp {\n  background-color: #555;\n  padding: 10px 7px 5px 7px;\n}\n#malp span {\n  color: white;\n}\n#malp select > * {\n  background-color: #555 !important;\n}\n", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(38);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: inherit;\n}\n.mal-sync-active {\n  background-color: #cee1ff;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: inherit;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp {\n  margin: 0;\n}\n#malp span {\n  color: inherit;\n}\n#malp select > * {\n  background-color: white !important;\n}\n@media only screen and (max-width: 1440px) {\n  #malp .MalLogin {\n    width: 100%;\n  }\n}\n.MALSyncDark #MalData select option {\n  background-color: black !important;\n}\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(40);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: black;\n}\n.mal-sync-active {\n  background-color: #cee1ff !important;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: black;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n  margin-bottom: 20px;\n  position: relative;\n}\n#malp span {\n  color: black;\n}\n#malp select > * {\n  background-color: white !important;\n}\n@media only screen and (max-width: 1320px) {\n  #malp .MalLogin {\n    width: 100%;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(42);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #ffc119;\n}\n.mal-sync-active {\n  background-color: #002966 !important;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #ffc119;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp * {\n  font-size: 13px;\n}\n", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(44);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.mal-sync-active a {\n  background-color: #72abff !important;\n}\n#flashinfo-div {\n  z-index: 100 !important;\n}\n#malp #malVolumes,\n#malp #malEpisodes {\n  float: none;\n  display: inline-block;\n  border-radius: 0;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(46);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #bbbbbb;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp {\n  color: white;\n}\n#flash-div-top button,\n#flash-div-bottom button,\n#flashinfo-div button {\n  background: none;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n#flash-div-top .undoButton,\n#flash-div-bottom .undoButton,\n#flashinfo-div .undoButton {\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(48);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: black;\n}\n.mal-sync-active {\n  background-color: #0066ff;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: black;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(50);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp {\n  margin-top: 1rem;\n  border-top: 0 solid hsla(0, 0%, 100%, 0.05);\n  border-width: 1px 0;\n  font-size: 14px;\n  padding: 10px 5px 0;\n  padding-top: 1rem;\n}\n#malp select {\n  display: inline-block;\n  width: auto;\n}\n#malp input {\n  display: inline-block;\n}\n.my-float.open-info-popup {\n  height: 100%;\n  width: 100%;\n  margin: 0 !important;\n}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(52);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: inherit;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: inherit;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.miniMAL-Fullscreen .open-info-popup.floatbutton,\n.miniMAL-hide .open-info-popup.floatbutton,\n.miniMAL-Fullscreen #flashinfo-div,\n.miniMAL-hide #flashinfo-div,\n.miniMAL-Fullscreen #flash-div-bottom,\n.miniMAL-hide #flash-div-bottom,\n.miniMAL-Fullscreen #flash-div-top,\n.miniMAL-hide #flash-div-top {\n  display: none !important;\n}\n#malp {\n  max-width: 700px;\n}\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(54);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: inherit;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: inherit;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.miniMAL-Fullscreen .open-info-popup.floatbutton,\n.miniMAL-hide .open-info-popup.floatbutton,\n.miniMAL-Fullscreen #flashinfo-div,\n.miniMAL-hide #flashinfo-div,\n.miniMAL-Fullscreen #flash-div-bottom,\n.miniMAL-hide #flash-div-bottom,\n.miniMAL-Fullscreen #flash-div-top,\n.miniMAL-hide #flash-div-top {\n  display: none !important;\n}\n#malp {\n  max-width: 700px;\n  margin: 0;\n}\n.noApiKey [data-qa-id=\"moreButton\"] {\n  background-color: red;\n}\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(56);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.miniMAL-Fullscreen .open-info-popup.floatbutton,\n.miniMAL-hide .open-info-popup.floatbutton,\n.miniMAL-Fullscreen #flashinfo-div,\n.miniMAL-hide #flashinfo-div,\n.miniMAL-Fullscreen #flash-div-bottom,\n.miniMAL-hide #flash-div-bottom,\n.miniMAL-Fullscreen #flash-div-top,\n.miniMAL-hide #flash-div-top {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(58);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: inherit;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: inherit;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.mal-sync-active a {\n  background-color: #72abff !important;\n}\n#MalData select option {\n  background-color: white;\n}\nbody.darkmode #MalData select option {\n  background-color: #3b3e45 !important;\n}\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(60);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: black;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: black;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\nsection.main .content-wrapper .theatre .theatre-info {\n  margin-bottom: 1rem;\n}\n#flashinfo-div {\n  z-index: 99999 !important;\n}\n#malp,\n#malTotal,\n#AddMalDiv,\n#AddMal {\n  color: #999 !important;\n}\n#malStatus,\n#malUserRating,\n#malEpisodes {\n  background: transparent !important;\n  color: #d5015b !important;\n}\n#malStatus option,\n#malUserRating option,\n#malEpisodes option {\n  background: black !important;\n  color: #d5015b !important;\n}\n#malRating {\n  color: #d5015b !important;\n}\n.mal-sync-active .episode-label-wrap {\n  background-color: #002966;\n  background-color: #002966ba;\n}\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(62);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #694ba1;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #694ba1;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#MalData select option {\n  background-color: white;\n}\nbody.dark #MalData select option {\n  background-color: #1c1b26 !important;\n}\n#malp {\n  margin: 0;\n}\n#malp .info {\n  display: block;\n}\n#malp #malEpisodes {\n  display: inline-block;\n  border: 0;\n  padding: 0;\n  margin-bottom: 4px;\n}\n#malp select {\n  margin-left: -3px !important;\n}\n", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(64);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.mal-sync-active a {\n  background-color: #72abff !important;\n}\n#flashinfo-div {\n  z-index: 100 !important;\n}\n#malp #malVolumes,\n#malp #malEpisodes {\n  float: none;\n  display: inline-block;\n  border-radius: 0;\n}\n#MalData {\n  display: initial !important;\n}\n.cap-header:visited {\n  color: #fff !important;\n}\n", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(66);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n#malp * {\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(68);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: inherit;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: inherit;\n}\n#malSyncProgress.ms-loading {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n}\n#malSyncProgress.ms-loading:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%;\n  }\n  50% {\n    width: 30%;\n  }\n  70% {\n    width: 70%;\n  }\n  80% {\n    left: 50%;\n  }\n  95% {\n    left: 120%;\n  }\n  to {\n    left: 100%;\n  }\n}\n#malSyncProgress.ms-done .ms-progress {\n  width: 100% !important;\n  background-color: #ff4081 !important;\n  transition: background-color 1s !important;\n}\n.mal-sync-active {\n  border: 2px solid #002966 !important;\n}\n#malp {\n  margin: 10px;\n  max-width: 1000px;\n}\n#malp select option {\n  color: white;\n}\n", ""]);

// exports


/***/ })
/******/ ]);