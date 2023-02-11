// Problem 1: Let’s play a mind game

// mindGame() function will get a parameter of a positive number and returns the ultimate number after multiplication by 3, addition by 10, division by 2 and lastly minus 5.

function mindGame(positiveNumber){
    if(typeof(positiveNumber) != 'number' || positiveNumber <= 0){
        console.log('Warning: Please Input a Positive Number');
    } else {
        const multiplication = positiveNumber * 3;
        const addition = multiplication + 10;
        const division = addition/2;
        const minus = division - 5;

        return minus;
    }
}



// Problem 2: Finding even or odd

// evenOdd() function will get a parameter of a string, which returns 'even' when character length is an even number, and returns 'odd' when character length is odd number

function evenOdd(myString) {
    if(typeof(myString) != 'string'){
        console.log('Warning: Please Input a String');
    } else {
        const characterLength = myString.length;
        if(characterLength%2 == 0){
            return 'even';
        } else {
            return 'odd';
        }
    }
}


// Problem 3: Is Less or Greater than seven

// isLGSeven() function will get a parameter of a number and calculate the deference between number and 7, if the deference is less then 7, it returns the absolute deference, otherwise returns double of deference's absolute value;

function isLGSeven(number) {
    if(typeof(number) != 'number'){
        console.log('Warning: Please Input a Number');
    } else {
        const deference = Math.abs(7 - number)

        if(deference < 7){
            return deference;
        } else {
            return deference * 2;
        }
    }
}


// Problem 4: Finding Bad data

// findingBadData() function will get a parameter of an array of numbers, and find out negative numbers as bad data, and returns total number of bad data

function  findingBadData(numbers) {
    if(Array.isArray(numbers) != true){
        console.log('Warning: Please Input a Number Array');
    } else{
        let badData = [];

        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            if(number < 0){
                badData.push(number)
            }
        }
        return badData.length
    }
}




// Problem 5: Convert your gems into diamond

// function gemsToDiamond() gets three parameter of gems quantity of three friends, and converts them into diamonds, and add all diamonds, and returns total Diamonds number

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    if((typeof(firstFriendGems) != 'number') || (typeof(secondFriendGems) != 'number') || (typeof(thirdFriendGems) != 'number')){
        console.log('Warning: Please Input Three Numbers');
    } else {
        const firstFriendGemsPower = 21;
        const secondFriendGemsPower = 32;
        const thirdFriendGemsPower = 43;
    
        const firstFriendDiamonds = firstFriendGems * firstFriendGemsPower;
        const secondFriendDiamonds = secondFriendGems * secondFriendGemsPower;
        const thirdFriendDiamonds = thirdFriendGems * thirdFriendGemsPower;
    
        const totalDiamonds = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;
    
        if(totalDiamonds > (1000 * 2)){
        return totalDiamonds - 2000;
        } else {
            return totalDiamonds
        }
    }
}