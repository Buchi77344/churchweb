const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const prevBtn = document.querySelectorAll(".scroll-btn.prev")
const nextBtn = document.querySelectorAll(".scroll-btn.next")
const scrollContainers = document.querySelectorAll(".flex-scroll")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("mobile")
    console.log("hello")
})

console.log(prevBtn)

function activateScrollBtn(){
    nextBtn.forEach(el => el.addEventListener("click", () => nextReview()))
    prevBtn.forEach(el => el.addEventListener("click", () => prevReview()))
}

function nextReview(){
    scrollContainers.forEach(el => {
        console.log()
        let nextReviewPosition = el.scrollLeft + el.children[0].clientWidth
        el.scrollLeft = nextReviewPosition
    })
} 

function prevReview(){
    scrollContainers.forEach(el => {
        let nextReviewPosition = el.scrollLeft - el.children[0].clientWidth
        el.scrollLeft = nextReviewPosition
    })
} 

activateScrollBtn()