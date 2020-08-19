<!-- Random Location Hermit 
            <div> 
                <img src="assets/images/hermit.png" id="hermit" style="position: fixed;" />
            </div>

                 <script>
                       window.onclick = Prep();
            
            function Prep(){
                window_Height = window.innerHeight;
                window_Width = window.innerWidth;
                
                image_Element = document.getElementById("hermit");
                image_Height = image_Element.clientHeight;
                image_Width = image_Element.clientWidth;
                
                availSpace_V = window_Height - image_Height;
                availSpace_H = window_Width - image_Width;
                
                var changeInterval = 3000; // Time has to be in miliseconds. So, 3000 is 3 seconds
                setInterval(moveImage, changeInterval);
            }

            
            function moveImage(){
                var randNum_V = Math.round(Math.random() * availSpace_V);
                var randNum_H = Math.round(Math.random() * availSpace_H);
                
                image_Element.style.top = randNum_V + "px";
                image_Element.style.left = randNum_H + "px";
            }
            </script>
            -->

            <style style="text/css">
.scroll-up {
 height: 50px;	
 overflow: hidden;
 position: relative;
 background: yellow;
 color: orange;
 border: 1px solid orange;
}
.scroll-up p {
 position: absolute;
 width: 100%;
 height: 100%;
 margin: 0;
 line-height: 50px;
 text-align: center;
 /* Starting position */
 -moz-transform:translateY(100%);
 -webkit-transform:translateY(100%);	
 transform:translateY(100%);
 /* Apply animation to this element */	
 -moz-animation: scroll-up 5s linear infinite;
 -webkit-animation: scroll-up 5s linear infinite;
 animation: scroll-up 5s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes scroll-up {
 0%   { -moz-transform: translateY(100%); }
 100% { -moz-transform: translateY(-100%); }
}
@-webkit-keyframes scroll-up {
 0%   { -webkit-transform: translateY(100%); }
 100% { -webkit-transform: translateY(-100%); }
}
@keyframes scroll-up {
 0%   { 
 -moz-transform: translateY(100%); /* Browser bug fix */
 -webkit-transform: translateY(100%); /* Browser bug fix */
 transform: translateY(100%); 		
 }
 100% { 
 -moz-transform: translateY(-100%); /* Browser bug fix */
 -webkit-transform: translateY(-100%); /* Browser bug fix */
 transform: translateY(-100%); 
 }
}
</style>

<div class="scroll-up">
<p>Scroll up... </p>
</div>

/* ------------------------------------------------------------------- Option 1 random location hermit 



div {
    float: left;
}

#hermit {
    background-image: url("../../assets/images/hermit.png");
}

#page_Wrapper {   

}



button.hermit { 
            background: url("../../assets/images/hermit.png"); 
            background-size: cover; 
            font-size: 2rem; 
            color: #c2b280;
            margin: none;
            border: none;
            outline: none;
            width: 50px;
            position: absolute;
        } 
*/



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

var herm = document.getElementById("herm"),
    score = 0;
    herm.onclick = function() {
    score += 1;
    counter.innerHTML = "You found him "+ score + "times";
};
var localStorageName = "hiddenHerm";
var highScore;

highScore = localStorage.getItem(hiddenHerm) == null ? 0:
            localStorage.getItem(hiddenHerm);

if (localStorage.getItem("hiddenHerm") == null) {
    highScore = 0;
} else {
    highScore = localStorage.getItem(hiddenHerm);
}

function() {
    hightScore = Math.max(score,hightScore);
    localStorage.setItem(hiddenHerm, highScore);

    var style = {
        font: "32px Monospace",
        fill: "#00ff00",
        align: "center"
    }
}
var text = game.add.text(
    game.width / 3, game.height / 3, "You gave up? \n You found him " + score + "times \n Your best score is" + highScore + "found", style);

    text.anchore.set(0.5);
    game.input.onDown.add(this.restartGame, this);
)