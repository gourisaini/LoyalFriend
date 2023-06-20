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