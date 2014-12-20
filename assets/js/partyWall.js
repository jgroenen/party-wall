(function () {
    
    var settings = {
        tile: {
            height: 400, // in pixels
            width: 400,  // in pixels
            image: 'tegeltje.png' // located in assets/img
        },
        wall: {
            height: 100, // in tiles
            width: 100   // in tiles
        },
        scroll: {
            speed: 500 // pixels per second
        }
    };
    
    // Setting up the theme.
    $('body').css({
        width: settings.wall.width * settings.tile.width,
        height: settings.wall.height * settings.tile.height,
        background: 'url(/assets/img/' + settings.tile.image + ') top left',
        backgroundSize: settings.tile.width + 'px ' + settings.tile.height + 'px'
    });
    
    // Go to a location.
    var cl = {x: 0, y: 0}; // current location
    var nl = {x: 10000, y: 10000}; // new location
    var dx = nl.x - cl.x;
    var dy = nl.y - cl.y;
    $('html, body').animate({
        scrollTop: nl.x,
        scrollLeft: nl.y
    }, Math.floor(Math.sqrt(dx * dx + dy * dy) * 1000 / settings.scroll.speed));
}());
