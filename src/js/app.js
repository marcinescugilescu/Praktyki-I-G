
const btns_header = document.querySelectorAll('.header-menu-btn');
const btn_cookies = document.querySelector(".btn-cookies");
const cookies = document.querySelector(".cookies");
const icons = document.querySelectorAll("div.icon");
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
  "#footer",
];
let arrAnchorsNav = [
  "#mission",
  "#clients",
  "#products",
  "#contact",
];

form_mod = this.document.querySelector(".contact");
form_el = form_mod.querySelector("form");
form_req = form_mod.querySelectorAll("[required]");

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

  div.style.top = Y + "px";
  div.style.left = X + "px";

  div.addEventListener("mouseout", function () {
    let divRemove = document.querySelector(".icon-over");
    divIcons.removeChild(divRemove);
  });
}
icons.forEach(icon => icon.addEventListener("mouseover", iconChoice));




let header = document.querySelector(".header-content");

//zmiana rodzaju menu w zależności od rozdzielczości
if (window.innerWidth > 767) {
  header.classList.add("scroll-isMoving");
  btns_header.forEach(btn => btn.classList.remove("show-btn-header"));
} else if (window.innerWidth < 768) {
  header.classList.remove("scroll-isMoving");

  btns_header.forEach(btn => btn.classList.add("show-btn-header"));
}

btns_header.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    location.href = `${arrAnchorsNav[index]}`;
  });
});


window.addEventListener("scroll", function () {

  if (window.scrollY == 0) {
    header.classList.remove("scroll-isMoving");
  } else if (window.scrollY > 0) {
    if (window.innerWidth < 768) {
      header.classList.remove("scroll-isMoving");
    } else if (window.innerWidth > 767) {
      header.classList.add("scroll-isMoving");
    }
  }

  let widthContent = document.querySelector(".header-content");

  if (window.outerWidth > 1366) {
    widthContent.style.maxwidth = "956.2px";
  }
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
