function clickToToggle(a,b){
	 $(a).on("click", function() {
      $(this).toggleClass(b);
    });
}

clickToToggle("span","selected");

$(function(){
    $("#button-reset").on("click", function() {
      $("span").removeClass("selected");
    });
});


// if 1 img in each row hasClass("selected") -> party