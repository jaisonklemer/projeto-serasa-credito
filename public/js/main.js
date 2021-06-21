window.onload = () => {
  initToast();
};

function initToast() {
  var toast = document.getElementById("toast");
  if (toast) {
    var a = new bootstrap.Toast(toast);
    a.show();
  }
}
