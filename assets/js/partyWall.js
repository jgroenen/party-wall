(function () {
    
    var settings = {
            tile: {
                height: 400, // in pixels
                width: 400,  // in pixels
                image: 'tegeltje_400.png' // located in assets/img
            },
            wall: {
                height: 100, // in tiles
                width: 100   // in tiles
            },
            scroll: {
                speed: 500 // pixels per second
            },
            display: {
                time: 5000 // in miliseconds
            }
        },
        cl = {x: 0, y: 0}; // current location in pixels
    
    // Setting up the theme.
    //FIXME need to set some themes here
    $('body').css({
        width: settings.wall.width * settings.tile.width,
        height: settings.wall.height * settings.tile.height,
        background: 'url(/assets/img/' + settings.tile.image + ') top left',
        backgroundSize: settings.tile.width + 'px ' + settings.tile.height + 'px'
    });
    
    /**
     * Animates moving from the current location to the next location.
     */
    function animateToNextLocation(nl) {
        console.log('animating to location', nl);
        var dx = nl.x - cl.x;
        var dy = nl.y - cl.y;
        $('body').animate(
            {
                scrollTop: nl.x,
                scrollLeft: nl.y
            },
            Math.floor(
                Math.sqrt(dx * dx + dy * dy) * 1000 /
                settings.scroll.speed
            ),
            function () {
                setTimeout(goToNextLocation, settings.display.time);
            }
        );
        cl = nl;
    }
    
    /**
     * Chooses the next location.
     */
    function getNextLocation() {
        var nl;
        do {
            //FIXME choose from content locations
            //FIXME center on content location
            nl = {
                x: Math.floor(Math.random() * settings.wall.width) * settings.tile.width,
                y: Math.floor(Math.random() * settings.wall.height) * settings.tile.height
            };
        } while (cl.x === nl.x || cl.y === nl.y); // Straight lines are boring.
        return nl;
    }
    
    /**
     * Chooses the next location and animates moving there.
     */
    function goToNextLocation() {
        animateToNextLocation(getNextLocation());
    }
    
    // Start!
    goToNextLocation();
}());
