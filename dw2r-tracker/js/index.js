var imgEls = document.querySelectorAll('img');

imgEls.forEach( function(img){
  img.addEventListener('click', function(){
    img.classList.toggle('selected');
  })
})

var reset = document.getElementById('reset');

reset.addEventListener('click', function(){
  imgEls.forEach( function(img){
      img.classList.remove('selected');
  });
});