let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let del = document.querySelector("#del");
let clr = document.querySelector("#clear");
let lbr = document.querySelector("#l");
let rbr = document.querySelector("#r");
let rem = document.querySelector("#rem");
let mul = document.querySelector("#x");
let div = document.querySelector("#divide");
let add = document.querySelector("#plus");
let sub = document.querySelector("#minus");
let dot = document.querySelector("#dot");
let entr = document.querySelector("#entr");
let inp = document.querySelector("#inp");
let percent = document.querySelector("#percent");
let sqrt = document.querySelector("#sq");

inp.value = '';
let result =[];

function clearAll(){
    inp.value = '';
}

rem.addEventListener("click",()=>{
     inp.value += '%';
});
entr.addEventListener("click",()=>{
     inp.value = eval(inp.value);
});

add.addEventListener("click",()=>{
    inp.value += '+';
});

sub.addEventListener("click",()=>{
    inp.value += '-';
});

mul.addEventListener("click",()=>{
    inp.value += '*';
});
div.addEventListener("click",()=>{
    inp.value += '/';
});
percent.addEventListener("click",()=>{
    let per = inp.value/100;
    inp.value = per;
});
sqrt.addEventListener("click",()=>{
    inp.value = Math.sqrt(inp.value);
});
lbr.addEventListener("click",()=>{
    inp.value += '(';
});
rbr.addEventListener("click",()=>{
    inp.value += ')';
});
dot.addEventListener("click",()=>{
    inp.value += '.';
});

del.addEventListener("click",()=>{
   inp.value = inp.value.toString().slice(0,-1);
});

clr.addEventListener("click",()=>{
    clearAll();
});

zero.addEventListener("click",()=>{
    inp.value += 0;
});
one.addEventListener("click",()=>{
    inp.value += 1;
});
two.addEventListener("click",()=>{
    inp.value += 2;
});
three.addEventListener("click",()=>{
    inp.value += 3;
});
four.addEventListener("click",()=>{
    inp.value += 4;
});
five.addEventListener("click",()=>{
    inp.value += 5;
});
six.addEventListener("click",()=>{
    inp.value += 6;
});
seven.addEventListener("click",()=>{
    inp.value += 7;
});
eight.addEventListener("click",()=>{
    inp.value += 8;
});
nine.addEventListener("click",()=>{
    inp.value += 9;
});
