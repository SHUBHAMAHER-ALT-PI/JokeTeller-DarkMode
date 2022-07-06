const button = document.querySelector('.contener button');
const jokeText = document.querySelector('.contener p');
document.addEventListener('DOMContentLoaded',getjoke);
button.addEventListener('click',getjoke);
function getjoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':"application/json"
        }
    }).then(data=>data.json())
    .then(obj=> {jokeText.innerHTML=obj.joke
        var msg = new SpeechSynthesisUtterance(obj.joke);
        speechSynthesis.speak(msg);
    })
}
const darkbtn = document.querySelector("#btn_dark");
darkbtn.addEventListener("click",()=>{
    const main= document.querySelector("#main");
    const bag = document.querySelector("#bag");
    const darkbt = document.querySelector("#btn_dark");
    main.classList.toggle("body_dark");
    bag.classList.toggle("dark_mode");
    darkbt.classList.toggle("circle");

})
// async function getjoke(){
//     const jokedata= await fetch('https://icanhazdadjoke.com/',{
//       headers:{
//           'Accept':'application/json'
//       }  
//     });
//     const jokeObj= await jokedata.json();
//     console.log(jokeObj.joke);
//     jokeText.innerHTML=jokeObj.joke;
// }
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }