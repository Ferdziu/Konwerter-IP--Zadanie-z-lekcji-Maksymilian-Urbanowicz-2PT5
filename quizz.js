let tableQUIZZ1 = document.querySelector("#quizz1");
let pIP = document.querySelectorAll(".ip");
let inpODP = document.querySelectorAll(".odp");
let pkt = document.querySelectorAll(".pkt");
let wynik = document.querySelector(".wynik");

let IP = ["192.168.0.1", "10.0.10.1", "192.168.0.100", "10.1.0.10", "10.1.0.01", "192.168.0.0", "10.1.0.00", "23.34.26.68", "2.2.2.2"];
let goodODP = [];
let randNumber=[];
let randIP=[];
let tabKonwIP=[];
let position;
let pktli=0;
let odp;
let isQUIZZ1;
let liek = 0;

const Between = {
    a: { from:"00000000", to:"01111110" },
    b: { from:"10000000", to:"10111111" },
    c: { from:"11000000", to:"11011111" },
    d: { from:"11100000", to:"11101111" },
    e: { from:"11110000", to:"11111111" }
}


for(let i=0; i<inpODP.length; i++ ){

    inpODP[i].addEventListener('keyup', function(){
        isQUIZZ1=true;
        position = i;
        tab = randIP[i].split('.');;
        
        dec2bin();
        liek++;
        console.log(tabKonwIP);
        for(let[key,value] of Object.entries(Between)){
            
            if(tabKonwIP[0]>= value.from && tabKonwIP[0]<= value.to){     
                console.log(key);
                odp = key;
            }else{
                
            }
        }
        console.log(odp);
        if(inpODP[i].value == odp){
            pktli++;
            pkt[i].textContent="OK";
        }else{
            pkt[i].textContent="ŹLE";
        }
        isQUIZZ1=false;
        if(liek ==3){
            wynik.textContent = pktli;
        }
    });
}


for(let i=0; i<3; i++){
    let number = Math.floor(Math.random()*9);
    if(number-1<0){
        number = Math.floor(Math.random()*9);
    }
    randNumber[i]=number;
    
}
for(let j=0; j<randNumber.length; j++){
    for(let k =0; k<j; k++){
        while(randNumber[j]==randNumber[k]){
            number=Math.floor(Math.random()*9);
            randNumber[j]=number;
           
        }
    }
} 
console.log(randNumber);
for(let i=0; i<randNumber.length; i++){
    randIP[i] = IP[randNumber[i]];
    pIP[i].textContent= randIP[i];
}
console.log(randIP);