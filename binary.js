let a = document.getElementById("insert");
let b = document.getElementById("display");
let c= document.getElementById("btn");
c.addEventListener("click",p);

function p(){
    var g=a.value;
    var isbinary=true;

    for(var i= g.length-1; i>=0 ; i--) {
        var digit= parseInt(g.charAt(i),10);
        if (digit!==1 && digit!==0 ){
            isbinary=false;
            break;
        }
    }
    b.value= isbinary?"Binary":"Not Binary";
}
