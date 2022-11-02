let userAge = 18;
let isSubscribed = true;


if ((userAge < 18) && (isSubscribed == false)){
    console.log("User younger than 18 and not subscribed");
} else if ((userAge <= 10) && (isSubscribed == false)){
    console.log("User too young and not subscribed");
} else {
    console.log("User is 18 or older and not subscribed");
}


if ((userAge >= 18 ) && (isSubscribed == false)){
    console.log("User is 18 or older and not subscribed");
} else if ((userAge <= 10) && (isSubscribed == false)){
    console.log("User is 10 or younger and not subscribed");
} else {
    console.log("User is younger than 18 and not subscribed");
}


if ((userAge < 18) && (isSubscribed == true)){
    console.log("User is younger than 18 and is subscribed");
} else if ((userAge <= 10 ) && (isSubscribed == true)){
    console.log("User is 10 or younger and is subscribed");
} else {
    console.log("User is 18 or older and is subscribed");
}


if ((userAge >= 18) && (isSubscribed == true)){
    console.log("User is 18 or older and is subscribed");
} else if ((userAge <= 10) && (isSubscribed == true)){
    console.log("User is 10 or younger and is subscribed");
} else {
    console.log("User is younger than 18 and is subscribed");
}