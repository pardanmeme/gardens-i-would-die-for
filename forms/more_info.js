function download_data(data_obj) {
  const json_str = JSON.stringify(data_obj, null, 4);
  console.log(json_str);
  const blob = new Blob([json_str], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `more_info.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function process_form(event) {
  event.preventDefault();
  const form_data = new FormData(event.target);
  const data_obj = Object.fromEntries(form_data);
  download_data(data_obj);
}

function init() {
  document
    .getElementById("more_info_form")
    .addEventListener("submit", process_form);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
