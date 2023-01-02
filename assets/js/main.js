const activeBtn = document.getElementsByClassName("question");

for (let i = 0; i < activeBtn.length; i++) {
    activeBtn[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block"
        }
    })

}