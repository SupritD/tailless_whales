var tl = gsap.timeline();

tl.from("#heading",{
    // y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})
tl.from("#heading_discription",{
    // y:100,
    opacity: 0,
    duration: 0.5
})
tl.from("#channel",{
    // y:100,
    opacity: 0,
    duration: 0.5
})

gsap.from("#hero_img_container img",{
    y:200,
    opacity:0,
    duration:0.8,
    scrollTrigger: {
        trigger: "#hero_img_container img",
        scroller: "body",
        markers:true,
        start: "top 80%"
    }
})

gsap.from("#sec01 .sec_heading, #sec01 .sec_info p",{
    opacity:0,
    ease:"power4.out",
    duration: 1,
    y:100,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#sec01 .sec_heading",
        scroller: "body",
        ease: "power4.out",
        start: "top 80%",
    }
})
gsap.from("#sec02_img_container img",{
    y:100,
    opacity: 0,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#sec02_img_container img",
        scroller: "body",
        ease:"power4.out",
        start: "top 80%"
    }
})

gsap.from("#sec03 .sec_heading, #sec03 .sec_info p",{
    opacity:0,
    ease:"power4.out",
    duration: 1,
    y:100,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#sec03 .sec_heading",
        scroller: "body",
        ease:"power4.out",
        start: "top 80%"
    }
})

gsap.from("#sec04 .sec_heading, #sec04 .card",{
    opacity:0,
    ease:"power4.out",
    duration: 1,
    y:100,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#sec04 .sec_heading",
        scroller: "body",
        ease:"power4.out",
        start: "top 80%"
    }
})