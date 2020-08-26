// Business Logic for Ticket  ---------

function Ticket(movie,time,age) {
  this.movie = movie; 
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function(isNewRelease,times,isSenior) {    
  const basePrice = 18
  let newReleaseMod = 0
  let matineeMod = 0
  let seniorMod = 0 
  if (isNewRelease) {
    newReleaseMod = 6
  }
  for (const time of times) {
    if (time === "Matinee") {
      matineeMod = 8
    }  
  }
  if (isSenior) {
    seniorMod = 5
  }
  let finalPrice = (basePrice + newReleaseMod - matineeMod - seniorMod);
  return finalPrice
}
let ticket1 = new Ticket("test","9:00pm","age")


// Business Logic for Movie ----------

function Movie(title,newRelease,times) {
  this.title = title;
  this.newRelease = newRelease;
  this.times = times;   
}

function MovieSelection() {
  this.list = [];
}


// User Interface Logic ---------
let movieSelection = new MovieSelection();
let movie1 = new Movie("Jurrassic Parks N Rec",false,["Matinee","10:00pm"]);
let movie2 = new Movie("Batman 7",true,["6:00pm","9:00pm"]);
let movie3 = new Movie("Adventures in Fantasyland",false,["<li>" + "11:00am", "Matinee" + "</li>"]);
let movie4 = new Movie("Home Alone Stikes Back",true,["7:00pm"])
movieSelection.list.push(movie1, movie2, movie3, movie4);


$(document).ready(function() {

  movieSelection.list.forEach(function(movie) {
    console.log(movie.title)
    $("#movies").append("<option>" + movie.title + "</option>")
  });


  $("#movies").change(function() {
    // console.log($("#movies").val())
    $("#movies").val()
    movieSelection.list.forEach(function(movie) {
      if (movie.title === $("#movies").val()) {
        $("#times").append("<option>" + movie.times + "</option>")
        console.log(movie.times)
      }
    });
  })
  
  $("form#new-contact").submit(function(event) {
    event.preventDefault();  
  });
});



//Option 2 - FAILED attempt at using the Array.prototype.map() loop:
 // base price $18 + new Release $24 - Matinee $8 - Child/Secior $5
// function Ticket(movie,time,age) {
//   this.movie = movie; 
//   this.time = time;
//   this.age = age;

//   Ticket.prototype.price2 = function (isNewRelease, time, isSenior) {

//     const lowestPrice = [5];

//     function priceModifier(priceArray, multiplier) {
//       return priceArray.map(function(element) {
//         return element + multiplier;
//       });
//     }
//     let newRelease =  priceModifier(lowestPrice, 19);
//     let matinee = priceModifier(lowestPrice, 3);
//     let senior = priceModifier(lowestPrice, 13);
//     let base = priceModifier(lowestPrice, 13);
    
//     if (isNewRelease) {
//       newRelease = newReleasePrice
//     }
//     for (const time of time) {
//       if ( time === "Matinee");
//       matinee = matineePrice
//     }
//     if (isSenior) {
//       senior = seniorPrice
//     }
//       else {
//         return base = basePrice
//     }
//   }
// }