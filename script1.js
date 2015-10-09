//Assignment 3, Part 1
//Practice with Arrays
/*
//STEP 1
var favMovies = new Array ("Warrior", "Terminator", "Dumb and Dumber", "Lord Of The Rings", "Star Wars");
console.log(favMovies[1]);
*/

/*
//STEP 2
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
console.log(movies[0]);
*/

/*
//STEP 3
var movies = [];
movies[0] = "Warrior";
movies[1] = "Terminator";
movies[2] = "Dumb and Dumber";
movies[3] = "Lord Of The Rings";
movies[4] = "Star Wars";

movies.splice(2, 0, "Anchorman"); 
console.log(movies.length);
*/

/*
//STEP 4
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";

delete movies [0];
console.log(movies);
*/

/*
//STEP 5
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
*/

/*
//STEP 6
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

for (var index in movies) {
    console.log(movies[index]);
}
*/

/*
//STEP 7
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}
*/

/*
//STEP 8
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

var leastFavMovies = [];
leastFavMovies [0] = "Sharknado";
leastFavMovies [1] = "The Leprechaun";
leastFavMovies [2] = "Dumb and Dumberer";

console.log("Movies I like:\n\n");
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i] + " " + [i+1]);
}

console.log("\nMovies I regret watching:\n\n");
for (var i = 0; i < leastFavMovies.length; i++) {
    console.log(leastFavMovies[i] + " " + [i+1]);
}
*/

/*
//STEP 9
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

var leastFavMovies = [];
leastFavMovies [0] = "Sharknado";
leastFavMovies [1] = "The Leprechaun";
leastFavMovies [2] = "Dumb and Dumberer";

movies = movies.concat(leastFavMovies);
movies.reverse();
console.log(movies);
*/


/*
//STEP 10
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

var leastFavMovies = [];
leastFavMovies [0] = "Sharknado";
leastFavMovies [1] = "The Leprechaun";
leastFavMovies [2] = "Dumb and Dumberer";

movies = movies.concat(leastFavMovies);
movies.reverse();
lastMovie = movies.pop();
console.log(lastMovie);
*/

/*
//STEP 11
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

var leastFavMovies = [];
leastFavMovies [0] = "Sharknado";
leastFavMovies [1] = "The Leprechaun";
leastFavMovies [2] = "Dumb and Dumberer";

movies = movies.concat(leastFavMovies);
movies.reverse();
firstMovie = movies.shift();
console.log(firstMovie);
*/

/*
//STEP 12
var movies = [];
movies [0] = "Warrior";
movies [1] = "Terminator";
movies [2] = "Dumb and Dumber";
movies [3] = "Lord Of The Rings";
movies [4] = "Star Wars";
movies [5] = "Anchorman";
movies [6] = "The Matrix";

var leastFavMovies = [];
leastFavMovies [0] = "Sharknado";
leastFavMovies [1] = "The Leprechaun";
leastFavMovies [2] = "Dumb and Dumberer";

movies = movies.concat(leastFavMovies);
movies.reverse();
console.log(movies.indexOf("Dumb and Dumberer"))
console.log(movies.indexOf("The Leprechaun"))
console.log(movies.indexOf("Sharknado"))
movies.splice(0, 3, "End Of Watch", "John Wick", "Dark Knight");
console.log(movies)
*/


/*
//STEP 13
var employee1 = [];
employee1 ["id"] = "701";
employee1 ["name"] = "Carlos";
employee1 ["title"] = "Cook";
employee1 ["department"] = "Kitchen";
employee1 ["isCurrent"] = true;

var employee2 = [];
employee2 ["id"] = "702";
employee2 ["name"] = "Esther";
employee2 ["title"] = "Manager";
employee2 ["department"] = "Managerial";
employee2 ["isCurrent"] = false;

var employees = new Array(employee1, employee2);

console.log(employees[1]["name"]);
*/

/*
//STEP 14
var employee1 = [];
employee1 ["id"] = "701";
employee1 ["name"] = "Carlos";
employee1 ["title"] = "Cook";
employee1 ["department"] = "Kitchen";
employee1 ["isCurrent"] = true;

var employee2 = [];
employee2 ["id"] = "702";
employee2 ["name"] = "Esther";
employee2 ["title"] = "Manager";
employee2 ["department"] = "Managerial";
employee2 ["isCurrent"] = false;

var employees = new Array(employee1, employee2);
for (var i = 0; i <= employees.length -1; i++) {
    console.log(employees[i]["name"]);
}
*/

/*
//STEP 15
var employee1 = [];
employee1 ["id"] = "701";
employee1 ["name"] = "Carlos";
employee1 ["title"] = "Cook";
employee1 ["department"] = "Kitchen";
employee1 ["isCurrent"] = true;

var employee2 = [];
employee2 ["id"] = "702";
employee2 ["name"] = "Esther";
employee2 ["title"] = "Manager";
employee2 ["department"] = "Managerial";
employee2 ["isCurrent"] = true;

var employee3 = [];
employee3 ["id"] = "703";
employee3 ["name"] = "Sarah";
employee3 ["title"] = "Server";
employee3 ["department"] = "Serving Staff";
employee3 ["isCurrent"] = false;

var employees = new Array(employee1, employee2, employee3);
for (var i = 0; i <= employees.length -1; i++) {
    if (employees[i]["isCurrent"] == true) {
    console.log(employees[i]);
    }
}
*/

/*
//STEP 16
var movies = [["Warrior", 1],["Terminator", 2],["Dumb and Dumber", 3],["Lord Of The Rings", 4],["Star Wars", 5]];
for (var i = 0; i <= movies.length -1; i++) {
    console.log(movies[i].filter(function(item){return typeof item == "string";}));
}
*/

//Practice with Functions
/*
//STEP 1
var displayMessage = function(a) {
    console.log(a);
}
displayMessage("Hello!");
*/

/*
//STEP 2
function calculate(a, b) {
    return a % b;
}
console.log(calculate(40, 6));
*/

/*
//STEP 3
var employees = new Array ("Jason", "Jeff", "Moe", "Alison", "Melanie");

var showEmployee = function(a)  {
    console.log("Employees:\n\n");
    for (var index in employees) {
    console.log(employees[index].toUpperCase());
    }
}(employees);
*/
