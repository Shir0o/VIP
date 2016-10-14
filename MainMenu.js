Game.MainMenu = function (game) {
    
    this.playButton = null;
    
};

Game.MainMenu.prototype = {

    create: function() {
        
        this.bg = this.add.sprite(0, 0, 'bg');
	    //this.usualsuspectsLogo = this.add.sprite(34, 33, 'usualsuspectsLogo');
	    //this.title = this.add.sprite(34, 209, 'gameNum');
	    this.title = this.add.sprite(34, 292, 'title');

	    // Add "Click here to Play" Button
		this.playButton = this.add.button(33, 362, 'playButton', this.startGame, this, 1, 0, 1);
		this.playButton.input.useHandCursor = true;

	 	// Add gears animation
	   	this.animationMenu = this.game.add.sprite(304, 40, 'jigsawMenu_anim');
        this.animationMenu.animations.add('think');
        this.animationMenu.animations.play('think', 24, true);
        
    },
    
    update: function() {
        
        
        
    },

    startGame: function (pointer) {
        
        //this.ding.play();
    
		this.state.start('Main');
        
	}
    
};