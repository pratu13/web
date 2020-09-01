var previousPageOffset = window.pageYOffset;
window.onscroll = function() {
    var currentPageOffset = window.pageYOffset;
    if (previousPageOffset > currentPageOffset) {
        document.getElementsByClassName("nav-wrapper").style.top = "0";
    } else {
        document.getElementsByClassName("nav-wrapper").style.top = "-50px";
    }
    previousPageOffset = currentPageOffset
}

// Nav bar anchor click
let anchors = document.getElementsByClassName("anchor")
function add(element) {
    for (let index = 0; index < anchors.length; index++) {
        const a = anchors[index];
        a.classList.remove("active")
    }
    element.classList.add("active")
}


var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

