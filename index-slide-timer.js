function myFunction(){
    var text_1_header="Neviditelné reproduktory a subwoofery";
    var text_2_header="Design and Sound";
    var text_3_header="Nepřekonatelná ostrost";
    var text_1_left="Neviditelné reproduktory";
    var text_1_right="Neviditelné subwoofery";
    var text_2_left="Designové reproduktory";
    var text_2_right="Designové doplňky a osvětlení";
    var text_3_left="Projektory JVC Kenwood";
    var text_3_right="";
        
    var x1 = document.getElementById("content-box-1");
    var x2 = document.getElementById("content-box-2");
    var x3 = document.getElementById("content-box-3");
        
    myVar = setInterval(myInt, 22000);
    vyVarPre2 = setTimeout(myTimerPre0, 0);
    function myTimerPre0 (){
    document.getElementById("cover").style.background="rgba(0,0,0,0)";
        document.getElementById("cover").style.transition="background 2s";
        document.getElementById("slider").style.backgroundImage="url(media/grafika/pics/slider_invisibass.jpg)";
        var myVarPre1 = setTimeout(myTimerPre1, 3300);

            
    }
    function myTimerPre1(){
        document.getElementById("cover").style.background="rgba(0,0,0,1)";
        document.getElementById("cover").style.transition="background 3s";
        var myVarPre2 = setTimeout(myTimerPre2, 3000);
        x1.classList.add("hidden");
            
    }
    function myTimerPre2(){
        document.getElementById("slider").style.backgroundSize="cover";
        document.getElementById("cover").style.background="rgba(0,0,0,0)";
        document.getElementById("cover").style.transition="background 3s";
        document.getElementById("slider").style.backgroundImage="url(media/grafika/pics/slider_design-sound.jpg)";
        var myVarPre3 = setTimeout(myTimerPre3, 4600);
        x1.classList.add("removed");
        x1.classList.remove("visible");
        x2.classList.remove("removed");
        x2.classList.remove("hidden");
        x2.classList.add("visible");
            
    }    
    function myTimerPre3(){
        document.getElementById("cover").style.background="rgba(0,0,0,1)";
        document.getElementById("cover").style.transition="background 3s";
        var myVarPre4 = setTimeout(myTimerPre4, 3000);
        x2.classList.remove("visible");
        x2.classList.add("hidden");

            
            
    }
    function myTimerPre4(){

        document.getElementById("slider").style.backgroundSize="cover";
        document.getElementById("cover").style.background="rgba(0,0,0,0)";
        document.getElementById("cover").style.transition="background 3s";
        document.getElementById("slider").style.backgroundImage="url(media/grafika/pics/projektory_1200px.jpg)";           
        var myVarPre5 = setTimeout(myTimerPre5, 4600);
        x2.classList.add("removed");
        x3.classList.remove("removed");
        x3.classList.remove("hidden");
        x3.classList.add("visible");
    }
    function myTimerPre5(){
        document.getElementById("cover").style.background="rgba(0,0,0,1)";
        document.getElementById("cover").style.transition="background 2s";
        x3.classList.remove("visible");
        x3.classList.add("hidden");
            
    }
}
function myInt(){
    var x1 = document.getElementById("content-box-1");
    var x2 = document.getElementById("content-box-2");
    var x3 = document.getElementById("content-box-3");
    x3.classList.add("removed");
    x1.classList.remove("removed");
    x1.classList.remove("hidden");
    var myVar0 = setTimeout(myTimer0, 0);
    function myTimer0 (){

        document.getElementById("cover").style.background="rgba(0,0,0,0)";
        document.getElementById("cover").style.transition="background 2s";
        document.getElementById("slider").style.backgroundImage="url(media/grafika/pics/slider_invisibass.jpg)";
        var myVar1 = setTimeout(myTimer1, 4200);
        x1.classList.add("visible");
            
    }
    function myTimer1(){
        document.getElementById("cover").style.background="rgba(0,0,0,1)";
        document.getElementById("cover").style.transition="background 2s";
        var myVar2 = setTimeout(myTimer2, 3000);
        x1.classList.remove("visible");
        x1.classList.add("hidden");
    }    
    function myTimer2(){

        document.getElementById("slider").style.backgroundSize="cover";
        document.getElementById("cover").style.background="rgba(0,0,0,0)";
        document.getElementById("cover").style.transition="background 2s";
        document.getElementById("slider").style.backgroundImage="url(media/grafika/pics/slider_design-sound.jpg)";
        var myVar3 = setTimeout(myTimer3, 4600);
        x1.classList.add("removed");
        x2.classList.remove("removed");
        x2.classList.remove("hidden");
        x2.classList.add("visible");
    }    
    function myTimer3(){
        document.getElementById("cover").style.background="rgba(0,0,0,1)";
        document.getElementById("cover").style.transition="background 2s";
        var myVar4 = setTimeout(myTimer4, 3000);
        x2.classList.remove("visible");
        x2.classList.add("hidden");
    }
    function myTimer4(){

        document.getElementById("slider").style.backgroundSize="cover";
        document.getElementById("cover").style.background="rgba(0,0,0,0)";
        document.getElementById("cover").style.transition="background 2s";
        document.getElementById("slider").style.backgroundImage="url(media/grafika/pics/projektory_1200px.jpg)";
        var myVar5 = setTimeout(myTimer5, 4600);
        x2.classList.add("removed");            
        x3.classList.remove("removed");
        x3.classList.remove("hidden");
        x3.classList.add("visible");
    }
    function myTimer5(){
        document.getElementById("cover").style.background="rgba(0,0,0,1)";
        document.getElementById("cover").style.transition="background 2s";
        x3.classList.add("hidden");
        x3.classList.remove("visible");
    }
}

