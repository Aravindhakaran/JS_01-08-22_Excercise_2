
function myFunction(){
let age = document.getElementById("input").value;
if(isNaN(age)|| age==""){
    document.getElementById("result").innerHTML = "Result: Give valid input";
}
else if(age>=65){
    document.getElementById("result").innerHTML = "Result: You are Old";
}
else if(age>=18){
    document.getElementById("result").innerHTML = "Result: You are Adult";
}else if(age<18){
    console.log(age)
    document.getElementById("result").innerHTML = "Result: You are Child";
}
else {
}
}

//Switch case;


let day
switch(new Date().getDate()){
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
     case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
}
document.getElementById("result2").innerHTML ="Result : Today is "+ day;