<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Exo:500&display=swap" rel="stylesheet">
    <link rel="import" href="header.html">
    <link rel="import" href="header-small.html">
    <link rel="import" href="catalog-body.html">
    <link rel="import" href="catalog-main.html">
    <link rel="import" href="catalog-product-skelton.html">
    <link rel="import" href="categories.html">
    <link rel="stylesheet" type="text/css" href="style.css">
     
    <style>
        body{
            width:100%;
            height:100%;
            margin:0px;
            padding:0px;
            position: absolute;
            top:0px;
            font-family: 'Exo', sans-serif;
        }
        /*.flea {
            height: 375px;
            margin: 2% 1%;
            text-align: center;
            display: inline-block;
            margin-bottom: 130px!important;
            border: none!important;
            /*font-size:26px;*/
            /*cursor: pointer;
            text-decoration: none;
            color: black;
        }*/
        .half{width:44%;}
        .quart{width:22%;}
        .flea-h {
            background-image: linear-gradient(white,lightgray);
            box-shadow: 10px 20px 5px #888888;
        }
        .side-line {
            background-size: 50px 1200px!important;
        }
    </style>
    <script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous">
    </script>
    <script> 
        document.getElementByI(function(){
            var a = window.innerWidth;
            if (a<1850){
                document.getElementByI("#header").load("header-small.html");
                document.getElementByI("#side").load("side.php");
            } else{
                document.getElementByI("#header").load("header.html");
                document.getElementByI("#side").load("side.php");
            }
        });
        
    </script>
</head>
<body style="width:100%" onload="givePadding(); loadOn(); respOn()" onresize="givePadding(); loadOn(); respOn()">
    <div id="header"></div>
    <div id="side-dvid">
        <div style="font-size: 19px; font-weight: 100; padding: 32px; margin-bottom: 200px">
            <div style="margin-bottom: 0px!important; height: 60px; width: 100%; overflow: auto">
                <div style="float: left; padding-top: 20px">Zobrazeno 14 výsledků.
                </div>
                <form style="float: right; display: block;">
                    <select name="order" class="order-box">
                        <option value="default" selected="selected">Výchozí třízení</option>
                        <option value="popular">Seřadit podle oblíbenosti</option>
                        <option value="newest">Seřadit od nejnovějších</option>
                        <option value="price_min">Seřadit podle ceny: od nejlevnějšího</option>
                        <option value="price_max">Seřadit podle ceny: od nejdražšího</option>
                    </select>
                </form>
            </div>
            
            <div id="res"></div>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/jvc_dla-vs4500_02-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Projektory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">14 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/newtec_cambio-16_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">60 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/novasonar-gk-30-mini_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Neviditelné reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">15 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/zonar-dcla100_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Zesilovače</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">10 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/zonar-dlouhy-smerovy-reproduktor-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Směrové reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">7 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/halcro-ec800_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>DVD přehrávače</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">1 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/symbio-oblak_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Svítidla</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">7 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/symbio-beta_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Regálové reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">4 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/symbio-samurai_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Podlahové reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">4 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/newtec_cono-pendo-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Stropní reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">36 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/newtec_cono-solo-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Nástěnné reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">22 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/symbio-alfa_08-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Designové reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">27 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/symbio-kotrmelec_02-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Designové doplňky</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">6 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/speakerguard-psp-23i-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Příslušenství pro reproduktory</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">14 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/newtec_subwoofer-wifi-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Subwoofery</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">5 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/invisibass-II-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Neviditelné subwoofery</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">4 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/rti_licence_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px;htgray; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>RTI</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">12 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/rti_t3x_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px;htgray; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Dálková ovládání</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">6 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/rti_cx7_01-570x570.jpg">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px;htgray; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Ovládací panely</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">6 item(s)</h5>
                </div>
            </a>
            <a class="flea quart" href="#">
                <div class="flea-box">
                    <img src="media/grafika/pics/products/znacky_obrazek_optrocon-570x570.png">
                </div>
                <div class="flea-h">
                    <div style="margin: 0px; margin-top:12px; line-height: 1em; height:30px; padding-bottom: px;htgray; box-shadow: 1px 12px 16px -11px darkslateblue;"><p>Kabely</p></div>
                    <h5 style="margin: 0px; height:34px; padding-top:8px;">11 item(s)</h5>
                </div>
            </a>
        </div>
        <div id="side"></div>
    </div>
    <div id="ix-footer" style="width: 100%; height: auto; background-color: #101030"></div>
    
    <div id="catalog"></div>
  
<script src="responsive.js"></script>
<script src="search.js"></script>
<script>
    function givePadding(){
        var cb = document.getElementById("computed-body");
        var a = document.getElementsByClassName("flea");
        var b = a.length;
        for(var i=0; i<b; i++){
            var c = a[i].firstElementChild;
            var d = c.firstElementChild;
            var e = d.clientHeight;
            var f = document.getElementById("header").clientWidth;
             var g = document.getElementsByClassName("flea");
            if (f<1500){
                g[i].classList.remove("quart");
                g[i].classList.add("half");
            } else{g[i].classList.add("quart");g[i].classList.remove("half");}
            if(e>26){
                d.style.position="relative";
                d.style.bottom="25px";
            } else{
                d.style.position="inherit";
                d.style.bottom="0px";}
        }
        
    }
</script>


1
2
3
4
<?php
document.getElementByIphp_variable = document.getElementByI_POST["custom_input"]; //Define our PHP variable. You can of course get the value of this variable however you need.
?>			
<script> 
    js_variable = "<?php echo document.getElementByIphp_variable; ?>";
    document.getElementById("res").innerHTML=js_variable;
    srchScript();
    
</script>
</body>
</html>
