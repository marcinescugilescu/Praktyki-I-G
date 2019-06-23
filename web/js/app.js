// import { lchmod } from "fs";

const btn_cookies = document.querySelector(".btn-cookies");
const cookies = document.querySelector(".cookies");
const icons = document.querySelectorAll("div.icon");
// arrIcons = [...icons];
const divIcons = document.querySelector("div.icons");
let divRemove = document.querySelector(".icon-over");
let arrIcons = [
  "img/001-malware-white.png",
  "img/002-smartphone-1-white.png",
  "img/003-folder-white.png",
  "img/004-malware-white.png",
  "img/005-pendrive-white.png",
  "img/006-network-white.png",
  "img/007-smartphone-2-white.png",
  "img/008-fishing-white.png",
  "img/009-data-protection-white.png",
  "img/010-credit-card-white.png",
  "img/011-hacker-white.png",
  "img/012-firewall-white.png"
];
let arrAnchors = [
  "#hero",
  "#mission",
  "#clients",
  "#products",
  "#map",
  "#contact",
  "#footer"
];

form_mod = this.document.querySelector(".contact");
form_el = form_mod.querySelector("form");
form_req = form_mod.querySelectorAll("[required]");

// console.log(btn_cookies);
btn_cookies.addEventListener("click", function () {
  cookies.classList.add("turn-off");
});

function iconChoice() {
  let divsRemove = document.querySelectorAll(".icon-over");
  divsRemove.forEach(div => div.remove());

  //tworzenie diva do wyświetlenia go po najechaniu w products
  const div = document.createElement("div");
  div.classList.add("icon-over");
  div.innerHTML =
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>";

  div.style.backgroundImage = `url("${arrIcons[this.id]}")`;

  let Y = this.offsetTop;
  let X = this.offsetLeft;

  divIcons.insertBefore(div, divIcons.firstChild);

  // this.style.offsetTop = Y + "px";
  // this.style.offsetLeft = X + "px";

  div.style.top = Y + "px";
  div.style.left = X + "px";

  div.addEventListener("mouseout", function () {
    let divRemove = document.querySelector(".icon-over");
    divIcons.removeChild(divRemove);
  });
}
icons.forEach(icon => icon.addEventListener("mouseover", iconChoice));

// let header = document.querySelector('[data-js="header"]');
let header = document.querySelector(".header-content");
// let secHeader = document.querySelector("section.header");

// let ArrowsRight = document.querySelector(".page-prev-next");

window.addEventListener("scroll", function () {
  // console.log("dziala");
  // console.log(window.scrollY);

  if (window.scrollY == 0) {
    console.log(window.outerWidth);
    console.log(window.innerWidth);
    header.classList.remove("scroll-isMoving");
    header.classList.remove("scroll-isMoving-Narrow");
  } else if (window.scrollY > 0) {
    if (window.innerWidth < 768) {
      header.classList.remove("scroll-isMoving");
      header.classList.add("scroll-isMoving-Narrow");
    } else if (window.innerWidth > 768) {
      header.classList.add("scroll-isMoving");
      header.classList.remove("scroll-isMoving-Narrow");
    }
  }

  // } else if ((window.scrollY > 0) && (window.innerWidth < 768)) {
  //   header.classList.remove("scroll-isMoving");
  //   header.classList.add("scroll-isMoving-Narrow");
  // } else if ((window.scrollY > 0) && (window.outerWidth > 768)) {
  //   header.classList.add("scroll-isMoving");
  //   header.classList.remove("scroll-isMoving-Narrow");
  // }

  let widthContent = document.querySelector(".header-content");

  if (window.outerWidth > 1366) {
    widthContent.style.maxwidth = "956.2px";
  }

  // function EraseSectionClass() {
  //   for (let i = 0; i < 5; i++) {
  //     arrow_up.classList.remove(arrSections[i]);
  //   }
  // }

  // arrSekcja.forEach(ar => arrow_up.classList.remove(arrSekcja[ar]));

  // if ((window.scrollY > 0) & (window.scrollY < 500)) {
  //   EraseSectionClass();
  //   arrow_up.classList.add("section1");
  // } else if (window.scrollY < 1200) {
  //   EraseSectionClass();
  //   arrow_up.classList.add("section2");
  // } else if (window.scrollY < 2250) {
  //   EraseSectionClass();
  //   arrow_up.classList.add("section3");
  // } else if (window.scrollY < 2900) {
  //   EraseSectionClass();
  //   arrow_up.classList.add("section4");
  // } else if (window.scrollY > 2900) {
  //   EraseSectionClass();
  //   arrow_up.classList.add("section5");
  // }

  // if (window.outerWidth < window.innerWidth) {
  //   widthContent.style.width = "960px";
  //   // dla ekranu przeglądarki wiekszej od contentu - żeby width(position: fixed) nie odnosił się do okna przeglądarki a szerokości contentu.
  //   // return widthContent.style.width;
  // }

  // if (window.scrollY > 0) {

  // //swiper
  // var Swiper = new Swiper(".swiper-container", {
  //   // Optional parameters
  //   direction: "horizonta",
  //   loop: true,
  //   autoplay: { delay: 3000 },

  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true
  //   }
  // });
});

let arrows_up = document.querySelectorAll(".up");
let arrows_down = document.querySelectorAll(".down");

arrows_up.forEach(function (arrow, index) {
  arrow.addEventListener("click", function () {
    location.href = `${arrAnchors[index]}`;
  });
});

arrows_down.forEach(function (arrow, index) {
  arrow.addEventListener("click", function () {
    location.href = `${arrAnchors[index + 2]}`;
  });
});

//form submit
form_el.onsubmit = function (event) {
  event.preventDefault();

  form_el.classList.add("is-submitted");
  var isError = false;

  for (var i = 0; i < form_req.length; i++) {
    if (form_req[i].checkValidity() != true) {
      isError = true;
    }
  }
  if (!isError) {
    // base js send post
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        alert("form send");

        form_el.classList.remove("is-submitted");
        form_el.reset();
      }
    };
    xhttp.open("POST", "https://httpstat.us/200", true);
    xhttp.send(new FormData(form_el));
  } else {
    console.log("there are some not property validated fields");
  }
};

window.onload = function () {
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    autoplay: { delay: 3000 },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
};
