"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
 name from your list, print a message to that person letting them know you’re sorry you can’t invite them
 to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
var guestlistArray = ["Abdul Rehman", "Saifur Rehman", "Hamood ur Rehman", "Ebad ur Rehman"];
//  console.log(guestlistArray);
//  console.log (`We have 3 more friends to invite on dinner/n`)
//  guestlistArray.unshift("Mudassir");
//  console.log(guestlistArray);
//  myFriends.splice(2, 0, "Muhammad");
//  console.log(myFriends);
//  myFriends.push("Qasim");
//  console.log(myFriends);
for (let i = 0; i < guestlistArray.length; i++) {
    console.log(`Mr. ${guestlistArray[i]} You are invited to my dinner`);
}
console.log(`We have 3 more friends to invite on dinner/n`);
// sorry we can not have big table , only 2 persons are invited.
while (guestlistArray.length) {
    let remove_guest = guestlistArray.pop();
    console.log(`Sorry Mr.${remove_guest} You are not invited to dinner.`);
    for (let i = 0; i < guestlistArray.length; i++) {
        console.log(`Dear. ${guestlistArray[i]} You are still invited.Thank you!`);
        guestlistArray.splice(0, 2);
    }
}
guestlistArray.pop();
console.log(guestlistArray);
