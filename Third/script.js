function sumDigProd(){
    let num = 0;
    for(let i = 0;i<arguments.length;i++){
        num = num + arguments[i];
    }
    while(num > 10){
        var t = num.toString();
        var n1 = 1;
        for(let i = 0;i<t.length;i++){
            n1 = n1 * Number(t[i]); 
        }
        num = n1;
    }
        return num;
    }

document.getElementById('demo').innerHTML = sumDigProd(16,28);
// document.getElementById('demo').innerHTML = sumDigProd(0);
// document.getElementById('demo').innerHTML = sumDigProd(1,2,3,4,5,6);