var btn = document.querySelector('.action-btn');
var answer = document.querySelectorAll('.toggle');

btn.addEventListener("click", ()=>{

    answer.forEach(el => {    
    el.addEventListener("click", function (e) {
        
        e.preventDefault ();
        

    })
    })
});





/*  var answer = document.getElementById('toggle#2');
    var answer = document.getElementById('toggle#3');
    var answer = document.getElementById('toggle#4');
    var answer = document.getElementById('toggle#5'); */


    /* classList.toggle("hide"); */