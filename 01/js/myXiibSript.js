// Actualiza el id=copyright en menu
document.getElementById("copyright").innerHTML = "Copyright © 2012-2021 Xiiber Travel ";

// Inserta html completo 
includeHTML();

// Get OpenTop
function openTop(menuName, elmnt, color) {
    var i, tabcontenttop, tablinktops;
    tabcontenttop = document.getElementsByClassName("tabcontenttop");
    for (i = 0; i < tabcontenttop.length; i++) {
        tabcontenttop[i].style.display = "none";
    }
    tablinktops = document.getElementsByClassName("tablinktop");
    for (i = 0; i < tablinktops.length; i++) {
        tablinktops[i].style.backgroundColor = "";
    }
    document.getElementById(menuName).style.display = "block";
    elmnt.style.backgroundColor = color;

}

// Get the element with id="defaultOpenTop" and click on it
document.getElementById("defaultOpenTop").click();

// Get OpenMenu
function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get Dark-mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("hi-dark-mode");
}
// Get Mapa de sitio
const btns = document.querySelectorAll(".hi-acc-btn");

// fn
function accordion() {
    // this = the btn | icon & bg changed
    this.classList.toggle("is-open");

    // the hi-acc-content
    const content = this.nextElementSibling;

    // IF open, close | else open
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));