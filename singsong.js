const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU Clicked ME!");
    console.log("I HOPE IT WORKED!");
}

function scream() {
    console.log("AHHHHHHHHHHHHHH");
    console.log("STOP TOUCHING ME!");

}
btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function () {
    alert("CLICKED!");
})

function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector('#tas');

tasButton.onclick = shout;


