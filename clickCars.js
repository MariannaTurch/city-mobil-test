window.onload = function() {

let res = document.querySelector('.res');
let arrElem = document.getElementsByClassName("trow");
console.log(arrElem)
let arrayElem = [];

for (let i = 0; i < arrElem.length; i++){
    arrayElem.push(arrElem[i]);
    arrElem[i].addEventListener('click', function(e){
        res.innerHTML = arrayElem.indexOf(e.target);
    });
}
/*let chooseCarOut = document.querySelector('.selectedItem')

let chooseCar = document.getElementsByTagName("tr");
console.log(chooseCar);
chooseCar.onclick = function() {
       alert('popa');
    }
*/

};