
function clickToToggle(a,b){
	 $(a).on("click", function() {
      $(this).toggleClass(b);
    });
}

// toggle .selected on imgs

clickToToggle("img","selected");

// special case: if select staff with harp not selected harp will auto select

$(function(){
	 $('.staff').on("click", function() {
		 $(this).siblings(".harp").addClass('selected');
    });
});

$(function(){
	 $('.harp').on("click", function() {
      if ($(this).siblings(".staff").hasClass('selected')){
				$(this).siblings(".staff").removeClass('selected staffmove')
				$(this).parent().siblings(".background-lines").children('svg').children('.to-staff').removeClass('rainbow2')
			}
    });
});


// special case: if select rbdrop with harp, staff, stones, token not selected harp will auto select

//$(function(){
//	 $('#player-4 .rbdrop').on("click", function() {
//      if (!$('#player-4 .harp, #player-4 .staff, #player-4 .stones, #player-4 .token').hasClass('selected')){
//				$('#player-4 .harp, #player-4 .staff, #player-4 .stones, #player-4 .token').addClass('selected')
//				$('#player-4 .to-staff').addClass('rainbow2')
//			}
//   });
//});

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

// GG animation triggers

$("#player-1 .ball").on("click", function() {
  if ($(this).hasClass('selected') === true){
  $('#player-1 .gg-contain').removeClass('gg-hide');  
    }
});

$("#player-1 .gg-contain").on("click", function() {
  $(this).addClass('gg-hide');
});

$("#player-2 .ball").on("click", function() {
  if ($(this).hasClass('selected') === true){
  $('#player-2 .gg-contain').removeClass('gg-hide');  
    }
});

$("#player-2 .gg-contain").on("click", function() {
  $(this).addClass('gg-hide');
});

$("#player-3 .ball").on("click", function() {
  if ($(this).hasClass('selected') === true){
  $('#player-3 .gg-contain').removeClass('gg-hide');  
    }
});

$("#player-3 .gg-contain").on("click", function() {
  $(this).addClass('gg-hide');
});

$("#player-4 .ball").on("click", function() {
  if ($(this).hasClass('selected') === true){
  $('#player-4 .gg-contain').removeClass('gg-hide');  
    }
});

$("#player-4 .gg-contain").on("click", function() {
  $(this).addClass('gg-hide');
});

// RESETS

$(function(){
  $("#reset-all").on("click", function() {
    $("*").removeClass("selected staffmove stonesmove tokenmove dropmove rainbow2");
		$('.gg-contain').addClass('gg-hide');
  });
});

$(function(){
    $("#reset-1").on("click", function() {
      $("#player-1 *").removeClass("selected staffmove stonesmove tokenmove dropmove rainbow2");
			$('#player-1 .gg-contain').addClass('gg-hide');
    });
});

$(function(){
    $("#reset-2").on("click", function() {
      $("#player-2 *").removeClass("selected staffmove stonesmove tokenmove dropmove rainbow2");
			$('#player-2 .gg-contain').addClass('gg-hide');
    });
});

$(function(){
    $("#reset-3").on("click", function() {
      $("#player-3 *").removeClass("selected staffmove stonesmove tokenmove dropmove rainbow2");
			$('#player-3 .gg-contain').addClass('gg-hide');
    });
});

$(function(){
    $("#reset-4").on("click", function() {
      $("#player-4 *").removeClass("selected staffmove stonesmove tokenmove dropmove rainbow2");
			$('#player-4 .gg-contain').addClass('gg-hide');
    });
});

// add weapon, armor and shield icons

function clearExtraItems(){
	$(".icons-items").removeClass("icons-items-right");
	$(".weapon-right, .armor-right, .shield-right, .weapon-bottom, .armor-bottom, .shield-bottom").addClass("hide");
};


//if($('#coordinates-tab').prop('checked') === true)
//	{$('#coordinates').removeClass('hide')}
//else if($('#lvexp-tab').prop('checked') === true)
//	{$('#lvexp').removeClass('hide')}
//else if($('#dl-tab').prop('checked') === true)
//	{$('#dl').removeClass('hide')}

$(function(){
    $('input[type="radio"]').on("change", function() {
			clearExtraItems();
      if ($(this).val === ("none")){
			$(".icons-items").addClass("icons-items-plus")
			$(".weapon-right, .armor-right, .shield-right").removeClass("hide")}
    });
});
console.log($('input').val)

$(function(){
    $("#border").on("click", function() {
      $(".icons-items").toggleClass("bordered");
    });
});