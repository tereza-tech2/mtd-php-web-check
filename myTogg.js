/*function displayMenu() {
    var element = document.getElementsByClassName("menu-on-small-ix");
    var ln = element.length;
    for (var z = 0 ;z<ln; z++){
        element[z].classList.toggle("menu-off-small-ix");
    }

} */
var sum=0;
function displayMenu() {    
    sum += 1;
    var element = document.getElementById("menu-box-small-ix");
    var divs = document.getElementsByClassName("menu-on-small-ix");
    var ln = divs.length;
    
    for (var n=0; n<ln; n++){
        if (sum % 2 == 0){
            divs[n].classList.add("menu-off-small-ix");
        } else {
            divs[n].classList.remove("menu-off-small-ix");
        }
        
    }
    
    
}