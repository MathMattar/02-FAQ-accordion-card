/* let btn = document.querySelector('.button');

btn.addEventListener("click", function () {

    let answer = document.querySelector('.toggle');

    answer.classList.toggle('hide');

});


console.log(btn);
console.log(answer);
 */

document.addEventListener('DOMContentLoaded', getClickedElment);

function getClickedElement() {

    document.querySelectorAll('.action').forEach(item => {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            let area = item.closest('.content-FAQ').querySelectorAll('.answer');

            justToggle(area);

        })

    })

}

function justToggle(area){
    if (area.style.display === 'none') {
        
        area.style.display = 'block';
        area.closest('.content-FAQ').classList.add('active');

    } else {

        area.style.display = 'none';
        area.closest('.content-FAQ').classList.remove('active');

    }
}