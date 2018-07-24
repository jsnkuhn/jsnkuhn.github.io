var imgEls = document.querySelectorAll('img');

imgEls.forEach( function(img){
  img.addEventListener('click', function(){
    img.classList.toggle('selected');
  })
})