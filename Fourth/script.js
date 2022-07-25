
// GET https://icanhazdadjoke.com/

const joke = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');



//  ---------------------------------Using Promise----------------------------- 

const generateJoke = () =>{

    const setHeader ={
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res)=>res.json())
    .then((data)=>{
        joke.innerHTML = data.joke;
    }).catch((error)=>{
        console.log(error);
    })
}


jokebtn.addEventListener('click', generateJoke);

generateJoke();