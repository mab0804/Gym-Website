let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
window.onload = () => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isMobileUA = /android|iphone|ipad|opera mini/i.test(ua.toLowerCase());
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.innerWidth <= 1024;

        if (isMobileUA || isTouchDevice || isSmallScreen) {
            window.location.replace("mobile-warning.html");
        }

    const joinBtn1 = document.getElementById("joinbtn1");
    const joinBtn2 = document.getElementById("joinbtn2");
    const logoutBtn = document.getElementById("logout");

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        if (joinBtn1) joinBtn1.style.display = "none";
        if (joinBtn2) joinBtn2.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";
    } else {
        if (joinBtn1) joinBtn1.style.display = "inline-block";
        if (joinBtn2) joinBtn2.style.display = "inline-block";
        if (logoutBtn) logoutBtn.style.display = "none";
    }
};
// Logout
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        alert("Logged out successfully!");
        window.location.href = "index.html";
    });
}
// service link
const serviceRows = document.querySelectorAll('.service-link');
serviceRows.forEach(row => {
    row.addEventListener('click', () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (isLoggedIn) {
            window.location.href = "plans.html";
        } else {
            alert("Please login to view our plans.");
            window.location.href = "LoginPage.html";
        }
    });
});

