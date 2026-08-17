const args = process.argv

console.log(args[2]) // first argument
console.log(args[3]) // second argument

// args 0 is for path to node 
// args 1 is for path to script 
// thats why we write node script.js 
// our args start from agrs 2

// event loop , plain console lgs execute before setTimeout even if pause is 0 ms. 
// http module = modern day express , server , req,res etc