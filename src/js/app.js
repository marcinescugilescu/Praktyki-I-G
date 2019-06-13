const btn_cookies = document.querySelector(".btn-cookies");
const cookies = document.querySelector(".cookies");
const icons = document.querySelectorAll("div.icon");
// arrIcons = [...icons];
const divIcons = document.querySelector("div.icons");
let divRemove = document.querySelector(".icon-over");
let arrIcons = [
  "../img/001-malware-white.png",
  "../img/002-smartphone-1-white.png",
  "../img/003-folder-white.png",
  "../img/004-malware-white.png",
  "../img/005-pendrive-white.png",
  "../img/006-network-white.png",
  "../img/007-smartphone-2-white.png",
  "../img/008-fishing-white.png",
  "../img/009-data-protection-white.png",
  "../img/010-credit-card-white.png",
  "../img/011-hacker-white.png",
  "../img/012-firewall-white.png"
];

// console.log(btn_cookies);
// btn_cookies.addEventListener("click", function() {
//   cookies.classList.add("turn-off");
// });

function iconChoice() {
  let divsRemove = document.querySelectorAll(".icon-over");
  divsRemove.forEach(div => div.remove());

  // arrIcons.filter(function checkClass(cl) {
  //   if (cl.classList.contains("icon-over")) {
  //     cl.classList.remove("icon-over");
  //   }
  // });
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

  div.addEventListener("mouseout", function() {
    let divRemove = document.querySelector(".icon-over");
    divIcons.removeChild(divRemove);
  });

  // eraseDiv);divthis == !wybranyDiv) {
  //   let divRemove = document.querySelector(".icon-over");
  //   divIcons.removeChild(divRemove);
  // }
}
icons.forEach(icon => icon.addEventListener("mouseover", iconChoice));

form_mod = this.document.querySelector(".contact");
form_el = form_mod.querySelector("form");
form_req = form_mod.querySelectorAll("[required]");
console.log(form_req);

//form submit
form_el.onsubmit = function(event) {
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
    xhttp.onreadystatechange = function() {
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
