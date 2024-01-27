document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navctrl");
    const navbar = document.getElementById("SideNav");
    const main2 = document.getElementById("main2");

    toggleButton.addEventListener("click", function () {
        if (navbar.style.width === "0%") {
            navbar.style.width = "80%";
            main2.style.opacity= "0.2";
        } else {
            navbar.style.width = "0%";
            main2.style.opacity= "1"
        }
    });

});

function handleMovieFilter() {
    var selectedOption = document.getElementById("movieFilter").value;
  
    if (selectedOption === "latest") {
        display_latest_movies();
    } else if (selectedOption === "trending") {
        display_trending_movies();
    }
}
  

function display_latest_movies() {
    document.getElementById("latest").style.display = "flex";
    document.getElementById("trending").style.display = "none";
}

function display_trending_movies() {
    document.getElementById("latest").style.display = "none";
    document.getElementById("trending").style.display = "flex";
}



