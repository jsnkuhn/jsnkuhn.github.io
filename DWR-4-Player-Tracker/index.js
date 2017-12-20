
function clickToToggle(a,b){
	 $(a).on("click", function() {
      $(this).toggleClass(b);
    });
}

// toggle .selected on imgs

clickToToggle("img","selected");

// special case: if select staff with harp not selected harp will auto select


// plot items scale/move animations

clickToToggle(".rbdrop","dropmove");
clickToToggle(".token","tokenmove");
clickToToggle(".staff","staffmove");
clickToToggle(".stones","stonesmove");

// rainbow animation added to background shapes

$(function(){$("#player-1 .rbdrop").on("click", function() {$("#player-1 .to-drop").toggleClass("rainbow2");});});
$(function(){$("#player-1 .staff").on("click", function() {$("#player-1 .to-staff").toggleClass("rainbow2");});});
$(function(){$("#player-2 .rbdrop").on("click", function() {$("#player-2 .to-drop").toggleClass("rainbow2");});});
$(function(){$("#player-2 .staff").on("click", function() {$("#player-2 .to-staff").toggleClass("rainbow2");});});
$(function(){$("#player-3 .rbdrop").on("click", function() {$("#player-3 .to-drop").toggleClass("rainbow2");});});
$(function(){$("#player-3 .staff").on("click", function() {$("#player-3 .to-staff").toggleClass("rainbow2");});});
$(function(){$("#player-4 .rbdrop").on("click", function() {$("#player-4 .to-drop").toggleClass("rainbow2");});});
$(function(){$("#player-4 .staff").on("click", function() {$("#player-4 .to-staff").toggleClass("rainbow2");});});

// RESETS

$(function(){
    $("#reset-all").on("click", function() {
      $("img").removeClass("selected");
      $(".staff").removeClass("staffmove");
      $(".stones").removeClass("stonesmove");
      $(".token").removeClass("tokenmove");
      $(".rbdrop").removeClass("dropmove");
      $('.to-staff, .to-drop').removeClass('rainbow2');
    });
});

$(function(){
    $("#reset-1").on("click", function() {
      $("#player-1 img").removeClass("selected");
      $("#player-1 .staff").removeClass("staffmove");
      $("#player-1 .stones").removeClass("stonesmove");
      $("#player-1 .token").removeClass("tokenmove");
      $("#player-1 .rbdrop").removeClass("dropmove");
      $('#player-1 .to-staff, #player-1 .to-drop').removeClass('rainbow2');
    });
});

$(function(){
    $("#reset-2").on("click", function() {
      $("#player-2 img").removeClass("selected");
      $("#player-2 .staff").removeClass("staffmove");
      $("#player-2 .stones").removeClass("stonesmove");
      $("#player-2 .token").removeClass("tokenmove");
      $("#player-2 .rbdrop").removeClass("dropmove");
      $('#player-2 .to-staff, #player-2 .to-drop').removeClass('rainbow2');
    });
});

$(function(){
    $("#reset-3").on("click", function() {
      $("#player-3 img").removeClass("selected");
      $("#player-3 .staff").removeClass("staffmove");
      $("#player-3 .stones").removeClass("stonesmove");
      $("#player-3 .token").removeClass("tokenmove");
      $("#player-3 .rbdrop").removeClass("dropmove");
      $('#player-3 .to-staff, #player-3 .to-drop').removeClass('rainbow2');
    });
});

$(function(){
    $("#reset-4").on("click", function() {
      $("#player-4 img").removeClass("selected");
      $("#player-4 .staff").removeClass("staffmove");
      $("#player-4 .stones").removeClass("stonesmove");
      $("#player-4 .token").removeClass("tokenmove");
      $("#player-4 .rbdrop").removeClass("dropmove");
      $('#player-4 .to-staff, #player-4 .to-drop').removeClass('rainbow2');
    });
});