// ==UserScript==
// @name Discord-Anime-Gaming
// @namespace https://greasyfork.org/users/92233
// @description Sets the discord playing state
// @version 0.23.0
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
// @match *://kissanime.ru/Anime/*
// @match *://kissanime.to/Anime/*
// @match *://kissmanga.com/Manga/*
// @match *://*.9anime.to/watch/*
// @match *://*.9anime.is/watch/*
// @match *://*.9anime.ru/watch/*
// @match *://*.9anime.ch/watch/*
// @match *://*.crunchyroll.com/*
// @match *://www.masterani.me/anime/info/*
// @match *://www.masterani.me/anime/watch/*
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
// @match *://branitube.org/assistir/*
// @match *://branitube.org/animes/*
// @match *://*.www.turkanime.tv/video/*
// @match *://*.www.turkanime.tv/anime/*
// @match *://twist.moe/*
// @match *://*.mp4upload.com/*
// @match *://*.streamango.com/*
// @match *://*.youtube.googleapis.com/embed/*
// @match *://*.estream.to/*
// @match *://*.mycloud.to/*
// @match *://*.openload.co/*
// @match *://*.yourupload.com/*
// @match *://*.mcloud.to/*
// @match *://*.rapidvideo.com/*
// @match *://static.crunchyroll.com/vilos/*
// @match *://*.vidstreaming.io/*
// @match *://*.oload.tv/*
// @exclude *crunchyroll.com/
// @exclude *crunchyroll.com
// @exclude *crunchyroll.com/acct*
// @exclude *crunchyroll.com/anime*
// @exclude *crunchyroll.com/comics*
// @exclude *crunchyroll.com/edit*
// @exclude *crunchyroll.com/email*
// @exclude *crunchyroll.com/forum*
// @exclude *crunchyroll.com/home*
// @exclude *crunchyroll.com/inbox*
// @exclude *crunchyroll.com/library*
// @exclude *crunchyroll.com/login*
// @exclude *crunchyroll.com/manga*
// @exclude *crunchyroll.com/newprivate*
// @exclude *crunchyroll.com/news*
// @exclude *crunchyroll.com/notifications*
// @exclude *crunchyroll.com/order*
// @exclude *crunchyroll.com/outbox*
// @exclude *crunchyroll.com/pm*
// @exclude *crunchyroll.com/search*
// @exclude *crunchyroll.com/store*
// @exclude *crunchyroll.com/user*
// @exclude *crunchyroll.com/videos*
// @exclude *crunchyroll.com/affiliate_iframeplayer*
// @exclude *gogoanime*.*/
// @exclude *gogoanime*.*/*.html
// @exclude *gogoanime*.*/anime-List*
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* WEBPACK VAR INJECTION */(function(api, j, con, utils) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlPart", function() { return urlPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlParam", function() { return urlParam; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canHideTabs", function() { return canHideTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epPrediction", function() { return epPrediction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusTag", function() { return statusTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
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
        return url.split("/")[part].split("?")[0];
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
        return 'Chapter';
    return 'Episode';
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
                var updateCheckTime = yield api.storage.get("updateCheckTime");
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
                    elCache: elCache
                };
                //
                var airing = pre.airing;
                var episode = pre.episode;
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
                    UI.colorStyle = 'background-color: #00ff0057 !important;';
                }
                //
                if (airing) {
                    if (pre.airing) {
                        UI.text = 'Next episode estimated in ' + pre.diffDays + 'd ' + pre.diffHours + 'h ' + pre.diffMinutes + 'm';
                    }
                    if (episode) {
                        UI.tag = '<span class="mal-sync-ep-pre" title="' + UI.text + '">[<span style="' + UI.colorStyle + ';">' + episode + '</span>]</span>';
                        UI.tagEpisode = episode;
                    }
                }
                else {
                    if (pre) {
                        UI.text = '<span class="mal-sync-ep-pre">Airing in ' + ((pre.diffWeeks * 7) + pre.diffDays) + 'd ' + pre.diffHours + 'h ' + pre.diffMinutes + 'm </span>';
                    }
                }
                callback(UI);
            });
        });
    });
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
    try {
        return chrome.notifications.create(url, messageObj);
    }
    catch (e) {
        con.error(e);
    }
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
        mess = '<div class="' + messClass + '" style="display:none; max-height: 5000px; overflow: hidden;"><div style="display:table; pointer-events: all; margin: 0 auto; margin-top: -2px; max-width: 60%; -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 2px;color: white;background:' + colorF + '; "><div style="max-height: 60vh; overflow-y: auto; padding: 14px 24px 14px 24px;">' + text + '</div></div></div>';
        j.$('#flashinfo-div').addClass('hover');
        var flashm = j.$(mess).appendTo('#flashinfo-div');
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
function lazyload(doc, scrollElement = '.simplebar-scroll-content') {
    /* lazyload.js (c) Lorenzo Giuliani
     * MIT License (http://www.opensource.org/licenses/mit-license.html)
     *
     * expects a list of:
     * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
     */
    processScroll = function () {
        for (var i = 0; i < lazyimages.length; i++) {
            if (elementInViewport(lazyimages[i])) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(0), __webpack_require__(3), __webpack_require__(2)))

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pages; });
/* unused harmony export pageSearch */
/* harmony import */ var _Kissanime_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _Kissmanga_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _nineAnime_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _Crunchyroll_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _Masterani_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _Mangadex_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Mangarock_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _Gogoanime_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _Anime4you_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _Branitube_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _Turkanime_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _Twistmoe_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);












const pages = {
    Kissanime: _Kissanime_main__WEBPACK_IMPORTED_MODULE_0__[/* Kissanime */ "a"],
    Kissmanga: _Kissmanga_main__WEBPACK_IMPORTED_MODULE_1__[/* Kissmanga */ "a"],
    nineAnime: _nineAnime_main__WEBPACK_IMPORTED_MODULE_2__[/* nineAnime */ "a"],
    Crunchyroll: _Crunchyroll_main__WEBPACK_IMPORTED_MODULE_3__[/* Crunchyroll */ "a"],
    Masterani: _Masterani_main__WEBPACK_IMPORTED_MODULE_4__[/* Masterani */ "a"],
    Mangadex: _Mangadex_main__WEBPACK_IMPORTED_MODULE_5__[/* Mangadex */ "a"],
    Mangarock: _Mangarock_main__WEBPACK_IMPORTED_MODULE_6__[/* Mangarock */ "a"],
    Gogoanime: _Gogoanime_main__WEBPACK_IMPORTED_MODULE_7__[/* Gogoanime */ "a"],
    Anime4you: _Anime4you_main__WEBPACK_IMPORTED_MODULE_8__[/* Anime4you */ "a"],
    Branitube: _Branitube_main__WEBPACK_IMPORTED_MODULE_9__[/* Branitube */ "a"],
    Turkanime: _Turkanime_main__WEBPACK_IMPORTED_MODULE_10__[/* Turkanime */ "a"],
    Twistmoe: _Twistmoe_main__WEBPACK_IMPORTED_MODULE_11__[/* Twistmoe */ "a"],
};
const pageSearch = {
    Kissanime: {
        name: 'Kissanime',
        type: 'anime',
        domain: 'kissanime.ru',
        searchUrl: (titleEncoded) => { return ''; },
        completeSearchTag: (title, linkContent) => { return '<form class="mal_links" target="_blank" action="http://kissanime.ru/Search/Anime" style="display: inline;" id="kissanimeSearch" method="post" _lpchecked="1"><a href="#" class="submitKissanimeSearch" onclick="document.getElementById(\'kissanimeSearch\').submit(); return false;">' + linkContent + '</a><input type="hidden" id="keyword" name="keyword" value="' + title + '"/></form>'; }
    },
    Kissmanga: {
        name: 'Kissmanga',
        type: 'manga',
        domain: 'kissmanga.com',
        searchUrl: (titleEncoded) => { return ''; },
        completeSearchTag: (title, linkContent) => { return '<form class="mal_links" target="_blank" action="http://kissmanga.com/Search/Manga" style="display: inline;" id="kissanimeSearch" method="post" _lpchecked="1"><a href="#" class="submitKissanimeSearch" onclick="document.getElementById(\'kissanimeSearch\').submit(); return false;">' + linkContent + '</a><input type="hidden" id="keyword" name="keyword" value="' + title + '"/></form>'; }
    },
    Crunchyroll: {
        name: 'Crunchyroll',
        type: 'anime',
        domain: 'www.crunchyroll.com',
        searchUrl: (titleEncoded) => { return 'http://www.crunchyroll.com/search?q=' + titleEncoded; }
    },
    nineAnime: {
        name: '9Anime',
        type: 'anime',
        domain: '9anime.to',
        googleSearchDomain: '9anime.to/watch',
        searchUrl: (titleEncoded) => { return 'https://www1.9anime.to/search?keyword=' + titleEncoded; }
    },
    MasterAnime: {
        name: 'MasterAnime',
        type: 'anime',
        domain: 'www.masterani.me',
        googleSearchDomain: 'www.masterani.me/anime/info/',
        searchUrl: (titleEncoded) => { return 'https://www.masterani.me/anime?search=' + titleEncoded; }
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
        autoTracking: true,
        userscriptMode: false,
        syncMode: 'MAL',
        delay: 0,
        malTags: true,
        malResume: true,
        epPredictions: true,
        posLeft: 'left',
        miniMALonMal: false,
        displayFloatButton: true,
        outWay: true,
        miniMalWidth: '30%',
        miniMalHeight: '90%',
        malThumbnail: 100,
        friendScore: true,
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
        updateCheckNotifications: true,
        'anilistToken': '',
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
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(3)))

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
            var temp = [];
            temp = episodePart.match(/[e,E][p,P][i,I]?[s,S]?[o,O]?[d,D]?[e,E]?\D?\d{3}/);
            if (temp !== null) {
                episodePart = temp[0];
            }
            temp = episodePart.match(/\d{3}/);
            if (temp === null) {
                temp = episodePart.match(/\d{2,}\-/);
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
        if (document.title == "Please wait 5 seconds...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(21).toString());
        j.$(document).ready(function () { page.handlePage(); });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(3), __webpack_require__(1)))

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
        if (document.title == "Please wait 5 seconds...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(23).toString());
        j.$(document).ready(function () { page.handlePage(); });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(3), __webpack_require__(1)))

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
        api.storage.addStyle(__webpack_require__(25).toString());
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crunchyroll; });
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
        getTitle: function (url) { return Crunchyroll.sync.getIdentifier(url); },
        getIdentifier: function (url) {
            var script = (j.$("#template_body script")[1]).innerHTML;
            script = script.split('mediaMetadata =')[1].split('"name":"')[1].split(' -')[0];
            script = JSON.parse('"' + script.replace('"', '\\"') + '"');
            return script;
        },
        getOverviewUrl: function (url) { return url.split('/').slice(0, 4).join('/') + '?season=' + Crunchyroll.sync.getIdentifier(url); },
        getEpisode: function (url) {
            var episodePart = utils.urlPart(url, 4);
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
        },
        nextEpUrl: function (url) { return Crunchyroll.domain + j.$('.collection-carousel-media-link-current').parent().next().find('.link').attr('href'); }
    },
    overview: {
        getTitle: function (url) { return Crunchyroll.overview.getIdentifier(url); },
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
                return Crunchyroll.sync.getEpisode(url);
            },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(27).toString());
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Masterani; });
const Masterani = {
    name: 'Masterani',
    domain: 'https://www.masterani.me',
    database: 'Masterani',
    type: 'anime',
    isSyncPage: function (url) {
        if (url.split('/')[4] !== 'watch') {
            return false;
        }
        else {
            return true;
        }
    },
    sync: {
        getTitle: function (url) { return j.$('.info h1').text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(url, 5); },
        getOverviewUrl: function (url) { return utils.absoluteLink(j.$('.info a').first().attr('href'), Masterani.domain); },
        getEpisode: function (url) {
            return parseInt(utils.urlPart(url, 6));
        },
        nextEpUrl: function (url) { return Masterani.domain + j.$('#watch .anime-info .actions a').last().attr('href'); }
    },
    overview: {
        getTitle: function (url) { return Masterani.sync.getIdentifier(url).replace(/^\d*-/, ''); },
        getIdentifier: function (url) { return Masterani.sync.getIdentifier(url); },
        uiSelector: function (selector) { selector.prependTo(j.$("#stats").first()); },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$(".episodes .thumbnail"); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find('a').first().attr('href'), Masterani.domain); },
            elementEp: function (selector) {
                return Masterani.sync.getEpisode(Masterani.overview.list.elementUrl(selector));
            },
            paginationNext: function () {
                var el = j.$('.pagination .item').last();
                if (el.hasClass('disabled')) {
                    return false;
                }
                else {
                    el[0].click();
                    return true;
                }
            }
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(29).toString());
        utils.waitUntilTrue(function () { return j.$('#stats,#watch').length; }, function () {
            page.handlePage();
            j.$('.ui.toggle.checkbox, .pagination.menu').click(function () {
                setTimeout(function () {
                    page.handleList();
                }, 500);
            });
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mangadex; });
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
        getTitle: function (url) { return j.$('.manga-link').text().trim(); },
        getIdentifier: function (url) { return utils.urlPart(Mangadex.sync.getOverviewUrl(url), 4); },
        getOverviewUrl: function (url) { return utils.absoluteLink(j.$('a.manga-link').first().attr('href'), Mangadex.domain); },
        getEpisode: function (url) {
            var chapterId = url.split('/')[4];
            var curOption = j.$('#jump-chapter option[value="' + chapterId + '"]');
            if (curOption.length) {
                var temp = curOption.text().trim().match(/ch\.\D?\d+/i);
                if (temp !== null) {
                    return EpisodePartToEpisode(temp[0]);
                }
            }
            return NaN;
        },
        getVolume: function (url) {
            var chapterId = url.split('/')[4];
            var curOption = j.$('#jump-chapter option[value="' + chapterId + '"]');
            if (curOption.length) {
                var temp = curOption.text().trim().match(/vol\.\D?\d+/i);
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
        api.storage.addStyle(__webpack_require__(31).toString());
        if (j.$('.card-header').length) {
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
    }
};
function EpisodePartToEpisode(string) {
    if (!string)
        return '';
    if (!(isNaN(parseInt(string)))) {
        return string;
    }
    var temp = [];
    temp = string.match(/ch\.\D?\d+/i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 14 */
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
            selector.insertBefore($("h2:contains('Chapters')").first().parent().parent().parent());
        },
        list: {
            offsetHandler: false,
            elementsSelector: function () { return j.$('[data-test="chapter-table"] tr'); },
            elementUrl: function (selector) { return utils.absoluteLink(selector.find("a").first().attr('href'), Mangarock.domain); },
            elementEp: function (selector) { return EpisodePartToEpisode(selector.find('a').text()); },
        }
    },
    init(page) {
        api.storage.addStyle(__webpack_require__(33).toString());
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
    return '';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(3), __webpack_require__(1)))

/***/ }),
/* 15 */
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
        api.storage.addStyle(__webpack_require__(35).toString());
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(0), __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 16 */
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
        getTitle: function (url) { return j.$('.titel').text().trim(); },
        getIdentifier: function (url) { return parseInt(utils.urlPart(url, 6)).toString(); },
        getOverviewUrl: function (url) {
            return Anime4you.domain + '/show/1/aid/' + Anime4you.sync.getIdentifier(url);
        },
        getEpisode: function (url) {
            return parseInt(utils.urlPart(url, 8));
        },
        nextEpUrl: function (url) { return Anime4you.domain + '/' + j.$('.vidplayer .forward a').first().attr('href'); },
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
        if (document.title == "Please wait 5 seconds...") {
            con.log("loading");
            page.cdn();
            return;
        }
        api.storage.addStyle(__webpack_require__(37).toString());
        j.$(document).ready(function () {
            page.handlePage();
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(3), __webpack_require__(1)))

/***/ }),
/* 17 */
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
        api.storage.addStyle(__webpack_require__(39).toString());
        j.$(document).ready(function () {
            page.handlePage();
        });
    }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(j, utils, api, con) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Turkanime; });
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
        }
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
        api.storage.addStyle(__webpack_require__(41).toString());
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 19 */
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
        api.storage.addStyle(__webpack_require__(43).toString());
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(api, con, j, utils) {/* harmony import */ var _MALSync_src_pages_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

api.storage.addStyle = function () { };
var css = "font-size: 40px; padding-bottom: 3px; color: white; text-shadow: -1px -1px #2e51a2, 1px -1px #2e51a2, -1px 1px #2e51a2, 1px 1px #2e51a2, 2px 2px #2e51a2, 3px 3px #2e51a2;";
console.log("%cDiscord-Anime-Gaming", css, "Version: " + api.storage.version());
var interval = 5000;
main();
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(3), __webpack_require__(0), __webpack_require__(2)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(22);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #d5f406;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #d5f406;\n}\n#footer {\n  z-index: 2;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  height: auto !important;\n}\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(24);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #72cefe;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #72cefe;\n}\n#footer {\n  z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(26);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #694ba1;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #694ba1;\n}\nbody.dark #MalData select option {\n  background-color: #1c1b26 !important;\n}\n#malp {\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(28);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #b2d1ff !important;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malp {\n  background-color: #555;\n  padding: 10px 7px 5px 7px;\n}\n#malp span {\n  color: white;\n}\n#malp select > * {\n  background-color: #555 !important;\n}\n", ""]);

// exports


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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: inherit;\n}\n.mal-sync-active {\n  background-color: #cee1ff;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: inherit;\n}\n#malp {\n  margin: 0;\n}\n#malp span {\n  color: inherit;\n}\n#malp select > * {\n  background-color: white !important;\n}\n@media only screen and (max-width: 1440px) {\n  #malp .MalLogin {\n    width: 100%;\n  }\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: black;\n}\n.mal-sync-active {\n  background-color: #cee1ff !important;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: black;\n}\n#malp {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n  margin-bottom: 20px;\n  position: relative;\n}\n#malp span {\n  color: black;\n}\n#malp select > * {\n  background-color: white !important;\n}\n@media only screen and (max-width: 1320px) {\n  #malp .MalLogin {\n    width: 100%;\n  }\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: #ffc119;\n}\n.mal-sync-active {\n  background-color: #002966 !important;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: #ffc119;\n}\n#malp * {\n  font-size: 13px;\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n.mal-sync-active a {\n  background-color: #72abff !important;\n}\n#flashinfo-div {\n  z-index: 100 !important;\n}\n#malp #malVolumes,\n#malp #malEpisodes {\n  float: none;\n  display: inline-block;\n  border-radius: 0;\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #bbbbbb;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malp {\n  color: white;\n}\n#flash-div-top button,\n#flash-div-bottom button,\n#flashinfo-div button {\n  background: none;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n#flash-div-top .undoButton,\n#flash-div-bottom .undoButton,\n#flashinfo-div .undoButton {\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: black;\n}\n.mal-sync-active {\n  background-color: #0066ff;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: black;\n}\n", ""]);

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

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#malStatus,\n#malTotal,\n#malEpisodes,\n#malUserRating,\n#malRating,\n#malVolumes,\n#malTotalVol,\n#malTotalCha,\n#AddMal {\n  color: white;\n}\n.mal-sync-active {\n  background-color: #002966;\n}\n#malp select option {\n  background-color: #111111;\n}\n#malp #malStatus,\n#malp #malUserRating,\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  font-size: inherit;\n  font-family: inherit;\n  background: transparent;\n  border-width: 1px;\n  border-color: grey;\n  text-decoration: none;\n  outline: medium none;\n  border-width: 0px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n#malp #malEpisodes,\n#malp #malVolumes,\n#malp #malEpisodes {\n  text-align: center;\n  border-bottom-width: 1px;\n}\n#malp #malEpisodes:focus,\n#malp #malVolumes:focus,\n#malp #malEpisodes:focus {\n  border-color: white;\n}\n#malp {\n  margin-top: 1rem;\n  border-top: 0 solid hsla(0, 0%, 100%, 0.05);\n  border-width: 1px 0;\n  font-size: 14px;\n  padding: 10px 5px 0;\n  padding-top: 1rem;\n}\n#malp select {\n  display: inline-block;\n  width: auto;\n}\n#malp input {\n  display: inline-block;\n}\n.my-float.open-info-popup {\n  height: 100%;\n  width: 100%;\n  margin: 0 !important;\n}\n", ""]);

// exports


/***/ })
/******/ ]);