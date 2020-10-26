document.getElementById("navbar-toggler-button").addEventListener("click", function() {
    var icons = document.getElementsByClassName("navbar-icons")[0];
    var collapse = document.getElementsByClassName("myclass")[0];
    if (!collapse.classList.contains('show')) {
      icons.style.display = 'none';
    } else {
      icons.style.display = 'block';
    }
  });