function playAudio(byteName) {
    this.byteName = byteName
    this.bytes = {
        'swbugbites' : ["sw_bugbites1.wav"],
        'swbugdies' : ["sw_bugdies1.wav", "sw_bugdies2.wav", "sw_bugdies3.wav"],
        'swbugshoots' : ["sw_bugshoots1.wav", "sw_bugshoots2.wav"],
        'swdeath' : ["sw_death1.wav", "sw_death2.wav", "sw_death3.wav"], 
        'swhurt' : ["sw_hurt1.wav", "sw_hurt2.wav", "sw_hurt3.wav", "sw_hurt4.wav", "sw_hurt5.wav"],
        'swjump' : ["sw_jump1.wav", "sw_jump2.wav", "sw_jump3.wav", "sw_jump4.wav"],
        'swplat' : ["sw_plat1.wav", "sw_plat2.wav", "sw_plat3.wav", "swplat4.wav"],
        'swStep' : ["sw_step1.wav", "sw_step2.wav", "sw_step3.wav", "sw_step4.wav", "sw_step5.wav"],
    }

    var audioFileName = this.bytes[byteName][Math.floor(Math.random() * this.bytes[byteName].length)]
    var audioFilePath = "./js/data/audio/" + audioFileName

    try {
        var audioElement = new Audio(audioFilePath);
        audioElement.preload = 'auto'; // Preload the audio
        audioElement.play();
      } catch (error) {
        console.error('Error playing audio:', error);
        // Handle the error, e.g., play a fallback audio or show an error message to the user.
      }
}