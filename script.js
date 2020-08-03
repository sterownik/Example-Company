var arrow = document.querySelector("nav.left img.left__arrow");
var navleft = document.querySelector("nav.left");
var divleft = document.querySelector("div.left__submenuleft");
var par = document.querySelector("section.header-slider div.header-slider__typingdiv p");
var sectionaskspan = document.querySelector("article.contact-artc div.contact-artc__contentcontact div.contact-artc__contactmedia div.contact-artc__asksmedia div.prez span.checkmarkfirst");
var sectionaskspansecond = document.querySelector("article.contact-artc div.contact-artc__contentcontact div.contact-artc__contactmedia div.contact-artc__asksmedia div.prez span.checkmarksecond");
var sectionaskinputfirst = document.querySelector("article.contact-artc div.contact-artc__contentcontact div.contact-artc__contactmedia div.contact-artc__asksmedia div.prez input.checkfirst");
var sectionaskinputsecond = document.querySelector("article.contact-artc div.contact-artc__contentcontact div.contact-artc__contactmedia div.contact-artc__asksmedia div.prez input.checksecond");
var allwithxl = document.querySelectorAll(".col-xl-7");
var firstfooter = document.querySelector("footer.contact-artc__firstfooter");
var inputcontent = document.querySelector("input.matter");
var spanshow = document.querySelector("span.placeholdermatter");
var navp = document.querySelector("nav.left p");
var loupe = document.querySelector("nav.top img");
var inputt = document.querySelector("nav.top input");
var flaginputfirst = true;
var flaginputsecond = true;



if ($(window).width() < 1400) {
    par.textContent = "Newsletter?";
    allwithxl.forEach(item => {

        item.classList.remove("col-xl-7");
        item.classList.add("col-xl-10");
    })
} else {
    allwithxl.forEach(item => {
        item.classList.remove("col-xl-10");
        item.classList.add("col-xl-7");

    })
    par.textContent = "Chcesz otrzymywać od nas Newsletter?";
}





$(window).resize(function () { //TODO: kiedy resize
    if ($(window).width() < 1400) {
        par.textContent = "Newsletter?";

        allwithxl.forEach(item => {
            item.classList.remove("col-xl-7");
            item.classList.add("col-xl-10");
        })

    } else {

        par.textContent = "Chcesz otrzymywać od nas Newsletter?";
        allwithxl.forEach(item => {
            item.classList.remove("col-xl-10");
            item.classList.add("col-xl-7");

        })


    }
});


// nacisniecie strzalki w lewej nawigacji toggle
arrow.addEventListener("click", function () {

    navleft.classList.toggle("hide");

    divleft.classList.toggle("hide");

    arrow.classList.toggle("rotate");

})


sectionaskspan.addEventListener("click", function () {
    if (flaginputfirst) {
        sectionaskinputfirst.checked = true;
        flaginputfirst = false;
    } else {
        sectionaskinputfirst.checked = false;
        flaginputfirst = true;
    }
})
sectionaskspansecond.addEventListener("click", function () {
    if (flaginputsecond) {
        sectionaskinputsecond.checked = true;
        flaginputsecond = false;
    } else {
        sectionaskinputsecond.checked = false;
        flaginputsecond = true;
    }
})



firstfooter.addEventListener("click", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");

})








inputcontent.addEventListener("input", function () {
    if (this.value != '') {
        spanshow.style.display = "none";
    } else {
        spanshow.style.display = "block";
    }
})

loupe.addEventListener("click", function () {
    // pokazanie lub chwanie inputa po nacisnieciu na logo lupki
    inputt.classList.toggle("hide");

});