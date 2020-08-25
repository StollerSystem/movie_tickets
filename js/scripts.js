// Business Logic for Ticket  ---------

function Ticket(movie,time,age) {
  this.movie = movie 
  this.time = time
  this.age = age
}

Ticket.prototype.price = function() {
  // is it a New Release?
  // is it a Matinee?
  // is the user Child/Senoir?

}

// Business Logic for Movie ----------

function Movie(title,newRelease,times) {
  this.title = title
  this.newRelease = newRelease
  this.times = times   
}

function MovieSelection() {
  this.list = []
}

// User Interface Logic ---------
let movie1 = new Movie("Jurrassic Parks N Rec",false,["Matinee","10:00pm"]);
let movie2 = new Movie("Batman 7",true,["6:00pm","9:00pm"]);
let movie3 = new Movie("Adventures in Fantasyland",false,["11:00am", "Matinee"]);
let movie4 = new Movie("Home Alone Stikes Back",true,["7:00pm"])

MovieSelection.list.push(movie1,movie2,movie3,movie4)