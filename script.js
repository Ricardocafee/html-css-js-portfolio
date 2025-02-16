function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showVideo() {
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.src = "https://www.youtube.com/embed/y0weLQa5hrU"; // Your Video ID
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideo() {
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.src = ""; // Stop the video when closing
    document.getElementById("videoModal").style.display = "none";
}

// Ensure modal is hidden on page load
    window.onload = function() {
        document.getElementById("videoModal").style.display = "none";
    };