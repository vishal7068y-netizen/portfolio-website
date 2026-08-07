const text = "Full Stack Developer | Python & Django Learner";
const typing = document.getElementById("typing");

let index = 0;

function typeText() {

    if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText,100);
    }

}

typeText();

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {

        topBtn.style.display = "none";
    }

};

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});