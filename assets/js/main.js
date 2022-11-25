var btn = document.getElementsById("question");
var i;

for (i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click", function () {

        this.classList.toggle("active");

        var answer = this.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {
            
            answer.style.display = "block";
        }
    })
}
