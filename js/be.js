const about=document.querySelector('.about')
const header=document.querySelector('.header')
const aboutUsImg=document.querySelector('.about-us img')
const aboutUsUS=document.querySelector('.about-us .us')
const ourTeam=document.querySelector('.our-team')
const teamPic=document.querySelectorAll('.team-pic')
const serviceImg=document.querySelector('.service img')
const serv=document.querySelector('.serv')
const services=document.querySelector('.services')
const seconservices=document.querySelector('.second-services')
const tierServ=document.querySelectorAll('.tier-serv')
const thirdServices=document.querySelector('.third-services')
const thirPart=document.querySelectorAll('.thir-part')
const thirPartPan=document.querySelectorAll('.thir-part .nm')
const arrow=document.querySelectorAll('.arrow')
const template=document.querySelectorAll('.template .sous-template')
const navba=document.querySelectorAll('.navba a')
let started=false
const array=Array.from(navba)

navba.forEach(e=>{
    navba[0].classList.add('act1')
    e.onclick=()=>{
    removeActive()
    e.classList.add('act1')
}
})

function removeActive(){
    navba.forEach(e=>{
        e.classList.remove('act1')
    })
}



arrow.forEach(e=>{
    e.onclick=()=>{
        template.forEach(f=>{
            f.classList.toggle('act')
        })
    }
})

window.onscroll=()=>{
    if(window.scrollY>=thirdServices.offsetTop-200){
        thirPart.forEach(e=>{
            e.style.cssText=`transform:translate(0);transition:1s`
        })
        if(!started){
            thirPartPan.forEach(e=>startCount(e))
            started=true
        }
    }
    if(window.scrollY>=services.offsetTop + 100){
        tierServ.forEach(e=>{
            e.style.cssText=`transform:rotateX(0deg);transition:2s`
        })
    }
    if(window.scrollY>=services.offsetTop - 400){
        serviceImg.style.cssText=`margin-left:-20%;transition:1s;`
        serv.style.cssText=`transform:translateX(0);transition:1s`
    }

    if(window.scrollY>=ourTeam.offsetTop - 400){
        teamPic.forEach(e=>{
            e.style.cssText=`transform:translateY(0);transition:1s`
        })
    }
    if(window.scrollY>=about.offsetTop - 400){
        aboutUsImg.style.cssText=`margin-right:-20%;transition:1s;`
        aboutUsUS.style.cssText=`transform:translateY(0);transition:1s`
    }

    if(window.scrollY>=about.offsetTop - 40){
        header.style.cssText=`background:#333; transition:0.5s;`
    
    }else{
        header.style.cssText=`background-color:transparent; transition:0.5s`

    }
}
function startCount(el) {
    let goal=el.dataset.num;
    let count=setInterval(()=>{
        el.textContent++
        if(el.textContent==goal){
            clearInterval(count)
        }
    },2000/goal)

}