// Business Logic for Ticket  ---------

function Ticket(movie,time,age) {
  this.movie = movie; 
  this.time = time;
  this.age = age;
}

// Option 1
Ticket.prototype.price = function(isNewRelease,times,isSenior) {    
  let newRelease = 0
  let matinee = 0
  let senior = 0 
  if (isNewRelease) {
    newRelease = 6
  }
  for (const time of times) {
    if (time === "Matinee") {
      matinee = 8
    }  
  }
  if (isSenior) {
    senior = 5
  }
  let finalPrice = (18 + newRelease - matinee - senior);
  return finalPrice
}
let ticket1 = new Ticket("test","9:00pm","age")

//Option 2
 // base price $18 + new Release $24 - Matinee $8 - Child/Secior $5
Ticket.prototype.price2 = function (isNewRelease, timescape, isSenior) {

  const seniorPrice = [5];

  function priceModifier(priceArray, multiplier) {
    return priceArray.map(function(element) {
      return element + multiplier;
    });
  }
  
  const basePrice = priceModifier(seniorPrice, 13);
  
  if (isNewRelease) {
    const newRelease =  priceModifier(seniorPrice, 19);
  }
  for (const time of time) {
    if ( time === "Matinee")
    const matinee = priceModifier(seniorPrice, 3);
  }
  
}








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
let movie3 = new Movie("Adventures in Fantasyland",false,["11:00am", "Matinee"]);
let movie4 = new Movie("Home Alone Stikes Back",true,["7:00pm"])
movieSelection.list.push(movie1, movie2, movie3, movie4);