function clickToToggle(a,b){
	 $(a).on("click", function() {
      $(this).toggleClass(b);
    });
}

clickToToggle("img","selected");

$(function(){
    $("#button-reset").on("click", function() {
      $("img").removeClass("selected");
    });
});


// if 1 img in each row hasClass("selected") -> party