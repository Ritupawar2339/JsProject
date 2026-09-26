// ! 1sr game
// let computer_number = 8;
// let guess;

// guess = Number(prompt("enter any num "));

// while(guess!==computer_number){

//     if(isNaN(guess)){
//     alert("Number is invalid,Please try again")
// }else if(guess>computer_number){
//     alert("Number is highr,P;ease try again");
// }else if(guess<computer_number){
//     alert("Number is low,Please try again");
// }
// else{
//     alert("Congratulation.... Your guess is correct")
// }


// }


// ! 2nd game

// let password = "alpha";
// let noOfAttempt = 3;
// let userpassword = null;

// while(password !== userpassword && noOfAttempt<3){
//     userpassword = prompt("enter password = ");
//     noOfAttempt++;
//     if(userpassword===password){
//     alert("password is correct");
// }else if(noOfAttempt===3){
//     alert("your attempt is out");
// }
// else{
//     alert("password is incorrect");
// }

// }

// ! 3rd game




     let playAgain = 'yes';

while (playAgain === 'yes') {
    alert("You wake up in the dark forest!");

    let userChoice = prompt("Do you want to go left or right? ");

    if (userChoice === 'left') {
        alert("You see something shiny in the mud!");
        userChoice = prompt("Do you pick it up? (yes or no) ");
        if (userChoice === 'yes') {
            alert("It is a magical stone! you are teleported to safety, you win!");
        } else {
            alert("mar gya tu!")
        }
    } else {
        alert("you find a cave!");
        userChoice = prompt("Do you enter the cave? (yes or no) ")
        if (userChoice === 'yes') {
            alert("you barely escape!")
        } else {
            alert("acha raat beetega apka!");
        }
    }

    userChoice = prompt("Do you want to play again? (yes or no)")
    if(userChoice === 'no'){
        playAgain = 'no';
        alert("Thanks for playing!");
    }
}


