let count=1;
let bal="🎈"
let letters="HAPPYBIRTHDAY BINZ🧒⚽💥 ";

function balloons(){
    if (count<letters.length){
       count=count +1;
        bal+="🎈";
   }


document.getElementById("balloons").innerText=count + bal + letters[count-1];

if (count>13){
     document.getElementById("balloons").innerText=letters ;
}


}

      
     

    

