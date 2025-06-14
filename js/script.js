class MobileNavBar{
    constructor(mobileMenu, navList,navLinks){
        this.mobileMenu= document.querySelector(mobileMenu);
        this.navList=document.querySelector(navList)
        this.navLinks=document.querySelectorAll(navLinks);
        this.activeClass="active";
        this.handleClick=this.handleClick.bind(this); 
    }
    animateLinks(){
        this.navLinks.forEach((link,index)=>{
            link.style.animation
            ?(link.style.animation="") : (link.style.animation=`navLinkFade 0.5s forwards ${index/7+0.3}s`)
        })
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    Init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar=new MobileNavBar(
    ".mobille-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.Init()

/*CAIXA DE DE SLIDER*/
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.toggle('active', i === index);
dots[i].classList.toggle('active', i === index);
});
currentSlide = index;
}
// Troca automática a cada 5 segundos
setInterval(() => {
let nextSlide = (currentSlide + 1) % slides.length;
showSlide(nextSlide);
}, 5000);