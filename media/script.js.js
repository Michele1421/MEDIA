let sommanumeridispari = 0;
let contanumeridispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i); 
    } else {
        sommanumeridispari =sommanumeridispari + i; 
        contanumeridispari++; 
    }
}

let media = sommanumeridispari / contanumeridispari;
console.log("Media dei numeri dispari:", media);