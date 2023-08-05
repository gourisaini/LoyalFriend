var tl = gsap.timeline();

tl
    .from('#center #image', {
        opacity:0,
        x: "-100%",
        duration: 1,
    })

    .from('#center h1', {
        opacity:0,
        x: "100%",
        duration: 1,
        delay: -1,
    })
    
    .to("#greyBar",{
        scrollTrigger:{
            trigger: "#greyBar",
            scroller:"body",
            // markers: true,
            start:"top 90%",
            end:"top 60%",
            scrub:5,
        },
        maxWidth: '75%',
        duration:2
    })
    
    .to("#greenBar",{
        scrollTrigger:{
            trigger: "#greenBar",
            scroller:"body",
            // markers: true,
            start:"top 90%",
            end:"top 60%",
            scrub:5,
        },
        maxWidth: '100%',
        duration:2
    })