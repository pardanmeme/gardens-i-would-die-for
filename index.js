const first_name_key = "dev-first-name";
function refresh_greeting(first_name) {
  const msg = `I hope you're not a weed ${first_name}`;
  document.getElementById("greeting").innerText = msg;
}
function set_first_name(elem) {
  const first_name = elem.value;
  if (first_name.length > 0) {
    if (first_name == "mmo_mg_728-9_47.w") {
      window.location.href = "games/sample/main.html";
    }
    localStorage.setItem(first_name_key, first_name);
    document.getElementById("first-name").value = "";
    refresh_greeting(first_name);
  }
}
function init() {
  const first_name = localStorage.getItem(first_name_key);
  console.log(first_name);
  if (first_name && first_name.length > 0) {
    refresh_greeting(first_name);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  init();
});
