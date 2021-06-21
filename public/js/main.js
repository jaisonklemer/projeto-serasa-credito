function initToast() {
  var toast = document.getElementById("toast");
  var a = new bootstrap.Toast(toast);
  a.show();
}

window.onload = () => {
  initToast();
};
