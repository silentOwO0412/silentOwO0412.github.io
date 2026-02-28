// Get the button and the body element
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// 1. Check if the user already chose dark mode previously
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// 2. Listen for clicks on the toggle button
toggleBtn.addEventListener('click', function() {
  // Toggle the dark-mode class on or off
  body.classList.toggle('dark-mode');
  
  // 3. Save their preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// 卡片進場動畫
const cards = document.querySelectorAll('.game-card');
cards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  
  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 200);
});

// --- 彈出視窗功能 ---

// 抓取彈出視窗的相關元素
const modal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const modalDev = document.getElementById('modalDev');
const modalDesc = document.getElementById('modalDesc');
const modalVideo = document.getElementById('modalVideo'); // 新增抓取影片元素

const infoButtons = document.querySelectorAll('.info-btn');

infoButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    // 拿出所有的資料，包含影片網址
    const title = this.getAttribute('data-title');
    const dev = this.getAttribute('data-dev');
    const desc = this.getAttribute('data-desc');
    const video = this.getAttribute('data-video');

    // 填入資料
    modalTitle.textContent = title;
    modalDev.textContent = dev;
    modalDesc.textContent = desc;
    modalVideo.src = video; // 把影片網址塞進 iframe 裡

    modal.style.display = 'block';
  });
});

// 建立一個關閉視窗的函數（超重要：關閉時清空影片網址，讓聲音停止）
function closeModal() {
  modal.style.display = 'none';
  modalVideo.src = ""; // 清空 src，停止影片播放
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
