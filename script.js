var id = document.querySelector('.header');
var adv = document.querySelector('.advice');
var dice = document.querySelector('.dice');
dice.addEventListener('click',()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((Response=>{
        return Response.json();
    }))
    .then((data=>{
        id.innerHTML = 'ADVICE #'+data.slip.id;
        adv.innerHTML = data.slip.advice;
    }))
})


