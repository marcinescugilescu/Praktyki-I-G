const btn_cookies = this.document.querySelector(".btn-cookies");
const cookies = this.document.querySelector(".cookies");
// console.log(btn_cookies);
btn_cookies.addEventListener("click", function() {
  cookies.classList.add("turn-off");
});
