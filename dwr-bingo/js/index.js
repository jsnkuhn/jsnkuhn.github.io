(function () {
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

var button = document.getElementById("genCard");
var theCard = document.getElementById("theCard");
var bingoSync = document.getElementById("bingosync");

var goals = [
  {"name":"Kill 5 droll type enemies"},
  {"name":"Kill any slime w/ HURTMORE"},
  {"name":"Kill any scorpion w/ HURT"},
  {"name":"Reach <br> LV 20"},
  {"name":"Grind to 50k GP"},
  {"name":"Lose 15,000+ GP in one death"},
  {"name":"Search a \"Sparkover Bridge\""},
  {"name":"Get kicked out of jerk cave"},
  {"name":"Rescue the princess"},
  {"name":"4 deaths to swamp damage"},
  {"name":"2 deaths to damage tiles"},
  {"name":"Sell Erdrick's Sword"},
  {"name":"Sell Erdrick's Sword 5 times"},
  {"name":"Sell Erdrick's Armor"},
  {"name":"Take princess to Dragonlord"},
  {"name":"Talk to<br/>Puff Puff<br/> Woman"},
  {"name":"Kill DL 2"},
  {"name":"USE Erdick's token in Battle"},
  {"name":"USE silver harp in a swamp"},
  {"name":"USE silver harp in a cave"},
  {"name":"USE silver harp at the bath in Kol"},
  {"name":"Make 10 Enemies Happy"},
  {"name":"Make a Dragon Happy"},
  {"name":"Toot your flute for an old man"},
  {"name":"Toot your flute for a soldier"},
  {"name":"Toot your flute for a merchant"},
  {"name":"Toot your flute for the Jerk"},
  {"name":"Drown the princess in a swamp 5x"},
  {"name":"Give Gwaelin a cursed belt"},
  {"name":"Stay a night in every town w/Gwaelin"},
  {"name":"Equip the Death Necklace"},
  {"name":"Sell the Death Necklace"},
  {"name":"Drop the Death Necklace"},
  {"name":"Equip the Cursed Belt"},
  {"name":"Sell the Cursed<br/>Belt"},
  {"name":"Drop the Cursed<br/>Belt"},
  {"name":"Accept DL's offer"},
  {"name":"Accept DL's offer w/ Gwaelin"},
  {"name":"Show DL Erdrick's token"},
  {"name":"Say NO to Gwaelin 15 times"},
  {"name":"Open all doors"},
  {"name":"Run from a slime"},
  {"name":"Activate infinite chest glitch"},
  {"name":"Say YES<br/>then NO<br/>to DL"},
  {"name":"Only heal at INNS"},
  {"name":"Run 5 laps around King's throne"},
  {"name":"Run 5 laps around DL's throne"},
  {"name":"Talk to all NPCs in Breconary"},
  {"name":"Talk to all NPCs in Garinham"},
  {"name":"Talk to all NPCs in Rimildar"},
  {"name":"Talk to all NPCs in<br/>Kol"},
  {"name":"Get kicked out of Tantagel Castle"},
  {"name":"Kill a dragon with a Bamboo Poll"},
  {"name":"Make an enemy cast heal 5 times"},
  {"name":"Kill all mini bosses with a Club"},
  {"name":"Kill a droll with a Club"},
  {"name":"Ring around Radish Vendor (4x)"}
  //Never use an herb
  //No healing magic(edited)
  //Never buy a shield
  //Never use an inn
  //Kill a {monster} with a {weapon}
  //Kill DL with a Hand Axe
  //something with infinite loop in Charlock Castle
  //search behind wyn's counter?
  //{"name":"Never light up a cave"},
  //{"name":"Don't buy a Dragon Scale"},
  //{"name":"Don't cast REPEL"},
];

// randomize JSON object
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var generateCard = function(){
  // Used like so
  goals = shuffle(goals);


  var goals2 = goals.slice(0, 25);

  theCard.innerHTML = '';
  bingosync.value = '';
   
  goals2.forEach(
    function(goal) {
      theCard.innerHTML += '<h4><span>' + goal.name + '</span></h4>';
  });

  var goals2JSON = JSON.stringify(goals2);
  bingosync.value = goals2JSON;
  
  var h4Els = document.querySelectorAll('h4');

  var addSelect = function(goal) {
      goal.addEventListener("click", function() {
        if(goal.className == "selected"){
          goal.className = ""
        }
        else (goal.className = "selected")
      });}

  h4Els.forEach( addSelect );
};

generateCard();
button.addEventListener("click",generateCard);

//copy bingosync code

function copy() {
  bingoSync.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);