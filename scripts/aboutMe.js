// Start assignment here.

function log(output) {
   console.log(output);
   //document.write("<p>" + output + "</p><br>");
   //Thought about doing it this way, which is more simple but doesn't go along with page formatting.
   var node = document.createElement("p");
   var textnode = document.createTextNode(output);
   node.appendChild(textnode);
   document.getElementById("consoleOutput").appendChild(node);
}

//const element = Document.getElementById("console-output");

// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
var firstName = "Kent";

// 2 - Create a second variable called `lastName` and assign it the value of your last name
var lastName = "Worthington";

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
var fullName = firstName + " " + lastName;

// 4 - Console log the value of `fullName`
log(fullName);

//document.write(fullName); had this prior to making the 'log' function at the top. My spidey senses
//started shouting "MAKE A FUNCTION YOU FOOL!"

// 5 - Create a variable called `age` and assign it the value of your age
var age = 31;

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I am (age) years old.'.
// Refer back to the videos if you need help with this one.
log("My name is " + fullName + ", and I am " + age + " years old.");

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
var adventurous = false;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
var food = "Spaghetti";

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
var pets = 1;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
var friendsPets = 0;

// 11 - Add two pets to your `pets` variable
pets += 2;

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 3;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if (adventurous === true) {
   log("Adventures are great!");
} else {
   log("How about we stay home? (Quarantine and all)");
}

// STRETCH GOALS:
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true,
// console log "Hurray!"
if (age > 18 && adventurous === true) {
   log("Hurray!");
} else {
   log(
      "Was there an assumption that everyone would select 'true' for adventurous?"
   );
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (pets < allowedPets) {
   log("I can have more pets!");
} else if (pets === allowedPets) {
   log("I have enough pets.");
} else {
   log("Oh no, I have too many pets!");
}

// 16 - Write a conditional that assigns the value of the `pets` variable
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.
if (pets > friendsPets) {
   var mostPets = pets;
} else {
   var mostPets = friendsPets;
}
log(mostPets);

// 17 - Let's calculate how long your pet's collar should be. We only have a straight
// ruler, so we'll have to use the ruler calculate the 'circumference' around
// the pet's neck, which will give us the minimum collar length!
// The formula for Circumference is: 2*PI*r, where r is the radius of the
// circle (that we can measure with the ruler). PI is the Mathematical constantm
// Pi: 3.1415. You can hard code this value, but JavaScript has it built in!
// You can access it via: Math.PI. For example: console.log(Math.PI);
// So you've measured the distance from the middle of your pet's neck to the
// outside of their fur. You've found this to be 7.5 inches. This is the
// radius! Use this value to calculate the minimum collar length (circumference)
// given the formula above. Store this value in a variable called CollarLength and
// log this to console.
const radius = 7.5;
let CollarLength = Math.PI * 2 * radius;
CollarLength = Math.round(CollarLength * 10) / 10;
CollarLength = CollarLength + " inches";
log(CollarLength);

// 18 - Using the same strategy above, calculate the total area inside
// the collar. The formula for this is PI*r^2. There is no ^ operator
// in JavaScript, so you can either multiply R times itself, or you can
// use Google and figure out how to use the Math.pow() function :).
// Create a variable named collarArea that holds this value, and log
// this to console.
let collarArea = Math.PI * Math.pow(radius, 2);
collarArea = Math.round(collarArea * 10) / 10;
collarArea = collarArea + " inches\u{00B2}";
log(collarArea);

// 19 - The next day, aliens visit Earth and are absolutely struck by the
// beautiful bedazzled colors on your custom pet collar. They ask to borrow
// your pet collar, and they put it into a machine that rotates the collar
// around at 100,000 rotations per minute, creating the illusion of a perfect
// sphere. They inform you that this sphere, when submerged into liquid
// CO2 (this is their home planet's native food source) will help cure their
// planet's current crisis. It's complicated, but to prove it they ask you
// to use JavaScript to calculate the amount of liquid CO2 displaced by
// submerging the spherical collar machine. You realize that all you need
// for this calculation is your measured value of r (which you already have)
// and the formula for the volume of a sphere: (4/3)*PI*r^3. Good thing
// you have your laptop and Developer Tools ready to go!
// Create a variable named displacedCO2Volume that stores this calculation,
// and log it to the console.
let displacedCO2Volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
displacedCO2Volume = Math.round(displacedCO2Volume * 10) / 10;
displacedCO2Volume = displacedCO2Volume + " inches\u{00B3}";
log(displacedCO2Volume);

// 20 - Your collaboration with the alien scientists was such a global
// success, that Big Toy Co wants to create a replica of your spherical
// collar invention (It's just a ball that looks like a collar in motion).
// Their Head of Sales calls you in a panic and says that their manufacturer
// is delayed, but they can still get this cool toy out for the holiday
// season IF they can have the right amount of wrapping paper ready to go
// right when it shows up at their factory. So they ask you: "You are clearly a
// pretty smart person and can probably help me with this! Could you tell
// me the exact amount of wrapping paper that I need per toy, expressed in
// square feet and stored in a JavaScript variable?". Why yes, yes you can.
// After some quick Googling you find that the formula for the "Surface Area
// of a sphere" is actually 4*PI*r^2. Easy peasy!
// Create a variable called wrappingPaperAmountInSqFtForTheirHeadOfSales that
// holds the result of the calculation, and print it to the console. Remember
// to convert square inches to square feet.
let wrappingPaperAmountInSqFtForTheirHeadOfSales =
   (4 * Math.PI * Math.pow(radius, 2)) / 144;
wrappingPaperAmountInSqFtForTheirHeadOfSales =
   Math.round(wrappingPaperAmountInSqFtForTheirHeadOfSales * 10) / 10;
wrappingPaperAmountInSqFtForTheirHeadOfSales =
   wrappingPaperAmountInSqFtForTheirHeadOfSales + " feet\u{00B2}";
log(wrappingPaperAmountInSqFtForTheirHeadOfSales);

// 21 - As the aliens travel home through hyperspace, they make an interesting
// discovery. It turns out that a sphere, when traveling through hyperspace,
// creates an even larger impact on their geopolitical crises. This impact can
// be expressed as the sum of volume of the sphere over its entire duration
// through hyperspace! Whoa! Who would have thought you can calculate the volume
// of a hyperspace sphere?! Turns out you can. Check it out:
// https://www.usna.edu/Users/physics/mungan/_files/documents/Scholarship/HypersphereVolume.pdf
// There isn't actually a calculation here for you to do :). Just use your
// console.log to tell me what the name of the movie will be that Hollywood
// makes about your adventure, and who you'd want to play your character.
log(
   "'Absurd Reality' starring Kent Worthington as himself, based on a story so improbable that it never happened. Not because of aliens, but because the physics behind a collar spinning at 100k revolutions per minute are beyond the limitations of reality."
);

//Matrix Rain
var _0x5f15 = [
   "fillText",
   "fillRect",
   "width",
   "height",
   "getElementById",
   "innerWidth",
   "random",
   "#0F0",
   "length",
   "font",
   "rgba(0,\x200,\x200,\x200.04)",
];
(function (_0xc6fe47, _0x5f1588) {
   var _0x1dc47b = function (_0x3c56bc) {
      while (--_0x3c56bc) {
         _0xc6fe47["push"](_0xc6fe47["shift"]());
      }
   };
   _0x1dc47b(++_0x5f1588);
})(_0x5f15, 0x98);
var _0x1dc4 = function (_0xc6fe47, _0x5f1588) {
   _0xc6fe47 = _0xc6fe47 - 0x0;
   var _0x1dc47b = _0x5f15[_0xc6fe47];
   return _0x1dc47b;
};
var c = document[_0x1dc4("0x6")]("c");
var ctx = c["getContext"]("2d");
c[_0x1dc4("0x5")] = window["innerHeight"];
c[_0x1dc4("0x4")] = window[_0x1dc4("0x7")];
var matrix =
   "おいすあさいえすしとけいはいいいえしおかきそこいぬ\x20あおいすあさいえすしとけいはいいいえしおかきそこいぬ\x20ABCDEFGHIJKLMNOPQRSTUVWXYZ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20";
matrix = matrix["split"]("");
var font_size = 0xa;
var columns = c[_0x1dc4("0x4")] / font_size;
var drops = [];
for (var x = 0x0; x < columns; x++) drops[x] = 0x1;
function draw() {
   ctx["fillStyle"] = _0x1dc4("0x1");
   ctx[_0x1dc4("0x3")](0x0, 0x0, c[_0x1dc4("0x4")], c[_0x1dc4("0x5")]);
   ctx["fillStyle"] = _0x1dc4("0x9");
   ctx[_0x1dc4("0x0")] = font_size + "px\x20arial";
   for (var _0x5c80ca = 0x0; _0x5c80ca < drops[_0x1dc4("0xa")]; _0x5c80ca++) {
      var _0x47f942 =
         matrix[Math["floor"](Math[_0x1dc4("0x8")]() * matrix[_0x1dc4("0xa")])];
      ctx[_0x1dc4("0x2")](
         _0x47f942,
         _0x5c80ca * font_size,
         drops[_0x5c80ca] * font_size
      );
      if (
         drops[_0x5c80ca] * font_size > c[_0x1dc4("0x5")] &&
         Math[_0x1dc4("0x8")]() > 0.975
      )
         drops[_0x5c80ca] = 0x0;
      drops[_0x5c80ca]++;
   }
}
setInterval(draw, 0x23);
