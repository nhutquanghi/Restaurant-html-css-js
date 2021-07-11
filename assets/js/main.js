/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Xác thực rằng các biến tồn tại
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Chúng tôi thêm lớp show-menu vào thẻ div với lớp nav__menu
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Khi chúng tôi nhấp vào từng nav__link, chúng tôi sẽ xóa lớp show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
  const nav = document.getElementById("header");
  // Khi cuộn lớn hơn 200 chiều cao khung nhìn, hãy thêm lớp tiêu đề cuộn vào thẻ tiêu đề
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // Khi cuộn cao hơn chiều cao khung nhìn 560, hãy thêm lớp hiển thị cuộn vào thẻ có lớp đầu cuộn
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Chủ đề đã chọn trước đây (nếu người dùng đã chọn)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Có được chủ đề hiện tại mà giao diện có bằng cách xác thực lớp chủ đề tối
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// Xác nhận nếu trước đó người dùng đã chọn một chủ đề
if (selectedTheme) {
  // Nếu quá trình xác thực được hoàn thành, hỏi vấn đề là gì để biết liệu đã kích hoạt hay hủy kích hoạt tối
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Kích hoạt / hủy kích hoạt chủ đề theo cách thủ công bằng nút
themeButton.addEventListener("click", () => {
  // Thêm hoặc xóa chủ đề tối / biểu tượng
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Chúng tôi lưu chủ đề và biểu tượng hiện tại mà người dùng đã chọn
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
  {
    interval: 200,
  }
);