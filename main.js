document.write("27.to check whether a string starts with 'Java' if it does not otherwise"+"<br>");
function test27(str){
    if(str.length<4){
        return false;
    }
    var x=str.substring(0,4);
    if(x==="Java"){
        return true;
    }
    return false;
}
document.write("the string is :sanjeev, Ans:"+test27("sanjeev")+"<br>");
document.write("the string is :Javascript, Ans:"+test27("Javascript")+"<br><br>");