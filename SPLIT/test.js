import fs from 'fs';
let file = "/sdcard/1.txt";
let lmt = 1000;
let ext = file.split('/');
ext = ext[ext.length - 1];
ext = ext.split(".");
ext = ext[0];
if(!fs.existsSync(ext)){
  fs.mkdirSync(ext)
}
let test = fs.readFileSync(file).toString().trim().split("\n");
let name = ext + "/1.txt";
let intNum = 1;
for(let i =0;i<test.length; i++){
  if(i === lmt){
    lmt += 1000;
    console.log(lmt);
    console.log(name)
    let prefix = parseInt(name.charAt(0));
    intNum += 1;
    name = ext + "/"+intNum + ".txt";
    fs.appendFileSync(name,test[i]+'\n');
  } else {
    fs.appendFileSync(name,test[i] + "\n")
  }
}
