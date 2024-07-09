const navToggle = document.getElementById("nav-toggle")
const navContainer = document.getElementById("nav-container")

navToggle.addEventListener("click",()=> {
    navContainer.classList.toggle("open");

    if(navContainer.classList.contains("open")){
        navToggle.innerHTML = `<i class="ri-close-large-line"></i>`
    } else {
        navToggle.innerHTML = `<i class="ri-menu-2-line"></i>`
    }
})