const navBrand = document.querySelector("#navBrand")
let img;
let arr=[];


function generateNewPokemon(){
//get request from api
$.get('https://api.pokemontcg.io/v2/cards?pageSize=30&orderBy=set.id,nationalPokedexNumbers&q=nationalPokedexNumbers:[1 TO 151]',(d)=>{
for(let result of d.data){
   let set = result.set.name
   if (set='base'){ // only cards from base set 1; 
      
//push all image results to arr
      arr.push(result.images.small)
   }
}
// assigns a random index in arr to img
$("body").append('<div class="container"></div>')
img = arr[Math.floor(Math.random()*31)]
$('#card1').append(`<img id="img1" src="${img}"></img>`)
$('#img1').addClass("card-img-top")
img = arr[Math.floor(Math.random()*31)]
$('#card2').append(`<img id="img2" src="${img}"></img>`)
$('#img2').addClass("card-img-top")
img = arr[Math.floor(Math.random()*31)]
$('#card3').append(`<img id="img3" src="${img}"></img>`)
$('#img3').addClass("card-img-top")
//console.log(img)

})

}

generateNewPokemon()

navBrand.addEventListener('click', (e)=>{
$(".card").html("")//clear cards from screen
img = arr[Math.floor(Math.random()*31)]
$('#card1').append(`<img id="img1" src="${img}"></img>`)
$('#img1').addClass("card-img-top")
img = arr[Math.floor(Math.random()*31)]
$('#card2').append(`<img id="img2" src="${img}"></img>`)
$('#img2').addClass("card-img-top")
img = arr[Math.floor(Math.random()*31)]
$('#card3').append(`<img id="img3" src="${img}"></img>`)
$('#img3').addClass("card-img-top")
  })






//use Jquesry to add div element with class = container