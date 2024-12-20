var wrapper = document.querySelectorAll('.wrapper10');
var btn = document.querySelector('.btn10');
var currentImg = 3
btn.addEventListener('click',
    function() {
       for (var i = currentImg;
        i < currentImg + 3; i++) {
            if (wrapper[i]) {
             wrapper[i].style.display = "block"
            }
        }
    currentImg += 3;
    if(currentImg>=wrapper.length){
        event.target.style.display = "none"
    }
 });


 