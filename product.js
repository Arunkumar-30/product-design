// document.getElementById('next').onclick = function () {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }

// document.getElementById('prev').onclick = function () {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }

// window.onload = function () {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }

// document.getElementById('next').onclick = function () {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }

// document.getElementById('prev').onclick = function () {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }

document.addEventListener('DOMContentLoaded', function () {
    // Function to move first .item to the end (next slide effect)
    function slideNext() {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }

    // Auto-slide every 3 seconds
    setInterval(slideNext, 3000);

    // Optional: manual controls (if you have #next and #prev buttons)
    document.getElementById('next')?.addEventListener('click', slideNext);

    document.getElementById('prev')?.addEventListener('click', function () {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}



dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
    });
});

setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
}, 4000);

