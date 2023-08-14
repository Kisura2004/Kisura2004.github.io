const tickbtn = document.getElementById("tickbtn");
const form = document.querySelector('form');
let totslAdult = 0;
let totslChild = 0;
let totfAdult = 0;
let totfChild = 0;
let total = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    //storing form data in browser history
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    const json = JSON.stringify(obj);
    localStorage.setItem("form", json);

    //ticket summary table outputs
    document.getElementById("outdate").innerHTML = obj.date;
    document.getElementById("outduration").innerHTML = obj.time;
    document.getElementById("hour").innerHTML = obj.duration;
    document.getElementById("outsladults").innerHTML = `${obj.sladults} SL Adults`;
    document.getElementById("outslchild").innerHTML = `${obj.slchild} SL Children`;
    document.getElementById("outfadults").innerHTML = `${obj.fadults} Foreign Adults`;
    document.getElementById("outfchild").innerHTML = `${obj.fchild} Foreign Children`;
    document.getElementById("outinfants").innerHTML = `${obj.infants} Infants`;

    //Continue button
        const para = document.createElement("button");
        const head = document.createElement("h2");
        const node = document.createTextNode("   continue with Purchase   ");
    if (parseInt(obj.sladults)> 0 || parseInt(obj.slchild)>0 || parseInt(obj.fadults)>0 || parseInt(obj.fchild)>0){
        para.appendChild(node);
        para.appendChild(head);
        head.appendChild(node);
        const element = document.getElementById("divbtn");
        const child = document.getElementById("enablebtn");
        element.insertBefore(para, child).classList.add("calbtn");
    } else if (parseInt(obj.sladults) < 0 || parseInt(obj.slchild) < 0 || parseInt(obj.fadults) < 0 || parseInt(obj.fchild) < 0 || parseInt(obj.infants) < 0) {
        alert("Select the number of guests");
    }

    //calculating total
    if (obj.duration == "1 hour"){
        switch (obj.time) {
            case "7.00 am":
            case "8.00 am":
            case "9.00 am":
            case "2.00 pm":
                totslAdult = obj.sladults*4;
                totslChild = obj.slchild*2;
                totfAdult = obj.fadults*10;
                totfChild = obj.fchild*5;
                break;
            case "10.00 am":
            case "11.00 am":
            case "12.00 pm":
            case "1.00 pm":
            case "3.00 pm":
            case "4.00 pm":
            case "5.00 pm":
                totslAdult = obj.sladults*6;
                totslChild = obj.slchild*3;
                totfAdult = obj.fadults*13;
                totfChild = obj.fchild*8;
                break;
        }
    } else if (obj.duration == "2 hours"){
        switch(obj.time){
            case "7.00 am":
            case "8.00 am":
            case "9.00 am":
            case "2.00 pm":
                totslAdult = obj.sladults*8;
                totslChild = obj.slchild*4;
                totfAdult = obj.fadults*20;
                totfChild = obj.fchild*10;
                break;
            case "10.00 am":
            case "11.00 am":
            case "12.00 pm":
            case "1.00 pm":
            case "3.00 pm":
            case "4.00 pm":
                totslAdult = obj.sladults*12;
                totslChild = obj.slchild*6;
                totfAdult = obj.fadults*26;
                totfChild = obj.fchild*16;
                break;
            case "5.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 1 Hour at 5.00 pm");
                para.remove(node);
        }
    } else if (obj.duration == "3 hours") {
        switch (obj.time) {
            case "7.00 am":
            case "8.00 am":
            case "9.00 am":
            case "2.00 pm":
                totslAdult = obj.sladults*12;
                totslChild = obj.slchild*6;
                totfAdult = obj.fadults*30;
                totfChild = obj.fchild*15;
                break;
            case "10.00 am":
            case "11.00 am":
            case "12.00 pm":
            case "1.00 pm":
            case "3.00 pm":
                totslAdult = obj.sladults*18;
                totslChild = obj.slchild*9;
                totfAdult = obj.fadults*39;
                totfChild = obj.fchild*24;
                break;
            case "4.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 2 Hours at 4.00 pm");
                para.remove(node);
                break;
            case "5.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 1 Hour at 5.00 pm");
                para.remove(node);
        }
    } else if (obj.duration == "4 hours") {
        switch(obj.time){
            case "7.00 am":
            case "8.00 am":
            case "9.00 am":
            case "2.00 pm":
                totslAdult = obj.sladults*16;
                totslChild = obj.slchild*8;
                totfAdult = obj.fadults*40;
                totfChild = obj.fchild*20;
                break;
            case "10.00 am":
            case "11.00 am":
            case "12.00 pm":
            case "1.00 pm":
                totslAdult = obj.sladults*24;
                totslChild = obj.slchild*12;
                totfAdult = obj.fadults*52;
                totfChild = obj.fchild*32;
                break;
            case "3.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 3 Hour at 3.00 pm");
                para.remove(node);
                break;
            case "4.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 2 Hour at 4.00 pm");
                para.remove(node);
                break;
            case "5.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 1 Hour at 5.00 pm");
                para.remove(node);
        }
    } else if (obj.duration == "5 hours") {
        switch (obj.time) {
            case "7.00 am":
            case "8.00 am":
            case "9.00 am":
                totslAdult = obj.sladults*20;
                totslChild = obj.slchild*10;
                totfAdult = obj.fadults*50;
                totfChild = obj.fchild*25;
                break;
            case "2.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 4 Hour at 2.00 pm");
                para.remove(node);
                break;
            case "10.00 am":
            case "11.00 am":
            case "12.00 pm":
            case "1.00 pm":
                totslAdult = obj.sladults*30;
                totslChild = obj.slchild*15;
                totfAdult = obj.fadults*65;
                totfChild = obj.fchild*40;
                break;
            case "3.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 3 Hour at 3.00 pm");
                para.remove(node);
                break;
            case "4.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 2 Hour at 4.00 pm");
                para.remove(node);
                break;
            case "5.00 pm":
                alert ("Closes at 6.00 pm. Can't choose more than 1 Hour at 5.00 pm");
                para.remove(node);
        }
    }
    total = totslAdult+totslChild+totfAdult+totfChild;
    document.getElementById("amountsladults").innerHTML = `$ ${totslAdult}`;
    document.getElementById("amountslchild").innerHTML = `$ ${totslChild}`;
    document.getElementById("amountfadults").innerHTML = `$ ${totfAdult}`;
    document.getElementById("amountfchild").innerHTML = `$ ${totfChild}`;
    document.getElementById("amountinfants").innerHTML = `$ 0`;
    document.getElementById("amounttotal").innerHTML = `$ ${total}`;


    //storing data in browser history
    localStorage.parsetotslAdult = `${totslAdult}`;
    localStorage.parsetotslChild = `${totslChild}`;
    localStorage.parsetotfAdult = `${totfAdult}`;
    localStorage.parsetotfChild = `${totfChild}`;
    localStorage.parsetotal = `${total}`;
}
)