const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu()   {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu()    {
    hamburger.classList.remove("active");
    navMenu.classList.toggle("active");
}

let datePopup = document.getElementById("date-popup");
let roomPopup = document.getElementById("room-popup");

function dateOpenPopup()    {
    datePopup.classList.add("date-open-popup");
}
function dateClosePopup()    {
    datePopup.classList.remove("date-open-popup");
}

function roomOpenPopup()    {
    roomPopup.classList.add("room-open-popup");
}
function roomClosePopup()    {
    roomPopup.classList.remove("room-open-popup");
}


const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 2,
    calendars: 2,
    inline: true,
    plugins: [
        "RangePlugin"
    ]
})

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }