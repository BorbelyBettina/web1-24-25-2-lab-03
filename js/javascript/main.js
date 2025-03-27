import { userList, active } from './db.js';
 
// 1 értéke lehet-primitív típus

const isActivated = true; //boolean
const userName='Jeremy'; //string
const userCount = 15; //number
const nothing = null; //object
let base; //undefined

//const : nem megváltoztatható érték
//let : később módosítható az értéke 


console.log(typeof isActivated);
console.log(typeof userCount);
console.log(typeof userName);
console.log(typeof nothing);
console.log(typeof base);

//typeof: változó aktuális típusa

//prototype 
Number.prototype.mod = function(divider) {
return this % divider;
};
console.log( userCount.mod(3)); //0-t ad, osztható
//értéke fgv, kap egy számot--> divider lesz annyi. visszaadni this(amire hívtuk a modot) 

console.log( userList[0].age.mod(2)); //0 mert osztható

console.log( userList[0].name );

//collections 
//1 változóba több érték is lehet 

const numbers = [3,5,7,[true,'Marika'],99,0]; //nem kötött az elemek típusa
console.log(numbers[3][1]); //Marika
console.log(numbers.length); //hány eleme van a tömbnek, a [true,marika] 1nek számít

//object

console.log(userList[2].age);
const key = 'name';
console.log(userList[2][key]); //a key vált-nak a tartalmát veszi és azt keresi 

