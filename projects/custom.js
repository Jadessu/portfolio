const thumb1 = document.getElementById("thumb1");
const thumb1Src = document.getElementById("thumb1").src;
const thumb2 = document.getElementById("thumb2");
const thumb2Src = document.getElementById("thumb2").src;
const thumb3 = document.getElementById("thumb3");
const thumb3Src = document.getElementById("thumb3").src;
const thumb4 = document.getElementById("thumb4");
const thumb4Src = document.getElementById("thumb4").src;
const thumb5 = document.getElementById("thumb5");
const thumb5Src = document.getElementById("thumb5").src;
// const thumb6 = document.getElementById("thumb6");
// const thumb6Src = document.getElementById("thumb6").src;

thumb1.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb1Src;
});
thumb2.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb2Src;
});
thumb3.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb3Src;
});
thumb4.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb4Src;
});
thumb5.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb5Src;
});
// thumb6.addEventListener("click", function () {
//   document.getElementById("mainImg").src = thumb6Src;
// });
