/*let incremento=document.querySelector('#btn_increment');
let decremento=document.querySelector('#btn_decrement');
console.log(addizione, sottrazione);


incremento.addEventListener('click', function(){
    let output = document.querySelector('#output');
    let result= Number(output.innerText) + 1;

    if (result > 10) {
        result=10;
    }

    output.innerText =result;
});

decremento.addEventListener('click', function(){
    let output = document.querySelector('#output');
    let result= Number(output.innerText) - 1;

    if (result < 0) {
        result=0;
    }

    output.innerText =result;
});*/

/*counter con singola funzione per incr e decrem*/
const checkbox = document.getElementById('cb_enabled');
let increment = document.getElementById('btn_increment');
let decrement = document.getElementById('btn_decrement');
let output = document.getElementById('output');

checkbox.addEventListener('change', function(checkbox) {
    if (this.checked === false) {
        increment.disabled = true;
        decrement.disabled = true;
    } else {
        increment.disabled = false;
        decrement.disabled = false;
    }
});

function add_to_counter(increment) {
    let cur_count = parseInt(output.innerText);
    let new_count = cur_count + increment;
    output.innerText = new_count;
}

increment.onclick = () => {
  add_to_counter(1);
}

decrement.onclick = () => {
  add_to_counter(-1);
}