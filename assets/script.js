
//Nav functions

function openNav() {
    document.getElementById("myNav").style.width = "50%";
            }

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// Functions on Click!


function foundHermit(){
    document.getElementById("myBtn").innerHTML = "Found Him!";
}

function foundMessage(){
    setTimeout(function(){ alert("Are you ready for the next challenge?"); }, 2000);
}

function gone(){
  $("button.hermit").hide();
  };




var btn = document.getElementById("myBtn");

 //btn.addEventListener("click", foundHermit);
 btn.addEventListener("click", foundMessage);
 btn.addEventListener("click", gone);

$('#test').click(function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#test'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;
    
    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax ),
    });  
    $( this ).css({
        width: divWidth * 0.9,
        height: divHeight * 0.9,      
});   
});


/*

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};

 


 $(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
*/