// const nav = document.getElementById("nav");
const home = document.getElementById("home");
const homeContent = document.getElementById("homeContent");
const homeMainHeading = document.getElementById("mainHeading");
const homeMainHeading2 = document.getElementById("homeMainHeading2");
const homeSubHeading = document.getElementById("homeSubHeading");
const homePara = document.getElementById("homePara");
const homeButtonContainer = document.getElementById("homeButtonContainer");
const homeImage = document.getElementById("homeImage");

const about = document.getElementById("about");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const swiperContainer = document.getElementById("swiperContainer");

window.onscroll = function () {
  headerScroll();
  homeScroll();
  // aboutScroll();
  reviewScroll();
};
var sticky = nav.offsetTop + 150;
function headerScroll() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  }
  if (window.pageYOffset == 0) {
    nav.classList.remove("sticky");
  }
}

function homeScroll() {
  let pos1;
  let pos2;
  let pos3;
  let pos4;
  let pos5;
  let rotate;
  if (window.innerWidth > 500) {
    pos1 = window.scrollY / 2;
    pos2 = window.scrollY / 2;
    pos3 = window.scrollY / 1;
    pos4 = window.scrollY / 3;
    pos5 = window.scrollY / 2;
    pos6 = window.scrollY / 30;
    rotate = window.scrollY / 30;
    // console.log(pos1);
  } else {
    pos1 = window.scrollY / 1;
    pos2 = window.scrollY / 0.6;
    pos3 = window.scrollY / 0.4;
    pos4 = window.scrollY / 1.5;
    pos5 = window.scrollY / 2;
    pos6 = window.scrollY / 30;
    rotate = window.scrollY / 30;
    // console.log(pos1);
  }
  // homeContent.style.transform = `scale(${pos1}%)`;
  homeMainHeading.style.transform = `translateY(${-pos1}%)`;
  homeMainHeading2.style.transform = `translateY(${-pos2}%)`;
  homeSubHeading.style.transform = `translateY(${-pos3}%)`;
  homePara.style.transform = `translateY(${-pos4}%)`;
  homeButtonContainer.style.transform = `translateY(${-pos5}%)`;
  homeImage.style.transform = `rotate(${rotate}deg) translateX(${pos6}%)`;
  // homeImage.style.transform = `rotate(${rotate}deg) `;
}

// function aboutScroll() {
//   if (about.scrollHeight / 2 >= about.getBoundingClientRect().top) {
//     let pos1;
//     let pos2;
//     let pos3;
//     if (window.innerWidth > 500) {
//       pos1 = (about.getBoundingClientRect().top / about.scrollHeight) * 100 * 3;
//       pos2 = window.scrollY / 3;
//       pos3 = window.scrollY / 2;
//       // console.log(pos1);
//     } else {
//       pos1 = window.scrollY / 5;
//       pos2 = window.scrollY / 3;
//       pos3 = window.scrollY / 1;
//     }

//     // card1.style.transform = `translateY(-${pos1}%)`;
//     // card2.style.transform = `translateY(-${pos2}%)`;
//     // card3.style.transform = `translateY(-${pos3}%)`;
//   } else {
//     // card1.style.transform = `translateY(0%)`;
//     // card2.style.transform = `translateY(0%)`;
//     // card3.style.transform = `translateY(0%)`;
//   }
// }

var previousPosition = window.pageYOffset || document.documentElement.scrollTop;

function reviewScroll() {
  let pos1;
  let pos2;
  let pos3;
  let pos4;
  let pos5;
  let rotate;
  if (window.innerWidth > 500) {
    pos1 = window.scrollY / 40;
  } else {
    pos1 = window.scrollY / 1;
  }
  // swiperContainer.style.transform = `translateX(${pos1}%)`;
  // var currentPosition =
  //   window.pageYOffset || document.documentElement.scrollTop;

  // if (previousPosition > currentPosition) {
  //   console.log("scrolling up");
  //   swiperContainer.style.transform = "rotate(1deg)";
  // } else {
  //   console.log("scrolling down");
  //   swiperContainer.style.transform = "rotate(-1deg)";
  // }

  // previousPosition = currentPosition;
}
