function handleScroll(){
    const scrollY = window.scrollY || window.pageYOffset;

    const faderoomDeals = document.getElementById("roomDeals");
    fadingDiv.style.opacity = scrollY / 500;
}

window.addEventListener("scroll", handleScroll);