Game.MainMenu = function (game) {
    
    
    
};

Game.MainMenu.prototype = {
    
    startGame: function (pointer) {
        
        this.ding.play();
    
		this.state.start('Main');
        
	}
    
};