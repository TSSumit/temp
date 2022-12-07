const fs=require("fs");
fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb);
fs.readFile("f3.txt",cb);
function cb(err,res) {
    if(err){
        console.log(err);
    }
    else{
        console.log(res+" ");
    }
}
