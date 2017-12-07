// toggle .selected on imgs

$(function(){
    $(".icon, .list, .single").on("click", function() {
      $(this).toggleClass("selected");
    });
});

// rainbow Drop animation on click

$(function(){
    $("#rbdrop").on("click", function() {
      $("#to-drop").toggleClass("rainbow2");
    });
});

$(function(){
    $("#staff").on("click", function() {
      $("#to-staff").toggleClass("rainbow2");
    });
});

$(function(){
    $("#rbdrop").on("click", function() {
      $(this).toggleClass("dropmove");
    });
});

$(function(){
    $("#token").on("click", function() {
      $(this).toggleClass("tokenmove");
    });
});

$(function(){
    $("#staff").on("click", function() {
      $(this).toggleClass("staffmove");
    });
});

$(function(){
    $("#stones").on("click", function() {
      $(this).toggleClass("stonesmove");
    });
});

// Weapon arrays--------------------------------------------

weaponTitle = [
  "Bamboo Pole: +2 AP",
  "Club: +4 AP",
  "Copper Sword: +10 AP",
  "Hand Axe: +15 AP",
  "Broad Sword: +20 AP",
  "Flame Sword: +28 AP",
  "Erdrick's Sword: +40 AP"
  ];

var weaponListPixel = [
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/bamboo_lance.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/oaken_club.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/copper_sword.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/battle_axe.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/steel_broadsword.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/fire_blade.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/weapon/erdricks_sword.png"
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
  "Erdrick's Armor: +28 DP"
];

var armorListPixel = [
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/plain_clothes.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/leather_armour.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/chain_mail.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/heavy_armour.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/full_plate_armour.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/magic_armour.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/torso/erdricks_armour.png"];

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

// Shield arrays ------------------------------------

var shieldTitle = [
  "Small Shield: +4 DP",
  "Large Shield: +10 DP",
  "Silver Shield: +20 DP"
];

var shieldListPixel = [
  "http://www.woodus.com/den/gallery/graphics/dq9ds/shield/pot_lid.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/shield/iron_shield.png",
  "http://www.woodus.com/den/gallery/graphics/dq9ds/shield/silver_shield.png"
];

// Shield array var

var shieldUrl = shieldListPixel;

// cycle through Shield array on click

var shieldCounter = shieldTitle.length - 1;

$(function () {
    $('#shield').click(function () {
      $(this).addClass("selected");
      shieldCounter = (shieldCounter + 1) % shieldTitle.length;
      $(this).attr('src', shieldUrl[shieldCounter]).attr('title', shieldTitle[shieldCounter]);
    });
});

// Reset -------------------------------------

$(function(){
    $("#button-reset").on("click", function() {
      $("img, #spell-contain li").removeClass("selected");
      $("#tracker-contain").removeClass("rainbow");
      $('#weapon').attr('src', weaponUrl[weaponTitle.length - 1]).attr('title', 'Weapon');
      $('#armor').attr('src', armorUrl[armorTitle.length - 1]).attr('title', 'Armor');
      $('#shield').attr('src', shieldUrl[shieldTitle.length - 1]).attr('title', 'Shield');
      weaponCounter = weaponTitle.length - 1;
      armorCounter = armorTitle.length - 1;
      shieldCounter = shieldTitle.length - 1;
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
    });
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
  if ($("#ball").hasClass('selected') === false){
  $('#gg-contain').removeClass('gg-hide');  
    }
});

$("#gg-contain").on("click", function() {
  $('#gg-contain').addClass('gg-hide');
});

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
