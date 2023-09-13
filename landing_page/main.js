// checkin button
const checkinbtn = document.querySelector('.btn-1');

function checkIN(){
    let name = prompt("What is your name?");

    let q1= "Hi "+ name + " are you okay? (ok=yes)";
    let msg= "You are not alone, help is available!";
    let msg2= "We are always here for you whenever you need us :)";

    let answer = confirm(q1);
    if(answer){
        alert(msg2);
    }
    else{
        alert(msg);
        window.location.href='#resources';
    }
}
// event listener for check in button.
checkinbtn.addEventListener("click",checkIN);

