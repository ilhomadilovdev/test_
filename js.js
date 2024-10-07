


const slides = document.querySelectorAll(".slide"),
    next = document.querySelector(".prev"),
    prev = document.querySelector(".next"),
    sliderWrapper = document.querySelector(".header-carousel"),
    slidesField = document.querySelector(".carusel"),
    width = window.getComputedStyle(sliderWrapper).width,
    sldier = document.querySelector(".header-carousel")


let slideIndex = 1;
let offset = 0;
slidesField.style.width = 100 * slides.length + "%",
    slidesField.style.transition = "1.5s ease all"
slidesField.style.display = "flex",
    sliderWrapper.style.overflow = "hidden"

slides.forEach(slide => {
    slide.style.width = width;
})



const indicators = document.createElement("ol");
const dots = [];
indicators.classList.add("carousel-indicators"),
    sliderWrapper.append(indicators);


for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li")
    dot.setAttribute("data-slide-to", i + 1)
    dot.classList.add("carousel-dot")
    if (i == 0) { dot.style.opacity = 1 }
    indicators.append(dot)
    dots.push(dot)
}


next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0
    } else {
        offset += +width.slice(0, width.length - 2)
        slidesField.style.transform = `translateX(-${offset}px)`;
    }






})


prev.addEventListener("click", () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1)
    } else {
        offset -= +width.slice(0, width.length - 2)
        slidesField.style.transform = `translateX(-${offset}px)`;
    }


})




dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute("data-slide-to")
        slideIndex = slideTo;

        offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;



        dots.forEach(dot => dot.style.opacity = 0.5)
        dots[slideIndex - 1].style.opacity = 1




    })
})


