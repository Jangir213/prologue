(function () {

  var project = document.querySelectorAll(".project");
  // var info = document.querySelector(".project__info");

  project.forEach(function (el) {
    addEvent(el);
  })

  function addEvent(el) {
    var info = el.querySelector(".project__info");

    el.addEventListener("mouseenter", function (e) {
      info.style.marginLeft = "0";
    });

    el.addEventListener("mouseleave", function (e) {
      info.style.marginLeft = "";
    });
  } 


})();