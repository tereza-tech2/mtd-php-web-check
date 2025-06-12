$("#catalog").load("catalog-body.html");
$("#catalog-main").load("catalog-main.html");
var e = document.getElementsByClassName("flea").length;
for (var w=0;w<e;w++){document.getElementsByClassName("flea")[w].addEventListener("click", seznamScript)}

//document.getElementById("placeLend").innerHTML= document.getElementById("computed-body").childElementCount;
    
function seznamScript(thi){
    $("#setts").show();
    if (thi.toString()=="[object MouseEvent]"){thi = this; };
    var tid = thi.classList;
    var tin = thi.className;
    var stn = tin.toString();
    var catg = stn.search("category");
    var pant = stn.search("parent");
    document.getElementById("computed-body").style.position="relative";
    if (catg>1){
        if(thi.childElementCount==0){
            $("#page-name").innerHTML= thi.innerHTML;
        } else if(thi.childElementCount==1) {
            $("#page-name").innerHTML=thi.firstChild.innerHTML;
        } else if(thi.childElementCount==2) {
            $("#page-name").innerHTML=thi.children[1].getElementsByTagName("P")[0].innerHTML;
        }
        $("#computed-body").empty();
        document.getElementById("computed-body").style.top="20px";
        var szln = document.getElementById("id-seznam").childElementCount;
        for (var tz = 0; tz < szln; tz++){
            var cgln = document.getElementById("id-seznam").children[tz];
            var idln = document.getElementById(cgln.id).childElementCount;
            var catgcl = thi.classList;
            var catgcln = thi.classList.length;
            var catgarray = catgcl.toString();
            var catarr = catgarray.split(" ");
            var cg01 = 0;
            for (var cg0 = 0; cg0<catgcln; cg0++){
                if(catarr[cg0].search("category")==0){
                    var cg01 = catarr[cg0].toString();
                }
            }
            for (var z = 0; z < idln; z++){
                var childln = document.getElementById(cgln.id).children[z].getElementsByClassName(cg01).length;
                var hedEr = document.createElement("DIV");
                hedEr.className = "separator separ-thin";
                hedEr.innerHTML = cgln.getAttribute("value");
                var hedLn = document.createElement("P");
                hedLn.innerHTML = "   (" + childln + ")";
                hedLn.style.display = "inline";
                hedLn.style.fontSize = "25px";
                hedLn.style.paddingBottom = "25px";
                hedEr.appendChild(hedLn);
                if (childln>3) {
                    document.getElementById("computed-body").appendChild(hedEr);
                }
                for (var tc = 0; tc<childln; tc++){
                    var thisid = document.getElementById(cgln.id).children[z].getElementsByClassName(cg01)[tc];                   
                    var imgS = document.getElementById("catalog-main-"+thisid.id).getElementsByClassName("product-images")[0].children[0].src;
                    var HTML = document.getElementById("catalog-main-"+thisid.id).getElementsByClassName("product-header")[0].innerHTML;
                    var priceStr = document.getElementById("catalog-main-"+thisid.id).getElementsByClassName("product-price")[0].innerHTML.toString();
                    var productPrice = priceStr.replace("&nbsp;"," ");
                    var child = document.createElement("A");
                    child.className="flea sfv ";
                    child.href="#";
                    child.id=document.getElementById(cgln.id).children[z].getElementsByClassName(cg01)[tc].id;
                    /*child.onclick = getClick(thi);*/
                    createList();
                }
                var endEr = document.createElement("DIV");
                endEr.className = "terminator";
                if (childln>3) {
                    document.getElementById("computed-body").appendChild(endEr);
                }
            }
        }
    }else if (pant>-1){
        var rr = tid.length;
        var c = tid.item(rr-1);               
        var sc = c.toString();
        var d = document.getElementById(sc);
        //document.getElementById("page-name").innerHTML=d.getAttribute("value");
        var ln = d.childElementCount;
        var f = document.getElementById("catalog-main");
        if (ln>1) {
            var navbox = document.createElement("DIV");
            document.getElementById("computed-body").appendChild(navbox);
            navbox.className="navbox";
        }
        $("#computed-body").empty();
        for (var s = 0; s < ln; s++){
            var headEr = document.createElement("DIV");
            headEr.className = "separator";
            headEr.id = s;
            var xlu = d.childNodes[s].childElementCount;
            var cec = document.getElementById(sc+"-u-"+[s+1]).childElementCount;
            var dd = document.getElementById(sc+"-u-"+[s+1]);
            var cec = dd.childElementCount;
            var inht = dd.textContent;
            var splht = inht.split(" ");
            var head = splht[0];
            headEr.innerHTML=inht;
            if (ln>1) {
                var nav = document.createElement("A");
                nav.innerHTML = inht;
                nav.href = "#"+s;
                navbox.appendChild(nav);
                nav.className="nav";
            }
            if ((cec>1)&&(head.length>1)) {
                document.getElementById("computed-body").appendChild(headEr);
            } else {}
            var x;
            var ddd = d.children[s].childElementCount;
            var firstCh = dd.firstElementChild.id;
            var fChPos = firstCh.indexOf("u-u-");
            var ss = fChPos+4;
            for (var k = 0; k <cec; k++) {
                var fChN = firstCh.substring(ss, ss+3);
                if (s==0){
                    x = k;
                } else {
                    x = Number(fChN) + k - 1;
                }
                var HTML = $("#"+sc+"-u-u-"+[x+1]).val();
                var ths = document.getElementById("catalog-main-"+sc+"-u-u-"+[x+1]);
                var price = ths.getElementsByClassName("product-price")[0].textContent;
                var priceStr = price.toString();
                var productPrice = priceStr.replace("&nbsp;"," ");
                var imag = ths.getElementsByClassName("main-image")[0];
                var imgS = imag.src;
                var child = document.createElement("A");
                child.className="flea sfv ";
                child.href="#";
                child.id=sc+"-u-u-"+[x+1];
                createList();
                var fNow =  Number(fChN) + k - 1;
                /*child.onclick = getClick(this);*/
                /*document.getElementById("placeLend").innerHTML= document.getElementById("computed-body").childElementCount;*/
            }
            document.getElementById("placeLend").innerHTML= Number(document.getElementById("computed-body").childElementCount)-Number(document.getElementsByClassName("separator").length)-1;
        }


    } else{} 
    function createList() {
        var childU = document.createElement("DIV");
        childU.className="flea-box";
        var childUp = document.createElement("IMG");
        childUp.src=imgS;
        childUp.style.maxWidth="100%";
        childUp.style.width="100%";
        var childUp2 = document.createElement("DIV");
        childUp2.className="flea-m";
        var childUp2u1 = document.createElement("DIV");
        childUp2u1.className="auto";
        childUp2u1.innerHTML=HTML;  
        var childUp2u2 = document.createElement("H5");
        childUp2u2.className = "h5";
        childUp2u2.innerHTML = productPrice;
        child.appendChild(childU);
        childU.appendChild(childUp);
        child.appendChild(childUp2);
        childUp2.appendChild(childUp2u1);
        childUp2.appendChild(childUp2u2);
        child.addEventListener("click", listF );
        document.getElementById("computed-body").appendChild(child);
        winWidth()
        
    }
    function listF(){
        /*document.getElementById("placeLend").innerHTML= document.getElementById("computed-body").childElementCount;
*/     
        $("#computed-body").empty();
        $("#computed-body").attr("style", "");
        $("#computed-body").position("relative");

        $("#computed-body").offset({ top: -40});
        $("#setts").empty();
        var selChild = document.createElement("DIV");
        var zu = document.getElementById("catalog-main-"+this.id);
        var productH = document.createElement("DIV");
        productH.innerHTML = zu.children[0].innerHTML;
        var productNm = document.createElement("H1");
        productNm.innerHTML = zu.children[1].innerHTML;
        var productPc = document.createElement("DIV");
        productPc.innerHTML = zu.children[2].innerHTML;
        var productDs = document.createElement("DIV");
        productDs.innerHTML = zu.children[3].innerHTML;
        var productM = zu.children[4];
        var productIm = zu.children[5];
        var productRe = document.createElement("DIV");
        productRe.innerHTML = zu.children[6].innerHTML;
        var ch0 = document.createElement("IMG");
        ch0.src = zu.getElementsByClassName("main-image")[0].src;
        selChild.appendChild(ch0);
        ch0.classList.add("top-image");
        var rightdiv = document.createElement("DIV");      
        rightdiv.appendChild(productNm);
        rightdiv.appendChild(productDs);
        rightdiv.appendChild(productPc);
        rightdiv.classList.add("rightdiver");
        productPc.classList.add("pricer");
        selChild.appendChild(rightdiv);
        var pMcEc = zu.children[4].getElementsByClassName("visible").childElementCount;
        var restDiv = document.createElement("DIV");
        for (var qw = 0; qw<pMcEc; qw++){
            var ch5a = productM.children[qw].innerHTML;
            var chix = ch5a.indexOf(":");
            if (chix<1||chix>34){
                var ch5 = document.createElement("DIV");
                ch5.innerHTML = "<p style='font-style: oblique; font-size: 26px; font-weight:300;margin:6px 5% 11px 1%; line-height:32px'>"+ch5a+"</p>";
            }
            restDiv.appendChild(ch5);
        }
        for (var qw = 0; qw<pMcEc; qw++){
            var ch5a = productM.children[qw].innerHTML;
            var chix = ch5a.indexOf(":");
            if ((chix>0)&&(chix<35)){
                var ch10 = document.createElement("DIV");
                var ch51 = ch5a.slice(0, chix+1);
                var ch5b = ch5a.length;
                var ch52 = ch5a.slice(-(ch5b-chix-1));
                ch10.innerHTML = "<b style='display:inline; font-weight: 600;color:darkslategray'>"+ch51+"</b>" + "   " + "<p style='display:inline; font-size:25px'>"+ch52+"</p>";
                restDiv.appendChild(ch10);
            }          
        }
        selChild.appendChild(restDiv);
        productRe.style.display="none";
        selChild.appendChild(productRe);
        $("#page-name").innerHTML= productH.innerHTML;
        document.getElementById("computed-body").appendChild(selChild);
        var pImCeC = zu.children[5].childElementCount;
        var imgbox = document.createElement("DIV");
        if (pMcEc > 0) {
            imgbox.classList.add("image-box");
            restDiv.classList.add("rester");
        } else {
        }
        for (var qp = 1; qp<pImCeC; qp++){
            var ch6 = document.createElement("IMG");
            ch6.src = productIm.children[qp].src;
            ch6.style.maxWidth="320px";
            ch6.style.minWidth="290px";
            ch6.style.maxHeight="320px";
            ch6.style.objectFit="contain";
            imgbox.appendChild(ch6);
        }
        var pos = this.id.indexOf("-u-u-");
        var p2iht = this.id.slice(0, pos);
        var pnht = document.getElementById(p2iht).getAttribute("value");
        selChild.appendChild(imgbox);
        $("#p1").innerHTML = " > ";
        $("#p2").innerHTML=pnht;
        $("#p2").on( "click", seznamScript);
    }
    var check = document.getElementById("placeLend").innerHTML;
    if(check<0){
       document.getElementById("placeLend").innerHTML = "0";

    } else{}
    //if($("#placeLend").html()="0"){$("#placeLend").heigh(0)};

}

