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