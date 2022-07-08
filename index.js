const navballButton = document.querySelector("#navBallButton");

let img;
let arr = [];

let nameArr = [];
let name;

let typeArr = [];
let type;

let preEvoArr = [];
let preEvo;

let evoArr = [];
let evo;

function generateNewPokemon() {
  //get request from api
  $.get(
    "https://api.pokemontcg.io/v2/cards?pageSize=30&orderBy=set.id,nationalPokedexNumbers&q=nationalPokedexNumbers:[1 TO 151]",
    (d) => {
      for (let result of d.data) {
        let set = result.set.name;
        if ((set = "base")) {
          // only cards from base set 1;
          //push all image results to arr
          arr.push(result.images.small);
          nameArr.push(result.name);
          typeArr.push(result.types);
          preEvoArr.push(result.evolvesFrom);
          evoArr.push(result.evolvesTo);
          //console.log(result)
        }
      }
      console.log(evoArr);
      // assigns a random index in arr to img
      $("body").append('<div class="container"></div>');
      img = arr[Math.floor(Math.random() * 31)];
      name = nameArr[arr.indexOf(img)];
      type = typeArr[arr.indexOf(img)];

      if (preEvoArr[arr.indexOf(img)] === undefined) {
        // if preEvo is undefined = N/A otherwise correct
        preEvo = "N/A";
      } else {
        preEvo = preEvoArr[arr.indexOf(img)];
      }
      if (evoArr[arr.indexOf(img)] === undefined) {
        // --> *** 'arr' is the img array ***
        evo = "N/A";
      } else {
        evo = evoArr[arr.indexOf(img)];
      }
      $("#card1").append(`<img id="img1" src="${img}"></img>`);
      $(".name1-fill").append(`   ${name}`);
      $(".type1-fill").append(`   ${type}`);
      $(".preEvo1-fill").append(` ${preEvo}`);
      $(".evo1-fill").append(` ${evo}`);

      $("#img1").addClass("card-img-top");
      img = arr[Math.floor(Math.random() * 31)];
      name = nameArr[arr.indexOf(img)];
      type = typeArr[arr.indexOf(img)];
      if (preEvoArr[arr.indexOf(img)] === undefined) {
        preEvo = "N/A";
      } else {
        preEvo = preEvoArr[arr.indexOf(img)];
      }
      if (evoArr[arr.indexOf(img)] === undefined) {
        // --> *** 'arr' is the img array ***
        evo = "N/A";
      } else {
        evo = evoArr[arr.indexOf(img)];
      }
      $("#card2").append(`<img id="img2" src="${img}"></img>`);
      $(".name2-fill").append(`   ${name}`);
      $(".type2-fill").append(`   ${type}`);
      $(".preEvo2-fill").append(` ${preEvo}`);
      $(".evo2-fill").append(` ${evo}`);
      $("#img2").addClass("card-img-top");
      img = arr[Math.floor(Math.random() * 31)];
      name = nameArr[arr.indexOf(img)];
      type = typeArr[arr.indexOf(img)];
      if (preEvoArr[arr.indexOf(img)] === undefined) {
        preEvo = "N/A";
      } else {
        preEvo = preEvoArr[arr.indexOf(img)];
      }
      if (evoArr[arr.indexOf(img)] === undefined) {
        // --> *** 'arr' is the img array ***
        evo = "N/A";
      } else {
        evo = evoArr[arr.indexOf(img)];
      }
      $("#card3").append(`<img id="img3" src="${img}"></img>`);
      $(".name3-fill").append(`   ${name}`);
      $(".type3-fill").append(`   ${type}`);
      $(".preEvo3-fill").append(` ${preEvo}`);
      $(".evo3-fill").append(` ${evo}`);
      $("#img3").addClass("card-img-top");
      //console.log(img)
    }
  );
}

generateNewPokemon();

navballButton.addEventListener("click", (e) => {
  $(".card").html(""); //clear cards from screen
  $(".fill").text("");
  img = arr[Math.floor(Math.random() * 31)];
  name = nameArr[arr.indexOf(img)];
  type = typeArr[arr.indexOf(img)];

  if (preEvoArr[arr.indexOf(img)] === undefined) {
    // if preEvo is undefined = N/A otherwise correct
    preEvo = "N/A";
  } else {
    preEvo = preEvoArr[arr.indexOf(img)];
  }
  if (evoArr[arr.indexOf(img)] === undefined) {
    // --> *** 'arr' is the img array ***
    evo = "N/A";
  } else {
    evo = evoArr[arr.indexOf(img)];
  }
  $("#card1").append(`<img id="img1" src="${img}"></img>`);
  $(".name1-fill").append(`   ${name}`);
  $(".type1-fill").append(`   ${type}`);
  $(".preEvo1-fill").append(` ${preEvo}`);
  $(".evo1-fill").append(` ${evo}`);

  $("#img1").addClass("card-img-top");
  img = arr[Math.floor(Math.random() * 31)];
  name = nameArr[arr.indexOf(img)];
  type = typeArr[arr.indexOf(img)];
  if (preEvoArr[arr.indexOf(img)] === undefined) {
    preEvo = "N/A";
  } else {
    preEvo = preEvoArr[arr.indexOf(img)];
  }
  if (evoArr[arr.indexOf(img)] === undefined) {
    // --> *** 'arr' is the img array ***
    evo = "N/A";
  } else {
    evo = evoArr[arr.indexOf(img)];
  }
  $("#card2").append(`<img id="img2" src="${img}"></img>`);
  $(".name2-fill").append(`   ${name}`);
  $(".type2-fill").append(`   ${type}`);
  $(".preEvo2-fill").append(` ${preEvo}`);
  $(".evo2-fill").append(` ${evo}`);
  $("#img2").addClass("card-img-top");
  img = arr[Math.floor(Math.random() * 31)];
  name = nameArr[arr.indexOf(img)];
  type = typeArr[arr.indexOf(img)];
  if (preEvoArr[arr.indexOf(img)] === undefined) {
    preEvo = "N/A";
  } else {
    preEvo = preEvoArr[arr.indexOf(img)];
  }
  if (evoArr[arr.indexOf(img)] === undefined) {
    // --> *** 'arr' is the img array ***
    evo = "N/A";
  } else {
    evo = evoArr[arr.indexOf(img)];
  }
  $("#card3").append(`<img id="img3" src="${img}"></img>`);
  $(".name3-fill").append(`   ${name}`);
  $(".type3-fill").append(`   ${type}`);
  $(".preEvo3-fill").append(` ${preEvo}`);
  $(".evo3-fill").append(` ${evo}`);
  $("#img3").addClass("card-img-top");
});

//use Jquesry to add div element with class = container
