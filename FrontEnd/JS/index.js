function displayCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const currentTime = new Date().toLocaleString();
    currentTimeElement.textContent =currentTime;
}

// Update the current time every second
setInterval(displayCurrentTime, 1000);

// Initial call to display current time immediately
displayCurrentTime();


var isNavOpen = false;

function toggleNav() {
    var nav = document.getElementById("mySidenav");
    isNavOpen = !isNavOpen;

    if (isNavOpen) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

function scrollToPosition(position) {
    // Scroll to the specified position with smooth behavior
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}

