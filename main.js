//Input's area
let inpIN = document.querySelector("#in"); //One input
let inpOUT = document.querySelectorAll("input[class=out]"); //4 inputs

//Resoult area
let msgs = document.querySelector("#msgs"); //inpIN equolse
let out = document.querySelector("#out"); //inpOUT equolse

//Specifict buttons
let cls = document.querySelector('#clear');
let copy = document.querySelector("#copy");

//Attributes:
let tab =[] ; //Element storing to convert
let is4; // Chose the resoult area

//Starting inpIN
inpIN.addEventListener('focusout',function(){
    tab = inpIN.value.split('.');
    is4=false;
    parsing();
},false);

//Cleaning everything
cls.addEventListener('click', function(){
    for(let elementOUT of inpOUT){
                elementOUT.value = " ";
    }
    inpIN.value = " ";
    msgs.textContent = " ";
    out.textContent = " ";
    
});

//Copy selected text
copy.addEventListener('click', Copy, false);

//Starting inpOUT
for(let elementOUT of inpOUT){
    elementOUT.addEventListener("focusout", function(){
        for(let elementOUT2 of inpOUT){
            tab[k] = elementOUT2.value;
            is4=true;
            parsing();
        }
    },false);
}

//Go next element on inpOUT
for(let i=0; i< inpOUT.length; i++){
    inpOUT[i].addEventListener("keyup", function(){   
        if(inpOUT[i].value.length == 8)
            (i == inpOUT.length-1) ?inpOUT[0].focus() :inpOUT[++i].focus();
    },false);
}

//Past text on 4 inpOUT
for(let i=0; i< inpOUT.length; i++)
{   inpOUT[i].addEventListener('paste',function(){
        for(let elementOUT2 of inpOUT){
            elementOUT2.value = null;
        }

        inpOUT[i].setAttribute('maxlength', 36);
        inpOUT[i].oninput =()=>{
            
            let inpIvalue = inpOUT[i].value;
            tab = inpIvalue.split(".");   

            for(let elementOUT2 of inpOUT){
                elementOUT2.value = tab[k];
                elementOUT2.setAttribute('maxlength', "8");
            }
        };  
}, false);
}

//Decide what convert
var parsing=()=>{
    if(tab.length==4 && tab[0].length+tab[1].length+tab[2].length+tab[3].length > 0){
        console.log(tab);
        console.log(tab[0].length+tab[1].length+tab[2].length+tab[3].length);
        (tab[0].length+tab[1].length+tab[2].length+tab[3].length == 32 )?bin2dec() :dec2bin();
    }else{
        console.log('ERROR');
    }
}

//decimal to binary
var dec2bin=()=>{
    let znak="";
    for(let j=0; j<tab.length; j++ ){
        let zmienna = tab[j];
        let verb;
        let liczba =[];
        let i=0;
        while(zmienna>0){
            ((zmienna %2)!==0)?liczba[i++]="1" :liczba[i++]="0";
            zmienna/=2;
            zmienna=parseInt(zmienna);
        }
        verb=liczba.reverse().join("");
        (j < tab.length-1)? verb+="." : null;
        znak+=autoUzup(verb, liczba.length); 
    }
    (is4==false)?out.textContent = znak :msgs.textContent = znak;
}

//binary to decimal
var bin2dec=()=>{
    let znak="";
    for(let i=0; i<tab.length; i++){
        let bin, dec = 0, rem, num, base = 1;
        num = tab[i];
        bin = num;
        while (num > 0)
        {
            rem = num % 10;
            dec = dec + rem * base;
            base = base * 2;
            num = num / 10;
            num=parseInt(num);
        }
        (i < tab.length-1)?znak+=dec+"." :znak+=dec;       
    }
    (is4==false)?out.textContent = znak :msgs.textContent = znak;
}

//Add 0 for text
var autoUzup=(text, len, sign="0")=>{return sign.repeat(8-len) + text};

//Copy text
var Copy=()=>{
    window.getSelection().toString();
    document.execCommand('copy');
}

/// EXAMPLE TEXT ///
//2.2.2.2
//3.3.3.3
//23.34.26.68
//00000010.00000010.00000010.00000010