function loadOn(){
    document.getElementByI(function(){
        var a = window.innerWidth;
        if (a<1300){
            document.getElementByI("#ix-header").load("ix-header-small.html");
        }else{
            document.getElementByI("#ix-header").load("ix-header.html")       
        }
        if (a<2400){
            document.getElementByI("#ix-footer").load("ix-footer-small.html");
        } else {
            document.getElementByI("#ix-footer").load("ix-footer.html");
        }
        if (a<900){
            document.getElementByI("#header").load("header-underline-menu.html");
        } else {
            document.getElementByI("#header").load("header.html"); 
        }
    })
}

function respOn(){
    document.getElementByI(function(){var a = window.innerWidth*2;
        if (a<1800){document.getElementByI("#ix-header").load("ix-header-small.html");document.getElementByI(".favicon").hide()} else{document.getElementByI("#ix-header").load("ix-header.html");document.getElementByI(".favicon").show()}
        if (a<2400){document.getElementByI("#ix-footer").load("ix-footer-small.html")} else{document.getElementByI("#ix-footer").load("ix-footer.html")}
        if (a<1500){document.getElementByI(".t_right").removeClass("t_r_resp")} else{document.getElementByI(".t_right").addClass("t_r_resp")}
    })
    function q(){
        var d = window.innerWidth*2;
        if(d>1599){document.getElementByI("#side").load("side.php"); document.getElementByI("#side-dvid").removeClass("side-off");document.getElementByI("#side-dvid").addClass("side-on");
        } else{document.getElementByI("#side").load("side-small.php");document.getElementByI("#side-dvid").removeClass("side-on");document.getElementByI("#side-dvid").addClass("side-off");document.getElementByI("#pos-tog").addClass("def");
        }
    }
    q();   
} 

function getName(){
    document.getElementByI("#page_name").innerHTML="pok";
}
function mapDown(){
    var bb = window.innerWidth;
    var bv = document.getElementById("map-grid");
    if (bb<1600) {
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
    if (ab>2900){w.style.gridTemplateColumns = "25% 25% 25% 25%";
    } else if(ab<2901&&ab>2000){w.style.gridTemplateColumns = "33% 33% 33%";
    } else if (ab<2001&&ab>1100) {w.style.gridTemplateColumns = "50% 50%";
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