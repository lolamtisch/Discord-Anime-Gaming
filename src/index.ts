import {pages} from "./MALSync/src/pages/pages";
declare var Discord: any;
declare var GM_deleteValue: any;
declare var GM_setValue: any;
declare var GM_getValue: any;

api.storage.addStyle = function(){};

var css = "font-size: 40px; padding-bottom: 3px; color: white; text-shadow: -1px -1px #2e51a2, 1px -1px #2e51a2, -1px 1px #2e51a2, 1px 1px #2e51a2, 2px 2px #2e51a2, 3px 3px #2e51a2;";
console.log("%cDiscord-Anime-Gaming", css, "Version: "+ api.storage.version());

var interval = 5000;
$(document).ready(function(){main();});
function main(){
  var page = getPage(window.location.href);
  if(page && !inIframe()){
    con.log('Page found', page.name, window.location.href);
    handlePage(page);
  }else{
    con.log('Video Iframe', window.location.href);
    setInterval(function(){
        var timeLeft = getTimeleft();
        con.log('[IFRAME]', timeLeft);
        if(timeLeft != '' && timeLeft){
          con.log('[IFRAME] Set', timeLeft);
          GM_setValue('timeLeft', timeLeft);
        }
    }, interval);
  }
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function getPage(url){
  for (var key in pages) {
    var page = pages[key];
    if(j.$.isArray(page.domain)){
      for (var k in page.domain) {
        var singleDomain = page.domain[k];
        if(checkDomain(singleDomain)){
          page.domain = singleDomain;
          return page;
        }
      }
    }else{
      if(checkDomain(page.domain)){
        return page;
      }
    }

    function checkDomain(domain){
      if( url.indexOf(utils.urlPart(domain, 2).split('.').slice(-2, -1)[0] +'.') > -1 ){
        return true;
      }
      return false;
    }

  }
  return null;
}

function handlePage(page){
  page.init({url: window.location.href, handlePage(){
    if(page.isSyncPage(window.location.href)){
      login(page);
    }else{
      con.log('Overview page');
    }
  }});
}

function login(page){
  var token = '';

  if(GM_getValue('token', 0)){
    token = GM_getValue('token');
  }else{
    //@ts-ignore
    token = prompt("Please enter your token.\nCheck the description for more information");
    GM_setValue('token', token);
  }

  var client = new Discord.Client({
    token: token,
    autorun: true
  });

  client.on('ready', function() {
    console.log(client.username+" ("+client.id+") logged in");
    GM_deleteValue('timeLeft');
    setInterval(function(){ setgame(); }, interval);
    setgame();
  });

  client.on('disconnect', function(errMsg, code) {
    alert(errMsg);
    if(code == 4004){
      GM_deleteValue('token');
    }
  });

  function setgame() {
    var gameType = 3;
    if(page.type !== 'anime'){
      gameType = 1;
    }
    var timeLeft = getTimeleft();

    if( timeLeft == '' && GM_getValue('timeLeft', '') != ''){
        timeLeft = GM_getValue('timeLeft', '');
        GM_deleteValue('timeLeft');
    }

    var episode = page.sync.getEpisode(window.location.href);
    if(episode == null || episode == 0 || isNaN(episode)){
        episode = '';
    }else{
      if(page.type === 'anime'){
        episode = 'Ep. '+ episode;
      }else{
        episode = 'Chapter '+ episode;
      }
    }
    var title = page.sync.getTitle(window.location.href).replace('&amp;', '&').trim();
    var message = title +" "+ episode +" "+ timeLeft;
    client.setPresence({
        game:{
            name: message,
            type: gameType
        }
    });
    con.log('Set Game', message)
  }

  //@ts-ignore
  $( window ).unload(function() {
    client.setPresence({ game:{ name:"", } });
  });
}

function getTimeleft(){
  var timeLeft = '';
  var paused = false;
  if( typeof $('video').get(0) != 'undefined' ){
    //@ts-ignore
    var duration = $('video').get(0).duration;
    //@ts-ignore
    var current = $('video').get(0).currentTime;
    //@ts-ignore
    paused = $('video').get(0).paused;
    //@ts-ignore
    var time:number = Math.ceil( (duration - current) ) ;

    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    //@ts-ignore
    if(seconds < 10) seconds = '0'+seconds;


    //@ts-ignore
    if(time == null || time == 0 || isNaN(time)){
      timeLeft = '';
    }else{
      timeLeft = " ("+minutes+":"+seconds+" Left)";
    }
    if(paused === true){
      timeLeft = "(PAUSED)"
    }
  }
  return timeLeft;
}
