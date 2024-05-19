const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}




animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".gallery", [
    ".gallery .box1",
    ".gallery .box2",
    ".gallery .box3",
    ".gallery .box4",
    ".gallery .box5",
    ".gallery .box6",
    ".gallery .box7",
    ".gallery .box8",
    ".gallery .box9",
    ".gallery .box10",
    ".gallery .box11",
    ".gallery .box12",
    ".gallery .box13",
    ".gallery .box14",
    ".gallery .box15",
    ".gallery .box16",
    ".gallery .box17",
    ".gallery .box18",
    ".gallery .box19",
    ".gallery .box20",
    ".gallery .box21",
    ".gallery .box22",
    ".gallery .box23",
    ".gallery .box24",
    ".gallery .box25",
    ".gallery .box26",
    ".gallery .box27",
    ".gallery .box28",
    ".gallery .box29",
    ".gallery .box30",
    ".gallery .box31",
    ".gallery .box32",
    ".gallery .box33",
    ".gallery .box34",
    ".gallery .box35",
    ".gallery .box36",
    ".gallery .box37",
    ".gallery .box38",
    ".gallery .box39",
    ".gallery .box40",
    ".gallery .box41",
    ".gallery .box42",
    ".gallery .box43",
    ".gallery .box44",
    ".gallery .box45",
    ".gallery .box46",
    ".gallery .box47",
    ".gallery .box48",
    ".gallery .box49",
    ".gallery .box50",
    ".gallery .box51",
    ".gallery .box52",
    ".gallery .box53",
    ".gallery .box54",
    ".gallery .box55",
    ".gallery .box56",
    ".gallery .box57",
    ".gallery .box58",
    ".gallery .box59",
    ".gallery .box60",
    ".gallery .box61",
    ".gallery .box62",
    ".gallery .box63",
    ".gallery .box64",
    ".gallery .box65",
    ".gallery .box66",
    ".gallery .box67",
    ".gallery .box68",
    ".gallery .box69",
    ".gallery .box70",
    ".gallery .box71",
    ".gallery .box72",
    ".gallery .box73",
    ".gallery .box74",
    ".gallery .box75",
    ".gallery .box76",
    ".gallery .box77",
    ".gallery .box78",
    ".gallery .box79",
    ".gallery .box80",
    ".gallery .box81",
    ".gallery .box82",
    ".gallery .box83",
    ".gallery .box84",
    ".gallery .box85",
    ".gallery .box86",
    ".gallery .box87",
    ".gallery .box88",
    ".gallery .box89",
    ".gallery .box90",
    ".gallery .box91",
    ".gallery .box92",
    ".gallery .box93",
    ".gallery .box94",
    ".gallery .box95",
    ".gallery .box96",
    ".gallery .box97",
    ".gallery .box98",
    ".gallery .box99",
    ".gallery .box100",
    ".gallery .box101",
    ".gallery .box102",
    ".gallery .box103",
    ".gallery .box104",
    ".gallery .box105",
    ".gallery .box106",
    ".gallery .box107",
    ".gallery .box108",
    ".gallery .box109",
    ".gallery .box110",
    ".gallery .box111",
    ".gallery .box112",
    ".gallery .box113",
    ".gallery .box114",
    ".gallery .box115",
    ".gallery .box116",
    ".gallery .box117",
    ".gallery .box118",
    ".gallery .box119",
    ".gallery .box120",
    ".gallery .box121",
    ".gallery .box122",
    ".gallery .box123",
    ".gallery .box124",
    ".gallery .box125",
    ".gallery .box126",
    ".gallery .box127",
    ".gallery .box128",
    ".gallery .box129",
    ".gallery .box130",
    ".gallery .box131",
    ".gallery .box132",
    ".gallery .box133",
    ".gallery .box134",
    ".gallery .box135",
    ".gallery .box136",
    ".gallery .box137",
    ".gallery .box138",
    ".gallery .box139",
    ".gallery .box140",
    ".gallery .box141",
    ".gallery .box142",
    ".gallery .box143",
    ".gallery .box144",
    ".gallery .box145",
    ".gallery .box146",
    ".gallery .box147",
    ".gallery .box148",
    ".gallery .box149"
]);





galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])

