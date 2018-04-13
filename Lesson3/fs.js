var fs = require('fs');
var obj=
{
    "first_name":"Lilit",
    "last_name":"Ye",
    "age":"1",
    "tumo_student":true
}

function main(){
   var file  = "obj.json";
   var myJSON = JSON.stringify(obj);
   fs.appendFileSync(file, myJSON);
}
main();