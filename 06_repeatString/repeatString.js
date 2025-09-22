const repeatString = function(word,num) {
let output = '';
if (num<0){
    return 'ERROR'
}else
for (let i = 0; i<num; i++){
        output+=word
};
return output};
console.log(repeatString('hey',3))

// Do not edit below this line
module.exports = repeatString;
