const backToTop = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});

const cards = document.querySelectorAll('.event-card');
let current = 0;

document.getElementById('nextEvent').addEventListener('click', () => {
  cards[current].classList.remove('active');
  current = (current + 1) % cards.length;
  cards[current].classList.add('active');
});

document.getElementById('prevEvent').addEventListener('click', () => {
  cards[current].classList.remove('active');
  current = (current - 1 + cards.length) % cards.length;
  cards[current].classList.add('active');
});

const popup = document.getElementById("eventPopup");
const closePopup = document.getElementById("closePopup");
const registerBtn = document.getElementById("registerBtn");

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.add("active");
  }, 2000);
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  window.location.href = "#contact";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

function toggleLinks(id) {
  document.getElementById(id).classList.toggle("active");
}