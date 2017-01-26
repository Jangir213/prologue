(function (window, document) {

  var project = document.querySelectorAll(".project");

  Array.prototype.forEach.call(project, function (el) {
    addEvent(el);
  });


  function addEvent(el) {
    var info = el.querySelector(".project__info");

    el.addEventListener("mouseenter", function () {
      info.style.marginLeft = "0";
    });

    el.addEventListener("mouseleave", function () {
      info.style.marginLeft = "";
    });
  }

})(window, document);