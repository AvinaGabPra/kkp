const p1 = document.querySelector(".p1"),
  p0 = document.querySelector(".p0");
(p2 = document.querySelector(".p2")),
  (p3 = document.querySelector(".p3")),
  (p4 = document.querySelector(".p4")),
  (p5 = document.querySelector(".p5")),
  (p6 = document.querySelector(".p6")),
  (p7 = document.querySelector(".p7")),
  (p8 = document.querySelector(".p8")),
  (p9 = document.querySelector(".p9"));
p0.addEventListener("click", () => {
  p0.classList.toggle("active");
  p1.classList.remove("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p1.addEventListener("click", () => {
  p1.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p2.addEventListener("click", () => {
  p2.classList.toggle("active");
  p1.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p3.addEventListener("click", () => {
  p3.classList.toggle("active");
  p2.classList.remove("active");
  p1.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p4.addEventListener("click", () => {
  p4.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p1.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p5.addEventListener("click", () => {
  p5.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p1.classList.remove("active");
  p6.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p6.addEventListener("click", () => {
  p6.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p1.classList.remove("active");
  p7.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p7.addEventListener("click", () => {
  p7.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p1.classList.remove("active");
  p8.classList.remove("active");
  p9.classList.remove("active");
});
p8.addEventListener("click", () => {
  p8.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p1.classList.remove("active");
  p7.classList.remove("active");
  p9.classList.remove("active");
});
p9.addEventListener("click", () => {
  p9.classList.toggle("active");
  p2.classList.remove("active");
  p3.classList.remove("active");
  p4.classList.remove("active");
  p5.classList.remove("active");
  p6.classList.remove("active");
  p1.classList.remove("active");
  p8.classList.remove("active");
  p7.classList.remove("active");
});
