// ====================Contact form-section====================
// ----------------- Post submission -----------------
// Get the modal
var modal = document.getElementById("myModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// ====================slider-section====================
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-(slideIndex - 1) * 100}%)`;
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
}

// Swipe functionality
let startX;

document.querySelector('.slides').addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

document.querySelector('.slides').addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    
    if (startX > endX + 50) {
        currentSlide(slideIndex += 1);
    } else if (startX < endX - 50) {
        currentSlide(slideIndex -= 1);
    }
});




// ====================Our-project-section====================

// function changeImage(imageSrc) {
//     document.getElementById('project-image').src = imageSrc;
// }

//** */
function changeImage(imageSrc, element) {
    document.getElementById('project-image').src = imageSrc;

    // Remove the clicked class from all content items
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => item.classList.remove('clicked'));

    // Add the clicked class to the clicked item
    element.classList.add('clicked');
}
//** */