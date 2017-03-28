var advanced_configuration = {
    expand_transition_timing: "linear", //could be ease, ease-in, ease-out, etc
    expand_delay: "0s",  //how long until the star starts to expand
    rotation_transition_timing: "linear",  //could be ease, ease-in, ease-out, etc
    rotation_angle: "360deg", //up to how much to rotate to
    rotation_duration: "1s", //how long the rotation will take place
    rotation_delay: "0s", //how long until rotation starts
    fade_transition_timing: "linear", //could be ease, ease-in, ease-out, etc
    z_index: 0 //the stars are absolutely positioned, so you can give them a z-index of whatever you wish
};

//the star object with its position
function Star(width, height, config) {
    //the offsets are required so that when a user specifies a coverage, the coverage is based around the center of the div, and not the top left
    leftOffset = Math.round((width - width * config.coverage) / 2);
    topOffset = (height - Math.round(height * config.coverage)) / 2;
    this.xposition = Math.floor(Math.random() * width * config.coverage) + leftOffset;
    this.yposition = Math.floor(Math.random() * height * config.coverage) + topOffset;
}

//the star CSS properties
Star.prototype.create = function (parent_element, id, config) {
    //The container is there so that when the stars expand they exapand around the center
    var star = $('<div></div>');
    var star_container = $('<div id=\"starlight-star' + id + '\"></div>');
    // star_container.attr("id","star"+id);
    star_container.append(star);

    //so the star stays centered as its container expands
    star.css({
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "100%",
        height: "100%"
    });

    //the initial CSS properties of the star, including color, position, and size
    star_container.css({
        width: config.initial_size,
        height: config.initial_size,
        position: 'absolute',
        top: this.yposition,
        left: this.xposition,
        "z-index": advanced_configuration.z_index
    });

    //sets transition css properties of the star
    setTimeout(function () {

        star.css({
            opacity: 0
        });

        var transition = "opacity " + config.fade_duration + " " + advanced_configuration.fade_transition_timing + " " + config.fade_delay;

        //removes the element from the dom after it fades out
        setTimeout(function () {
            $("#starlight-star" + id).remove();
        }, css_time_to_milliseconds(config.fade_duration) + css_time_to_milliseconds(config.fade_delay));

        star.css({
            transition: transition
        });

    }, 10);

    //sets shape and color of the star
    star.css('border-radius', '50%');
    star.css('background-color', config.colors[Math.floor(Math.random() * config.colors.length)]); //picks one of the colors
    parent_element.append(star_container);
};


//Handles the actual creation of the stars based on the frequency and density as defined by the user
function init_starlight(config) {
    config = config || {};

    //put your custom configuration settings here
    var user_configuration = {
        shape: "circle", //could be "circle" or "square"
        initial_sizes: "12px", //initial size of the stars
        final_sizes: "32px", //final size of the stars after expansion
        expand_speed: "2s", //how fast the stars get bigger, in milliseconds
        fade_delay: "2s", //how long until the star fades out
        fade_duration: "1s", //how long the star fades for
        colors: ["#ffe860"], //The variety of colors of the stars. Can be any CSS complient color (eg. HEX, rgba, hsl)
        frequency: 300, //how often a new wave of stars pop-out (in milliseconds. Bigger==longer)
        density: 1,//how many stars pop out per wave
        keep_lit: false, //whether the stars disappear after they are created
        rotation: false, //whether the stars rotate through out their expansion
        coverage: 0.9, //how much of the element's area the stars will show up in (0-1)
        target_class: '', //the elements the script will target based on the class name
        custom_svg: "" //if you want to use a custom svg with a shape of a star instead (not supported yet)
    };

    for (var key in config){
        if (config.hasOwnProperty(key)){
            user_configuration[key] = config[key];
        }
    }

    var id = 0;
    //traverses all of the elements with a class of 'starlight'
    $(user_configuration.target_class).each(function (index) {
        var currentElement = $(this);
        var width = currentElement.width();
        var height = currentElement.height();
        setInterval(function () { //creates the stars based on the frequency and desired density
            for (var i = 0; i < user_configuration.density; i++) {
                if (Math.floor(Math.random() * 5) == 1){
                    var newStar = new Star(width, height, user_configuration);
                    newStar.create(currentElement, id, user_configuration);
                    newStar = null; //just in case so the garbage collector clears this value up
                }
                id++;
            }
        }, user_configuration.frequency);
    });
}

$(function(){
    init_starlight({
        target_class: '.starlight-front',
        initial_size: '30px',
        final_size: '30px'
    });
    init_starlight({
        target_class: '.starlight-mid',
        initial_size: '24px',
        final_size: '24px'
    });
    init_starlight({
        target_class: '.starlight-back',
        initial_size: '18px',
        final_size: '18px'
    });
    init_starlight({
        target_class: '.starlight-more-back',
        initial_size: '12px',
        final_size: '12px'
    });
    init_starlight({
        target_class: '.starlight-super-back',
        initial_size: '6px',
        final_size: '6px'
    });
});

//retrieved from https://gist.github.com/jakebellacera/9261266
function css_time_to_milliseconds(time_string) {
    var num = parseFloat(time_string, 10),
        unit = time_string.match(/m?s/),
        milliseconds;

    if (unit) {
        unit = unit[0];
    }

    switch (unit) {
        case "s": // seconds
            milliseconds = num * 1000;
            break;
        case "ms": // milliseconds
            milliseconds = num;
            break;
        default:
            milliseconds = 0;
            break;
    }

    return milliseconds;
}

$(function(){
    $('#scene').parallax({
        scalarX: 25,
        scalarY: 25
    })
});
