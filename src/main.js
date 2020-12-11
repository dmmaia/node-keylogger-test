var keypress = require('keypress');
const fs = require('fs');

var log = ''
 
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  if(key){
    log = `${log}\n${new Date()}: ${key.sequence}`

    try {
      fs.writeFileSync("./tmp/log.txt", log);
    } catch (error) {
      console.log(error)
    }
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();