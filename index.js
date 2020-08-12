/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 20;

if (votingAge > 18) {
    console.log("True, supplied age is older than min age of 18yo.")
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let variableOne = 'variable one';
let variableTwo = 'variable two';

if (variableOne != variableTwo) {
    variableTwo = variableOne
}

console.log(variableOne, variableTwo) // outputs: variable one variable one



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const inputString = '1999';

console.log(Number(inputString));



//Task d: Write a function to multiply a*b 

//function declaration
function multiplicationFunction1(a, b) {
    console.log(a * b);
}
multiplicationFunction1(6, 7); //outputs 42

//anonymous function
const multiplicationFunction2 = (a, b) => a * b
console.log(multiplicationFunction2(8, 9)); //outputs 72



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const myCurrentAge = '27';

const myCurrentAgeInDogYears = (humanAge) => humanAge * 7
console.log(myCurrentAgeInDogYears(myCurrentAge)); // outputs: 189



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


function dogFeeder(inputDogAge, inputDogWeight) {
    let ageOfDog = inputDogAge;
    let weightOfDog = inputDogWeight;

    if (ageOfDog < 1) {
        let ageOfDogMonths = ageOfDog * 12; //converting age to month so it's easier to make sense of.

        if (2 < ageOfDogMonths <= 4) {
            feedVolume = weightOfDog * .1;

        } else if (4 < ageOfDogMonths <= 7) {
            feedVolume = weightOfDog * .05;

        } else if (7 < ageOfDogMonths <= 12) {
            feedVolume = weightOfDog * .04;
        }
    }

    if (ageOfDog >= 1) {
        
        if (weightOfDog <= 5) {
            feedVolume = weightOfDog * .05;

        } else if (6 <= weightOfDog && weightOfDog <= 10) {
            feedVolume = weightOfDog * .04;

        } else if (11 <= weightOfDog && weightOfDog <= 15) {
            feedVolume = weightOfDog * .03;

        } else if (weightOfDog > 15) {
            feedVolume = weightOfDog * .02;
        }
    }

    console.log('Feed your dog: ' + feedVolume);
}

dogFeeder(1, 15);    //(1,15) outputs: Feed your dog: 0.44999999999999996

    /************************************************************** Task 4 **************************************************************/
    // Rock, Paper, Sissors
    // Your function should take a string (either rock paper or sissors)
    // it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
    // use math.random to determine the computers choice 
    // hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function theGame(userInput){
    console.log('User chose: ' + userInput)
    
    let computerChoice = Math.random();

    if (computerChoice <= (1/3)) {
        computerChoice = 'rock';
    } else if (computerChoice < (2/3) && computerChoice > (1/3)) {
        computerChoice = 'scissor';
    } else if (computerChoice >= (2/3)){
        computerChoice = 'paper';
    }
    console.log('The computer chose: ' +computerChoice)

    // draw scenarios
    if (userInput === computerChoice){
        console.log("It's a draw. Try again.")
    }

    // user win scenarios
    if (userInput === 'rock' && computerChoice === 'scissor' || userInput === 'scissor' && computerChoice === 'paper' || userInput === 'paper' && computerChoice === 'rock'){
        console.log('User wins!! ' +userInput +" beats "+computerChoice);
    }

    // user lose scenarios
    if (userInput === 'rock' && computerChoice === 'paper' || userInput === 'scissor' && computerChoice === 'rock' || userInput === 'paper' && computerChoice === 'scissors'){
        console.log('User loses :/ ' + computerChoice +" beats "+ userInput);
    }
}


theGame('rock');     // it works!


    /************************************************************** Task 5 **************************************************************/
    //Metric Converter
    //a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(userinputKm){
    let miles = Number(userinputKm);
    miles = 0.6214 * miles;     // 0.6214 km to 1 mile.
    console.log(userinputKm+ "km is equal to " + miles + " many miles.");
}

kmToMiles(100);



    //b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function ftToCm(userInputFt){
    let centimeters = userInputFt;
    centimeters = 30.48 * centimeters;       // 30.48cm per 1 foot.
    console.log(userInputFt + "ft is equal to " + centimeters + " centimeters.");
}
ftToCm(2);



    /************************************************************** Task 6 **************************************************************/
    // 99 bottles of soda on the wall
    // create a function called annoyingSong
    // the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annyoingSong(userInputStartingValue){
    let startingValue = userInputStartingValue;

    while (startingValue > 0){
        let n = 1;
        console.log(startingValue + " bottles of soda on the wall, " + startingValue + " bottles of soda, take one down, pass it around " + ( startingValue = startingValue - n) + " bottles of soda on the wall.");
        n += 1;

        
    }
    if (startingValue === 0){
        console.log("I'm not sure how this song ends, but you've drank ALL of the soda.");
  
    }
}
annyoingSong(2);

    /************************************************************** Task 7 **************************************************************/
    //Grade Calculator
    //write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
    //90s should be A 
    //80s should be B 
    //70s should be Cs 
    //60s should be D 
    //and anything below 60 should be F
function gradeCalc(userInputNumericalGrade){
    let studentGrade = ''
    
    if (userInputNumericalGrade >= 90){
        studentGrade = 'A';
    } else if (userInputNumericalGrade >= 80 && userInputNumericalGrade < 90) {
        studentGrade = 'B';
    } else if (userInputNumericalGrade >= 70 && userInputNumericalGrade < 80) {
        studentGrade = 'C';
    } else if (userInputNumericalGrade >= 60 && userInputNumericalGrade < 70) {
        studentGrade = 'D';
    } else if (userInputNumericalGrade < 60){
        studentGrade = 'F';
    }

    console.log("Given a " + userInputNumericalGrade + " you earn a(n) " + studentGrade);

    if (userInputNumericalGrade > 100){
        console.log('Sorry we dont support above A+.')
    }
}

gradeCalc(59);



    /************************************************************** Stretch **************************************************************/
    //Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
    // Hint - you may need to study tomorrow's traning kit on arrays 
    // try looking up the .includes() method





    /************************************************************** Stretch **************************************************************/
    //Take Rock, Paper, Sissors further
    //update your rock papers sissors code below to take a prompt from a user using the window object