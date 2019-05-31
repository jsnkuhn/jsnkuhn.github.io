// tabbed interface

$(document).ready(function(){
	$('#tabs .nested-pane').css('z-index','-1'); 
	$('#tabs .nested-pane:first').css('z-index','1'); 
	$('#tabs .tab-clickers li:first').addClass('active');
	$('#tabs .tab-clickers li a').click(function(){ 
		$('#tabs .tab-clickers li').removeClass('active');
		$(this).parent().addClass('active'); 
		var currentTab = $(this).attr('href'); 
		$('#tabs .nested-pane').css('z-index','-1');
		$(currentTab).css('z-index','1'); 
		return false;
		});
	});

$(document).ready(function(){
	$('#tabs-cavemaps .cave-pane').hide(); 
	$('#tabs-cavemaps .cave-pane:first').show(); 
	$('#tabs-cavemaps #tab-clickers-cavemaps li:first').addClass('active');
	$('#tabs-cavemaps #tab-clickers-cavemaps li a').click(function(){ 
		$('#tabs-cavemaps #tab-clickers-cavemaps li').removeClass('active');
		$(this).parent().addClass('active'); 
		var currentTab = $(this).attr('href'); 
		$('#tabs-cavemaps .cave-pane').hide();
		$(currentTab).show(); 
		return false;
		});
	});	

  $(document).ready(function(){
    $('#tabs-townmaps .town-pane').hide(); 
    $('#tabs-townmaps .town-pane:first').show(); 
    $('#tabs-townmaps #tab-clickers-town-maps li:first').addClass('active');
    $('#tabs-townmaps #tab-clickers-town-maps li a').click(function(){ 
      $('#tabs-townmaps #tab-clickers-town-maps li').removeClass('active');
      $(this).parent().addClass('active'); 
      var currentTab = $(this).attr('href'); 
      $('#tabs-townmaps .town-pane').hide();
      $(currentTab).show(); 
      return false;
      });
    });	

// click to toggle function

function clickToToggle(a,b){
	 $(a).on("click", function() {
      $(this).toggleClass(b);
    });
}

function clickToToggleOther(a,b,c){
	 $(a).on("click", function() {
      $(b).toggleClass(c);
    });
}	

// toggle .selected on imgs

clickToToggle(".icon, .list, .single","selected");

// background rainbow animations on click

clickToToggleOther("#rbdrop","#to-drop","rainbow2");
clickToToggleOther("#staff","#to-staff","rainbow2");

// plot items move animations on click

clickToToggle("#rbdrop","dropmove");
clickToToggle("#token","tokenmove");
clickToToggle("#staff","staffmove");
clickToToggle("#stones","stonesmove");

// Weapon arrays--------------------------------------------

weaponTitle = [
  "Bamboo Pole: +2 AP",
  "Club: +4 AP",
  "Copper Sword: +10 AP",
  "Hand Axe: +15 AP",
  "Broad Sword: +20 AP",
  "Flame Sword: +28 AP",
  "Erdrick's Sword: +40 AP",
  "Weapon"
  ];

var weaponListPixel = [
  "img/weapon/bamboo.png",
  "img/weapon/club.png",
  "img/weapon/copper.png",
  "img/weapon/axe.png",
  "img/weapon/broad.png",
  "img/weapon/flame.png",
  "img/weapon/erdricks.png",
  "img/weapon/weapon-no.png"
];

// Weapon array var

var weaponUrl = weaponListPixel;

// cycle through weapon array on click

var weaponCounter = weaponTitle.length - 1;

$(function () {
    $('#weapon').click(function () {
      $(this).addClass("selected");
      weaponCounter = (weaponCounter + 1) % weaponTitle.length;
      $(this).attr('src', weaponUrl[weaponCounter]).attr('title', weaponTitle[weaponCounter]);
    });
});

// Armor arrays--------------------------------------------

var armorTitle = [
  "Clothes: +2 DP",
  "Leather Armor: +4 DP",
  "Chain Mail: +10 DP",
  "Half Plate: +16 DP",
  "Full Plate: +24 DP",
  "Magic Armor: +24 DP",
  "Erdrick's Armor: +28 DP",
  "Armor"
];

var armorListPixel = [
  "img/armor/clothes.png",
  "img/armor/leather.png",
  "img/armor/chain.png",
  "img/armor/half.png",
  "img/armor/full.png",
  "img/armor/magic.png",
  "img/armor/erdricks.png",
  "img/armor/armor-no.png"
];

// Armor array var

var armorUrl = armorListPixel;

// cycle through Armor array on click

var armorCounter = armorTitle.length - 1;

$(function () {
    $('#armor').click(function () {
      $(this).addClass("selected");
      armorCounter = (armorCounter + 1) % armorTitle.length;
      $(this).attr('src', armorUrl[armorCounter]).attr('title', armorTitle[armorCounter]);
    });
});

// Shield ------------------------------------

var shieldImgs = document.querySelectorAll('#shields img');
var shieldCounter = 0;

shieldImgs.forEach( function(el){
  el.style.display = "none";
});

shieldImgs[0].style.display = "inline";

shieldImgs.forEach( function(el){
  el.addEventListener("click", function() {
    shieldImgs.forEach( function(el){
      el.style.display = "none";
    });
    shieldCounter = (shieldCounter + 1) % shieldImgs.length;
    shieldImgs[shieldCounter].style.display = "inline";
    });
});

// Reset -------------------------------------

$(function(){
    $("#button-reset").on("click", function() {
      $("img, .single").removeClass("selected");
      $("#tracker-contain").removeClass("rainbow");
      $('#weapon').attr('src', weaponUrl[weaponTitle.length - 1]).attr('title', 'Weapon');
      $('#armor').attr('src', armorUrl[armorTitle.length - 1]).attr('title', 'Armor');
      weaponCounter = weaponTitle.length - 1;
      armorCounter = armorTitle.length - 1;
      shieldCounter = 0;
      shieldImgs.forEach( function(el){el.style.display = "none";});
      shieldImgs[0].style.display = "inline";
      $('#healmore, #hurtmore').removeClass().addClass('more-spell filter')
      healmoreCounter = classes.length - 1;
      hurtmoreCounter = classes.length - 1;
      $("#staff").removeClass("staffmove");
      $("#stones").removeClass("stonesmove");
      $("#token").removeClass("tokenmove");
      $("#rbdrop").removeClass("dropmove");
      $('#to-staff, #to-drop').removeClass('rainbow2');
      $('#gg-contain').addClass('gg-hide');
			$('#n,#s,#w,#e').prop('checked', false);
			$('#ns-number,#we-number').val('50');
			$('#ns-counter,#we-counter').val('0');
			$('#ns-number,#we-number,#ns-counter,#we-counter').css('backgroundColor','#000');
    });
});

// Change coordinate input background color when correct steps value is selected

$('#ns-number,#ns-counter').on("change", function () {
	if ( $('#ns-number').val() === $('#ns-counter').val() )
		{$('#ns-number, #ns-counter').css('backgroundColor','#2038ec')}
	else
		($('#ns-number, #ns-counter').css('backgroundColor','#000'))
});

$('#we-number,#we-counter').on("change", function () {
	if ( $('#we-number').val() === $('#we-counter').val() )
		{$('#we-number, #we-counter').css('backgroundColor','#737373')}
	else
		($('#we-number, #we-counter').css('backgroundColor','#000'))
});

// Change sprite set--------------------------------------------

var itemEls = document.getElementsByClassName('items');

// the -more spells ------------------------------------------------

var classes = ['half-filter','no-filter','filter'];
var healmoreCounter = classes.length - 1;
var hurtmoreCounter = classes.length - 1;

$('#healmore').click(function () {
  healmoreCounter = (healmoreCounter + 1) % classes.length;
  this.className = ("more-spell " + classes[healmoreCounter]);
});

$('#hurtmore').click(function () {
  hurtmoreCounter = (hurtmoreCounter + 1) % classes.length;
  this.className = ("more-spell " + classes[hurtmoreCounter]);
});

// Show/hide GG -------------------------

$("#ball").on("click", function() {
  if ($("#ball").hasClass('selected') === true){
  $('#gg-contain').removeClass('gg-hide');  
    }
});

$("#gg-contain").on("click", function() {
  $('#gg-contain').addClass('gg-hide');
});


// stats tabs

$('#coordinates_tab, #lvexp_tab, #dl_tab').on("change", function () {
	
  $('#coordinates, #lvexp, #dl').addClass('hide')

  if($('#coordinates_tab').prop('checked') === true)
    {$('#coordinates').removeClass('hide')}
  else if($('#lvexp_tab').prop('checked') === true)
    {$('#lvexp').removeClass('hide')}
  else if($('#dl_tab').prop('checked') === true)
    {$('#dl').removeClass('hide')}

});

// make borders around chests highlight when all chests are selected

if($('#chest-contain div div img').length === $('#chest-contain div div img').hasClass('selected').length){
		$(this).parent().css('border-color','#fff')
}

/*
// get color value

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.select();
}

// change tracker background color

function updateFirst(event) {
  var p = document.getElementById("tracker-contain");

  if (p) {
    p.style.backgroundColor = event.target.value;
  }
}
*/
