// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();


// gsap

gsap.from('#logo-center #circle-img',{
    opacity:0,
    duration:3,
    delay:1
})

let tl1 = gsap.timeline()
tl1.from('#top-text h1',{
    scrollTrigger:{
        trigger:'#top-text h1',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        start:'end 80%',
        scrub:1
    },
    y:100,
    opacity:0,
    duration:1
},'ani')
.from('#outter-overlay h1,#outter-overlay p',{
    y:400,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#outter-overlay h1,#outter-overlay p',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 90%',
        scrub:2
    }
},'ani')
.from('#page4 #border-p-4,#page4 #container',{
    y:500,
    // duration:1,
    opacity:0,
    // stagger:.25,
    scrollTrigger:{
        trigger:'#page4 #border-p-4,#page4 #container',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 90%',
        scrub:2
    }
},'ani')
.from('#page6 h2,#page6 #hori-6,#page6 #srv-wrapper,#page6 #white,#page6 button',{
    y:400,
    duration:1,
    opacity:0,
    // stagger:.2,
    scrollTrigger:{
        trigger:'#page6 h2,#page6 #hori-6,#page6 #srv-wrapper,#page6 #white,#page6 button',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 60%',
        scrub:3
    }
},'ani')
.from('#page6 #white',{
    x:500,
    duration:1,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:'#page6 #white',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 60%',
        // scrub:2
    }
},'ani')
.from('#page7 img,#page7 #contaner-left,#page7 #contaner-ryt,#page7 #pink-flower',{
    y:300,
    duration:1,
    opacity:0,
    stagger:.23,
    scrollTrigger:{
        trigger:'#page7 img,#page7 #contaner-left,#page7 #contaner-ryt,#page7 #pink-flower',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 40%',
        scrub:2
    }
},'ani')

// cursor

let cur = document.querySelector('#cursor')
let main = document.querySelector('#main')

main.addEventListener('mousemove',function(e){
    // console.log(e.x);
    cur.style.left = `${e.x}px`
    cur.style.top = `${e.y}px`
})

// hover nav

let h2 = document.querySelector('#nav h2')
let Img = document.querySelector('#center img')

cur.addEventListener('mouseenter',function(e){
    cur.style.scale = 1.5
    cur.style.backgroundColor = 'transparent'
    // cur.style.border = '.1vw'
    Img.style.color = '#B7A26E'
})
cur.addEventListener('mouseleave',function(e){
    cur.style.scale = 1
    cur.style.backgroundColor = '#5a430c'
})

// card hover
let slide_card = document.querySelectorAll('#slide-top #image-card')
   slide_card.forEach(function(i){
        i.addEventListener(function(){
            cur.style.scale = 5
            cur.style.backgroundColor = 'transparent'
            cur.style.borderColorColor = 'white'
        })
        i.addEventListener('mouseleave',function(){
            cur.style.scale = 1
            cur.style.backgroundColor = '#5a430c'
            cur.style.borderColorColor = 'none'
        })
   })

// button hover
let btn = document.querySelector('#bottom-text h1')
// console.log(btn);
cur.addEventListener('mouseenter',function(){
    cur.style.scale = 1.4
    cur.style.backgroundColor = 'transparent'
    btn.style.backgroundColor = '#5a430c'
    btn.style.color = 'white'
})
cur.addEventListener('mouseleave',function(e){
    cur.style.scale = 1
    cur.style.backgroundColor = '#8A733E'
    btn.style.backgroundColor = 'transparent'
    btn.style.color = '#5a430c'
})

// outterr overlay button hover
let overlay_botton = document.querySelector('#outter-overlay p')
console.log(overlay_botton); 
overlay_botton.addEventListener('mouseenter',function(){
    overlay_botton.style.backgroundColor = 'white'
    overlay_botton.style.color = '#5a430c'
})
overlay_botton.addEventListener('mouseleave',function(){
    overlay_botton.style.backgroundColor = ' transparent'
    overlay_botton.style.color = 'white'
})

// page 4 button hover
let p5_button = document.querySelector('#c-left>h2')
p5_button.addEventListener('mouseenter',function(){
    p5_button.style.backgroundColor = '#8A733E'
    p5_button.style.color = 'white'
    cur.style.scale = 1.5
    cur.style.backgroundColor = 'transparent'
    cur.style.borderColor = '#B7A26E'
})
p5_button.addEventListener('mouseleave',function(){
    p5_button.style.backgroundColor = 'transparent'
    p5_button.style.color = '#8A733E'
    cur.style.scale = 1
    cur.style.backgroundColor = '#8A733E'
    cur.style.borderColor = '#B7A26E'
})
// page6 button hover
let p6_button = document.querySelector('#inner-div button')
// console.log(p6_button);
p6_button.addEventListener('mouseenter',function(){
    p6_button.style.backgroundColor = '#5a430c'
    p6_button.style.color = 'white'
    cur.style.scale = 1.5
    cur.style.backgroundColor = 'transparent'
    cur.style.borderColor = '#8A733E'
})
p6_button.addEventListener('mouseleave',function(){
    p6_button.style.backgroundColor = 'transparent'
    p6_button.style.color = '#5a430c'
    cur.style.scale = 1
    cur.style.backgroundColor = '#5a430c'
})


// page7 form button hover
let f_button = document.querySelector('#contaner-ryt button')
// console.log(f_button);
f_button.addEventListener('mouseenter',function(){
    f_button.style.backgroundColor = '#5a430c'
    f_button.style.color = 'white'
    cur.style.scale = 1.5
    cur.style.backgroundColor = 'transparent'
    cur.style.borderColor = '#8A733E'
})
f_button.addEventListener('mouseleave',function(){
    f_button.style.backgroundColor = 'transparent'
    f_button.style.color = '#5a430c'
    cur.style.scale = 1
    cur.style.backgroundColor = '#8A733E'
})

// footer hover
let footer_icon = document.querySelectorAll('#footer-icons img')
console.log(footer_icon);
let Topp = document.querySelector('#footer>img')
console.log(Topp); 

footer_icon.forEach(function(item){
    item.addEventListener('mouseenter',function(){
        item.style.scale =1.5
        cur.style.scale = 1.5
        cur.style.overlay_botton = "transparent"
    })
    item.addEventListener('mouseleave',function(){
        item.style.scale =1
        cur.style.scale = 1.5
        cur.style.backgroundColor = "#8A733E"
    })
})

Topp.addEventListener('mouseenter',function(){
    Topp.style.backgroundColor = '#5a430c'
    Topp.style.color = 'white'
    cur.style.scale = 1.5
    cur.style.backgroundColor = "transparent"
})
Topp.addEventListener('mouseleave',function(){
    Topp.style.backgroundColor = 'transparent'
    cur.style.scale = 1
    cur.style.backgroundColor = "#5a430c"
})