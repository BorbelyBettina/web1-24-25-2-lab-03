//gombok kiválasztása. 
//const prevBtn = document.querySelector('button.btn');
//3 gomb van, de a js csak az elsőt keresi, és azt adja vissza
const prevBtn = document.querySelector('button.btn:nth-child(1)');
const numBtn = document.querySelector('button.btn:nth-child(2)');
const nextBtn = document.querySelector('button.btn:nth-child(3)');
let counter = 1; //let mert a const-ot nem lehet változtatni 
//változót a prog elején érdemes létrehozni! 

prevBtn.classList.add('btn-info'); //html elemre mutató js változó, classListához adunk btn-infot

//több elem lekérése egyszerre.
//const buttons = document.querySelectorAll('button.btn'); //nem áll meg az elsőnél

const buttons = document.querySelectorAll('.btn-group button.btn'); //csak a csoporton belül keres
['btn-info','btn-primary','btn-info'].forEach((className, index)=> {buttons[index].classList.add(className);   
} ); //kiszedi az elemeket egyesével, meg az indexet, fgv-t vár, amit mi írunk. egyesével neki ad mindent

//eseményfigyelő beállítása a gombokra. 
//első gomb --> csökkenti a számot 
buttons[0].addEventListener('click',(e) => {
    console.log(e);
if (counter < 2) {
    return; //ne legyen 2nél kisebb, nem megy tovább
} 

counter--;
buttons[1].innerHTML = counter; //1 helyett változzon a szám, ezt átírja a jelenlegire, texcontent is u.e
}); 

//tovább gombra
buttons[2].addEventListener('click',(e) => {
    
    counter++;
    buttons[1].innerHTML = counter; 
    }); 



