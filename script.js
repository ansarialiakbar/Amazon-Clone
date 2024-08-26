const imgs = document.querySelectorAll('.header_slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        // no image is selected
        imgs[i].style.display = 'none';    
    }
    // selecting first image
    imgs[n].style.display = 'block';

}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    } else{
        n = 0;
    }
    changeSlide();
})
// using shift rotating the imges by using mouse
const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer ) {
    item.addEventListener('wheel', (evt)=>{
        // first we remove default features
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

const backtop = document.querySelector('.backtop');

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".nav_bottom_1");

sidebtn.addEventListener("click", () =>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    sidebtn.classList.add("active");
})
cross.addEventListener("click", () =>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
   
})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");
sign.addEventListener("click", () =>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})
