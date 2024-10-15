const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const prevBtn = document.querySelectorAll(".scroll-btn.prev")
const nextBtn = document.querySelectorAll(".scroll-btn.next")
const scrollContainers = document.querySelectorAll(".flex-scroll")
const officialsContainer = document.querySelectorAll(".officials-container")
const gallerySection = document.querySelector(".gallery-section")
const slideTrack = document.querySelector(".slide-track")
const galleryImgContainer = document.querySelector(".gallery-img-container")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("mobile")
})

function activateScrollBtn(){
    nextBtn.forEach(el => el.addEventListener("click", () => nextReview()))
    prevBtn.forEach(el => el.addEventListener("click", () => prevReview()))
}

function nextReview(){
    scrollContainers.forEach(el => {
        let nextReviewPosition = el.scrollLeft + el.children[0].clientWidth
        el.scrollLeft = nextReviewPosition
        console.log(el.scrollLeft)
    })
} 

function prevReview(){
    scrollContainers.forEach(el => {
        let nextReviewPosition = el.scrollLeft - el.children[0].clientWidth
        el.scrollLeft = nextReviewPosition
    })
} 

activateScrollBtn()

    
//     let slideWidth = document.querySelectorAll(".gallery-img")[0].offsetWidth 
//     let position = 0;
//     let speed = 5; // Adjust speed as needed
//     let totalWidth = slideWidth * slideCount;
    
//     function animate() {
//         position -= speed;
//         slideTrack.style.transform = `translateX(${position}px)`;
    
//         // Reset position immediately when reaching the end
//         if (position <= -totalWidth) {
//             position += totalWidth;
//         }

//         // Apply the transformation

//         requestAnimationFrame(animate);
//     }
//     animate()
// })

    
    // slideTrack.style.width = `${totalWidth * 2}px`
    // let animationDuration = totalWidth / 50
    // slideTrack.style.animationDuration = `${animationDuration}s`
    // slideTrack.style.animationPlayState = "paused"
    // document.documentElement.style.setProperty('--slide-count', slides.length)
    // slideTrack.classList.add("anim")

    // for(let i = 0; i < slides.length; i++){
    //     let clones = slides[i].cloneNode(true)
    //     slideTrack.appendChild(clones)
    // }




