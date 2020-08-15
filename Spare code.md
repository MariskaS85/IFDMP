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