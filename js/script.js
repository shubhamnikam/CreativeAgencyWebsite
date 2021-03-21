const toggleRef = document.querySelector(".toggle");
const navigationRef = document.querySelector(".navigation");


//toggle active state
toggleRef.addEventListener("click", ()=>{
    toggleRef.classList.toggle("active");
    navigationRef.classList.toggle("active");
});