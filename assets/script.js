
//Nav functions

function openNav() {
    document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// Functions on Click!

// Random location for Herm when clicked

$("#herm").click(function () {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $("#herm"),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $div.css({
        left: Math.floor(Math.random() * widthMax),
        top: Math.floor(Math.random() * heightMax),
    });

    $(this).css({
        width: divWidth * 0.9,
        height: divHeight * 0.9,
    });
});

// Adjust score and Level after 5 clicks 

var herm = document.getElementById("herm"),
    score = 0;
    herm.onclick = function () {
    score += 1;

    counter.innerHTML = "You found him " + score + " times";
    
    switch (score) {
        case 5: alert("Ready to go to the next level?");
        level.innerHTML = "Level 2";
        break;

        case 10: alert("Is it getting harder already?");
         level.innerHTML = "Level 3";
        break;

        case 15: alert("You've reached the fourth level");
         level.innerHTML = "Level 4";
        break;

        case 20: alert("Fifth level, still hanging on?");
         level.innerHTML = "Level 5";
        break;

        case 25: alert("You have almost reached TOP level");
        level.innerHTML = "Level 6";
        break;

        case 30: alert("You have reached TOP level");
        level.innerHTML = "Level Where No Man Has Gone Before";
        break;
    }
    };   