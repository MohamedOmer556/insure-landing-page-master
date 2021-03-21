const burger = document.querySelector(".burger");

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".span1", 0.4, { rotate: "45", y: "8px" });
    gsap.to(".span3", 0.4, { rotate: "-45", y: "-8px" });
    gsap.to(".span2", { opacity: 0 });
    gsap.to(".nav-bar", 0.5, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".span1", 0.4, { rotate: "0", y: "0px" });
    gsap.to(".span3", 0.4, { rotate: "0", y: "-0px" });
    gsap.to(".span2", { opacity: 1 });
    gsap.to(".nav-bar", 0.5, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", navToggle);
