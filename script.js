// To Top Button
let toTop = document.querySelector(".to-top");
// Top bar 
let top_bar = document.querySelector(".top-bar");


window.onscroll = function () {


    if (window.pageYOffset < 600) {
        toTop.style.visibility = "hidden";
    } else {
        toTop.style.visibility = "visible";
    }

    toTop.onclick = function (event) {
        event.preventDefault();
        window.scrollTo("", 0);

    }


    if(window.pageYOffset > 100){
        top_bar.style.backgroundColor = "white"
    }else{
        top_bar.style.backgroundColor = "transparent"

    }


}


// Toggler Nav

let header = document.querySelector(".header");
let nav = document.querySelector(".mynav");
let toggler = document.querySelector(".toggle");

toggler.onclick = function () {

    nav.classList.toggle("show-nav");
}

// On press Escape Nav will quit

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.toggle("show-nav");
        toggler.firstElementChild.classList.add("fa-square");
        toggler.firstElementChild.classList.remove("fa-square-o");

    }
}


// ReadMore ReadLess About

let more_button = document.querySelector(".more");
let paragraph_bio = document.querySelector(".p-bio");

more_button.onclick = function (event) {
    event.preventDefault();
    paragraph_bio.classList.toggle("p-more");


    if (paragraph_bio.classList.contains("p-more")) {
        more_button.innerHTML = "Read Less";
        more_button.style.backgroundColor = "indianred";
        more_button.style.color = "white";
    } else {
        more_button.innerHTML = "Read More";
        more_button.style.backgroundColor = "black";
        more_button.style.color = "white";

    }


}