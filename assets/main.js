let display = document.querySelector(".input");
let restart = document.querySelector(".reset");
let keypad = document.querySelector(".keypad");

restart.addEventListener('click', () => {
    display.value = display.value.substr(0, display.value.length - 1);
})
restart.addEventListener('dblclick', () => {
    display.value = "";
})
// Reqemleri silmek ucun click 1 herf silir dblclick butun sertri silir

function num(integer) {
    display.value += integer;
}
// 2 ve daha artiq reqemi yan yana yazmaq ucun

function equal() {
    display.value = eval(display.value);
}
// calculator hissesi

display.addEventListener('keydown', (event) => {
    event.preventDefault();
})
// Input yerine yazi yazmasin

if(display.length > 0) {
   console.log("asdasd");
}

keypad.addEventListener('click', () => {
    let string = display.value.toString();
    if ( string.length >= 1){
        restart.innerHTML = "C";
    } else {
        restart.innerHTML = "AC";
    }
})