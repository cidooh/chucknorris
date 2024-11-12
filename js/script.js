
function getJoke(){
let appearJoke = document.getElementById('appear-joke')
let button = document.querySelector('.btn')


    fetch('https://api.chucknorris.io/jokes/random')
    .then(function(response){
        return response.json()
    })
        
    .then(function(data){
        console.log(data)
        appearJoke.textContent=data.value
    })
    .catch(function(error){
        appearJoke.textContent="joke failed"
        console.log(error)
    })


button.addEventListener('click',function(e){
getJoke()
})
}
getJoke()
