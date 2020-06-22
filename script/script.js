// show to top button
const btn = document.getElementById("to-top");
window.onscroll = function() {showToTop()};
function showToTop() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

//pricelist
const tabGelTehnik = document.getElementById("gel-tehnika");
const tabNailArt = document.getElementById("nail-art");
const tabManikura = document.getElementById("manikura");
const tabPedikura = document.getElementById("pedikura");
const buttonGelTehnika = document.getElementById("gel-tehnika-tab");
const buttonNailArt = document.getElementById("nail-art-tab");
const buttonManikura = document.getElementById("manikura-tab");
const buttonPedikura = document.getElementById("pedikura-tab");
const showPricelistGelTehnika = () => {
    if(tabGelTehnik.style.display === "flex") {
        tabGelTehnik.style.display = "flex";
    } else {
        tabGelTehnik.style.display = "flex";
        tabNailArt.style.display = "none";
        tabManikura.style.display = "none";
        tabPedikura.style.display = "none";
    }
    addRemoveClass();
}
const showPricelistNailArt = () => {
    if(tabNailArt.style.display === "flex") {
        tabNailArt.style.display = "flex";
    } else {
        tabGelTehnik.style.display = "none";
        tabNailArt.style.display = "flex";
        tabManikura.style.display = "none";
        tabPedikura.style.display = "none";
    }
    addRemoveClass();
}
const showPricelistManikura = () => {
    if(tabManikura.style.display === "flex") {
        tabManikura.style.display = "flex";
    } else {
        tabGelTehnik.style.display = "none";
        tabNailArt.style.display = "none";
        tabManikura.style.display = "flex";
        tabPedikura.style.display = "none";
    }
    addRemoveClass();
}
const showPricelistPedikura = () => {
    if(tabPedikura.style.display === "flex") {
        tabPedikura.style.display = "flex";
    } else {
        tabGelTehnik.style.display = "none";
        tabNailArt.style.display = "none";
        tabManikura.style.display = "none";
        tabPedikura.style.display = "flex";
    }
    addRemoveClass();
}
buttonGelTehnika.addEventListener('click', showPricelistGelTehnika);
buttonNailArt.addEventListener('click', showPricelistNailArt);
buttonManikura.addEventListener('click', showPricelistManikura);
buttonPedikura.addEventListener('click', showPricelistPedikura);

const addRemoveClass = () => {
    if (tabGelTehnik.style.display === "flex") {
        buttonPedikura.classList.add("ctht-inactive");
        buttonGelTehnika.classList.add("ctht-active");
        buttonManikura.classList.add("ctht-inactive");
        buttonNailArt.classList.add("ctht-inactive");
        buttonPedikura.classList.remove("ctht-active");
        buttonGelTehnika.classList.remove("ctht-inactive");
        buttonManikura.classList.remove("ctht-active");
        buttonNailArt.classList.remove("ctht-active");
    };
    if (tabNailArt.style.display === "flex") {
        buttonPedikura.classList.add("ctht-inactive");
        buttonGelTehnika.classList.add("ctht-inactive");
        buttonManikura.classList.add("ctht-inactive");
        buttonNailArt.classList.add("ctht-active");
        buttonPedikura.classList.remove("ctht-active");
        buttonGelTehnika.classList.remove("ctht-active");
        buttonManikura.classList.remove("ctht-active");
        buttonNailArt.classList.remove("ctht-inactive");
    };
    if (tabManikura.style.display === "flex") {
        buttonPedikura.classList.add("ctht-inactive");
        buttonGelTehnika.classList.add("ctht-inactive");
        buttonManikura.classList.add("ctht-active");
        buttonNailArt.classList.add("ctht-inactive");
        buttonPedikura.classList.remove("ctht-active");
        buttonGelTehnika.classList.remove("ctht-active");
        buttonManikura.classList.remove("ctht-inactive");
        buttonNailArt.classList.remove("ctht-active");
    };
    if (tabPedikura.style.display === "flex") {
        buttonPedikura.classList.add("ctht-active");
        buttonGelTehnika.classList.add("ctht-inactive");
        buttonManikura.classList.add("ctht-inactive");
        buttonNailArt.classList.add("ctht-inactive");
        buttonPedikura.classList.remove("ctht-inactive");
        buttonGelTehnika.classList.remove("ctht-active");
        buttonManikura.classList.remove("ctht-active");
        buttonNailArt.classList.remove("ctht-active");
    };

}
//reviews
const listQuotes = [
    {
        quote: "Imam vrlo zahtjevna stopala, često mi je potrebna pedikura, ali otkad idem kod Dijane, period između pedikura se produžio, a problema sa stopalima je sve manje.", 
        author: "Ana K."
    },
    {
        quote: "Budući da imam dijabetes, moram puno više voditi brigu o svojim stopalima. Otkad Dijana vodi brigu o njima, ja sam neopterećena.",
        author: "Ivana M."
    },
    {
        quote: 'Od djetinjstva sam imala probleme s uraslim noktima na palčevima.  Konačno su ih rješile "špangice" koje mi je Dijana stavila na nokte. Isti trenutak bol je nestala, a nokti su s vremenom dobili pravilan oblik i prestali urastati.',
        author: "Karmen B."
    }
];

let currentQuote = 0;
let progress = setInterval(timerProgress, 15);
let progressWidth = 0;
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const previus = document.getElementById("recenzija-left");
const next = document.getElementById("recenzija-right");


function timerProgress(){
    document.getElementById("progress-bar").style.width = progressWidth + "%";
    if(progressWidth < 100) {
        progressWidth += 0.1;
    } else {
        changeQuote();
        progressWidth = 0;
    }
}
    
function setQuote() {
    quote.innerHTML = `"${listQuotes[currentQuote].quote}"`;
    quoteAuthor.innerHTML = `- ${listQuotes[currentQuote].author}`;
}
function changeQuote() {
    if(currentQuote < listQuotes.length - 1){
        currentQuote++;
    } else {
        currentQuote = 0;
    }
    setQuote();
}

previus.addEventListener('click', previusQuote);
next.addEventListener('click', nextQuote);

function previusQuote() {
    if(currentQuote > 0){
        currentQuote--;
    } else {
        currentQuote = listQuotes.length -1;
    }
    setQuote();
    progressWidth = 0;
}
function nextQuote() {
    changeQuote();
    progressWidth = 0;
}
setQuote();