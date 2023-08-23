var swbugbites = new Array ["sw_bugbites1.wav"];
var swbugdies = new Array ["sw_bugdies1.wav", "sw_bugdies2.wav", "sw_bugdies3.wav"];
var swbugshoots = new Array ["sw_bugshoots1.wav", "sw_bugshoots2.wav"];
var swdeath = new Array ["sw_death1.wav", "sw_death2.wav", "sw_death3.wav"];
var swhurt = new Array ["sw_hurt1.wav", "sw_hurt2.wav", "sw_hurt3.wav", "sw_hurt4.wav", "sw_hurt5.wav", "sw_hurt6.wav"];
var swjump = new Array ["sw_jump1.wav", "sw_jump2.wav", "sw_jump3.wav", "sw_jump4.wav"];
var swplat = new Array ["sw_plat1.wav", "sw_plat2.wav", "sw_plat3.wav", "swplat4.wav"];
var swdeath = new Array ["sw_step1.wav", "sw_step2.wav", "sw_step3.wav", "sw_step4.wav", "sw_step5.wav"];
//
function playAudio(byteName) {
    var audioElement = new Audio("SorinJSGame/js/data/audio"+byteName[Math.floor(Math.random()*byteName.length)])
    audioElement.play();
}
