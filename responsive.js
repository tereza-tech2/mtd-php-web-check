function loadOn(){
    //var metaa = document.getElementsByTagName("META")[1].content;
    //document.getElementById("pagename").innerHTML=metaa;
    //function reload(){location.reload(true)};
    //$("#pagename").html($("meta")[1].getAttribute("content"));
    var a = window.innerWidth;

    if (a<700){
        $("#ix-header").load("ix-header-small.html");
    }else{
        $("#ix-header").load("ix-header.html");
    }
    if (a<700){
        $("#ix-footer").load("ix-footer-small.html");
    } else {
        $("#ix-footer").load("ix-footer.html");
    }
    if (a<900){
        $("#header").load("header-underline-menu.html");
    } else {
        $("#header").load("header.html"); 
    }
    if (a > 799){
       $("#side").load("side.html"); 
       $("#side-dvid").removeClass("side-off");
       $("#side-dvid").addClass("side-on");
    } else{
       $("#side").load("side-small.php");
       $("#side-dvid").removeClass("side-on");
       $("#side-dvid").addClass("side-off");
       $("#pos-tog").addClass("def");

       
    }    
}

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
    if (toString(window.location).indexOf("index") > 0) {
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
          } else {
            document.getElementById("myBtn").style.display = "none";
          }
        }
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
    }
 }

function respOn(){
       var a = window.innerWidth;
       if (a<700){
          $("#ix-header").load("ix-header-small.html");
       }else{
          $("#ix-header").load("ix-header.html");
       }
       if (a<900){
           $("#ix-footer").load("ix-footer-small.html");
       } else {
           $("#ix-footer").load("ix-footer.html");
       }
       if (a<900){
           $("#header").load("header-underline-menu.html");
       } else {
          $("#header").load("header.html"); 
       }
    
       if (a > 799){
          $("#side").load("side.html"); 
          $("#side-dvid").removeClass("side-off");
          $("#side-dvid").addClass("side-on");
       } else{
          $("#side").load("side-small.php");
          $("#side-dvid").removeClass("side-on");
          $("#side-dvid").addClass("side-off");
          $("#pos-tog").addClass("def");     
       }
}

/*function getName(){
    var metaa = document.getElementsByTagName("META")[1].content; alert(document.getElementById("pagenamecrumb").innerHTML)
    document.getElementById("pagenamecrumb").innerHTML=metaa;
    var $gN = $("#pagename");
    var $gcN = $("#pagenamecrumb");
    var $tN = $("#this_page").text();
    $gN.html("ok");
    $gcN.text($tN);

}*/
function mapDown(){
    var bb = window.innerWidth;
    var bv = document.getElementById("map-grid");
    if (bb<800) {
        bv.style.display = "grid";
        bv.style.gridTemplateColumns = "100%";
    } else {
        bv.style.display = "grid";
        bv.style.gridTemplateColumns = "27% 73%";
    }
}

function winWidth(){
    var ab = window.innerWidth;
    var w = document.getElementById("computed-body");
    w.style.display="grid";
    if (ab>1199){w.style.gridTemplateColumns = "25% 25% 25% 25%";
    } else if(ab<1200&&ab>999){w.style.gridTemplateColumns = "33% 33% 33%";
    } else if (ab<1000&&ab>550) {w.style.gridTemplateColumns = "50% 50%";
    } else {w.style.gridTemplateColumns = "100%";
    }        
}

function setWidth(){
        
    var x = window.innerWidth;    
    if(x<1400&&x>900){
        var v = document.getElementById("that").childElementCount;
        for(var i=0; i<v; i++){
            var w = document.getElementsByClassName("my-class");
            var z = w[i];
            z.style.width="45%";
            z.style.height="520px";
            z.children[0].style.height="520px";
        }
    }else if(x<1900&&x>1400){
        var v = document.getElementById("that").childElementCount;
        for(var i=0; i<v; i++){
            var w = document.getElementsByClassName("my-class");
            var z = w[i];
            z.style.width="28%";
            z.style.height="440px";
            z.children[0].style.height="440px";
        }
     } else if(x<900){
        var v = document.getElementById("that").childElementCount;
        for(var i=0; i<v; i++){
            var w = document.getElementsByClassName("my-class");
            var z = w[i];
            z.style.width="96%";
            z.style.height="690px";
            z.children[0].style.height="690px";
        }
    } else if(x>2200){
        var v = document.getElementById("that").childElementCount;
        for(var i=0; i<v; i++){
            var w = document.getElementsByClassName("my-class");
            var z = w[i];
            z.style.width="20%";
            z.style.height="600px";
            z.children[0].style.height="690px";
        }
    }else{}
}

function rotateGlr(x) {
    var bigA = x.getAttribute('src');
    var toSmall = document.getElementsByClassName('product-image')[0].getAttribute('src');
    $('.leftsider').append( '<img class="other-images" onclick="rotateGlr(this)" src="'+ toSmall +'">' );
    document.getElementsByClassName('product-image')[0].setAttribute("src", bigA);
    x.remove();
}