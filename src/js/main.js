
var openLinks = document.querySelectorAll("._open-popup-block");
var popupBlocks = document.querySelectorAll("._popup-block");
var body = document.querySelector("body");

if (openLinks && popupBlocks) {
  openLinks.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
      var parent = e.target.closest("._popup-block-container");
      var popupBlock = parent.querySelector("._popup-block");
      popupBlock.classList.toggle("active");
      popupBlocks.forEach(function(item) {
        if (item.classList.contains("active") && item !== popupBlock) {
          item.classList.remove("active");
        }
      });
    });
  });

  popupBlocks.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  });
}

body.addEventListener("click", function(e) {
  e.stopPropagation();
  popupBlocks.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
});

var accordion = document.querySelectorAll(".accordion");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var actionsBtn = document.querySelectorAll(".block__action-btn");

actionsBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    actionsBtn.forEach(function(elem) {
      if (elem.classList.contains("block__action-btn_active")) {
        elem.classList.remove("block__action-btn_active");
      }
    });
    btn.classList.add("block__action-btn_active");
  });
});

var dataBtns = document.querySelectorAll(".data__name");
var dataIndicators = document.querySelectorAll(".data__indicator");

dataBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    dataBtns.forEach(function(elem) {
      if (elem.classList.contains("data__name_active")) {
        elem.classList.remove("data__name_active");
      }
    });
    dataIndicators.forEach(function(elem) {
      if (elem.classList.contains("data__indicator_active")) {
        elem.classList.remove("data__indicator_active");
      }
    });
    var parent = e.target.closest(".data");
    var indicator = parent.querySelector(".data__indicator");
    btn.classList.add("data__name_active");
    indicator.classList.add("data__indicator_active");
  });
});

$(document).ready(function() {
  if ($(".select").length) {
    $(".select").select2({
      minimumResultsForSearch: Infinity
    });
  }
});
