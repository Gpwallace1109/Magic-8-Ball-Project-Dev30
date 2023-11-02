// Magic 8 Ball Project
// Variable sets needed for project 
var userName = 'Jaxx' 
const userQuestion = 'Will my goal become a reality?';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = randomNumber 

// Ternary Expression w/ String Interpolation 
if (userName === 'Jaxx') { 
    console.log(`Hello, ${userName}!`);
} else { 
    console.log('Hello!'); 
}

// Console log for userQuestion 
console.log(userQuestion); 

// Control flow 
if (eightBall === 0) { 
    console.log('It is certain')
} else if (eightBall === 1) { 
    console.log('It is decidedly so')
} else if (eightBall === 2) { 
    console.log('Reply hazy try again')
} else if (eightBall === 3) { 
    console.log('Cannot predict now')
} else if (eightBall === 4) { 
    console.log('Do not count on it')
} else if (eightBall === 5) { 
    console.log('My sources say no')
} else if (eightBall === 6) { 
    console.log('Outlook not so good')
} else if (eightBall === 7) { 
    console.log('Signs point to yes')
}
