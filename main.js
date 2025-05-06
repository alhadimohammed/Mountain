let menu = document.getElementById ("menu");
let ullinks = document.getElementById ("ullinks");


menu.onclick = function(){
    if (ullinks.style.display == "block"){
        ullinks.style.display = "none"
        menu.firstElementChild .style.display = "block"
        menu.lastElementChild.style.display = "none"
    }else {
        ullinks.style.display = "block"
        menu.firstElementChild .style.display = "none"
        menu.lastElementChild.style.display = "block"
    }
}

console.log (menu.firstElementChild );
console.log (menu.lastElementChild);