const demo = document.getElementById("demo");
const demo1 = document.getElementById("demo1");
const demo2 = document.getElementById("demo2");
const demo3 = document.getElementById("demo3");
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("The first promise has resolved");
        demo.innerHTML = "The First Promise is resolved"
        resolve(20);
    },3*1000);

    
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("The second promise is resolved");
        demo1.innerHTML = "The Second Promise is resolved"
        resolve(10);
    },4*1000);

    
});

// Promise.race([p1,p2])
// .then(value=>console.log(`Resolved:${value}`))
// .catch(reason=>console.log(`Rejected:${reason}`));

Promise.race([p1,p2])
.then(value=>console.log(demo2.innerHTML = value))
.catch(data=>console.log(demo2.innerHTML = data));

