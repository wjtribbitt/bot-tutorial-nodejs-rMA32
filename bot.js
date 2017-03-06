var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/website/; 
      botRegexSlut = /^\/slut/; botRegexStop = /^\/stop/; botRegexSchedule = /^\/schedule/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexSlam = /^\/slam/; botRegexNFP = /^\/NFP/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/chevy/;
      botRegexDaf = /^\/dafuq/; botRegexMA32 = /^\/pending/; botRegexTrade = /^\/trade/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSlut.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/a/WHHuI");
    this.res.end();
  } 
  else if(request.text && botRegexSchedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://http://daddyleagues.com/tmi/schedules");
    this.res.end();
  } 
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexNFP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("data:image/jpeg;base64,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");
    this.res.end();
  } 
  else if(request.text && botRegexGian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  } 
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/tmi?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/tmi/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/tmi/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://http://daddyleagues.com/tmi/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/tmi/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/tmi/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/tmi");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexMA32.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/12hVrn7ShR3An6bP5uBF3gaoTQQgVciC-0RqtWVZ39Ls/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/forms/d/e/1FAIpQLSdrbe5iBRaBC7EWoodVm8z6285-dG2EdHXAOMOgz8md8T1jwQ/viewform");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
