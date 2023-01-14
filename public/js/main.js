// const nav = document.getElementById("nav");

if (nav) {
  window.onscroll = function () {
    myFunction();
  };

  // Get the offset position of the navbar
  var sticky = nav.offsetTop + 150;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky");
    }
    if (window.pageYOffset == 0) {
      nav.classList.remove("sticky");
    }
  }
  // var lastScrollTop = 0;

  // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  // window.addEventListener(
  //   "scroll",
  //   function () {
  //     // or window.addEventListener("scroll"....
  //     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

  //     if (st > lastScrollTop) {
  //       // downscroll code
  //       nav.classList.remove("sticky");
  //     } else {
  //       // upscroll code
  //       nav.classList.add("sticky");
  //     }
  //     if (window.pageYOffset == 0) {
  //       nav.classList.remove("sticky");
  //     }
  //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  //   },
  //   false
  // );
}

// const heading = document.getElementById("mainHeading");
// const spans = document.getElementsByClassName("span");

// for (let i = 0; i < spans.length; i++) {
//   const element = spans[i];
//   element.addEventListener("mouseenter", addRubberBand);
//   element.addEventListener("mouseleave", removeRubberBand);
//   function addRubberBand(e) {
//     console.log("MOuse Over");
//     element.classList.add("bouncing");
//   }
//   function removeRubberBand(e) {
//     console.log("MOuse Over");
//     element.classList.remove("bouncing");
//   }
// }

// if (heading) {
//   console.log(heading);
//   heading.addEventListener("mouseenter", addRubberBand);
//   heading.addEventListener("mouseleave", removeRubberBand);
//   function addRubberBand(e) {
//     console.log("MOuse Over");
//     heading.classList.add("bouncing");
//   }
//   function removeRubberBand(e) {
//     console.log("MOuse Over");
//     heading.classList.remove("bouncing");
//   }
// }
