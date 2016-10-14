var Game = {};

Game.Boot = function (game){
    
    
    
};

Game.Boot.prototype = {
    
    preload: function() {
    
        this.load.image('preloaderBackground', 'assets/images/preloader_background.png');
        this.load.image('preloaderBar', 'assets/images/preloader_bar.png');
        //this.load.image('usualsuspectsLogo', 'assets/images/usualsuspects_logo.png');
        this.load.image('bg', 'assets/images/bg.png');
    
    },
    
    create: function() {
        
        this.state.start('Preloader');
        
    }
    
};