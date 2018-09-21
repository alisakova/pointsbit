var openLinks = document.querySelectorAll('._open-popup-block');
var popupBlocks = document.querySelectorAll('._popup-block');
var body = document.querySelector('body');

if (openLinks && popupBlocks) {
  openLinks.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      var parent = e.target.closest("._popup-block-container");
      var popupBlock = parent.querySelector('._popup-block');
      popupBlock.classList.toggle('active');
      popupBlocks.forEach(function(item) {
        if (item.classList.contains('active') && item !== popupBlock) {
          item.classList.remove('active');
        }
      });
    });
  });

  popupBlocks.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
}

body.addEventListener('click', function(e) {
  e.stopPropagation();
  popupBlocks.forEach(function(item) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
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
