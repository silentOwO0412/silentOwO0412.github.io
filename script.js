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

// 抓取畫面上所有的 "Get Info" 按鈕
const infoButtons = document.querySelectorAll('.info-btn');

// 幫每一個按鈕加上點擊事件
infoButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // 防止 <a> 標籤預設的跳轉行為
    
    // 從按鈕的 data-* 屬性拿出遊戲資訊
    const title = this.getAttribute('data-title');
    const dev = this.getAttribute('data-dev');
    const desc = this.getAttribute('data-desc');

    // 把資訊填入彈出視窗中
    modalTitle.textContent = title;
    modalDev.textContent = dev;
    modalDesc.textContent = desc;

    // 顯示彈出視窗
    modal.style.display = 'block';
  });
});

// 當點擊視窗右上角的 X 時，關閉視窗
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 當點擊彈出視窗以外的灰色背景區域時，也關閉視窗
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
